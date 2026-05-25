import { useRef, useState } from "react";

const results = [
  { video: "/v1.mp4", score: "1220 → 1550", title: "How I Improved 430+ Points in 7 weeks", university: "UNC CH", quote: '"The structured approach and mock tests made all the difference!"' },
  { video: "/v2.mp4", score: "1270 → 1540", title: "From Confused to Confident in SAT Math", university: "GEORGIA TECH (GIT) (Expected)", quote: '"The Desmos calculator strategies were game-changing!"' },
  { video: "/v3.mp4", score: "1210 → 1520", title: "The Strategies That Helped Me Save Time", university: "Duke U.", quote: '"I learned how to work smarter, not harder!"' },
  { video: "/v4.mp4", score: "1050 → 1440", title: "I am Happy with my Score", university: "NC State", quote: '"The live classes kept me accountable and on track."' },
  { video: "/v5.mp4", score: "1410 → 1560", title: "How I Mastered the Digital SAT in 10 Weeks", university: "Columbia University (Expected)", quote: '"The Strategy Planner helped me focus on what really mattered."' },
];

function VideoCard({ video, score, title, university, quote }) {
  const videoRef = useRef(null);
  const [playing, setPlaying] = useState(false);

  const toggle = () => {
    if (playing) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setPlaying(!playing);
  };

  return (
    <div className="rounded-2xl border border-gray-100 shadow-sm overflow-hidden bg-white">
      <div className="relative cursor-pointer" onClick={toggle}>
        <video ref={videoRef} src={video} className="w-full h-72 object-cover bg-black" />
        {!playing && (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white/80 flex items-center justify-center shadow-lg">
              <svg className="w-5 h-5 text-blue-600 ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M8 5v14l11-7z" />
              </svg>
            </div>
          </div>
        )}
        <div className="absolute top-3 right-3 bg-blue-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
          {score}
        </div>
      </div>
      <div className="p-5">
        <h3 className="font-bold text-gray-900 text-base mb-2 leading-snug">{title}</h3>
        <div className="flex items-center gap-1.5 text-blue-600 text-sm mb-3">
          <svg className="w-4 h-4 flex-shrink-0" fill="none" stroke="currentColor" strokeWidth={1.5} viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5" />
          </svg>
          <span>{university}</span>
        </div>
        <p className="text-gray-500 text-sm italic mb-3">{quote}</p>
      </div>
    </div>
  );
}

export default function StudentResults() {
  return (
    <section id="testimonials" className="bg-white py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-5">
            Student Success
          </span>
          <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
            Real Student Results & Experiences
          </h2>
          <p className="text-gray-500 text-base max-w-xl mx-auto leading-relaxed">
            Hear Directly From Students Who Improved Their SAT Scores & Got Closer to Their Dream Universities
          </p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {results.map((r) => (
            <VideoCard key={r.video} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
}
