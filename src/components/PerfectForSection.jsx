const topics = [
  {
    num: "1",
    title: "The Biggest SAT Mistakes Students Make",
    desc: "Most students spend months studying but still fall short of their target score. You'll learn the common mistakes that hold students back and what successful students do differently."
  },
  {
    num: "2",
    title: "The Simple SAT Success Roadmap",
    desc: "Discover the step-by-step approach many top students follow to stay focused, study smarter, and make steady progress."
  },
  {
    num: "3",
    title: "What Colleges Really Look For",
    desc: "SAT scores matter, but they are only one part of the application. Learn what helps students stand out and improve their chances of getting accepted."
  },
  {
    num: "4",
    title: "Live Questions & Answers",
    desc: "Get answers to your biggest SAT and college admissions questions."
  },
];

export default function PerfectForSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">Free Training</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">What You'll Discover During This Free Training</h2>
        </div>
        <div className="flex flex-col gap-4">
          {topics.map(({ num, title, desc }) => (
            <div key={num} className="flex items-start gap-4 bg-[#EEF2FF] rounded-xl p-5 border border-blue-100 shadow-sm">
              <span className="text-2xl font-extrabold text-blue-600 flex-shrink-0">{num}.</span>
              <div>
                <p className="text-gray-900 font-bold text-base mb-1">{title}</p>
                <p className="text-gray-600 text-sm leading-relaxed">{desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-gray-700 text-lg font-semibold text-center">Ready to transform your DSAT score this summer? 🚀</p>
          <button
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="shake-btn bg-blue-600 hover:bg-blue-700 transition-colors rounded-2xl py-4 px-8 sm:px-12 text-center shadow-lg w-full sm:w-auto">
            <p className="text-white text-lg font-bold">Reserve My Seat Now</p>
            <p className="text-blue-100 text-sm mt-1">Limited Seats — Don't Miss Out!</p>
          </button>
        </div>
      </div>
    </section>
  );
}
