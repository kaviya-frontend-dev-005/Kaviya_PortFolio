import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-dvh flex flex-col justify-center pt-32 pr-8 pb-16 pl-8 max-w-275 my-0 mx-auto">
        {/* Available badge */}
        <div className="animate-fade-up inline-flex items-center gap-2 bg-[rgba(74,222,128,0.08)] border border-[rgba(74,222,128,0.2)] rounded-[99px] py-2 px-4 w-fit mb-10">
          <span className="status-dot"></span>
          <span className="text-xs text-green-400 tracking-wider font-mono">
            AVAILABLE FOR NEW OPPORTUNITIES
          </span>
        </div>

        {/* Name */}
        <h1 className="animate-fade-up delay-1 font-[var(--serif)] text-[clamp(3.5rem,9vw,7rem)] font-extrabold tracking-[-0.04em] leading-none mb-5">
          Kaviya{" "}
          <span className="bg-linear-to-br from-[#7c6bff] via-[#a78bfa] to-[#c4b5fd] bg-clip-text text-transparent">
            M.
          </span>
        </h1>

        {/* Title */}
        <p className="animate-fade-up delay-2 font-mono text-[#888] tracking-widest mb-6">
          FRONTEND REACT DEVELOPER · CHENNAI, INDIA
        </p>

        {/* Description */}
        <p className="animate-fade-up delay-3 text-[1.05rem] text-[#aaa] max-w-130 leading-1.5 mb-12">
          I build{" "}
          <span className="text-[#f5f5f5] font-medium">
            fast, production-ready
          </span>{" "}
          web apps with React.js & Next.js. Specialising in component
          architecture, performance optimisation, and shipping features that
          users actually love.
        </p>

        {/* CTA buttons */}
        <div className="animate-fade-up delay-4 flex gap-4 flex-wrap mb-24">
          <Link href="/projects" className="btn-primary">
            View my work →
          </Link>
          <Link href="/contact" className="btn-secondary">
            Get in touch
          </Link>
        </div>

        {/* Stats row */}
        <div className="animate-fade-up delay-5 grid grid-cols-[repeat(auto-fit, minmax(150px, 1fr))] gap-0.5 bg-[rgba(255,255,255,0.06)] rounded-xl hidden border border-[rgba(255,255,255,0.06)]">
          {[
            { num: "2+", label: "Years experience" },
            { num: "2", label: "Products shipped" },
            { num: "20+", label: "Reusable components" },
            { num: "40+", label: "Bugs resolved" },
          ].map((stat) => (
            <div
              key={stat.label}
              style={{
                background: "#111",
                padding: "1.75rem 1.5rem",
                textAlign: "center",
              }}
            >
              <div className="font-serif text-[2.5rem] font-bold text-[#a78bfa] tracking-[-0.03em] leading-1 mb-0.5">
                {stat.num}
              </div>
              <div className="text-xs text-[#666] font-mono tracking-wider uppercase">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* TECH STRIP */}
      <section className="border-t border-b border-[rgba(255,255,255,0.06)] px-8 py-5 flex items-center gap-4 overflow-x-auto whitespace-nowrap">
        <span className="text-[0.7rem] text-[#555] font-mono tracking-[0.1em] shrink-0">
          TECH STACK
        </span>
        <div className="w-px h-4 bg-white/10 shrink-0" />
        {[
          "React.js",
          "Next.js",
          "TypeScript",
          "Redux Toolkit",
          "Tailwind CSS",
          "REST API",
          "JWT Auth",
          "SSR/SSG",
          "Git",
        ].map((tech) => (
          <span key={tech} className="tech-pill">
            {tech}
          </span>
        ))}
      </section>
    </>
  );
}
