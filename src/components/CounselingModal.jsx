import { useState } from "react";

export default function CounselingModal() {
  const [open, setOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({ name: "", phone: "" });

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-6 right-6 z-50 bg-blue-600 hover:bg-blue-700 text-white font-bold px-5 py-3 rounded-full shadow-xl transition text-sm"
      >
        💬 Free Counselling
      </button>

      {open && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-2xl p-8 w-full max-w-sm shadow-2xl relative">
            <button onClick={() => setOpen(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl">✕</button>
            {submitted ? (
              <div className="text-center">
                <div className="text-5xl mb-3">✅</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-500 text-sm">Our counsellor will call you within 24 hours.</p>
              </div>
            ) : (
              <>
                <h3 className="text-xl font-bold text-gray-900 mb-1">Book Free Counselling</h3>
                <p className="text-gray-500 text-sm mb-5">Talk to our DSAT expert and get a personalised plan.</p>
                <form onSubmit={e => { e.preventDefault(); setSubmitted(true); }} className="flex flex-col gap-3">
                  <input
                    required type="text" placeholder="Your Name"
                    value={form.name} onChange={e => setForm({ ...form, name: e.target.value })}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <input
                    required type="tel" placeholder="WhatsApp Number"
                    value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })}
                    className="border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  />
                  <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded-xl transition">
                    Request Callback
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
}
