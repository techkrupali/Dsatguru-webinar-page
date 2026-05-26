const pains = [
  { icon: "😰", text: "Confused about the new Digital SAT format and adaptive testing?" },
  { icon: "💸", text: "Spending lakhs on coaching but not seeing score improvements?" },
  { icon: "⏰", text: "Running out of time during the exam and losing easy marks?" },
  { icon: "📉", text: "Scoring below 1200 despite months of preparation?" },
  { icon: "😓", text: "Don't know which topics to prioritise for maximum score gain?" },
  { icon: "🤯", text: "Overwhelmed by the sheer volume of practice material available?" },
];

export default function PainPointSection() {
  return (
    <section id="about" className="py-20 px-6 bg-[#EEF2FF]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">Common Struggles</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Does This Sound Like You?</h2>
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
          <p className="text-gray-700 text-lg font-semibold text-center">If you've ever thought this way, this DSAT SUMMER PREP is for you 👇</p>
          <button
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
            className="shake-btn bg-blue-600 hover:bg-blue-700 transition-colors rounded-2xl py-4 px-12 text-center shadow-lg">
            <p className="text-white text-lg font-bold">Enroll Now For This DSAT SUMMER PREP</p>
            <p className="text-blue-100 text-sm mt-1">Today Only — Limited Seats Available</p>
          </button>
        </div>
      </div>
    </section>
  );
}
