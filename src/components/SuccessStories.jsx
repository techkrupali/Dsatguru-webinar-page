const stories = [
  { name: "Riya Kapoor", score: "1180 → 1490", city: "Mumbai", quote: "I was stuck at 1180 for months. After DSATGuru's webinar I restructured my prep completely and jumped 310 points in 6 weeks!" },
  { name: "Aditya Nair", score: "1250 → 1540", city: "Bangalore", quote: "The math shortcuts alone saved me 15 minutes per section. Absolutely game-changing session." },
  { name: "Sneha Patel", score: "1100 → 1420", city: "Ahmedabad", quote: "As a non-native English speaker I was terrified of the verbal section. The elimination framework made it so much easier." },
  { name: "Karan Singh", score: "1300 → 1570", city: "Delhi", quote: "The personalised study plan I got during the webinar was worth more than 3 months of coaching." },
];

export default function SuccessStories() {
  return (
    <section id="testimonials" className="py-16 px-4 bg-gray-50">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-[#1A1A2E] mb-4">
          Real Students, <span className="text-orange-500">Real Results</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">These students attended our webinar and transformed their scores.</p>
        <div className="grid md:grid-cols-2 gap-6">
          {stories.map(({ name, score, city, quote }) => (
            <div key={name} className="bg-white rounded-2xl p-6 shadow-sm border border-gray-100">
              <p className="text-gray-600 text-sm leading-relaxed mb-4">"{quote}"</p>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-bold text-[#1A1A2E]">{name}</p>
                  <p className="text-xs text-gray-400">{city}</p>
                </div>
                <span className="bg-orange-100 text-orange-600 text-xs font-bold px-3 py-1 rounded-full">{score}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
