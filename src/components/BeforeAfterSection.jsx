const beforePoints = [
  "I don't know where to start.",
  "I've been studying but my score isn't improving.",
  "There is too much SAT advice online.",
  "What score do I actually need?",
  "Am I preparing the right way?",
  "What if I don't get into the college I want?",
  "I'm stressed about SATs and college applications.",
  "I feel lost and overwhelmed.",
];

const afterPoints = [
  "Clear on exactly what to focus on next",
  "Understand the SAT preparation roadmap",
  "Know the biggest mistakes to avoid",
  "Have a smarter study strategy",
  "Understand what colleges care about",
  "Feel confident about your college admissions journey",
  "Know how to improve your chances of success",
  "Have a clear action plan moving forward",
];

export default function BeforeAfterSection() {
  return (
    <section className="py-20 px-6 bg-gray-950">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-6">

          {/* Before Column */}
          <div className="bg-gray-900 rounded-2xl overflow-hidden">
            <div className="bg-red-600 py-4 px-6 text-center">
              <h3 className="text-xl font-bold text-white">BEFORE THE FREE TRAINING</h3>
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
              <h3 className="text-xl font-bold text-white">AFTER THE FREE TRAINING</h3>
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
