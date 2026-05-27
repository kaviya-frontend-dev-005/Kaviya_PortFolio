import ScrollReveal from "../ScrollReveal";

const experiences = [
  {
    role: "Frontend React Developer",
    company: "Piccosoft Software Labs India Pvt. Ltd.",
    period: "Nov 2024 – Present",
    location: "Chennai, Tamil Nadu",
    type: "Full-time",
    current: true,
    highlights: [
      "Drove frontend delivery of a B2C e-commerce platform using React.js and Next.js, completing all planned features on schedule.",
      "Extracted 20+ reusable React components into a shared library, reducing feature delivery time by ~30% and improving codebase consistency.",
      "Integrated 15+ REST API endpoints; implemented JWT authentication and role-based access control for secure route management.",
      "Applied Next.js SSR/SSG and lazy loading, reducing page load time by 57% and boosting SEO rankings significantly.",
      "Identified and resolved 40+ layout defects across mobile, tablet, and desktop viewports using Chrome DevTools.",
    ],
    stack: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "JWT", "REST API"],
  },
  {
    role: "Trainee React Developer",
    company: "Piccosoft Software Labs India Pvt. Ltd.",
    period: "Aug 2024 – Nov 2024",
    location: "Chennai, Tamil Nadu",
    type: "Internship",
    current: false,
    highlights: [
      "Trained in React.js and Next.js through hands-on development tasks, building component-based UIs with React Hooks and client-side routing.",
      "Practiced REST API integration, state management with Redux Toolkit, and responsive layout development using Tailwind CSS.",
      "Contributed to UI component reviews and implemented feedback-driven improvements to code quality.",
    ],
    stack: ["React.js", "Next.js", "Redux Toolkit", "Tailwind CSS", "JavaScript"],
  },
  {
    role: "Java Full Stack Developer Training",
    company: "QSpiders",
    period: "Jul 2023 – Apr 2024",
    location: "Chennai, Tamil Nadu",
    type: "Training",
    current: false,
    highlights: [
      "Completed intensive full-stack training covering Core Java, JDBC, Spring Boot, and Hibernate on the backend.",
      "Built foundational frontend skills in HTML, CSS, JavaScript, and React.js.",
      "Practised SQL database design and query optimisation.",
    ],
    stack: ["Java", "Spring Boot", "Hibernate", "HTML", "CSS", "JavaScript", "React.js", "SQL"],
  },
];

const education = {
  degree: "Master of Mathematics",
  institution: "Khadir Mohideen College, Bharathidhasan University",
  location: "Thanjavur, Tamil Nadu",
  period: "Jun 2021 – May 2023",
};

export default function ExperiencePage() {
  return (
    <main className="page-wrapper">

      {/* ── Header ── */}
      <ScrollReveal>
        <span className="section-label mb-4">My journey</span>
        <h1 className="page-title mt-3">
          Work <span className="grad-text">Experience</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: 520, lineHeight: 1.8 }}>
          From trainee to frontend lead in under a year — here&apos;s the path that got me here.
        </p>
      </ScrollReveal>

      <hr className="glow-divider" />

      {/* ── Timeline ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: 0 }}>
        {experiences.map((exp, i) => (
          <ScrollReveal key={exp.role + exp.period} delay={i * 120}>
            <div style={{ display: "flex", gap: "1.75rem", paddingBottom: i < experiences.length - 1 ? "2.5rem" : 0 }}>

              {/* Timeline spine */}
              <div style={{ display: "flex", flexDirection: "column", alignItems: "center", flexShrink: 0, width: 12 }}>
                <div className="timeline-dot" />
                {i < experiences.length - 1 && <div className="timeline-line" style={{ marginTop: 6 }} />}
              </div>

              {/* Card */}
              <div className="glass-card" style={{ flex: 1, padding: "1.75rem 2rem", marginBottom: i < experiences.length - 1 ? 0 : 0 }}>

                {/* Top row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "0.75rem", marginBottom: "0.6rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", flexWrap: "wrap" }}>
                      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.15rem", color: "var(--text-primary)" }}>{exp.role}</h2>
                      {exp.current && (
                        <span style={{
                          fontFamily: "var(--font-mono)", fontSize: "0.65rem", fontWeight: 500,
                          color: "#4ade80", background: "rgba(74,222,128,0.1)",
                          border: "1px solid rgba(74,222,128,0.25)", borderRadius: 6,
                          padding: "0.2rem 0.6rem", letterSpacing: "0.1em", textTransform: "uppercase",
                        }}>Current</span>
                      )}
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                        color: "var(--purple)", background: "rgba(124,107,255,0.1)",
                        border: "1px solid rgba(124,107,255,0.2)", borderRadius: 6,
                        padding: "0.2rem 0.6rem", letterSpacing: "0.1em", textTransform: "uppercase",
                      }}>{exp.type}</span>
                    </div>
                    <p style={{ color: "var(--cyan)", fontWeight: 500, fontSize: "0.9rem", marginTop: "0.25rem" }}>{exp.company}</p>
                  </div>
                  <div style={{ textAlign: "right" }}>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.78rem", color: "var(--text-secondary)" }}>{exp.period}</p>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.72rem", color: "var(--text-muted)", marginTop: "2px" }}>{exp.location}</p>
                  </div>
                </div>

                {/* Highlights */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem", margin: "1.25rem 0" }}>
                  {exp.highlights.map((h) => (
                    <li key={h} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--cyan)", marginTop: "0.35rem", flexShrink: 0, fontSize: "0.55rem" }}>◆</span>
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.75 }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack pills */}
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem", marginTop: "1rem", paddingTop: "1rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  {exp.stack.map((s) => (
                    <span key={s} className="tech-pill">{s}</span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <hr className="glow-divider" />

      {/* ── Education ── */}
      <ScrollReveal>
        <span className="section-label mb-4">Education</span>
      </ScrollReveal>

      <ScrollReveal delay={80}>
        <div className="glass-card grad-border" style={{ padding: "2rem", marginTop: "1.5rem", display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem" }}>
          <div>
            <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.35rem" }}>
              <span style={{ fontSize: "1.4rem" }}>🎓</span>
              <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.1rem", color: "var(--text-primary)" }}>{education.degree}</h3>
            </div>
            <p style={{ color: "var(--cyan)", fontSize: "0.9rem", fontWeight: 500 }}>{education.institution}</p>
            <p style={{ color: "var(--text-muted)", fontFamily: "var(--font-mono)", fontSize: "0.75rem", marginTop: "0.2rem" }}>{education.location}</p>
          </div>
          <div style={{ textAlign: "right" }}>
            <span style={{
              fontFamily: "var(--font-mono)", fontSize: "0.78rem",
              color: "var(--text-secondary)", background: "rgba(255,255,255,0.04)",
              border: "1px solid rgba(255,255,255,0.08)", borderRadius: 8,
              padding: "0.4rem 0.9rem",
            }}>{education.period}</span>
          </div>
        </div>
      </ScrollReveal>

    </main>
  );
}