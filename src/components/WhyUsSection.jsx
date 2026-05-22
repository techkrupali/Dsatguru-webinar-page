

const instructors = [
  {
    name: "Mr. Vikas Sharma",
    role: "MATH FACULTY",
    education: [
      "B.Sc. (Computer Science) — K.U.K. University (2013)",
      "M.Sc. (Mathematics) — L.P. University (2016)",
      "B.Ed. (Math & Science) — CRS University (2019)",
    ],
    experience: "5+ Years of Teaching Experience",
    bio: "Passionate Math educator with a strong academic foundation in Computer Science, Mathematics, and Education. Dedicated to making complex concepts simple and accessible for every student.",
    photo: "/vikassir.png",
  },
  {
    name: "Ms. Namrata Mohan",
    role: "ENGLISH & VERBAL ABILITY SPECIALIST",
    education: [
      "BA (Hons) English Literature",
      "PGDBM",
      "B.Ed. (Education)",
    ],
    experience: "20+ Years of experience in English, Verbal Ability, and communication",
    bio: "Seasoned English & Verbal Ability specialist with over two decades of experience helping students excel in communication, comprehension, and competitive exams.",
    photo: "/namarata.png",
  },
  {
    name: "Dr. Bala",
    role: "Reading and Writing SPECIALIST",
    education: [
      "PhD",
    ],
    experience: "10+ Years of Teaching Experience",
    bio: "Experienced English educator dedicated to helping students master the SAT Reading and Writing sections with clarity and confidence.",
    photo: "/bala mam.png",
  },
];

export default function WhyUsSection() {
  return (
    <section id="why-us" className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <span className="inline-block bg-blue-100 text-blue-600 text-sm font-semibold px-5 py-1.5 rounded-full mb-4">Expert Instructors</span>
          <h2 className="text-4xl font-extrabold text-gray-900 mb-3">Meet Your Instructors</h2>
          <p className="text-gray-500">Learn from experts who have been in your shoes and cracked the code.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {instructors.map(({ name, role, education, experience, bio, photo }) => (
            <div key={name} className="max-w-sm w-full border-2 border-gray-200 rounded-xl p-4">
              <img src={photo} alt={name} className="w-full h-80 object-cover object-top rounded-lg mb-5 border-2 border-gray-200" />
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{name}</h3>
              <p className="text-gray-600 text-sm font-semibold mb-3">{role}</p>
              {education.length > 0 && (
                <p className="text-sm mb-3">
                  <span className="font-extrabold text-blue-600 tracking-wide">EDUCATION</span>
                  <span className="font-semibold text-gray-700"> ({education.join(' , ')})</span>
                </p>
              )}
              {experience && <p className="text-sm text-green-600 font-semibold mb-3">🏆 {experience}</p>}
              <p className="text-gray-700 text-sm leading-relaxed mb-4">{bio}</p>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
