import ScrollReveal from "../ScrollReveal";

const projects = [
  {
    index: "01",
    title: "B2C E-Commerce Platform",
    subtitle: "Seller & Store Panel",
    period: "Nov 2024 – Apr 2025",
    status: "Shipped",
    statusColor: "#4ade80",
    description:
      "A full-featured responsive Seller and Store Panel supporting 3+ user roles with role-based dashboards and real-time sales data, serving 5,000+ monthly active users.",
    highlights: [
      "Reduced page load time by 57% via Next.js SSR/SSG, lazy loading, and code splitting across 10+ high-traffic pages.",
      "Cut bundle size by 25% through strategic code splitting and tree-shaking.",
      "Built role-based dashboards with real-time sales analytics for sellers, store admins, and super-admins.",
      "Integrated 15+ REST API endpoints with JWT auth and granular RBAC for secure route management.",
    ],
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST API", "JWT", "SSR/SSG"],
    metrics: [
      { value: "57%", label: "Load time ↓" },
      { value: "25%", label: "Bundle size ↓" },
      { value: "5K+", label: "Monthly users" },
      { value: "3+",  label: "User roles"    },
    ],
  },
  {
    index: "02",
    title: "Food Traceability Platform",
    subtitle: "Supply Chain Dashboard",
    period: "May 2025 – Present",
    status: "In Progress",
    statusColor: "#00D4FF",
    description:
      "An enterprise platform enabling transparent food supply-chain tracking for admins, suppliers, and auditors — replacing manual workflows with a unified data-driven dashboard.",
    highlights: [
      "Developed role-based access dashboards for admins, suppliers, and auditors with complex data tables consuming 10+ REST API endpoints.",
      "Built reusable filter components and Redux Toolkit global state, eliminating manual tracking workflows for the operations team.",
      "Designed a scalable component architecture enabling rapid feature addition without regressions.",
      "Implemented advanced filtering, sorting, and pagination patterns for high-volume supply chain records.",
    ],
    stack: ["Next.js", "React.js", "TypeScript", "Tailwind CSS", "Redux Toolkit", "REST API"],
    metrics: [
      { value: "10+", label: "API endpoints" },
      { value: "3",   label: "User roles"    },
      { value: "0",   label: "Manual tracking" },
      { value: "∞",   label: "Scalability"   },
    ],
  },
];

export default function ProjectsPage() {
  return (
    <main className="page-wrapper">

      {/* ── Header ── */}
      <ScrollReveal>
        <span className="section-label mb-4">What I&apos;ve built</span>
        <h1 className="page-title mt-3">
          Featured <span className="grad-text">Projects</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: 540, lineHeight: 1.8 }}>
          Production applications shipped to real users — built with a focus on performance, scalability, and developer experience.
        </p>
      </ScrollReveal>

      <hr className="glow-divider" />

      {/* ── Projects ── */}
      <div style={{ display: "flex", flexDirection: "column", gap: "2.5rem" }}>
        {projects.map((p, i) => (
          <ScrollReveal key={p.title} delay={i * 100}>
            <div className="glass-card" style={{ padding: 0, overflow: "hidden", position: "relative" }}>

              {/* Top gradient bar */}
              <div style={{ height: 3, background: "linear-gradient(90deg,#00D4FF,#7C6BFF,#C084FC)" }} />

              <div style={{ padding: "2.25rem" }}>

                {/* Header row */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", flexWrap: "wrap", gap: "1rem", marginBottom: "1.5rem" }}>
                  <div>
                    <div style={{ display: "flex", alignItems: "center", gap: "1rem", flexWrap: "wrap" }}>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.7rem", fontWeight: 500,
                        color: "var(--text-muted)", letterSpacing: "0.12em",
                      }}>{p.index}</span>
                      <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "clamp(1.3rem,2.5vw,1.65rem)", color: "var(--text-primary)" }}>{p.title}</h2>
                      <span style={{
                        fontFamily: "var(--font-mono)", fontSize: "0.65rem",
                        color: p.statusColor,
                        background: `${p.statusColor}18`,
                        border: `1px solid ${p.statusColor}35`,
                        borderRadius: 6, padding: "0.2rem 0.6rem",
                        letterSpacing: "0.1em", textTransform: "uppercase",
                      }}>{p.status}</span>
                    </div>
                    <p style={{ color: "var(--cyan)", fontSize: "0.88rem", fontWeight: 500, marginTop: "0.3rem" }}>{p.subtitle}</p>
                  </div>
                  <span style={{ fontFamily: "var(--font-mono)", fontSize: "0.75rem", color: "var(--text-muted)" }}>{p.period}</span>
                </div>

                {/* Description */}
                <p style={{ color: "var(--text-secondary)", lineHeight: 1.8, fontSize: "0.97rem", marginBottom: "1.5rem" }}>{p.description}</p>

                {/* Metrics */}
                <div style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: "1px", background: "rgba(0,212,255,0.08)", borderRadius: 12, overflow: "hidden", marginBottom: "1.75rem" }}>
                  {p.metrics.map((m) => (
                    <div key={m.label} style={{ background: "rgba(255,255,255,0.02)", padding: "1rem 0.75rem", textAlign: "center" }}>
                      <div style={{ fontFamily: "var(--font-display)", fontWeight: 800, fontSize: "1.4rem", background: "linear-gradient(135deg,#00D4FF,#7C6BFF)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>{m.value}</div>
                      <div style={{ fontFamily: "var(--font-mono)", fontSize: "0.62rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase", marginTop: "0.2rem" }}>{m.label}</div>
                    </div>
                  ))}
                </div>

                {/* Highlights */}
                <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.55rem", marginBottom: "1.75rem" }}>
                  {p.highlights.map((h) => (
                    <li key={h} style={{ display: "flex", gap: "0.75rem", alignItems: "flex-start" }}>
                      <span style={{ color: "var(--cyan)", marginTop: "0.38rem", flexShrink: 0, fontSize: "0.5rem" }}>◆</span>
                      <span style={{ color: "var(--text-secondary)", fontSize: "0.9rem", lineHeight: 1.75 }}>{h}</span>
                    </li>
                  ))}
                </ul>

                {/* Stack + CTA */}
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", flexWrap: "wrap", gap: "1rem", paddingTop: "1.25rem", borderTop: "1px solid rgba(255,255,255,0.05)" }}>
                  <div style={{ display: "flex", flexWrap: "wrap", gap: "0.45rem" }}>
                    {p.stack.map((s) => (
                      <span key={s} className="tech-pill">{s}</span>
                    ))}
                  </div>
                  <a href="/contact" className="btn-secondary" style={{ flexShrink: 0 }}>
                    Ask about this →
                  </a>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <hr className="glow-divider" />

      {/* ── CTA ── */}
      <ScrollReveal>
        <div className="glass-card grad-border" style={{ padding: "2.5rem", textAlign: "center" }}>
          <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.16em", textTransform: "uppercase", marginBottom: "1rem" }}>Want to collaborate?</p>
          <h2 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "clamp(1.4rem,3vw,2rem)", color: "var(--text-primary)", marginBottom: "0.75rem" }}>
            Let&apos;s build something <span className="grad-text">great together</span>
          </h2>
          <p style={{ color: "var(--text-secondary)", fontSize: "0.95rem", marginBottom: "1.75rem", maxWidth: 460, margin: "0 auto 1.75rem" }}>
            I&apos;m open to full-time roles, freelance contracts, and exciting side projects. If you have an idea, I&apos;d love to hear it.
          </p>
          <a href="/contact" className="btn-primary">Get in touch →</a>
        </div>
      </ScrollReveal>

    </main>
  );
}