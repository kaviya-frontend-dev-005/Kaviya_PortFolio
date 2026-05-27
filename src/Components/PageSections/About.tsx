import ScrollReveal from "../ScrollReveal";

const facts = [
  {
    icon: "🎓",
    label: "Education",
    value: "M.Sc Mathematics — Bharathidhasan University",
  },
  { icon: "📍", label: "Location", value: "Chennai, Tamil Nadu, India" },
  {
    icon: "💼",
    label: "Current",
    value: "Frontend Dev @ Piccosoft Software Labs",
  },
  {
    icon: "📅",
    label: "Experience",
    value: "~2 years in production React/Next.js",
  },
];

const traits = [
  {
    title: "Clean Architecture",
    desc: "I believe great code reads like prose — structured, predictable, and easy for the next developer to extend.",
  },
  {
    title: "Performance First",
    desc: "57% load-time reduction is not a happy accident — it's the result of deliberate SSR/SSG, lazy loading, and bundle analysis.",
  },
  {
    title: "Component Craft",
    desc: "20+ reusable components built with composability in mind, cutting feature delivery time by ~30% across the team.",
  },
  {
    title: "Continuous Learning",
    desc: "Currently diving deeper into Node.js, Docker, and system design to become a more complete engineer.",
  },
];

export default function AboutPage() {
  return (
    <main className="page-wrapper">
      {/* ── Header ── */}
      <ScrollReveal>
        <span className="section-label mb-4">Who I am</span>
        <h1 className="page-title mt-3">
          About <span className="grad-text">Me</span>
        </h1>
      </ScrollReveal>

      <hr className="glow-divider" />

      {/* ── Two-col intro ── */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "3rem",
          alignItems: "start",
        }}
      >
        {/* Left — bio */}
        <ScrollReveal variant="left">
          <div
            style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}
          >
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                fontSize: "1.02rem",
              }}
            >
              I&apos;m a{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                Frontend React Developer
              </span>{" "}
              with around 2 years of hands-on experience building
              production-grade web applications. I joined Piccosoft Software
              Labs as a trainee, learned fast, and now lead frontend delivery on
              real B2C platforms used by thousands of people every month.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                fontSize: "1.02rem",
              }}
            >
              My background in{" "}
              <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
                Mathematics
              </span>{" "}
              gives me a natural affinity for logic and problem-solving —
              qualities that translate directly into systematic debugging,
              performance optimisation, and writing code that scales.
            </p>
            <p
              style={{
                color: "var(--text-secondary)",
                lineHeight: 1.8,
                fontSize: "1.02rem",
              }}
            >
              I thrive in teams that care about craft — where component
              architecture is discussed, code reviews are taken seriously, and
              shipping something slow is considered a bug.
            </p>

            {/* CTA row */}
            <div
              style={{
                display: "flex",
                gap: "1rem",
                flexWrap: "wrap",
                marginTop: "0.5rem",
              }}
            >
              <a href="/contact" className="btn-primary">
                Let&apos;s work together →
              </a>
              <a
                href="/KAVIYA_FE_Resume.pdf"
                download
                className="btn-secondary"
              >
                Download CV
              </a>
            </div>
          </div>
        </ScrollReveal>

        {/* Right — quick facts */}
        <ScrollReveal delay={150}>
          <div
            className="glass-card grad-border"
            style={{
              padding: "2rem",
              display: "flex",
              flexDirection: "column",
              gap: "1.4rem",
            }}
          >
            <p
              style={{
                fontFamily: "var(--font-mono)",
                fontSize: "0.72rem",
                color: "var(--cyan)",
                letterSpacing: "0.14em",
                textTransform: "uppercase",
              }}
            >
              Quick facts
            </p>
            {facts.map((f) => (
              <div
                key={f.label}
                style={{
                  display: "flex",
                  gap: "1rem",
                  alignItems: "flex-start",
                }}
              >
                <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>
                  {f.icon}
                </span>
                <div>
                  <p
                    style={{
                      fontSize: "0.72rem",
                      color: "var(--text-muted)",
                      fontFamily: "var(--font-mono)",
                      letterSpacing: "0.1em",
                      textTransform: "uppercase",
                      marginBottom: "2px",
                    }}
                  >
                    {f.label}
                  </p>
                  <p
                    style={{
                      color: "var(--text-primary)",
                      fontSize: "0.92rem",
                      fontWeight: 500,
                    }}
                  >
                    {f.value}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </ScrollReveal>
      </div>

      <hr className="glow-divider" />

      {/* ── Work philosophy ── */}
      <ScrollReveal>
        <span className="section-label mb-4">How I work</span>
        <h2
          style={{
            fontFamily: "var(--font-display)",
            fontSize: "clamp(1.6rem,3vw,2.2rem)",
            fontWeight: 700,
            marginTop: "0.75rem",
            marginBottom: "2.5rem",
          }}
        >
          Values &amp; <span className="grad-text">Philosophy</span>
        </h2>
      </ScrollReveal>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
          gap: "1.25rem",
        }}
      >
        {traits.map((t, i) => (
          <ScrollReveal key={t.title} delay={i * 100} variant="scale">
            <div
              className="glass-card"
              style={{ padding: "1.75rem", height: "100%" }}
            >
              <div
                style={{
                  width: 36,
                  height: 36,
                  borderRadius: 8,
                  background:
                    "linear-gradient(135deg,rgba(0,212,255,0.15),rgba(124,107,255,0.15))",
                  border: "1px solid rgba(0,212,255,0.2)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginBottom: "1rem",
                  fontSize: "1rem",
                }}
              >
                {["🏗️", "⚡", "🧩", "📚"][i]}
              </div>
              <h3
                style={{
                  fontFamily: "var(--font-display)",
                  fontWeight: 700,
                  fontSize: "1.05rem",
                  color: "var(--text-primary)",
                  marginBottom: "0.6rem",
                }}
              >
                {t.title}
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  lineHeight: 1.75,
                }}
              >
                {t.desc}
              </p>
            </div>
          </ScrollReveal>
        ))}
      </div>

      <hr className="glow-divider" />

      {/* ── Beyond code ── */}
      <ScrollReveal>
        <div
          className="glass-card grad-border"
          style={{ padding: "2.5rem", textAlign: "center" }}
        >
          <p
            style={{
              fontFamily: "var(--font-mono)",
              fontSize: "0.7rem",
              color: "var(--cyan)",
              letterSpacing: "0.16em",
              textTransform: "uppercase",
              marginBottom: "1.25rem",
            }}
          >
            Recently
          </p>
          <p
            style={{
              color: "var(--text-secondary)",
              fontSize: "1.05rem",
              lineHeight: 1.85,
              maxWidth: 640,
              margin: "0 auto",
            }}
          >
            Worked full-time at Piccosoft, contributed to a{" "}
            <span style={{ color: "var(--text-primary)", fontWeight: 500 }}>
              Food Traceability Platform
            </span>{" "}
            — built role-based dashboards for admins, suppliers, and auditors,
            and gained hands-on experience with{" "}
            <span style={{ color: "var(--cyan)", fontWeight: 500 }}>
              Next.js App Router
            </span>
            ,{" "}
            <span style={{ color: "var(--purple)", fontWeight: 500 }}>
              TypeScript patterns
            </span>
            , and scalable state management.
          </p>
        </div>
      </ScrollReveal>
    </main>
  );
}
