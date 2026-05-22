const reviews = [
  { initials: "PR", bg: "bg-green-100", name: "Prescovia", location: "USA", date: "Feb 4, 2026", rating: 5, verified: true, review: "DSATGuru is an excellent study and exam preparation platform. It helped me sharpen my critical thinking skills and significantly improved my Digital SAT performance. The structured approach and practice material are top-notch." },
  { initials: "MJ", bg: "bg-green-100", name: "MJ", location: "USA", date: "Aug 6, 2025", rating: 5, verified: true, review: "I've been using DSATGuru for months now. The comprehensive DSAT prep coverage is outstanding. I've tried other traditional prep courses but DSATGuru's adaptive approach and Strategy Planner are far superior." },
  { initials: "JM", bg: "bg-pink-100", name: "Jake Mitchell", location: "London", date: "Dec 5, 2025", rating: 5, verified: false, review: "As someone new to test prep, DSATGuru was the perfect choice. I used it for the Digital SAT and scored great on the first try. The Exam Set Builder and practice sets made all the difference." },
  { initials: "ER", bg: "bg-pink-100", name: "Erum", location: "America", date: "Jan 14, 2026", rating: 5, verified: true, review: "Initially DSATGuru felt very detailed, but slowly I got familiar with the platform. The Exam Set Builder is like addicted to me — I keep coming back to practice more and my scores keep improving!" },

  { initials: "EL", bg: "bg-green-100", name: "Elizabeth", location: "New York", date: "Dec 24, 2025", rating: 4, verified: true, review: "Our instructor at DSATGuru was great! Very well-informed and helped us apply decision-tree strategies for reading questions. The practice questions were very close to the real DSAT format." },
  { initials: "AL", bg: "bg-green-100", name: "Allison", location: "California", date: "Apr 15, 2026", rating: 3, verified: true, review: "English and Math prep at DSATGuru were very good. The practice questions were well-structured and the mock tests were realistic. The Strategy Planner helped me focus on the right topics for maximum score improvement." },
];

export default function SuccessStoriesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-2 rounded-full mb-4">Results That Matter</span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4 flex items-center justify-center gap-4 flex-wrap">
            Student Success Stories
            <span className="inline-block bg-red-500 text-white text-lg font-extrabold px-5 py-2 rounded-xl rotate-[-4deg] shadow-md">can't be wrong!</span>
          </h2>
          <p className="text-gray-500 text-lg">Real score improvements from real students</p>
        </div>

        {/* Trustpilot-style Reviews */}
        <div className="mt-16">
<div className="grid md:grid-cols-3 gap-5">
            {reviews.map(({ initials, bg, name, location, date, rating, verified, review }) => (
              <div key={name + date} className="bg-white rounded-2xl p-6 border border-gray-200 shadow-sm hover:shadow-md transition-all">
                {/* Top: Avatar + Name */}
                <div className="flex items-center gap-3 mb-4">
                  <div className={`${bg} w-12 h-12 rounded-full flex items-center justify-center font-bold text-gray-700 text-sm flex-shrink-0`}>
                    {initials}
                  </div>
                  <div>
                    <p className="font-bold text-gray-900 text-sm">{name}</p>
                    <p className="text-gray-400 text-xs flex items-center gap-1">📍 {location}</p>
                  </div>
                </div>
                <hr className="border-gray-100 mb-4" />
                {/* Stars + Date */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-0.5">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <div key={i} className={`w-5 h-5 flex items-center justify-center ${i < rating ? 'bg-[#00b67a]' : 'bg-gray-200'}`}>
                          <svg viewBox="0 0 24 24" className="w-3 h-3" fill="white">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        </div>
                      ))}
                    </div>
                    <span className="text-xs font-semibold text-gray-500">({rating}/5)</span>
                  </div>
                  <span className="text-gray-400 text-xs">{date}</span>
                </div>
                {/* Review text */}
                <p className="text-gray-800 text-sm leading-relaxed mb-4">{review}</p>
                {/* Date of experience */}
                <p className="text-gray-500 text-xs font-semibold mb-4">Date of experience: {date}</p>
                <hr className="border-gray-100 mb-3" />
                {/* Footer */}
                <div className="flex items-center gap-4 text-gray-400 text-xs">
                  <span className="flex items-center gap-1 cursor-pointer hover:text-gray-600">👍 Useful</span>
                  <span className="flex items-center gap-1 cursor-pointer hover:text-gray-600">↗ Share</span>
                  {verified && <span className="ml-auto text-green-600 font-semibold flex items-center gap-1">✓ Verified</span>}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Webinar CTA Banner */}
        <div className="mt-16 bg-gradient-to-br from-[#0F1F5C] to-[#1a3a8f] rounded-3xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-2/5 relative overflow-hidden">
            <img
              src="/rahulshah.jpeg"
              alt="Instructor"
              className="w-full h-full object-cover object-top min-h-[500px] scale-110 origin-top"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-center py-3">
              <p className="font-bold text-lg">Dr. Rahul Shah &nbsp;|&nbsp; <span className="text-gray-300 tracking-widest text-sm font-normal">FOUNDER</span></p>
            </div>
          </div>
          <div className="md:w-3/5 p-8 md:p-10 flex flex-col justify-center">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Join our <span className="bg-red-500 text-white text-base font-extrabold px-3 py-1 rounded-lg mx-1">FREE</span> webinar
            </h3>
            <ul className="space-y-4 mb-8">
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                <p className="text-gray-200 text-base">Master the Digital SAT Summer Camp — learn proven strategies to crack the adaptive format, boost your score, and get into your dream university.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                <p className="text-gray-200 text-base">Use our exclusive <strong className="text-white">Strategy Planner</strong> — a personalised roadmap that identifies your weak areas and builds a targeted study plan for maximum score gain.</p>
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 flex-shrink-0 w-5 h-5 rounded-full bg-green-500 flex items-center justify-center text-white text-xs font-bold">✓</span>
                <p className="text-gray-200 text-base">Access our <strong className="text-white">Exam Set Builder</strong> — create custom practice sets that simulate real DSAT conditions, so you walk into exam day fully prepared and confident.</p>
              </li>
            </ul>
            <button
              onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
              className="w-full bg-white hover:bg-gray-100 transition-colors rounded-xl py-4 px-6 text-center font-extrabold text-gray-900 text-xl shadow-lg"
            >
              🚀 Register For The FREE Class ✨
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
