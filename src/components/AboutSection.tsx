export default function AboutSection() {
  return (
    <section
      id="about"
      className="border-t border-gray-200 bg-gray-50 px-4 py-16 md:px-6 md:py-20 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-3xl">
        <h2 className="mb-8 text-3xl font-bold tracking-tight text-gray-900 md:text-4xl">
          About Me
        </h2>
        <div className="space-y-6 text-gray-700 leading-relaxed">
          <p>
            I’m a software engineer focused on building clear, fast, and
            accessible web applications. I care about clean code, thoughtful
            UX, and systems that scale.
          </p>
          <p>
            When I’m not coding, I enjoy reading, learning new tools, and
            contributing to open source when I can.
          </p>
        </div>
        <div className="mt-10">
          <h3 className="mb-4 text-sm font-semibold uppercase tracking-wider text-gray-500">
            What I do
          </h3>
          <ul className="grid gap-3 sm:grid-cols-2">
            {[
              "Frontend development (React, TypeScript)",
              "Backend & APIs (Node.js)",
              "Responsive & accessible UI",
              "Tooling & developer experience",
            ].map((item) => (
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
