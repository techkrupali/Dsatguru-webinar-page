const points = [
  { icon: "⚡", text: "12 hours of intensive instruction over one weekend" },
  { icon: "🎯", text: "Strategic approach to all DSAT sections" },
  { icon: "🧠", text: "Intensive training formats with expert instructors" },
  { icon: "📈", text: "All Key concepts and test-taking techniques Revision" },
  { icon: "✨", text: "25+ realistic same practice test" },
  { icon: "✅", text: "Take-home materials and practice tests" },
  { icon: "⚡", text: "Guaranteed Score Increase" },
  { icon: "🎯", text: "7 days access to online practice test and boot camp video resource when available" },
];

export default function FeaturesSection() {
  return (
    <section className="bg-gradient-to-br from-[#0F1F5C] to-[#1a3a8f] py-16 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-2 rounded-full mb-4">The Solution</span>
          <h2 className="text-4xl font-extrabold text-white mb-4">Our Summer Camp SAT Program Changes That</h2>
          <p className="text-blue-100 max-w-2xl mx-auto">Our comprehensive toolkit is designed to optimize your study time and maximize your results through structured SAT prep strategies and data-driven performance insights.</p>
        </div>
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 grid sm:grid-cols-2 gap-4">
          <div className="sm:col-span-2 mb-2">
            <h3 className="text-xl font-bold text-gray-900">Designed to Help Students:</h3>
          </div>
          {points.map(({ icon, text }) => (
            <div key={text} className="flex items-start gap-4">
              <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-2xl">
                {icon}
              </div>
              <p className="text-gray-700 text-base mt-3">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="shake-btn bg-blue-500 hover:bg-blue-400 transition-colors rounded-2xl py-4 px-12 text-center shadow-lg">
            <p className="text-white text-lg font-bold">Enroll Now For This Bootcamp</p>
            <p className="text-blue-100 text-sm mt-1">Today Only — Limited Seats Available</p>
          </button>
        </div>
      </div>
    </section>
  );
}
