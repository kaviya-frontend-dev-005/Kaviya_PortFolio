"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/about",      label: "About"      },
  { href: "/skills",     label: "Skills"     },
  { href: "/experience", label: "Experience" },
  { href: "/projects",   label: "Projects"   },
  { href: "/contact",    label: "Contact"    },
];

export default function Header() {
  const pathname = usePathname();

  return (
    <header style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
      display: "flex", justifyContent: "space-between", alignItems: "center",
      padding: "0 2rem", height: "64px",
      background: "rgba(15,15,26,0.85)",
      backdropFilter: "blur(12px)",
      borderBottom: "1px solid rgba(0,212,255,0.15)",
    }}>
      {/* Logo */}
      <Link href="/" style={{
        fontFamily: "'Syne', sans-serif",
        fontWeight: 800,
        fontSize: "1.1rem",
        color: "#E8E8F0",
        textDecoration: "none",
        letterSpacing: "-0.02em",
        display: "flex",
        alignItems: "center",
        gap: "8px",
      }}>
        <span style={{
          background: "linear-gradient(135deg, #00D4FF, #7C6BFF)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}>KM</span>
        <span style={{ color: "rgba(232,232,240,0.3)", fontWeight: 400, fontSize: "0.82rem", fontFamily: "'JetBrains Mono', monospace" }}>/ portfolio</span>
      </Link>

      {/* Nav */}
      <nav style={{ display: "flex", alignItems: "center", gap: "0.15rem" }}>
        {links.map((link) => {
          const isActive = pathname === link.href;
          return (
            <Link key={link.href} href={link.href} style={{
              fontSize: "0.8rem",
              fontWeight: isActive ? 500 : 400,
              color: isActive ? "#00D4FF" : "#8892A4",
              textDecoration: "none",
              padding: "0.4rem 0.85rem",
              borderRadius: "7px",
              background: isActive ? "rgba(0,212,255,0.08)" : "transparent",
              border: isActive ? "1px solid rgba(0,212,255,0.25)" : "1px solid transparent",
              transition: "all 0.2s",
              letterSpacing: "0.02em",
            }}
            onMouseEnter={e => {
              if (!isActive) {
                (e.currentTarget as HTMLElement).style.color = "#E8E8F0";
                (e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.04)";
              }
            }}
            onMouseLeave={e => {
              if (!isActive) {
                (e.currentTarget as HTMLElement).style.color = "#8892A4";
                (e.currentTarget as HTMLElement).style.background = "transparent";
              }
            }}>
              {link.label}
            </Link>
          );
        })}

        <a href="mailto:kaviyamarimuthan005@gmail.com" style={{
          marginLeft: "0.6rem",
          fontSize: "0.78rem",
          fontWeight: 600,
          color: "#fff",
          background: "linear-gradient(135deg, #00D4FF, #7C6BFF)",
          padding: "0.42rem 1.1rem",
          borderRadius: "7px",
          textDecoration: "none",
          letterSpacing: "0.04em",
          transition: "opacity 0.2s, transform 0.2s, box-shadow 0.2s",
          boxShadow: "0 4px 16px rgba(0,212,255,0.2)",
        }}
        onMouseEnter={e => {
          (e.currentTarget as HTMLElement).style.opacity = "0.85";
          (e.currentTarget as HTMLElement).style.transform = "translateY(-1px)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 6px 22px rgba(0,212,255,0.35)";
        }}
        onMouseLeave={e => {
          (e.currentTarget as HTMLElement).style.opacity = "1";
          (e.currentTarget as HTMLElement).style.transform = "translateY(0)";
          (e.currentTarget as HTMLElement).style.boxShadow = "0 4px 16px rgba(0,212,255,0.2)";
        }}>
          Hire me
        </a>
      </nav>
    </header>
  );
}