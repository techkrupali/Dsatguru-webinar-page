import { useState, useEffect } from "react";
import API_BASE_URL from "../apiConfig";

const MONTHS_SHORT = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

function ordinal(n) {
  const s = ["th", "st", "nd", "rd"];
  const v = n % 100;
  return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

// "2026-02-20" -> "20th Feb '26"
function formatDate(webinarDate) {
  if (!webinarDate) return "To be announced";
  const [year, month, day] = webinarDate.split("-").map(Number);
  return `${ordinal(day)} ${MONTHS_SHORT[month - 1]} '${String(year).slice(-2)}`;
}

// "10:00" (24h) -> "10:00 AM EST"
function formatTime(webinarTime) {
  if (!webinarTime) return "To be announced";
  const [h, m] = webinarTime.split(":").map(Number);
  const ampm = h >= 12 ? "PM" : "AM";
  const hour12 = h % 12 === 0 ? 12 : h % 12;
  return `${hour12}:${String(m).padStart(2, "0")} ${ampm} EST`;
}

export default function ThankYou() {
  const [date, setDate] = useState("");
  const [time, setTime] = useState("");
  const [whatsappLink, setWhatsappLink] = useState("");

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch(`${API_BASE_URL}/api/settings`)
      .then((res) => res.json())
      .then((data) => {
        setDate(formatDate(data.webinarDate));
        setTime(formatTime(data.webinarTime));
        setWhatsappLink(data.whatsappLink || "");
      })
      .catch(() => {});
  }, []);

  return (
    <section className="min-h-screen bg-[#0A1530] text-white flex flex-col">
      <div className="flex-1 w-full max-w-5xl mx-auto px-6 py-12">

        {/* Logo */}
        <div className="flex justify-center" style={{ height: "90px", overflow: "hidden" }}>
          <img
            src="/logo_dsat-removebg-preview.png"
            alt="DSATGuru"
            className="w-auto object-contain block"
            style={{ height: "170px", marginTop: "-40px" }}
          />
        </div>

        {/* Heading */}
        <div className="text-center mb-8">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight">
            Congratulations! You're IN! 🎉🎊
          </h1>
          <div className="mx-auto mt-4 h-1 w-56 rounded-full bg-gradient-to-r from-transparent via-yellow-400 to-transparent" />
        </div>

        {/* Confirmation note */}
        <p className="text-center text-base sm:text-lg text-blue-100 max-w-2xl mx-auto mb-8">
          Your <span className="text-yellow-400 font-semibold">Confirmation Email Is On Its Way!</span> Please
          check spam/junk or Promotional folders in case you don't see the mail.
        </p>

        {/* WhatsApp CTA */}
        <div className="flex justify-center mb-14">
          <a
            href={whatsappLink || "#"}
            target={whatsappLink ? "_blank" : undefined}
            rel="noopener noreferrer"
            onClick={(e) => { if (!whatsappLink) e.preventDefault(); }}
            className={`inline-flex items-center justify-center gap-3 w-full max-w-xl px-8 py-5 rounded-xl text-xl font-bold shadow-lg transition ${
              whatsappLink
                ? "bg-green-500 hover:bg-green-600 text-white"
                : "bg-green-500/40 text-white/70 cursor-not-allowed"
            }`}
          >
            Join Our WhatsApp Group
            <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.71.306 1.263.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.247-.694.247-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </a>
        </div>

        {/* Video + details */}
        <div className="flex flex-col lg:flex-row gap-8 items-stretch">

          {/* Video */}
          <div className="flex-1 rounded-2xl overflow-hidden shadow-xl border border-white/10 bg-black">
            <div className="relative w-full h-full" style={{ paddingBottom: "56.25%" }}>
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/ixTvazJFjVA?autoplay=1&mute=1&loop=1&playlist=ixTvazJFjVA"
                title="DSAT Elite Score Boost Bootcamp™"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* Details */}
          <div className="flex-1 flex flex-col gap-4">
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex items-center gap-3">
              <span className="text-2xl">📅</span>
              <p className="font-semibold">
                <span className="text-blue-200">Date</span>&nbsp;&nbsp;{date}
              </p>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-xl px-5 py-4 flex items-center gap-3">
              <span className="text-2xl">⏰</span>
              <p className="font-semibold">
                <span className="text-blue-200">Time</span>&nbsp;&nbsp;{time}
              </p>
            </div>

            <ul className="mt-2 space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl flex-shrink-0">✅</span>
                <span className="text-blue-100">A confirmation email has been sent to your inbox.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-400 text-xl flex-shrink-0">✅</span>
                <span className="text-blue-100">Zoom link will be shared in the WhatsApp group and via email.</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8 px-6 text-center">
        <p className="max-w-3xl mx-auto text-sm text-blue-100">
          The webinar is live, and we highly recommend attending live for the best experience. However, a
          recording may be available for a limited time only to registered attendees — so make sure you show up!
        </p>
        <p className="text-xs text-blue-300 mt-4">© {`${new Date().getFullYear()}`} DSATGuru. All rights reserved.</p>
      </footer>
    </section>
  );
}
