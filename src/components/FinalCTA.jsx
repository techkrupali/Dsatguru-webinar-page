import { useState, useRef, useEffect } from "react";
import API_BASE_URL from "../apiConfig";

const COUNTRIES = [
  { code: "+91", flag: "🇮🇳" },
  { code: "+1",  flag: "🇺🇸" },
  { code: "+44", flag: "🇬🇧" },
  { code: "+61", flag: "🇦🇺" },
  { code: "+971",flag: "🇦🇪" },
  { code: "+65", flag: "🇸🇬" },
  { code: "+60", flag: "🇲🇾" },
];

export default function FinalCTA() {
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");
  const [selectedCountry, setSelectedCountry] = useState(COUNTRIES[0]);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await fetch(`${API_BASE_URL}/api/submissions`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...form,
          countryCode: selectedCountry.code
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Something went wrong. Please try again.");
        return;
      }

      setSubmitted(true);
      document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
    } catch (err) {
      setError("Unable to connect to server. Please try again later.");
    }
  };

  useEffect(() => {
    const handler = (e) => { if (dropdownRef.current && !dropdownRef.current.contains(e.target)) setDropdownOpen(false); };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <section id="register" className="py-20 px-6 bg-[#0F1F5C]">
      <div className="max-w-xl mx-auto">
        <div className="text-center mb-10">
          <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">Register Now</span>
          <h2 className="text-4xl font-extrabold text-white mb-3">🎯 Claim Your FREE Seat Now!</h2>
          <p className="text-blue-200">Join 2,000+ students — one webinar can change your SAT score forever.</p>
        </div>

        {error && (
          <div className="mb-6 bg-red-500/10 border border-red-500/20 text-red-200 px-4 py-3 rounded-xl text-center text-sm">
            ⚠️ {error}
          </div>
        )}

        {submitted ? (
          <div className="bg-green-600 text-white rounded-2xl p-10 text-center shadow-2xl">
            <div className="text-5xl mb-4">✅</div>
            <h3 className="text-2xl font-bold mb-2">Registration Successful!</h3>
            <p className="text-green-100">Your seat has been reserved. Check your email for free masterclass link.</p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-2xl flex flex-col gap-4">
            <div className="grid grid-cols-2 gap-4">
              <input
                required type="text" placeholder="First Name"
                value={form.firstName} onChange={e => setForm({ ...form, firstName: e.target.value })}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                required type="text" placeholder="Last Name"
                value={form.lastName} onChange={e => setForm({ ...form, lastName: e.target.value })}
                className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <input
              required type="email" placeholder="Email Address"
              value={form.email} onChange={e => setForm({ ...form, email: e.target.value })}
              className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <div className="flex border border-gray-200 rounded-xl overflow-visible focus-within:ring-2 focus-within:ring-blue-500 relative" ref={dropdownRef}>
              <button
                type="button"
                onClick={() => setDropdownOpen(o => !o)}
                className="bg-gray-50 border-r border-gray-200 px-3 py-3 flex items-center gap-1.5 text-gray-700 focus:outline-none"
              >
                <span className="text-2xl">{selectedCountry.flag}</span>
                <span className="text-sm">{selectedCountry.code}</span>
                <span className="text-xs text-gray-400">▾</span>
              </button>
              {dropdownOpen && (
                <div className="absolute left-0 bottom-full mb-1 bg-white border border-gray-200 rounded-xl shadow-lg z-50 w-36 overflow-hidden">
                  {COUNTRIES.map(c => (
                    <button
                      key={c.code}
                      type="button"
                      onClick={() => { setSelectedCountry(c); setDropdownOpen(false); }}
                      className="w-full flex items-center gap-2 px-3 py-2 hover:bg-blue-50 text-sm text-gray-700"
                    >
                      <span className="text-2xl">{c.flag}</span>
                      <span>{c.code}</span>
                    </button>
                  ))}
                </div>
              )}
              <input
                required type="tel" placeholder="WhatsApp Number"
                value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                className="flex-1 px-4 py-3 text-sm focus:outline-none rounded-r-xl"
              />
            </div>
            <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl text-lg transition">
              Reserve My Free Seat →
            </button>
            <p className="text-center text-gray-400 text-xs">🔒 Your information is safe. No spam, ever.</p>
          </form>
        )}
      </div>
    </section>
  );
}
