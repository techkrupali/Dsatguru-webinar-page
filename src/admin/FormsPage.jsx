import { useEffect, useState } from 'react';

const FormsPage = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/admin/submissions', {
          headers: {
            'Authorization': localStorage.getItem('admin_token')
          }
        });
        if (response.ok) {
          const data = await response.json();
          setSubmissions(data);
        }
      } catch (err) {
        console.error('Error fetching submissions:', err);
      }
    };

    fetchSubmissions();
  }, []);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Name</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Email</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Country</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {submissions.length > 0 ? (
              submissions.map((sub, index) => (
                <tr key={index} className="hover:bg-gray-50 transition">
                  <td className="px-6 py-4 text-sm text-gray-500 whitespace-nowrap">
                    {formatDate(sub.date)}
                  </td>
                  <td className="px-6 py-4 text-sm font-medium text-gray-800">
                    {sub.firstName} {sub.lastName}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {sub.email}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {sub.phone}
                  </td>
                  <td className="px-6 py-4 text-sm text-gray-600">
                    {sub.countryCode}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="px-6 py-20 text-center text-gray-400">
                  <div className="text-4xl mb-2">📥</div>
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FormsPage;
