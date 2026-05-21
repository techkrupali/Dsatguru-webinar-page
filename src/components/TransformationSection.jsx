const steps = [
  { before: "Confused about DSAT format", after: "Clear roadmap & strategy" },
  { before: "Wasting time on wrong topics", after: "Focused high-yield prep" },
  { before: "Scoring below 1200", after: "Targeting 1400–1600" },
  { before: "No personalised guidance", after: "Custom 8-week study plan" },
];

export default function TransformationSection() {
  return (
    <section className="py-20 px-6 bg-[#0F1F5C]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">Your Journey</span>
          <h2 className="text-4xl font-extrabold text-white mb-3">Your Transformation Starts Here</h2>
          <p className="text-blue-200">One webinar. A completely different trajectory.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {steps.map(({ before, after }) => (
            <div key={before} className="flex items-center gap-4 bg-white/10 border border-white/10 rounded-2xl p-5">
              <div className="flex-1 text-center bg-white/5 rounded-xl p-3">
                <p className="text-xs text-blue-300 font-semibold mb-1 uppercase tracking-wide">Before</p>
                <p className="text-sm text-red-300 font-medium">{before}</p>
              </div>
              <div className="text-blue-300 text-xl font-bold">→</div>
              <div className="flex-1 text-center bg-white/5 rounded-xl p-3">
                <p className="text-xs text-blue-300 font-semibold mb-1 uppercase tracking-wide">After</p>
                <p className="text-sm text-green-300 font-medium">{after}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
