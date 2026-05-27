"use client"
import ScrollReveal from "../ScrollReveal";

const categories = [
  {
    label: "Core Languages",
    icon: "{ }",
    color: "cyan",
    tags: ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  },
  {
    label: "Frameworks & Libraries",
    icon: "⚛",
    color: "purple",
    tags: ["React.js", "Next.js", "Redux Toolkit", "React Hooks"],
  },
  {
    label: "Styling",
    icon: "✦",
    color: "cyan",
    tags: ["Tailwind CSS", "CSS Modules", "Responsive Design"],
  },
  {
    label: "API & Auth",
    icon: "🔐",
    color: "purple",
    tags: ["REST API Integration", "JWT Authentication", "Role-Based Access Control"],
  },
  {
    label: "Performance & SEO",
    icon: "⚡",
    color: "cyan",
    tags: ["SSR", "SSG", "Lazy Loading", "Code Splitting", "Bundle Optimisation"],
  },
  {
    label: "Testing & Quality",
    icon: "✓",
    color: "purple",
    tags: ["Jest", "Chrome DevTools", "Cross-Browser Debugging", "Code Review"],
  },
  {
    label: "Tools & Workflow",
    icon: "🛠",
    color: "cyan",
    tags: ["Git", "GitHub", "VS Code", "Postman", "Figma"],
  },
];

const learning = ["Node.js", "Docker", "PostgreSQL", "System Design", "CI/CD Pipelines"];

const stats = [
  { num: "2+",  label: "Years experience"    },
  { num: "20+", label: "Reusable components" },
  { num: "15+", label: "API endpoints built" },
  { num: "57%", label: "Load-time reduction" },
];

export default function SkillsPage() {
  return (
    <main className="page-wrapper">

      {/* ── Header ── */}
      <ScrollReveal>
        <span className="section-label mb-4">What I bring</span>
        <h1 className="page-title mt-3">
          Technical <span className="grad-text">Skills</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: 520, lineHeight: 1.8 }}>
          Two years of hands-on production experience across the full React/Next.js stack — from pixel-perfect UIs to auth systems and performance tuning.
        </p>
      </ScrollReveal>

      <hr className="glow-divider" />

      {/* ── Stats row ── */}
      <ScrollReveal>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: "1px", background: "rgba(0,212,255,0.1)", borderRadius: 16, overflow: "hidden", marginBottom: "3.5rem" }}>
          {stats.map((s) => (
            <div key={s.label} style={{ background: "var(--card)", padding: "1.75rem 1rem", textAlign: "center", backdropFilter: "blur(12px)", transition: "background 0.2s" }}
              onMouseEnter={e => (e.currentTarget as HTMLElement).style.background = "var(--card-hover)"}
              onMouseLeave={e => (e.currentTarget as HTMLElement).style.background = "var(--card)"}
            >
              <div style={{ fontFamily: "var(--font-display)", fontSize: "clamp(1.8rem,3vw,2.4rem)", fontWeight: 800, background: "linear-gradient(135deg,#00D4FF,#7C6BFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", lineHeight: 1 }}>{s.num}</div>
              <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.4rem" }}>{s.label}</div>
            </div>
          ))}
        </div>
      </ScrollReveal>

      {/* ── Skill categories ── */}
      <div style={{ display: "grid", gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))", gap: "1.25rem" }}>
        {categories.map((cat, i) => (
          <ScrollReveal key={cat.label} delay={i * 70} variant="scale">
            <div className="glass-card" style={{ padding: "1.75rem", height: "100%", position: "relative", overflow: "hidden" }}>
              {/* Subtle glow accent */}
              <div style={{
                position: "absolute", top: -30, right: -30, width: 80, height: 80, borderRadius: "50%",
                background: cat.color === "cyan" ? "rgba(0,212,255,0.07)" : "rgba(124,107,255,0.07)",
                filter: "blur(20px)", pointerEvents: "none",
              }} />

              {/* Icon + label */}
              <div style={{ display: "flex", alignItems: "center", gap: "0.7rem", marginBottom: "1.25rem" }}>
                <span style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.95rem",
                  color: cat.color === "cyan" ? "var(--cyan)" : "var(--purple)",
                }}>{cat.icon}</span>
                <p style={{
                  fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 500,
                  letterSpacing: "0.14em", textTransform: "uppercase",
                  color: cat.color === "cyan" ? "var(--cyan)" : "var(--purple)",
                }}>{cat.label}</p>
              </div>

              {/* Tags */}
              <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                {cat.tags.map((tag) => (
                  <span key={tag} className="skill-tag">{tag}</span>
                ))}
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <hr className="glow-divider" />

      {/* ── Currently learning ── */}
      <ScrollReveal>
        <div className="glass-card grad-border" style={{ padding: "2rem 2.25rem" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--purple)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "1.25rem" }}>
            Currently exploring
          </p>
          <div style={{ display: "flex", flexWrap: "wrap", gap: "0.6rem" }}>
            {learning.map((item) => (
              <span key={item} className="skill-tag-learning">{item}</span>
            ))}
          </div>
          <p style={{ color: "var(--text-muted)", fontSize: "0.82rem", marginTop: "1rem", lineHeight: 1.7 }}>
            Expanding beyond frontend to become a more well-rounded engineer — backend fundamentals, DevOps basics, and scalable architecture patterns.
          </p>
        </div>
      </ScrollReveal>

    </main>
  );
}