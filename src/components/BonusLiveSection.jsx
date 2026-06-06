const bonuses = [
  { icon: "🎁", text: "SAT Preparation Checklist" },
  { icon: "🎁", text: "College Application Planning Guide" },
  { icon: "🎁", text: "Live Q&A Access" },
];

export default function BonusLiveSection() {
  return (
    <section className="bg-[#EEF2FF] py-20 px-6">
      <div className="max-w-5xl mx-auto">

        <div className="text-center mb-10">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-2 rounded-full mb-4">Exclusive Bonuses</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Bonus for Live Attendees</h2>
          <p className="text-gray-500 text-base">Everyone who attends live will receive:</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 sm:gap-6 mb-10">
          {bonuses.map(({ icon, text }) => (
            <div key={text} className="bg-white rounded-2xl border border-gray-200 shadow-sm px-8 py-10 flex flex-col items-center justify-center text-center gap-4">
              <span className="text-5xl leading-none">{icon}</span>
              <p className="text-gray-900 font-semibold text-base">{text}</p>
            </div>
          ))}
        </div>

        <div className="bg-white rounded-2xl border border-blue-200 shadow-sm p-7 sm:p-8 mb-10">
          <div className="flex items-center gap-2 text-blue-600 font-extrabold text-lg mb-3">
            <span aria-hidden>⚠️</span>
            <span>Important</span>
          </div>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed mb-2">
            This training is best for students planning to take the SAT within the next 12 months.
          </p>
          <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
            If you're serious about improving your SAT score and preparing for college admissions, make sure to reserve your seat today.
          </p>
          <div className="mt-5 inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-600 font-bold text-sm px-4 py-2 rounded-xl">
            <span className="w-2.5 h-2.5 rounded-full bg-red-500" />
            <span>Seats Are Limited</span>
          </div>
        </div>

        <div className="flex justify-center">
          <button
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="shake-btn bg-blue-600 hover:bg-blue-700 transition-colors rounded-2xl py-5 px-8 sm:px-14 text-center shadow-lg w-full sm:w-[520px]">
            <p className="text-white text-xl font-extrabold">YES! SAVE MY FREE SEAT</p>
            <p className="text-blue-200 text-sm mt-1">Limited Seats — Register Before They're Gone</p>
          </button>
        </div>

      </div>
    </section>
  );
}
