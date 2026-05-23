import { useState, useEffect } from 'react';
import API_BASE_URL from '../apiConfig';

const LinksPage = () => {
  const [zoomLink, setZoomLink] = useState('');
  const [webinarDate, setWebinarDate] = useState('');
  const [webinarTime, setWebinarTime] = useState('');
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [message, setMessage] = useState({ type: '', text: '' });

  useEffect(() => {
    const fetchSettings = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/admin/settings`, {
          headers: {
            'Authorization': localStorage.getItem('admin_token')
          }
        });
        if (response.ok) {
          const data = await response.json();
          setZoomLink(data.zoomLink || '');
          setWebinarDate(data.webinarDate || '');
          setWebinarTime(data.webinarTime || '');
        }
      } catch (err) {
        console.error('Error fetching settings:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchSettings();
  }, []);

  const handleSave = async (e) => {
    e.preventDefault();
    setSaving(true);
    setMessage({ type: '', text: '' });

    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/settings`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': localStorage.getItem('admin_token')
        },
        body: JSON.stringify({ zoomLink, webinarDate, webinarTime }),
      });

      if (response.ok) {
        setMessage({ type: 'success', text: 'Settings updated successfully!' });
      } else {
        setMessage({ type: 'error', text: 'Failed to update settings.' });
      }
    } catch (err) {
      setMessage({ type: 'error', text: 'Error connecting to server.' });
    } finally {
      setSaving(false);
    }
  };

  if (loading) return <div className="p-8 text-center text-gray-500">Loading settings...</div>;

  return (
    <div className="max-w-2xl bg-white rounded-2xl shadow-sm border border-gray-100 p-8">
      <div className="mb-8">
        <h3 className="text-xl font-bold text-gray-800">Webinar Links & Schedule</h3>
        <p className="text-gray-500 text-sm mt-1">Manage the zoom link and webinar timing.</p>
      </div>

      {message.text && (
        <div className={`mb-6 p-4 rounded-xl text-sm ${
          message.type === 'success' ? 'bg-green-50 text-green-600 border border-green-100' : 'bg-red-50 text-red-600 border border-red-100'
        }`}>
          {message.type === 'success' ? '✅ ' : '❌ '}{message.text}
        </div>
      )}

      <form onSubmit={handleSave} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Zoom Meeting Link</label>
          <input
            type="url"
            className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
            placeholder="https://zoom.us/j/..."
            value={zoomLink}
            onChange={(e) => setZoomLink(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Webinar Date</label>
            <input
              type="date"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              value={webinarDate}
              onChange={(e) => setWebinarDate(e.target.value)}
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Webinar Time</label>
            <input
              type="time"
              className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition"
              value={webinarTime}
              onChange={(e) => setWebinarTime(e.target.value)}
            />
          </div>
        </div>

        <button
          type="submit"
          disabled={saving}
          className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-300 text-white font-bold py-3 rounded-xl transition shadow-lg shadow-blue-200"
        >
          {saving ? 'Saving Changes...' : 'Save Settings'}
        </button>
      </form>
    </div>
  );
};

export default LinksPage;
