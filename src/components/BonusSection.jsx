const bonuses = [
  { icon: "📋", title: "DSAT Formula Sheet", value: "$500", desc: "All high-yield math formulas in one printable sheet." },
  { icon: "📝", title: "Full-Length Practice Test", value: "$600", desc: "Bluebook-style adaptive mock test with detailed solutions." },
  { icon: "🗓️", title: "8-Week Study Planner", value: "$400", desc: "Day-by-day schedule template to hit your target score." },
  { icon: "🎥", title: "Webinar Recording", value: "$500", desc: "Lifetime access to the full session recording." },
];

export default function BonusSection() {
  const total = "$2000";
  return (
    <section className="py-20 px-6 bg-[#EEF2FF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Free Bonuses</h2>
          <p className="text-gray-500">Every registered attendee gets these resources — absolutely free.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-5">
          {bonuses.map(({ icon, title, value, desc }) => (
            <div key={title} className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm flex gap-4 items-start">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl flex-shrink-0">{icon}</div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-bold text-gray-900">{title}</h3>
                  <span className="text-xs bg-blue-100 text-blue-600 font-bold px-2 py-0.5 rounded-full">Value: {value}</span>
                </div>
                <p className="text-gray-500 text-sm">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <p className="text-center text-blue-600 font-bold mt-8 text-lg">Total Value: {total} — Yours FREE when you register today!</p>
      </div>
    </section>
  );
}
