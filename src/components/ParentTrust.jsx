const points = [
  { icon: "🛡️", title: "100% Safe & Verified", desc: "All our instructors are background-checked and certified DSAT trainers." },
  { icon: "🔒", title: "No Hidden Charges", desc: "This webinar is completely free. No upsells during the session." },
  { icon: "📱", title: "Easy to Join", desc: "Simple Zoom link sent to your email. Works on any device." },
  { icon: "🤝", title: "Trusted by Families", desc: "Parents across India trust DSATGuru for their child's college journey." },
];

export default function ParentTrust() {
  return (
    <section className="py-20 px-6 bg-blue-50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">For Parents</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">A Note for Parents</h2>
          <p className="text-gray-500">We understand your concerns. Here's why thousands of parents trust us.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {points.map(({ icon, title, desc }) => (
            <div key={title} className="flex gap-4 items-start bg-[#F8FAFF] rounded-2xl p-5 border border-blue-100">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">{icon}</div>
              <div>
                <h3 className="font-bold text-gray-900 mb-1">{title}</h3>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
