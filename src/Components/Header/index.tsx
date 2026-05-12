"use client";

import { Fragment } from "react/jsx-runtime";
import SkillCategory from "./skills";

// ─── Types ────────────────────────────────────────────────────────────────────
type HighlightItem = { icon: string; title: string; sub: string };
type SkillCat = { title: string; tags: string[]; learning?: boolean };
type TimelineItem = {
  role: string;
  date: string;
  company: string;
  muted?: boolean;
  points: string[];
};
type Project = {
  num: string;
  title: string;
  desc: string;
  highlights: string[];
  stack: string[];
};
type ContactLink = { icon: string; label: string; href: string };
type Stat = { num: string; label: string };

// ─── Data ─────────────────────────────────────────────────────────────────────
const stats: Stat[] = [
  { num: "1.5+", label: "Years Experience" },
  { num: "2", label: "Products Shipped" },
  { num: "20+", label: "UI Components Built" },
  { num: "40+", label: "Bugs Resolved" },
];

const highlights: HighlightItem[] = [
  {
    icon: "⚡",
    title: "Performance-Focused",
    sub: "SSR, SSG, lazy loading & bundle optimization",
  },
  {
    icon: "🧩",
    title: "Component Architecture",
    sub: "20+ reusable components across production apps",
  },
  {
    icon: "🔐",
    title: "Auth & API Integration",
    sub: "JWT authentication, 15+ REST API endpoints",
  },
  {
    icon: "📱",
    title: "Responsive Design",
    sub: "Pixel-perfect UI across mobile, tablet & desktop",
  },
];

const skillCats: SkillCat[] = [
  { title: "Languages", tags: ["HTML5", "CSS3", "JavaScript (ES6+)"] },
  {
    title: "Frameworks & Libraries",
    tags: ["React.js", "Next.js", "Redux Toolkit"],
  },
  {
    title: "Next.js Capabilities",
    tags: ["SSR", "SSG", "Dynamic Routing", "Lazy Loading"],
  },
  {
    title: "Core Competencies",
    tags: [
      "REST API Integration",
      "JWT Auth",
      "RBAC",
      "Responsive Design",
      "Performance Optimization",
    ],
  },
  { title: "Tools", tags: ["Git", "GitHub", "VS Code", "Chrome DevTools"] },
  {
    title: "Currently Learning",
    tags: ["TypeScript", "AI-first Workflows"],
    learning: true,
  },
];

const experience: TimelineItem[] = [
  {
    role: "Frontend React Developer",
    date: "Nov 2024 – Present",
    company: "Piccosoft Software Labs India Pvt. Ltd. · Chennai, Tamil Nadu",
    points: [
      "Architected and shipped a production-level B2C e-commerce platform using React.js and Next.js, delivering 100% of planned features on schedule across 6+ months.",
      "Engineered 20+ reusable UI components, reducing feature development time by ~30% across sprints.",
      "Integrated 15+ REST API endpoints with full loading, success, and error state handling; implemented JWT authentication with protected routing.",
      "Applied lazy loading and Next.js SSR/SSG techniques, improving initial page load performance and SEO.",
      "Resolved 40+ cross-device responsiveness bugs for consistent UX across mobile, tablet, and desktop.",
    ],
  },
  {
    role: "Trainee React Developer",
    date: "Aug 2024 – Nov 2024",
    company: "Piccosoft Software Labs India Pvt. Ltd. · Chennai, Tamil Nadu",
    muted: true,
    points: [
      "Built 10+ UI components using React.js, React Hooks, and dynamic routing; integrated REST APIs under senior developer mentorship.",
      "Mastered React.js, Next.js, Redux Toolkit, and component-based architecture within the first 3 months.",
    ],
  },
];

