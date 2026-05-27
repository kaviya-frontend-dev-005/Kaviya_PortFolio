"use client";
import { useState, FormEvent } from "react";
import ScrollReveal from "../ScrollReveal";

const contactLinks = [
  {
    icon: "✉",
    label: "Email",
    value: "kaviyamarimuthan005@gmail.com",
    href: "mailto:kaviyamarimuthan005@gmail.com",
    color: "#00D4FF",
  },
  {
    icon: "💼",
    label: "LinkedIn",
    value: "inkedin.com/in/kaviya005",
    href: "https://www.linkedin.com/in/kaviya005/",
    color: "#7C6BFF",
  },
  {
    icon: "🐙",
    label: "GitHub",
    value: "github.com/kaviya-frontend-dev-005",
    href: "https://github.com/kaviya-frontend-dev-005",
    color: "#C084FC",
  },
  {
    icon: "📍",
    label: "Location",
    value: "Chennai, Tamil Nadu, India",
    href: null,
    color: "#00D4FF",
  },
];

type FormData = { name: string; email: string; subject: string; message: string };
type Status = "idle" | "sending" | "sent" | "error";

export default function ContactPage() {
  const [form, setForm] = useState<FormData>({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState<Status>("idle");
  const [focused, setFocused] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    // Replace with your form submission logic (e.g. Resend, EmailJS, Formspree)
    await new Promise((r) => setTimeout(r, 1400));
    setStatus("sent");
  };

  const inputStyle = (name: string): React.CSSProperties => ({
    width: "100%",
    background: focused === name ? "rgba(0,212,255,0.05)" : "rgba(255,255,255,0.03)",
    border: `1px solid ${focused === name ? "rgba(0,212,255,0.4)" : "rgba(255,255,255,0.08)"}`,
    borderRadius: 10,
    padding: "0.85rem 1.1rem",
    color: "var(--text-primary)",
    fontSize: "0.92rem",
    fontFamily: "var(--font-body)",
    outline: "none",
    transition: "background 0.2s, border-color 0.2s, box-shadow 0.2s",
    boxShadow: focused === name ? "0 0 0 3px rgba(0,212,255,0.08)" : "none",
  });

  const labelStyle: React.CSSProperties = {
    display: "block",
    fontFamily: "var(--font-mono)",
    fontSize: "0.7rem",
    fontWeight: 500,
    letterSpacing: "0.12em",
    textTransform: "uppercase",
    color: "var(--text-muted)",
    marginBottom: "0.5rem",
  };

  return (
    <main className="page-wrapper">

      {/* ── Header ── */}
      <ScrollReveal>
        <span className="section-label mb-4">Let&apos;s connect</span>
        <h1 className="page-title mt-3">
          Get in <span className="grad-text">Touch</span>
        </h1>
        <p style={{ color: "var(--text-secondary)", marginTop: "1rem", maxWidth: 520, lineHeight: 1.8 }}>
          Whether it&apos;s a full-time role, a contract, or just a chat about React — I&apos;m always happy to connect. I respond within 24 hours.
        </p>
      </ScrollReveal>

      <hr className="glow-divider" />

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1.6fr", gap: "3rem", alignItems: "start" }}>

        {/* ── Left — contact info ── */}
        <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>
          <ScrollReveal>
            <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.7rem", color: "var(--cyan)", letterSpacing: "0.14em", textTransform: "uppercase", marginBottom: "0.5rem" }}>Reach me at</p>
          </ScrollReveal>

          {contactLinks.map((link, i) => (
            <ScrollReveal key={link.label} delay={i * 80} variant="left">
              {link.href ? (
                <a
                  href={link.href}
                  target={link.href.startsWith("http") ? "_blank" : undefined}
                  rel="noreferrer"
                  style={{ textDecoration: "none" }}
                >
                  <div className="glass-card" style={{ padding: "1.1rem 1.3rem", display: "flex", gap: "1rem", alignItems: "center", cursor: "pointer" }}>
                    <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{link.icon}</span>
                    <div>
                      <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{link.label}</p>
                      <p style={{ color: link.color, fontSize: "0.85rem", fontWeight: 500, marginTop: "2px", wordBreak: "break-all" }}>{link.value}</p>
                    </div>
                  </div>
                </a>
              ) : (
                <div className="glass-card" style={{ padding: "1.1rem 1.3rem", display: "flex", gap: "1rem", alignItems: "center" }}>
                  <span style={{ fontSize: "1.2rem", flexShrink: 0 }}>{link.icon}</span>
                  <div>
                    <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", letterSpacing: "0.1em", textTransform: "uppercase" }}>{link.label}</p>
                    <p style={{ color: link.color, fontSize: "0.85rem", fontWeight: 500, marginTop: "2px" }}>{link.value}</p>
                  </div>
                </div>
              )}
            </ScrollReveal>
          ))}

          {/* Availability badge */}
          <ScrollReveal delay={400}>
            <div style={{
              background: "rgba(74,222,128,0.06)",
              border: "1px solid rgba(74,222,128,0.2)",
              borderRadius: 12,
              padding: "1.1rem 1.3rem",
              display: "flex",
              gap: "0.75rem",
              alignItems: "center",
              marginTop: "0.25rem",
            }}>
              <span className="status-dot" />
              <div>
                <p style={{ color: "#4ade80", fontSize: "0.85rem", fontWeight: 500 }}>Available for opportunities</p>
                <p style={{ color: "var(--text-muted)", fontSize: "0.78rem", marginTop: "2px" }}>Open to full-time & freelance roles</p>
              </div>
            </div>
          </ScrollReveal>
        </div>

        {/* ── Right — form ── */}
        <ScrollReveal delay={120}>
          <div className="glass-card grad-border" style={{ padding: "2.25rem" }}>

            {status === "sent" ? (
              <div style={{ textAlign: "center", padding: "3rem 1rem" }}>
                <div style={{ fontSize: "3rem", marginBottom: "1rem" }}>✅</div>
                <h3 style={{ fontFamily: "var(--font-display)", fontWeight: 700, fontSize: "1.3rem", color: "var(--text-primary)", marginBottom: "0.6rem" }}>Message sent!</h3>
                <p style={{ color: "var(--text-secondary)", fontSize: "0.92rem" }}>Thanks for reaching out. I&apos;ll get back to you within 24 hours.</p>
                <button
                  onClick={() => { setStatus("idle"); setForm({ name: "", email: "", subject: "", message: "" }); }}
                  className="btn-secondary"
                  style={{ marginTop: "1.75rem" }}
                >
                  Send another
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
                <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "1rem" }}>
                  <div>
                    <label style={labelStyle} htmlFor="name">Name</label>
                    <input
                      id="name" name="name" type="text" required
                      placeholder="Your name"
                      value={form.name} onChange={handleChange}
                      onFocus={() => setFocused("name")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("name")}
                    />
                  </div>
                  <div>
                    <label style={labelStyle} htmlFor="email">Email</label>
                    <input
                      id="email" name="email" type="email" required
                      placeholder="your@email.com"
                      value={form.email} onChange={handleChange}
                      onFocus={() => setFocused("email")}
                      onBlur={() => setFocused(null)}
                      style={inputStyle("email")}
                    />
                  </div>
                </div>

                <div>
                  <label style={labelStyle} htmlFor="subject">Subject</label>
                  <input
                    id="subject" name="subject" type="text" required
                    placeholder="Frontend role / Freelance / Just saying hi"
                    value={form.subject} onChange={handleChange}
                    onFocus={() => setFocused("subject")}
                    onBlur={() => setFocused(null)}
                    style={inputStyle("subject")}
                  />
                </div>

                <div>
                  <label style={labelStyle} htmlFor="message">Message</label>
                  <textarea
                    id="message" name="message" required rows={5}
                    placeholder="Tell me about the opportunity or project..."
                    value={form.message} onChange={handleChange}
                    onFocus={() => setFocused("message")}
                    onBlur={() => setFocused(null)}
                    style={{ ...inputStyle("message"), resize: "vertical", minHeight: 130 }}
                  />
                </div>

                <button
                  type="submit"
                  disabled={status === "sending"}
                  className="btn-primary"
                  style={{ alignSelf: "flex-start", opacity: status === "sending" ? 0.7 : 1, cursor: status === "sending" ? "not-allowed" : "pointer" }}
                >
                  {status === "sending" ? "Sending…" : "Send message →"}
                </button>

                {/* <p style={{ fontFamily: "var(--font-mono)", fontSize: "0.68rem", color: "var(--text-muted)", lineHeight: 1.6 }}>
                  Note: Wire up the form handler to your preferred service (Formspree, EmailJS, Resend, etc.) in the <code style={{ color: "var(--cyan)" }}>handleSubmit</code> function.
                </p> */}
              </form>
            )}
          </div>
        </ScrollReveal>
      </div>

    </main>
  );
}