export default function AboutSection() {
  const skills =[
    "Languages : Python, JavaScript, Java, C, TypeScript, Pytorch, TensorFlow",
    "SQL : MySQL, PostgreSQL, Oracle MariaDB, Supabase",
    "NoSQL : MongoDB, Firebase",
    "Frontend : React, Next.js, React Native, Vue.js, Nuxt.js",
    "Backend : Node.js, Express, Django",
    "AI : OpenAI, Google Gemini, Claude, Cursor, DeepSeek",
    "Tools : GitLab, GitHub, Docker, Python Unit Testing, CI/CD, DevOps, MLOps",
    "Agile : Scrum, Product Owner, Scrum Master"
  ];

  return (
    <section
      id="about"
      className="border-t border-gray-200 bg-gray-50 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-6xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          About Me
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
          I’m a passionate software engineer who loves building impactful and scalable systems. I enjoy working across the full stack — from crafting intuitive frontend experiences to designing robust backend architectures and exploring AI solutions.
          Throughout university and internships, I’ve taken on leadership roles such as Product Owner and Scrum Master, helping teams stay aligned and deliver results efficiently. I thrive in collaborative environments where we work toward shared goals.
          I gained hands-on industry experience as a Web Developer Intern working with Vue.js and Nuxt.js in Agile settings, and as a Full-Stack Engineer intern at Monash where I helped optimise a complex research platform using React, TypeScript, MongoDB, and RESTful APIs.
          I’m deeply curious, determined, and always eager to learn. For me, coding isn’t just about writing software — it’s about solving real problems and continuously pushing myself to grow.
          </p>

        </div>
        <div className="mt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            Skills
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {skills.map((item) => (
              <li key={item} className="flex items-start gap-2 text-gray-700">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-gray-400" />
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
