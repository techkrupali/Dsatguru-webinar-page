export default function UrgencySection() {
  return (
    <section className="py-16 px-6 bg-[#0F1F5C]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-5 py-1.5 rounded-full mb-5">⚠️ Limited Seats Available</span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white mb-4 whitespace-nowrap">
          Only <span className="text-blue-300">FEW Seats</span> Remaining — Don't Miss Out!
        </h2>
        <p className="text-blue-200 mb-8">
          Our last 3 webinars sold out within 48 hours. Once seats are full, registration closes. Secure your spot now before it's too late.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["✅ Free to attend", "✅ Live on Zoom", "✅ Bonuses worth $2000", "✅ Recording included"].map(t => (
            <span key={t} className="bg-white/10 border border-white/20 text-white text-sm rounded-full px-4 py-1.5">{t}</span>
          ))}
        </div>
        <a href="#register" className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-bold text-lg px-10 py-4 rounded-xl shadow-lg transition">
          Claim My Free Seat Now →
        </a>
      </div>
    </section>
  );
}