const projects: Project[] = [
  {
    num: "01",
    title: "E-Commerce Platform (B2C)",
    desc: "A full-featured B2C storefront with product listing, detail pages, and role-based UI rendering for 3+ user types.",
    highlights: [
      "JWT-based authentication with protected routing and conditional UI",
      "Next.js SSR & SSG across 10+ high-traffic pages for SEO boost",
      "Redux Toolkit for global state; lazy loading reduced bundle size ~25%",
    ],
    stack: ["React.js", "Next.js", "Redux Toolkit", "REST API", "JWT"],
  },
  {
    num: "02",
    title: "Product Traceability System",
    desc: "A supply chain tracking platform with role-based dashboards for admins, suppliers, and auditors using RBAC.",
    highlights: [
      "Role-based dashboards for 3 user types using RBAC and dynamic routing",
      "Dynamic data tables consuming 10+ REST API endpoints",
      "Fully responsive layouts across all screen sizes and browsers",
    ],
    stack: ["React.js", "Redux Toolkit", "REST API", "RBAC"],
  },
];

const contactLinks: ContactLink[] = [
  {
    icon: "✉️",
    label: "kaviyamarimuthan005@gmail.com",
    href: "mailto:kaviyamarimuthan005@gmail.com",
  },
  { icon: "📞", label: "+91 63690 23323", href: "tel:+916369023323" },
  {
    icon: "💼",
    label: "linkedin.com/in/kaviya005",
    href: "https://linkedin.com/in/kaviya005",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function SectionHeader({ tag, title }: { tag: string; title: string }) {
  return (
    <div className="text-center mb-16">
      <p className="text-xs font-semibold tracking-[0.15em] uppercase text-accent mb-3">
        {tag}
      </p>
      <h2 className="font-playfair text-4xl md:text-5xl font-bold text-[#f0eff4]">
        {title}
      </h2>
      <div className="w-14 h-[3px] bg-accent mx-auto mt-4 rounded-full" />
    </div>
  );
}

function HighlightCard({ icon, title, sub }: HighlightItem) {
  return (
    <div className="bg-card border border-white/[0.07] rounded-xl px-6 py-5 flex items-center gap-4 transition-all duration-200 hover:border-accent hover:translate-x-1.5 cursor-default">
      <div className="w-12 h-12 bg-accent/10 rounded-[10px] flex items-center justify-center text-2xl shrink-0">
        {icon}
      </div>
      <div>
        <strong className="block text-[0.95rem] text-[#f0eff4] mb-0.5">
          {title}
        </strong>
        <span className="text-[0.82rem] text-muted">{sub}</span>
      </div>
    </div>
  );
}

// function SkillCategory({ title, tags, learning }: SkillCat) {
//   return (
//     <div className="bg-card border border-white/[0.07] rounded-2xl p-8 transition-all duration-200 hover:border-accent hover:-translate-y-1 cursor-default">
//       <p className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-5">{title}</p>
//       <div className="flex flex-wrap gap-2.5">
//         {tags.map((tag) =>
//           learning ? (
//             <span
//               key={tag}
//               className="bg-accent2/[0.08] border border-accent2/30 text-accent2 text-[0.82rem] px-3.5 py-1.5 rounded-md font-medium"
//             >
//               {tag}
//             </span>
//           ) : (
//             <span
//               key={tag}
//               className="bg-white/5 border border-white/[0.07] text-[#f0eff4] text-[0.82rem] px-3.5 py-1.5 rounded-md font-medium transition-colors duration-200 hover:bg-accent/10 hover:border-accent/40 cursor-default"
//             >
//               {tag}
//             </span>
//           )
//         )}
//       </div>
//     </div>
//   );
// }

function TimelineEntry({ role, date, company, muted, points }: TimelineItem) {
  return (
    <div className="pl-14 relative mb-12">
      <div
        className={[
          "absolute left-2 top-1.5 w-4 h-4 rounded-full border-[3px] border-bg",
          muted
            ? "bg-muted shadow-[0_0_0_2px_#8888aa]"
            : "bg-accent shadow-[0_0_0_2px_#e8c547]",
        ].join(" ")}
      />
      <div className="flex justify-between items-center flex-wrap gap-2 mb-1">
        <span className="text-[1.1rem] font-semibold text-[#f0eff4]">
          {role}
        </span>
        <span className="text-[0.78rem] text-accent bg-accent/10 px-3 py-1 rounded-full font-semibold">
          {date}
        </span>
      </div>
      <p className="text-[0.88rem] text-muted mb-4">{company}</p>
      <ul className="flex flex-col gap-2.5 list-none p-0 m-0">
        {points.map((pt, i) => (
          <li
            key={i}
            className="text-[0.88rem] text-muted leading-relaxed pl-5 relative"
          >
            <span className="absolute left-0 text-accent text-[0.8rem]">→</span>
            {pt}
          </li>
        ))}
      </ul>
    </div>
  );
}

function ProjectCard({ num, title, desc, highlights, stack }: Project) {
  return (
    <div className="relative bg-card border border-white/[0.07] rounded-2xl p-8 overflow-hidden transition-all duration-200 hover:border-accent/40 hover:-translate-y-1.5 before:content-[''] before:absolute before:inset-x-0 before:top-0 before:h-[3px] before:bg-gradient-to-r before:from-accent before:to-accent2">
      <span className="font-playfair text-[3rem] font-black text-accent/[0.08] absolute top-4 right-6 leading-none select-none">
        {num}
      </span>
      <h3 className="text-[1.15rem] font-bold text-[#f0eff4] mb-3">{title}</h3>
      <p className="text-[0.88rem] text-muted leading-relaxed mb-6">{desc}</p>
      <ul className="mb-6 flex flex-col gap-1.5 list-none p-0 m-0">
        {highlights.map((h, i) => (
          <li
            key={i}
            className="text-[0.82rem] text-muted leading-relaxed pl-4 relative"
          >
            <span className="absolute left-0 top-[3px] text-accent text-[0.6rem]">
              ✦
            </span>
            {h}
          </li>
        ))}
      </ul>
      <div className="flex flex-wrap gap-2">
        {stack.map((s) => (
          <span
            key={s}
            className="bg-accent/[0.08] border border-accent/20 text-accent text-[0.75rem] px-2.5 py-1 rounded-[5px] font-semibold tracking-wide"
          >
            {s}
          </span>
        ))}
      </div>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export default function HeaderComponent() {
  return (
    <div className="min-h-screen overflow-x-hidden">
      {/* Noise overlay — bg-noise utility defined in globals.css */}
      <div className="fixed inset-0 pointer-events-none z-0 opacity-40 bg-noise" />

      {/* ── NAV ─────────────────────────────────────────────────────────────── */}
      <nav className="fixed top-0 inset-x-0 z-50 flex justify-between items-center px-16 py-5 bg-bg/85 backdrop-blur-xl border-b border-white/[0.07]">
        <span className="font-playfair text-[1.4rem] font-bold text-accent tracking-wide">
          KM
        </span>
        <ul className="flex gap-8 list-none m-0 p-0">
          {["about", "skills", "experience", "projects", "contact"].map(
            (item) => (
              <li key={item}>
                <a
                  href={`#${item}`}
                  className="text-muted text-[0.85rem] font-medium tracking-[0.08em] uppercase no-underline transition-colors duration-200 hover:text-accent"
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)}
                </a>
              </li>
            ),
          )}
        </ul>
      </nav>

      {/* ── HERO ────────────────────────────────────────────────────────────── */}
      <section
        id="hero"
        className="relative z-[1] min-h-screen flex items-center px-16 pt-32 pb-16 overflow-hidden"
      >
        {/* Radial glows */}
        <div className="absolute w-[600px] h-[600px] rounded-full -top-24 -right-24 pointer-events-none animate-pulse2 bg-[radial-gradient(circle,rgba(232,197,71,0.12)_0%,transparent_70%)]" />
        <div className="absolute w-[400px] h-[400px] rounded-full bottom-0 left-[10%] pointer-events-none animate-pulse2-reverse bg-[radial-gradient(circle,rgba(240,113,103,0.08)_0%,transparent_70%)]" />

        <div className="max-w-[800px] relative z-10">
          {/* Available badge */}
          <div className="animate-fade-up-0 inline-flex items-center gap-2 bg-accent/10 border border-accent/30 text-accent text-[0.78rem] font-semibold tracking-[0.12em] uppercase px-4 py-1.5 rounded-full mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-blink" />
            Available for new opportunities
          </div>

          <h1 className="animate-fade-up-1 font-playfair font-black leading-[1.05] mb-4 text-[clamp(3rem,7vw,5.5rem)]">
            Kaviya <span className="text-accent">M</span>
          </h1>

          <p className="animate-fade-up-2 text-[1.2rem] text-muted font-normal mb-6">
            Frontend React Developer · Chennai, Tamil Nadu
          </p>

          <p className="animate-fade-up-3 text-base text-muted leading-[1.8] max-w-[600px] mb-10">
            Building fast, clean &amp; production-ready web applications with
            React.js and Next.js. Passionate about component architecture,
            performance optimization, and delivering real user value.
          </p>

          <div className="animate-fade-up-4 flex gap-4 flex-wrap">
            <a
              href="#contact"
              className="bg-accent text-bg px-8 py-3.5 rounded-lg font-bold text-[0.9rem] tracking-wide no-underline shadow-[0_0_30px_rgba(232,197,71,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(232,197,71,0.5)]"
            >
              Get In Touch
            </a>
            <a
              href="#projects"
              className="border border-white/[0.07] text-[#f0eff4] px-8 py-3.5 rounded-lg font-medium text-[0.9rem] no-underline transition-all duration-200 hover:border-accent hover:bg-accent/5"
            >
              View Projects
            </a>
          </div>

          {/* Stats */}
          <div className="animate-fade-up-5 flex gap-12 mt-16 pt-8 border-t border-white/[0.07] flex-wrap">
            {stats.map((s) => (
              <div key={s.label}>
                <div className="font-playfair text-[2.2rem] font-bold text-accent">
                  {s.num}
                </div>
                <div className="text-[0.8rem] text-muted mt-1">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ───────────────────────────────────────────────────────────── */}
      <section id="about" className="relative z-[1] bg-surface px-16 py-28">
        <SectionHeader tag="Who I Am" title="About Me" />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-20 max-w-[1100px] mx-auto items-center">
          <div className="space-y-5">
            <p className="text-muted leading-[1.9] text-base">
              I&apos;m a{" "}
              <strong className="text-[#f0eff4]">
                Frontend React Developer
              </strong>{" "}
              with 1.5+ years of experience building and shipping
              production-ready web applications. I currently work at{" "}
              <strong className="text-[#f0eff4]">
                Piccosoft Software Labs
              </strong>{" "}
              in Chennai, where I&apos;ve delivered real products used by real
              users.
            </p>
            <p className="text-muted leading-[1.9] text-base">
              I love turning complex requirements into clean, reusable UI
              components. My focus is always on{" "}
              <strong className="text-[#f0eff4]">
                performance, scalability, and great user experience
              </strong>{" "}
              — whether that&apos;s optimizing load times with SSR/SSG or
              building consistent designs across all screen sizes.
            </p>
            <p className="text-muted leading-[1.9] text-base">
              I&apos;m currently expanding my skills by learning{" "}
              <strong className="text-[#f0eff4]">TypeScript</strong> and
              I&apos;m eager to explore AI-first development workflows.
            </p>
          </div>
          <div className="flex flex-col gap-4">
            {highlights.map((h) => (
              <HighlightCard key={h.title} {...h} />
            ))}
          </div>
        </div>
      </section>

      {/* ── SKILLS ──────────────────────────────────────────────────────────── */}
      <section id="skills" className="relative z-[1] px-16 py-28">
        <SectionHeader tag="What I Know" title="Technical Skills" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(280px,1fr))] gap-6 max-w-[1100px] mx-auto">
         {skillCats.map((cat) => (
  <SkillCategory key={cat.title} {...cat} />
))}
        </div>
      </section>

      {/* ── EXPERIENCE ──────────────────────────────────────────────────────── */}
      <section
        id="experience"
        className="relative z-[1] bg-surface px-16 py-28"
      >
        <SectionHeader tag="Where I've Worked" title="Experience" />
        {/* before: pseudo draws the vertical timeline line */}
        <div className="relative max-w-[800px] mx-auto before:content-[''] before:absolute before:left-4 before:inset-y-0 before:w-px before:bg-white/[0.07]">
          {experience.map((item) => (
            <TimelineEntry key={item.role} {...item} />
          ))}
        </div>
      </section>

      {/* ── PROJECTS ────────────────────────────────────────────────────────── */}
      <section id="projects" className="relative z-[1] px-16 py-28">
        <SectionHeader tag="What I've Built" title="Projects" />
        <div className="grid grid-cols-[repeat(auto-fit,minmax(340px,1fr))] gap-8 max-w-[1100px] mx-auto">
          {projects.map((p) => (
            <ProjectCard key={p.num} {...p} />
          ))}
        </div>
      </section>

      {/* ── EDUCATION ───────────────────────────────────────────────────────── */}
      <section id="education" className="relative z-[1] bg-surface px-16 py-28">
        <SectionHeader tag="My Background" title="Education" />
        <div className="max-w-[700px] mx-auto bg-card border border-white/[0.07] rounded-2xl px-10 py-10 flex flex-col sm:flex-row items-center gap-8">
          <div className="w-20 h-20 bg-accent/10 rounded-2xl flex items-center justify-center text-5xl shrink-0">
            🎓
          </div>
          <div>
            <p className="text-[1.15rem] font-bold text-[#f0eff4] mb-1.5">
              Master of Mathematics
            </p>
            <p className="text-[0.9rem] text-muted mb-3">
              Khadir Mohideen College, Bharathidhasan University · Thanjavur,
              Tamil Nadu
            </p>
            <span className="text-[0.78rem] font-semibold text-accent bg-accent/10 px-3 py-1 rounded-full">
              Jul 2018 – Mar 2023
            </span>
          </div>
        </div>
      </section>

      {/* ── CONTACT ─────────────────────────────────────────────────────────── */}
      <section id="contact" className="relative z-[1] px-16 py-28">
        <div className="max-w-[700px] mx-auto text-center">
          <SectionHeader tag="Let's Connect" title="Get In Touch" />
          <p className="text-base text-muted mt-4 mb-12 leading-[1.8]">
            I&apos;m open to new opportunities where I can contribute, grow, and
            keep learning. Feel free to reach out — I&apos;d love to connect!
          </p>
          <div className="flex flex-wrap gap-4 justify-center mb-12">
            {contactLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel="noreferrer"
                className="flex items-center gap-2.5 bg-card border border-white/[0.07] text-[#f0eff4] no-underline px-6 py-3.5 rounded-xl text-[0.9rem] font-medium transition-all duration-200 hover:border-accent hover:bg-accent/5 hover:-translate-y-0.5"
              >
                <span className="text-lg">{link.icon}</span>
                {link.label}
              </a>
            ))}
          </div>
          <a
            href="mailto:kaviyamarimuthan005@gmail.com"
            className="bg-accent text-bg px-8 py-3.5 rounded-lg font-bold text-[0.9rem] tracking-wide no-underline shadow-[0_0_30px_rgba(232,197,71,0.3)] transition-all duration-200 hover:-translate-y-0.5 hover:shadow-[0_0_40px_rgba(232,197,71,0.5)]"
          >
            Say Hello 👋
          </a>
        </div>
      </section>

      {/* ── FOOTER ──────────────────────────────────────────────────────────── */}
      <footer className="relative z-[1] text-center py-8 border-t border-white/[0.07] text-muted text-[0.82rem]">
        Designed &amp; Built by{" "}
        <strong className="text-[#f0eff4]">Kaviya M</strong> · Frontend React
        Developer · Chennai © 2025
      </footer>
    </div>
  );
}
