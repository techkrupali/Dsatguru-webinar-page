import video1 from "../assets/WhatsApp Video 2026-05-19 at 15.04.12.mp4";
import video2 from "../assets/WhatsApp Video 2026-05-19 at 15.04.15.mp4";
import video3 from "../assets/WhatsApp Video 2026-05-19 at 15.04.21.mp4";
import video4 from "../assets/WhatsApp Video 2026-05-19 at 15.11.41.mp4";

const videos = [
  { src: video1, name: "Student 1" },
  { src: video2, name: "Student 2" },
  { src: video3, name: "Student 3" },
  { src: video4, name: "Student 4" },
];

export default function VideoTestimonials() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-extrabold text-center text-[#1A1A2E] mb-4">
          Real Student Results & <span className="text-orange-500">Experiences</span>
        </h2>
        <p className="text-center text-gray-500 mb-10">Watch their transformation stories in their own words.</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videos.map(({ src, name }) => (
            <div key={name} className="rounded-2xl overflow-hidden shadow-sm border border-gray-100">
              <video
                src={src}
                controls
                className="w-full h-64 object-cover bg-black"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
