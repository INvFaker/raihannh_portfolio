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
                A fresh graduate in Informatics Engineering with a strong interest in web development. Through a six-month MSIB program, I deepened my knowledge of React and basic backend development while enhancing my teamwork skills. The success of our final project, which received recognition as one of the best projects, demonstrates my commitment and capabilities. I am currently focused on developing my backend skills to achieve my long-term goal of becoming a competent, adaptive Fullstack Developer who continuously grows with technological advancements.</p>
            </section>

            {/* 02 Tech Stack */}
            <section id="tech-stack">
              <h2 className="text-xl font-semibold mb-2">Tech Stack</h2>
              <p>
                My primary stack includes <strong>React.js</strong>, <strong>Next.js</strong>, <strong>Tailwind CSS</strong>, and <strong>TypeScript</strong> for front-end development. On the back-end, I'm comfortable working with <strong>Node.js</strong>, <strong>Express</strong>, and <strong>MySQL</strong>, along with RESTful APIs and authentication systems. For version control and deployment, I rely on <strong>Git</strong>, <strong>GitHub</strong>, and <strong>Vercel</strong> or <strong>Netlify</strong>.
              </p>
            </section>

            {/* 03 Certifications */}
            <section id="certifications">
              <h2 className="text-xl font-semibold mb-2">Certifications</h2>
              <p>
                I've completed several certifications to deepen my knowledge and validate my skills, including:
              </p>
              <ul className="list-disc list-inside mt-2 space-y-1">
                <li>React – Complete Guide: Expert React (incl. Hooks, React Router) – Dicoding</li>
                <li>Node.js – Learning to Build Back-End Applications for Beginners – Dicoding</li>
                <li>Junior Web Programmer – BNSP Certification Exam</li>
              </ul>
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}

