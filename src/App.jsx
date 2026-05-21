import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import "./index.css";
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import PainPointSection from "./components/PainPointSection";
import WhyUsSection from "./components/WhyUsSection";
import StudentResults from "./components/StudentResults";
import FeaturesSection from "./components/FeaturesSection";
import SuccessStoriesSection from "./components/SuccessStoriesSection";
import BeforeAfterSection from "./components/BeforeAfterSection";
import ParentTrust from "./components/ParentTrust";
import UrgencySection from "./components/UrgencySection";
import FAQSection from "./components/FAQSection";
import FinalCTA from "./components/FinalCTA";

// Admin Imports
import ProtectedRoute from './admin/ProtectedRoute';
import LoginPage from './admin/LoginPage';
import AdminLayout from './admin/AdminLayout';
import Dashboard from './admin/Dashboard';
import FormsPage from './admin/FormsPage';

const MainSite = () => (
  <>
    <Header />
    <HeroSection />
    <StudentResults />
    <PainPointSection />
    <FeaturesSection />
    <SuccessStoriesSection />
    <BeforeAfterSection />
    <WhyUsSection />
    <ParentTrust />
    <UrgencySection />
    <FAQSection />
    <FinalCTA />
  </>
);

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main Website */}
        <Route path="/" element={<MainSite />} />

        {/* Admin Routes */}
        <Route path="/admin" element={<Navigate to="/admin/login" replace />} />
        <Route path="/admin/login" element={<LoginPage />} />
        
        <Route element={<ProtectedRoute />}>
          <Route path="/admin" element={<AdminLayout />}>
            <Route path="dashboard" element={<Dashboard />} />
            <Route path="forms" element={<FormsPage />} />
          </Route>
        </Route>

        {/* Fallback */}
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}
