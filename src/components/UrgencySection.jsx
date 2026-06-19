import CTAButton from "./CTAButton";

export default function UrgencySection() {
  return (
    <section className="py-16 px-6 bg-[#0F1F5C]">
      <div className="max-w-3xl mx-auto text-center">
        <span className="inline-block bg-blue-500/20 text-blue-300 text-sm font-semibold px-5 py-1.5 rounded-full mb-5">⚠️ Limited Seats Available</span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-white mb-4 break-words">
          Only <span className="text-blue-300">Spots</span> Remaining — Don't Miss Out!
        </h2>
        <p className="text-blue-200 mb-8">
          Our last 3 webinars sold out within 48 hours. Once seats are full, registration closes. Secure your spot now before it's too late.
        </p>
        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {["✅ Free to attend", "✅ Live on Zoom", "✅ Bonuses worth $2000", "✅ Recording included"].map(t => (
            <span key={t} className="bg-white/10 border border-white/20 text-white text-sm rounded-full px-4 py-1.5">{t}</span>
          ))}
        </div>
        <div className="flex justify-center">
          <CTAButton className="w-full sm:w-[520px]" />
        </div>
      </div>
    </section>
  );
}
