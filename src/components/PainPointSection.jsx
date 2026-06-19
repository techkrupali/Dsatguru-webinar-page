import CTAButton from "./CTAButton";

const pains = [
  { icon: "😰", text: "Not sure how to prepare effectively for the Digital SAT" },
  { icon: "📉", text: "Studying hard but not seeing the score improvement you expected" },
  { icon: "🤯", text: "Feeling overwhelmed by too much information online" },
  { icon: "🎯", text: "Unsure what score you actually need for your dream university" },
  { icon: "🏫", text: "Confused about university admissions and scholarship opportunities" },
  { icon: "😓", text: "Worried about making costly mistakes during your preparation journey" },
];

export default function PainPointSection() {
  return (
    <section id="about" className="py-20 px-6 bg-[#EEF2FF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">Common Struggles</span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-gray-900 mb-3">Are You Facing Any Of These Challenges?</h2>
          <p className="text-gray-500">You're not alone. Thousands of students face these exact challenges.</p>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          {pains.map(({ icon, text }) => (
            <div key={text} className="flex items-start gap-3 bg-white rounded-xl p-5 border border-blue-100 shadow-sm">
              <span className="text-2xl">{icon}</span>
              <p className="text-gray-700 text-sm leading-relaxed">{text}</p>
            </div>
          ))}
        </div>
        <div className="mt-10 flex flex-col items-center gap-4">
          <p className="text-gray-700 text-base sm:text-lg font-semibold text-center">If you answered YES to any of these...</p>
          <p className="text-gray-900 text-lg sm:text-xl font-bold text-center">This training was designed specifically for you.</p>
          <CTAButton className="w-full sm:w-[520px]" />
        </div>
      </div>
    </section>
  );
}
