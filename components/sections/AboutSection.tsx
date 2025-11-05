export default function AboutSection() {
  return (
    <div className="py-16">
      <div className="max-w-6xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
          <div className="md:col-span-3">
            <h1 className="text-3xl font-medium  mb-8">
              ABOUT
            </h1>
            <ul className="hidden md:flex flex-col gap-8">
              <li>
                <span>01 </span>me
              </li>
              <li>
                <span>02 </span>tech stack
              </li>
              <li>
                <span>03 </span>certifications
              </li>
            </ul>
          </div>
          <div className="md:col-span-9 space-y-12">
            {/* 01 Me */}
            <section id="me">
              <h2 className="text-xl font-semibold mb-2">Me</h2>
              <p>
                I'm a web developer with a passion for creating intuitive, user-friendly digital experiences. My journey into web development started from a curiosity about how things work behind the screen, and it evolved into a professional pursuit driven by continuous learning. I enjoy transforming ideas into functional, well-crafted products—whether it's building sleek UIs or optimizing back-end performance.
              </p>
            </section>

            {/* 02 Tech Stack */}
            <section id="tech-stack">
              <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
              <p>
                My primary stack includes <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>TypeScript</strong> for front-end development. On the back-end, I'm comfortable working with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MongoDB</strong>, along with RESTful APIs and authentication systems. For version control and deployment, I rely on <strong>Git</strong>, <strong>GitHub</strong>, and <strong>Vercel</strong> or <strong>Netlify</strong>.
              </p>
            </section>

            {/* 03 Certifications */}
            <section id="certifications">
              <h2 className="text-xl font-semibold mb-2">Certifications</h2>
              <p>
                I've completed several certifications to deepen my knowledge and validate my skills, including:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>Meta Front-End Developer – Coursera</li>
                <li>Back-End Developer Path – Dicoding</li>
                <li>Responsive Web Design – freeCodeCamp</li>
                <li>JavaScript Algorithms and Data Structures – freeCodeCamp</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

