const stats = [
  { value: "12,000+", label: "Students Trained" },
  { value: "1580", label: "Highest Score Achieved" },
  { value: "94%", label: "Score Improvement Rate" },
  { value: "200+", label: "Webinars Conducted" },
];

export default function TrustBar() {
  return (
    <section className="bg-orange-500 py-8 px-4">
      <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-white">
        {stats.map(({ value, label }) => (
          <div key={label}>
            <div className="text-3xl font-extrabold">{value}</div>
            <div className="text-sm mt-1 opacity-90">{label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
