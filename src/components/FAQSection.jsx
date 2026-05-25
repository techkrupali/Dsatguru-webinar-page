import { useState } from "react";

const faqs = [
  { q: "This Webinar is completely Free?", a: "Yes, 100% free. No credit card required. Just register with your name and email." },
  { q: "Who is this webinar for?", a: "Students planning to take the Digital SAT, whether you're a beginner or have already attempted it and want to improve your score." },
  { q: "Will I get the recording?", a: "Yes! All registered attendees receive the full recording within 24 hours of the live session." },
  { q: "What is the Digital SAT?", a: "The Digital SAT (DSAT) is the new computer-adaptive version of the SAT, accepted by 1,800+ US universities and many international institutions." },
  { q: "Ready to reach your dream score?", a: "We focus exclusively on the Digital SAT, using smart, data-driven strategies built just for you—no generic prep here. Together, our students achieve, Generally 1500+. We can't wait to help you unlock your full potential!" },
  { q: "Can parents attend too?", a: "Absolutely! We encourage parents to join so they can support their child's preparation journey." },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <section id="faq" className="py-20 px-6 bg-[#EEF2FF]">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">FAQ</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Frequently Asked Questions</h2>
          <p className="text-gray-500">Got questions? We've got answers.</p>
        </div>
        <div className="flex flex-col gap-3">
          {faqs.map(({ q, a }, i) => (
            <div key={q} className="bg-white rounded-2xl border border-blue-100 overflow-hidden shadow-sm">
              <button
                className="w-full text-left px-6 py-4 flex justify-between items-center font-semibold text-gray-900"
                onClick={() => setOpen(open === i ? null : i)}
              >
                {q}
                <span className="text-blue-600 text-xl font-bold ml-4">{open === i ? "−" : "+"}</span>
              </button>
              {open === i && <p className="px-6 pb-5 text-gray-500 text-sm leading-relaxed">{a}</p>}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
