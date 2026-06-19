import { useEffect, useState } from 'react';
import API_BASE_URL from '../apiConfig';

const PAGE_SIZE = 10;

const FormsPage = () => {
  const [submissions, setSubmissions] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [deletingId, setDeletingId] = useState(null);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await fetch(`${API_BASE_URL}/api/admin/submissions`, {
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
      } finally {
        setLoading(false);
      }
    };

    fetchSubmissions();
  }, []);

  const handleDelete = async (id, name) => {
    if (!window.confirm(`Delete registration for ${name}? This cannot be undone.`)) return;

    setDeletingId(id);
    try {
      const response = await fetch(`${API_BASE_URL}/api/admin/submissions/${id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': localStorage.getItem('admin_token')
        }
      });
      if (response.ok) {
        setSubmissions((prev) => prev.filter((s) => s._id !== id));
      } else {
        alert('Failed to delete. Please try again.');
      }
    } catch (err) {
      alert('Error connecting to server. Please try again.');
    } finally {
      setDeletingId(null);
    }
  };

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleString('en-IN', {
      day: '2-digit',
      month: 'short',
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  const totalPages = Math.max(1, Math.ceil(submissions.length / PAGE_SIZE));
  const currentPage = Math.min(page, totalPages);
  const start = (currentPage - 1) * PAGE_SIZE;
  const pageItems = submissions.slice(start, start + PAGE_SIZE);

  return (
    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-100 flex items-center justify-between">
        <h3 className="font-bold text-gray-800">Registrations</h3>
        <span className="text-sm text-gray-400">{submissions.length} total</span>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead className="bg-gray-50 border-b border-gray-100">
            <tr>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Date</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Name</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Email</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Phone</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase">Country</th>
              <th className="px-6 py-4 text-xs font-semibold text-gray-500 uppercase text-right">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-50">
            {loading ? (
              <tr>
                <td colSpan="6" className="px-6 py-20 text-center text-gray-400">
                  Loading registrations...
                </td>
              </tr>
            ) : pageItems.length > 0 ? (
              pageItems.map((sub) => (
                <tr key={sub._id} className="hover:bg-gray-50 transition">
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
                  <td className="px-6 py-4 text-right">
                    <button
                      onClick={() => handleDelete(sub._id, `${sub.firstName} ${sub.lastName}`)}
                      disabled={deletingId === sub._id}
                      className="text-sm font-medium text-red-600 hover:text-red-700 disabled:text-gray-300 disabled:cursor-not-allowed transition"
                    >
                      {deletingId === sub._id ? 'Deleting...' : 'Delete'}
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="px-6 py-20 text-center text-gray-400">
                  <div className="text-4xl mb-2">📥</div>
                  No submissions yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      {submissions.length > PAGE_SIZE && (
        <div className="px-6 py-4 border-t border-gray-100 flex items-center justify-between">
          <span className="text-sm text-gray-500">
            Showing {start + 1}-{Math.min(start + PAGE_SIZE, submissions.length)} of {submissions.length}
          </span>
          <div className="flex items-center gap-1">
            <button
              onClick={() => setPage((p) => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Prev
            </button>
            {Array.from({ length: totalPages }, (_, i) => i + 1).map((n) => (
              <button
                key={n}
                onClick={() => setPage(n)}
                className={`px-3 py-1.5 text-sm rounded-lg border transition ${
                  n === currentPage
                    ? 'bg-blue-600 border-blue-600 text-white'
                    : 'border-gray-200 text-gray-600 hover:bg-gray-50'
                }`}
              >
                {n}
              </button>
            ))}
            <button
              onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="px-3 py-1.5 text-sm rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition"
            >
              Next
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default FormsPage;
