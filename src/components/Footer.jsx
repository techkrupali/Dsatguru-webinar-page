import { useEffect, useState } from "react";

const WEBINAR_DATE = new Date("2026-05-21T16:00:00+05:30");

export default function Footer() {
  const [time, setTime] = useState({ days: 0, hrs: 0, min: 0, sec: 0 });

  useEffect(() => {
    const tick = () => {
      const diff = WEBINAR_DATE - new Date();
      if (diff <= 0) return setTime({ days: 0, hrs: 0, min: 0, sec: 0 });
      setTime({
        days: Math.floor(diff / 86400000),
        hrs: Math.floor((diff % 86400000) / 3600000),
        min: Math.floor((diff % 3600000) / 60000),
        sec: Math.floor((diff % 60000) / 1000),
      });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F1F5C] border-t border-white/10 px-6 py-3">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-4">

        {/* LIVE + Title */}
        <div className="flex items-center gap-3">
          <span className="flex items-center gap-1.5 text-red-500 font-bold text-sm">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse inline-block" />
            LIVE
          </span>
          <div>
            <p className="text-white font-bold text-sm leading-tight">Limited Time — Secure Your DSAT Future!</p>
            <p className="text-gray-400 text-xs">✦ Boost Your Score in One Power-Packed Webinar</p>
          </div>
        </div>

        {/* Countdown */}
        <div className="flex items-end gap-3 text-center">
          {[["Days", time.days], ["Hrs", pad(time.hrs)], ["Min", pad(time.min)], ["Sec", pad(time.sec)]].map(([label, val], i) => (
            <div key={label} className="flex items-end gap-3">
              {i > 0 && <span className="text-red-500 font-bold text-lg mb-1">:</span>}
              <div>
                <p className="text-red-500 font-extrabold text-xl leading-none">{val}</p>
                <p className="text-gray-400 text-xs mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Learners */}
        <div className="text-center">
          <p className="text-red-500 font-bold text-sm">🔥 Join 2,000+ Students</p>
          <p className="text-gray-400 text-xs flex items-center gap-1 justify-center">💎 Elite Access Today</p>
        </div>

        {/* CTA */}
        <a
          href="#register"
          className="bg-blue-600 hover:bg-blue-700 transition text-white font-extrabold text-sm px-5 py-3 rounded-xl text-center leading-tight"
        >
          Crack the Digital SAT
          <span className="block text-xs font-normal text-blue-200">(Limited Time Free Registration)</span>
        </a>

      </div>
    </footer>
  );
}
