const solutions = [
  { icon: "🎯", title: "Adaptive Test Strategy", desc: "Master the Bluebook adaptive algorithm and learn how to tackle Module 2 hard questions." },
  { icon: "📐", title: "Math Shortcuts", desc: "High-yield formulas and shortcuts that save 30+ seconds per question." },
  { icon: "📖", title: "Reading & Writing Hacks", desc: "Eliminate wrong answers in seconds using our proven elimination framework." },
  { icon: "🗓️", title: "Personalised Study Plan", desc: "Get a custom 8-week roadmap based on your current score and target." },
  { icon: "🧠", title: "Mindset & Time Management", desc: "Techniques to stay calm, manage time, and avoid careless mistakes." },
  { icon: "📊", title: "Score Prediction Model", desc: "Understand exactly how many questions you need to get right to hit your target." },
];

export default function SolutionSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">What You'll Learn</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Everything You Need to Score Higher</h2>
          <p className="text-gray-500">A 90-minute session packed with actionable strategies you can apply immediately.</p>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {solutions.map(({ icon, title, desc }) => (
            <div key={title} className="rounded-2xl border border-blue-100 bg-[#F8FAFF] p-6 hover:shadow-md hover:border-blue-300 transition">
              <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center text-2xl mb-4">{icon}</div>
              <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
