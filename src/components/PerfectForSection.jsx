const audience = [
  { icon: "🎯", title: "Class 10–12 Students", desc: "Preparing for Digital SAT to apply to US universities and want a structured, proven strategy." },
  { icon: "📉", title: "Stuck Below 1200", desc: "You've been preparing but your score isn't moving — and you need a clear breakthrough plan." },
  { icon: "💸", title: "Tired of Expensive Coaching", desc: "You've spent on coaching but haven't seen results. You want smart prep, not just more hours." },
  { icon: "⏳", title: "Starting Fresh", desc: "You're new to DSAT and want to build a strong foundation before the exam season begins." },
  { icon: "🧠", title: "Self-Studiers", desc: "You prefer learning at your own pace but need expert guidance to avoid common mistakes." },
  { icon: "🏆", title: "Aiming for 1500+", desc: "You're already scoring decent but want to push into top-tier score range for elite universities." },
];

export default function PerfectForSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">Who Should Attend</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">This Masterclass is Perfect for:</h2>
          <p className="text-gray-500">Whether you're just starting or looking to crack that 1400+ barrier — this is for you.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {audience.map(({ icon, title, desc }) => (
            <div key={title} className="flex items-start gap-4 bg-[#EEF2FF] rounded-xl p-5 border border-blue-100 shadow-sm">
              <span className="text-3xl">{icon}</span>
              <div>
                <p className="text-gray-900 font-bold text-sm mb-1">{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-gray-700 text-lg font-semibold text-center">Ready to transform your DSAT score this summer? 🚀</p>
          <button
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="shake-btn bg-blue-600 hover:bg-blue-700 transition-colors rounded-2xl py-4 px-12 text-center shadow-lg">
            <p className="text-white text-lg font-bold">Reserve My Seat Now</p>
            <p className="text-blue-100 text-sm mt-1">Limited Seats — Don't Miss Out!</p>
          </button>
        </div>
      </div>
    </section>
  );
}
