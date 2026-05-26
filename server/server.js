require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const nodemailer = require('nodemailer');

const Admin = require('./models/Admin');
const Submission = require('./models/Submission');
const Settings = require('./models/Settings');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB Connection
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Connected to MongoDB: dsatform'))
  .catch(err => console.error('MongoDB connection error:', err));

// Email Transporter
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT == 465, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Middleware to verify JWT
const verifyToken = (req, res, next) => {
  let token = req.headers['authorization'];
  if (!token) return res.status(403).json({ message: 'No token provided' });

  // Handle Bearer prefix if present
  if (token.startsWith('Bearer ')) {
    token = token.slice(7, token.length);
  }

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ message: 'Failed to authenticate token' });
    req.adminId = decoded.id;
    next();
  });
};

// --- AUTH ROUTES ---

// Admin Login
app.post('/api/admin/login', async (req, res) => {
  const { email, password } = req.body;
  try {
    const admin = await Admin.findOne({ email });
    if (!admin) return res.status(404).json({ message: 'Admin not found' });

    const isMatch = await bcrypt.compare(password, admin.password);
    if (!isMatch) return res.status(401).json({ message: 'Invalid credentials' });

    const token = jwt.sign({ id: admin._id }, process.env.JWT_SECRET, { expiresIn: '1d' });
    res.json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
});

// Seed Admin (One-time use)
app.post('/api/admin/seed', async (req, res) => {
  try {
    const existingAdmin = await Admin.findOne({ email: 'admin@dsat.com' });
    if (existingAdmin) return res.json({ message: 'Admin already exists' });

    const hashedPassword = await bcrypt.hash('Dsat#123', 10);
    const newAdmin = new Admin({ email: 'admin@dsat.com', password: hashedPassword });
    await newAdmin.save();
    res.json({ message: 'Admin seeded successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error seeding admin' });
  }
});

// --- SUBMISSION ROUTES ---

// Submit Form
app.post('/api/submissions', async (req, res) => {
  const { firstName, lastName, email, phone, countryCode } = req.body;
  try {
    // Check if email already registered
    const existing = await Submission.findOne({ email: email.toLowerCase() });
    if (existing) return res.status(400).json({ message: 'Email already registered' });

    const newSubmission = new Submission({
      firstName, lastName, email: email.toLowerCase(), phone, countryCode
    });
    await newSubmission.save();

    // Fetch webinar settings for email
    const settings = await Settings.findOne() || { zoomLink: 'To be announced', webinarDate: 'TBA', webinarTime: 'TBA' };

    // Send confirmation email
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: email,
      subject: 'Registration Successful - DSATGuru Webinar',
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #2563eb; text-align: center;">Registration Confirmed! 🎉</h2>
          <p>Hi ${firstName},</p>
          <p>Thank you for registering for the <strong>DSAT Elite Score DSAT SUMMER PREP™</strong>. Your seat is now reserved.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #1e293b;">Masterclass Details:</h3>
            <p><strong>📅 Date:</strong> ${settings.webinarDate}</p>
            <p><strong>🕒 Time:</strong> ${settings.webinarTime}</p>
            <p><strong>🔗 Zoom Link:</strong> <a href="${settings.zoomLink}" style="color: #2563eb;">Join Webinar Here</a></p>
          </div>

          <p>Please make sure to join 5 minutes early. We recommend attending from a laptop for the best experience.</p>
          
          <p style="margin-top: 30px; border-top: 1px solid #eee; padding-top: 20px; font-size: 0.9em; color: #64748b;">
            See you at the webinar!<br>
            <strong>Team DSATGuru</strong>
          </p>
        </div>
      `,
    };

    // We don't want to block the response if email fails, but we should log it
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error('Error sending email:', error);
      } else {
        console.log('Email sent:', info.response);
      }
    });

    res.json({ message: 'Submission successful' });
  } catch (err) {
    console.error('Submission error:', err);
    res.status(500).json({ message: 'Error saving submission' });
  }
});

// Get All Submissions (Protected)
app.get('/api/admin/submissions', verifyToken, async (req, res) => {
  try {
    const submissions = await Submission.find().sort({ date: -1 });
    res.json(submissions);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching submissions' });
  }
});

// Get Stats (Protected)
app.get('/api/admin/stats', verifyToken, async (req, res) => {
  try {
    const totalSubmissions = await Submission.countDocuments();
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const todaySubmissions = await Submission.countDocuments({ date: { $gte: today } });
    
    res.json({ totalSubmissions, todaySubmissions });
  } catch (err) {
    res.status(500).json({ message: 'Error fetching stats' });
  }
});

// --- SETTINGS ROUTES ---

// Get Settings
app.get('/api/admin/settings', verifyToken, async (req, res) => {
  console.log('GET /api/admin/settings hit');
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = new Settings({ zoomLink: '', webinarDate: '', webinarTime: '' });
      await settings.save();
    }
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching settings' });
  }
});

// Update Settings
app.post('/api/admin/settings', verifyToken, async (req, res) => {
  const { zoomLink, webinarDate, webinarTime } = req.body;
  try {
    let settings = await Settings.findOne();
    if (!settings) {
      settings = new Settings({ zoomLink, webinarDate, webinarTime });
    } else {
      settings.zoomLink = zoomLink;
      settings.webinarDate = webinarDate;
      settings.webinarTime = webinarTime;
    }
    await settings.save();
    res.json(settings);
  } catch (err) {
    res.status(500).json({ message: 'Error updating settings' });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log('Settings routes are active');
});
