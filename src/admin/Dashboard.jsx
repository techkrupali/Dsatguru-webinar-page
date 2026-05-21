import { useEffect, useState } from 'react';

const Dashboard = () => {
  const [stats, setStats] = useState({ totalSubmissions: 0, todaySubmissions: 0 });

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/stats', {
          headers: {
            'Authorization': localStorage.getItem('admin_token')
          }
        });
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (err) {
        console.error('Error fetching stats:', err);
      }
    };

    fetchStats();
  }, []);

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-gray-400 text-sm mb-1">Total Submissions</div>
        <div className="text-3xl font-bold text-gray-800">{stats.totalSubmissions}</div>
        <div className="mt-4 text-green-500 text-xs font-medium">↑ Real-time tracking</div>
      </div>
      
      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-gray-400 text-sm mb-1">Today's Registrations</div>
        <div className="text-3xl font-bold text-gray-800">{stats.todaySubmissions}</div>
        <div className="mt-4 text-blue-500 text-xs font-medium">Live stats</div>
      </div>

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
        <div className="text-gray-400 text-sm mb-1">Status</div>
        <div className="text-3xl font-bold text-green-500">Active</div>
        <div className="mt-4 text-gray-400 text-xs">System operational</div>
      </div>
    </div>
  );
};

export default Dashboard;
