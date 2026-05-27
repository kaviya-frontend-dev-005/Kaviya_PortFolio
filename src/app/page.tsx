import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "8rem 2rem 4rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}>
        {/* Available badge */}
        <div className="animate-fade-up" style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "8px",
          background: "rgba(74,222,128,0.08)",
          border: "1px solid rgba(74,222,128,0.2)",
          borderRadius: "99px",
          padding: "0.4rem 1rem",
          width: "fit-content",
          marginBottom: "2.5rem",
        }}>
          <span className="status-dot"></span>
          <span style={{ fontSize: "0.75rem", color: "#4ade80", fontFamily: "var(--mono)", letterSpacing: "0.1em" }}>
            AVAILABLE FOR NEW OPPORTUNITIES
          </span>
        </div>
        {/* Name */}
        <h1 className="animate-fade-up delay-1" style={{
          fontFamily: "var(--serif)",
          fontSize: "clamp(3.5rem, 9vw, 7rem)",
          fontWeight: 800,
          letterSpacing: "-0.04em",
          lineHeight: 1,
          marginBottom: "1.25rem",
        }}>
          Kaviya{" "}
          <span style={{
            background: "linear-gradient(135deg, #7c6bff 0%, #a78bfa 50%, #c4b5fd 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}>M.</span>
        </h1>

        {/* Title */}
        <p className="animate-fade-up delay-2" style={{
          fontFamily: "var(--mono)",
          fontSize: "clamp(0.85rem, 2vw, 1.1rem)",
          color: "#888",
          letterSpacing: "0.1em",
          marginBottom: "1.5rem",
        }}>
          FRONTEND REACT DEVELOPER · CHENNAI, INDIA
        </p>

        {/* Description */}
        <p className="animate-fade-up delay-3" style={{
          fontSize: "1.05rem",
          color: "#aaa",
          maxWidth: "520px",
          lineHeight: 1.8,
          marginBottom: "3rem",
        }}>
          I build <span style={{ color: "#f5f5f5", fontWeight: 500 }}>fast, production-ready</span> web apps
          with React.js & Next.js. Specialising in component architecture, performance optimisation, and
          shipping features that users actually love.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-4" style={{ display: "flex", gap: "1rem", flexWrap: "wrap", marginBottom: "6rem" }}>
          <Link href="/projects" className="btn-primary">
            View my work →
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get in touch
          </Link>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-5" style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
          gap: "1px",
          background: "rgba(255,255,255,0.06)",
          borderRadius: "12px",
          overflow: "hidden",
          border: "1px solid rgba(255,255,255,0.06)",
        }}>
          {[
            { num: "2+", label: "Years experience" },
            { num: "2", label: "Products shipped" },
            { num: "20+", label: "Reusable components" },
            { num: "40+", label: "Bugs resolved" },
          ].map((stat) => (
            <div key={stat.label} style={{
              background: "#111",
              padding: "1.75rem 1.5rem",
              textAlign: "center",
            }}>
              <div style={{
                fontFamily: "var(--serif)",
                fontSize: "2.5rem",
                fontWeight: 700,
                color: "#a78bfa",
                letterSpacing: "-0.03em",
                lineHeight: 1,
                marginBottom: "0.5rem",
              }}>{stat.num}</div>
              <div style={{
                fontSize: "0.75rem",
                color: "#666",
                fontFamily: "var(--mono)",
                letterSpacing: "0.05em",
                textTransform: "uppercase",
              }}>{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STRIP */}
      <section style={{
        borderTop: "1px solid rgba(255,255,255,0.06)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
        padding: "1.25rem 2rem",
        display: "flex",
        alignItems: "center",
        gap: "1rem",
        overflowX: "auto",
        whiteSpace: "nowrap",
      }}>
        <span style={{ fontSize: "0.7rem", color: "#555", fontFamily: "var(--mono)", letterSpacing: "0.1em", flexShrink: 0 }}>
          TECH STACK
        </span>
        <div style={{ width: "1px", height: "16px", background: "rgba(255,255,255,0.1)", flexShrink: 0 }} />
        {["React.js", "Next.js", "TypeScript", "Redux Toolkit", "Tailwind CSS", "REST API", "JWT Auth", "SSR/SSG", "Git"].map((tech) => (
          <span key={tech} className="tech-pill">{tech}</span>
        ))}
      </section>
    </>
  );
}