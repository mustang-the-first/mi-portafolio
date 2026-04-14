import { useState } from "react";
 
const accent = "#2563eb";
const accentLight = "#dbeafe";
 
const projects = [
  {
    title: "Calculadora Web",
    description: "Calculadora con historial de operaciones, validación de inputs y manejo de errores.",
    tech: ["React", "JavaScript"],
    url: "https://mi-calculadora-rho.vercel.app/",
    live: true,
  },
  {
    title: "En desarrollo",
    description: "Próximo proyecto.",
    tech: [],
    url: null,
    live: false,
  },
];
 
const skills = ["JavaScript", "React", "HTML/CSS", "Python", "Git", "SAP SD", "Node.js"];
 
const contacts = [
  { label: "Email", value: "canourielalexis@gmail.com", href: "mailto:canourielalexis@gmail.com" },
  { label: "GitHub", value: "github.com/mustang-the-first", href: "https://github.com/mustang-the-first" },
  { label: "LinkedIn", value: "linkedin.com/uriel-cano", href: "https://www.linkedin.com/in/uriel-cano-45ab82226/" },
];
 
export default function Portfolio() {
  const [hovered, setHovered] = useState(null);
 
  const label = {
    fontSize: 11,
    letterSpacing: 3,
    textTransform: "uppercase",
    color: accent,
    marginBottom: 24,
    fontWeight: 600,
    textAlign: "left",
  };
 
  return (
    <>
      <style>{`
        *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
        html, body, #root { width: 100%; min-height: 100vh; margin: 0; padding: 0; }
        body { background: #faf9f6; }
        a { text-decoration: none; }
      `}</style>
 
      <div style={{
        width: "100%",
        minHeight: "100vh",
        background: "#faf9f6",
        color: "#222",
        fontFamily: "-apple-system, 'Segoe UI', Helvetica, Arial, sans-serif",
        textAlign: "left",
      }}>
 
        {/* NAV */}
        <nav style={{
          position: "fixed", top: 0, left: 0, right: 0, zIndex: 100,
          display: "flex", justifyContent: "space-between", alignItems: "center",
          padding: "16px 32px",
          background: "rgba(250,249,246,0.92)",
          backdropFilter: "blur(10px)",
          borderBottom: "1px solid #eee",
        }}>
          <span style={{ fontSize: 16, fontWeight: 700 }}>Uriel Cano</span>
          <div style={{ display: "flex", gap: 28 }}>
            {["Sobre mí", "Proyectos", "Contacto"].map((s) => (
              <a key={s} href={`#${s.toLowerCase().replace(" ", "-")}`} style={{
                color: "#888", fontSize: 13, textDecoration: "none", transition: "color 0.2s",
              }}
              onMouseEnter={(e) => e.target.style.color = accent}
              onMouseLeave={(e) => e.target.style.color = "#888"}
              >{s}</a>
            ))}
          </div>
        </nav>
 
        {/* HERO */}
        <section style={{
          display: "flex", flexDirection: "column", justifyContent: "center",
          padding: "120px 32px 80px",
          maxWidth: 700,
          margin: "0 auto",
          textAlign: "left",
        }}>
          <p style={{ fontSize: 14, color: accent, marginBottom: 12, fontWeight: 500 }}>Buenos Aires, Argentina</p>
          <h1 style={{
            fontSize: "clamp(36px, 6vw, 56px)", fontWeight: 700,
            margin: "0 0 20px 0", lineHeight: 1.15, color: "#222",
          }}>
            Uriel Cano
          </h1>
          <p style={{ fontSize: 17, color: "#555", lineHeight: 1.7, margin: "0 0 40px 0", maxWidth: 500 }}>
            Técnico en informática. Experiencia en soporte y atención al cliente.
            Actualmente aprendiendo desarrollo web con React y JavaScript.
          </p>
          <div style={{ display: "flex", gap: 16 }}>
            <a href="#proyectos" style={{
              padding: "12px 28px", fontSize: 13, fontWeight: 600,
              color: "#fff", background: accent, borderRadius: 6,
              textDecoration: "none", transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => e.target.style.opacity = 0.85}
            onMouseLeave={(e) => e.target.style.opacity = 1}
            >Ver proyectos</a>
            <a href="#contacto" style={{
              padding: "12px 28px", fontSize: 13, fontWeight: 600,
              color: "#555", background: "#fff", borderRadius: 6,
              border: "1px solid #ddd", textDecoration: "none", transition: "border-color 0.2s",
            }}
            onMouseEnter={(e) => e.target.style.borderColor = accent}
            onMouseLeave={(e) => e.target.style.borderColor = "#ddd"}
            >Contacto</a>
          </div>
        </section>
 
        {/* SOBRE MÍ */}
        <section id="sobre-mí" style={{ padding: "80px 32px", background: "#fff", borderTop: "1px solid #eee", borderBottom: "1px solid #eee" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <p style={label}>Sobre mí</p>
            <p style={{ fontSize: 16, color: "#444", lineHeight: 1.8, margin: "0 0 32px 0", textAlign: "left" }}>
              Egresado del Instituto Técnico Dr. Emilio Lamarca como Técnico en Informática.
              Trabajé en soporte técnico, atención al cliente y manejo de sistemas con SAP SD.
              Hoy estoy enfocado en desarrollo frontend, armando proyectos propios para aprender haciendo.
            </p>
            <p style={label}>Tecnologías</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {skills.map((s) => (
                <span key={s} style={{
                  fontSize: 13, color: accent, padding: "6px 14px",
                  background: accentLight, borderRadius: 4, fontWeight: 500,
                }}>{s}</span>
              ))}
            </div>
          </div>
        </section>
 
        {/* PROYECTOS */}
        <section id="proyectos" style={{ padding: "80px 32px" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <p style={label}>Proyectos</p>
            {projects.map((p, i) => (
              <div
                key={i}
                onMouseEnter={() => p.url && setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                onClick={() => p.url && window.open(p.url, "_blank")}
                style={{
                  padding: "24px 0",
                  borderBottom: "1px solid #eee",
                  cursor: p.url ? "pointer" : "default",
                  transition: "opacity 0.3s",
                  opacity: hovered !== null && hovered !== i ? 0.3 : 1,
                }}
              >
                <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 600, margin: 0, color: hovered === i ? accent : "#333", transition: "color 0.2s" }}>
                    {p.title}
                  </h3>
                  {p.live && (
                    <span style={{ fontSize: 11, color: "#16a34a", display: "flex", alignItems: "center", gap: 5 }}>
                      <span style={{ width: 6, height: 6, borderRadius: "50%", background: "#16a34a" }} />
                      Live
                    </span>
                  )}
                </div>
                <p style={{ fontSize: 14, color: "#888", margin: 0, lineHeight: 1.6 }}>{p.description}</p>
                {p.tech.length > 0 && (
                  <div style={{ display: "flex", gap: 6, marginTop: 10 }}>
                    {p.tech.map((t) => (
                      <span key={t} style={{ fontSize: 11, color: "#999", padding: "3px 8px", background: "#f3f3f3", borderRadius: 3 }}>{t}</span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
 
        {/* CONTACTO */}
        <section id="contacto" style={{ padding: "80px 32px", background: "#fff", borderTop: "1px solid #eee" }}>
          <div style={{ maxWidth: 700, margin: "0 auto" }}>
            <p style={label}>Contacto</p>
            {contacts.map((c) => (
              <a key={c.label} href={c.href} target="_blank" rel="noopener noreferrer" style={{
                display: "flex", justifyContent: "space-between", alignItems: "center",
                padding: "16px 0", borderBottom: "1px solid #eee",
                textDecoration: "none", transition: "border-color 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = accent}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = "#eee"}
              >
                <span style={{ fontSize: 13, color: "#999" }}>{c.label}</span>
                <span style={{ fontSize: 14, color: "#444" }}>{c.value}</span>
              </a>
            ))}
          </div>
        </section>
 
        {/* FOOTER */}
        <footer style={{
          padding: "24px 32px",
          display: "flex", justifyContent: "space-between",
          borderTop: "1px solid #eee",
          fontSize: 12, color: "#ccc",
        }}>
          <span>Uriel Cano</span>
          <span>2026</span>
        </footer>
      </div>
    </>
  );
}
 