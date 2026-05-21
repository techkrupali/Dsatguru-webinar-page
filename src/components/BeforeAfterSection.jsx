const beforePoints = [
  "Confused about the new Digital SAT adaptive format",
  "Scoring below 1200 despite months of self-study",
  "Running out of time during Math and Reading sections",
  "No structured study plan — studying randomly without direction",
  "Wasting money on expensive coaching with no score improvement",
  "Don't know which topics to prioritise for maximum score gain",
  "Overwhelmed by the sheer volume of practice material available",
  "No idea how to use the Desmos calculator strategically",
];

const afterPoints = [
  "Fully understand the Digital SAT adaptive format and scoring system",
  "Clear 12-hour intensive roadmap with our Strategy Planner",
  "Master time management with proven speed techniques",
  "Custom Exam Set Builder creates targeted practice for your weak areas",
  "Score 1400+ with structured SAT Summer Camp strategies",
  "Know exactly which topics give maximum score boost",
  "Access 25+ realistic mock tests simulating real DSAT conditions",
  "Walk into exam day confident, prepared, and ready to excel",
];

export default function BeforeAfterSection() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Before Column */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="bg-red-600 py-4 px-6 text-center">
              <h3 className="text-xl font-bold text-white">Before The Free Masterclass</h3>
            </div>
            <div className="p-6">
              <div className="rounded-xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?w=600&h=350&fit=crop"
                  alt="Stressed student before"
                  className="w-full h-52 object-cover opacity-80"
                />
              </div>
              <ul className="space-y-3">
                {beforePoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-red-500 font-bold text-lg mt-0.5">✕</span>
                    <p className="text-gray-300 text-sm">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* After Column */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="bg-green-600 py-4 px-6 text-center">
              <h3 className="text-xl font-bold text-white">After The Free Masterclass</h3>
            </div>
            <div className="p-6">
              <div className="rounded-xl overflow-hidden mb-6">
                <img
                  src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=350&fit=crop"
                  alt="Confident student after"
                  className="w-full h-52 object-cover opacity-90"
                />
              </div>
              <ul className="space-y-3">
                {afterPoints.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <span className="flex-shrink-0 text-green-500 font-bold text-lg mt-0.5">✓</span>
                    <p className="text-gray-300 text-sm">{point}</p>
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
