const attendees = [
  "High school students preparing for the SAT",
  "Students aiming for competitive colleges",
  "Students who want to improve their SAT score",
  "Parents who want to support their child's college journey",
];

export default function FeaturesSection() {
  return (
    <section className="bg-[#EEF2FF] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        {/* Header */}
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-2 rounded-full mb-4">Free Training</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Why Attend?</h2>
        </div>

        {/* Two column layout */}
        <div className="flex flex-col lg:flex-row gap-6 items-stretch">

          {/* LEFT — Who Should Attend */}
          <div className="flex-1 bg-white rounded-2xl border border-blue-100 shadow-sm p-7">
            <h3 className="text-xl font-extrabold text-gray-900 mb-5">Who Should Attend?</h3>
            <div className="flex flex-col gap-3">
              {attendees.map((text) => (
                <div key={text} className="flex items-center gap-3 bg-[#EEF2FF] rounded-xl px-4 py-3 border border-blue-100">
                  <span className="text-green-500 text-lg flex-shrink-0">✅</span>
                  <p className="text-gray-800 text-sm font-medium">{text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Why Attend */}
          <div className="flex-1 bg-white rounded-2xl border border-blue-100 shadow-sm p-7 flex flex-col justify-center">
            <h3 className="text-xl font-extrabold text-gray-900 mb-4">Why This Training?</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              The SAT can have a major impact on your college opportunities. But most students waste time using random study methods, outdated advice, and confusing strategies.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed mt-3">
              This training will help you understand what actually matters so you can move forward with confidence.
            </p>
            <div className="mt-5 flex flex-col gap-2">
              {["Clarity on what the SAT actually tests", "A proven framework used by top scorers", "Actionable steps you can apply immediately"].map((pt) => (
                <div key={pt} className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-600 flex-shrink-0" />
                  <p className="text-gray-700 text-sm">{pt}</p>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-10 flex justify-center">
          <button
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="shake-btn bg-blue-600 hover:bg-blue-700 transition-colors rounded-2xl py-4 px-8 sm:px-12 text-center shadow-lg w-full sm:w-auto">
            <p className="text-white text-lg font-bold">Reserve My Free Spot Now</p>
            <p className="text-blue-200 text-sm mt-1">Limited Seats — Register Before They're Gone</p>
          </button>
        </div>

      </div>
    </section>
  );
}
