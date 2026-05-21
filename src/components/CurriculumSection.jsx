const modules = [
  { time: "0:00 – 0:15", title: "Welcome & DSAT Overview", points: ["What changed in Digital SAT", "Adaptive testing explained", "Scoring breakdown"] },
  { time: "0:15 – 0:40", title: "Reading & Writing Mastery", points: ["Command of Evidence questions", "Rhetorical synthesis", "Grammar rules that matter most"] },
  { time: "0:40 – 1:05", title: "Math Power Session", points: ["Algebra & advanced math shortcuts", "Problem-solving with Desmos", "Data analysis tricks"] },
  { time: "1:05 – 1:20", title: "Test Strategy & Study Plan", points: ["How to build your 8-week plan", "Practice test schedule", "Score tracking system"] },
  { time: "1:20 – 1:30", title: "Live Q&A", points: ["Ask our experts anything", "Get personalised advice", "Exclusive resources shared"] },
];

export default function CurriculumSection() {
  return (
    <section id="curriculum" className="py-20 px-6 bg-[#EEF2FF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">Agenda</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Webinar Curriculum</h2>
          <p className="text-gray-500">Here's exactly what we'll cover in 90 minutes.</p>
        </div>
        <div className="flex flex-col gap-4">
          {modules.map(({ time, title, points }, i) => (
            <div key={title} className="bg-white rounded-2xl p-5 border border-blue-100 shadow-sm flex gap-4">
              <div className="flex-shrink-0 w-9 h-9 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold text-sm">
                {i + 1}
              </div>
              <div>
                <div className="text-xs text-blue-500 font-semibold mb-1">{time}</div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <ul className="text-sm text-gray-500 space-y-1">
                  {points.map(p => (
                    <li key={p} className="flex items-center gap-2">
                      <svg className="w-4 h-4 text-blue-500 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                      {p}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
