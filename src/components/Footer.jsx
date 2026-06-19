import { useEffect, useState } from "react";
import API_BASE_URL from "../apiConfig";
import CTAButton from "./CTAButton";

// Fallback if settings haven't loaded yet (EST = UTC-5)
const FALLBACK_DATE = new Date("2026-06-26T19:00:00-05:00");

export default function Footer() {
  const [time, setTime] = useState({ days: 0, hrs: 0, min: 0, sec: 0 });
  const [target, setTarget] = useState(FALLBACK_DATE);

  useEffect(() => {
    fetch(`${API_BASE_URL}/api/settings`)
      .then((res) => res.json())
      .then((data) => {
        if (data.webinarDate) {
          const webinarTime = data.webinarTime || "19:00";
          // Webinar time is in EST (UTC-5)
          const parsed = new Date(`${data.webinarDate}T${webinarTime}:00-05:00`);
          if (!isNaN(parsed)) setTarget(parsed);
        }
      })
      .catch(() => {});
  }, []);

  useEffect(() => {
    const tick = () => {
      const diff = target - new Date();
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
  }, [target]);

  const pad = (n) => String(n).padStart(2, "0");

  return (
    <footer className="fixed bottom-0 left-0 right-0 z-50 bg-[#0F1F5C] border-t border-white/10 px-3 py-2 sm:px-6 sm:py-3">
      <div className="max-w-6xl mx-auto flex flex-wrap items-center justify-between gap-2 sm:gap-4">

        {/* LIVE + Title — hidden on very small screens */}
        <div className="hidden sm:flex items-center gap-3">
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
        <div className="flex items-end gap-2 sm:gap-3 text-center">
          {[["Days", time.days], ["Hrs", pad(time.hrs)], ["Min", pad(time.min)], ["Sec", pad(time.sec)]].map(([label, val], i) => (
            <div key={label} className="flex items-end gap-2 sm:gap-3">
              {i > 0 && <span className="text-red-500 font-bold text-base sm:text-lg mb-1">:</span>}
              <div>
                <p className="text-red-500 font-extrabold text-lg sm:text-xl leading-none">{val}</p>
                <p className="text-gray-400 text-xs mt-0.5">{label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Learners — hidden on small */}
        <div className="hidden md:block text-center">
          <p className="text-red-500 font-bold text-sm">🔥 Join 2,000+ Students</p>
          <p className="text-gray-400 text-xs flex items-center gap-1 justify-center">💎 Elite Access Today</p>
        </div>

        {/* CTA */}
        <CTAButton />

      </div>
    </footer>
  );
}
