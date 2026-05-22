export default function HeroSection() {
  return (
    <section className="bg-[#EEF2FF] px-6 pt-6 pb-16">
      <div className="max-w-5xl mx-auto">

        {/* Logo */}
        <div className="flex justify-center" style={{height: "120px", overflow: "hidden"}}>
          <img src="/logo_dsat-removebg-preview.png" alt="DSATGuru" className="w-auto object-contain block" style={{height: "220px", marginTop: "-50px"}} />
        </div>

        {/* Star rating pill — centered */}
        <div className="flex justify-center mb-6">
          <div className="inline-flex items-center gap-2 border border-gray-300 rounded-full px-5 py-2 bg-white shadow-sm text-sm font-semibold text-gray-700">
            <span className="text-yellow-400 tracking-tight">★★★★★</span>
            <span className="text-gray-400">|</span>
            4.9 STAR RATINGS | 150+ STUDENTS
          </div>
        </div>

        {/* Big centered headline */}
        <div className="text-center mb-4">
          <h1 className="text-5xl md:text-6xl font-extrabold text-gray-900 leading-tight mb-4">
            Go From{" "}
            <span className="text-blue-600 underline decoration-blue-400">LOW SCORE → 1500+</span>{" "}
            with
          </h1>
          <h2 className="text-4xl md:text-5xl font-extrabold text-blue-600 underline decoration-blue-400 mb-4">
            DSAT Intensive Summercamp™
          </h2>
          <p className="text-xl md:text-2xl font-semibold text-gray-600 italic">
            ...The Intensive Weekend Program Designed to{" "}
            <span className="underline">Maximize Your Score</span> Fast!
          </p>
        </div>

        {/* Two column: video left + info right */}
        <div className="flex flex-col lg:flex-row gap-8 mt-10 items-start">

          {/* LEFT — Video embed */}
          <div className="flex-1 w-full rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-black">
            <div className="relative w-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ixTvazJFjVA?autoplay=1&mute=1&loop=1&playlist=ixTvazJFjVA"
                title="DSAT Elite Score Boost Bootcamp™ — Preview"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
              {/* Video label */}
              <div className="absolute bottom-3 left-3 bg-black/60 text-white text-xs px-3 py-1 rounded-full">
                🎓 DSAT Elite Score Boost Bootcamp™ — Preview
              </div>
            </div>
          </div>

          {/* RIGHT — Info cards + CTA */}
          <div className="flex-1 flex flex-col gap-4">

            {/* Date & Time card */}
            <div className="bg-white border border-gray-200 rounded-xl px-5 py-4 flex items-center gap-4 shadow-sm">
              <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <span className="font-bold text-gray-900 text-base underline">Date &amp; Time:</span>
                <span className="text-gray-700 text-base"> May 29, 2026 ( 7pm EST Friday )</span>
              </div>
            </div>

            {/* Format + Language row */}
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10l4.553-2.069A1 1 0 0121 8.82v6.36a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h8a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Format</p>
                  <p className="font-bold text-gray-900 text-base">Live Online<br /><span className="font-normal text-gray-500">ON ZOOM</span></p>
                </div>
              </div>
              <div className="bg-white border border-gray-200 rounded-xl px-4 py-4 flex items-center gap-3 shadow-sm">
                <div className="w-10 h-10 rounded-lg bg-blue-100 flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 21l5.25-11.25L21 21m-9-3h7.5M3 5.621a48.474 48.474 0 016-.371m0 0c1.12 0 2.233.038 3.334.114M9 5.25V3m3.334 2.364C13.18 6.062 14.05 6.79 14.75 7.7M9 5.25c-1.12.09-2.233.22-3.334.39" />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400">Language</p>
                  <p className="font-bold text-gray-900 text-base">English</p>
                </div>
              </div>
            </div>

            {/* Highlight line */}
            <p className="text-base font-semibold text-gray-700 text-center">
              👉 Learn{" "}
              <span className="underline font-bold">Elite Strategies</span> &amp;{" "}
              <span className="underline font-bold">"Score Boost Framework"</span>{" "}
              that Transform Your SAT Score
            </p>

            {/* CTA Button */}
            <a
              href="#register"
              className="block bg-blue-600 hover:bg-blue-700 text-white text-center font-extrabold text-xl px-6 py-4 rounded-xl shadow-lg shake-btn"
            >
              Enroll Now For This Bootcamp
              <span className="block text-sm font-normal text-blue-200 mt-0.5">
                Today Only — Limited Seats Available
              </span>
            </a>

            {/* Bonus line */}
            <p className="text-center text-gray-500 text-sm">
              Get the Free Bonuses worth $2000 when you Register TODAY
            </p>
            <p className="text-center text-red-500 text-sm font-bold">
              🔴 FREE Registrations Ending on <span className="text-red-500">May 21, 2026</span>
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
