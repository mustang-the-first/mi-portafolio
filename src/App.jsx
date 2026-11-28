// Portfolio de Uriel Cano.
// Reemplaza el contenido del archivo que hoy exporta `Portfolio` (probablemente src/App.jsx).

// Ruta del CV en PDF. Copiá el archivo a la carpeta `public/` con este nombre.
// Si todavía no lo subiste, dejalo en null y el botón "Descargar CV" no se muestra.
const CV_URL = "/CV-Uriel-Cano.pdf";

const nav = [
  { label: "Experiencia", id: "experiencia" },
  { label: "Proyectos", id: "proyectos" },
  { label: "Habilidades", id: "habilidades" },
  { label: "Contacto", id: "contacto" },
];

const experience = [
  {
    role: "Customer Service Agent II",
    company: "Ecolab",
    period: "Feb 2025 – Mar 2026",
    bullets: [
      "Resolví errores de SAP SD de otros usuarios (pedidos, entregas, facturación); procesé pagos en AS400.",
      "Gestioné casos en Salesforce de punta a punta: registro, seguimiento, documentación de la solución y cierre.",
      "Di soporte remoto sobre equipos (dispensadores, lavavajillas), guiando el diagnóstico de fallas.",
      "Escalé a ventas y logística lo que excedía mi alcance, con seguimiento hasta resolverlo.",
      "Atendí más de 80 consultas diarias en inglés y español, por correo, chat y teléfono.",
    ],
  },
  {
    role: "Representante de Atención al Cliente",
    company: "Banco Santander (vía CAT Technologies)",
    period: "Feb 2024 – Dic 2024",
    bullets: [
      "Di soporte de primer nivel sobre home banking, app móvil, blanqueo de claves y activación de tokens.",
      "Guié a usuarios de forma remota, paso a paso, para resolver problemas de acceso y configuración.",
      "Gestioné más de 1.600 consultas mensuales, incluidas alertas de prevención de fraude, con registro y derivación de cada caso.",
    ],
  },
];

const projects = [
  {
    title: "Mini-ERP order-to-cash",
    description:
      "Sistema de gestión con pedidos, remitos, facturas A/B, cobranzas y asientos contables automáticos por partida doble. Más de 1.200 tests y CI. Diseñé el sistema y dirigí su desarrollo con agentes de IA (Claude Code): definí alcance y reglas contables, revisé cada etapa y lo desplegué en producción.",
    tech: ["Python", "FastAPI", "PostgreSQL", "Docker"],
    url: "https://sistema-erp-demo.onrender.com",
    badge: "Demo",
  },
  {
    title: "Tienda online de autopartes",
    description: "Catálogo con carrito de compras y envío de correos transaccionales.",
    tech: ["PostgreSQL (Neon)", "Vercel", "Resend"],
    url: "https://mi-web-pi-two.vercel.app",
  },
  {
    title: "Calculadora matemática",
    description:
      "Derivadas, integrales, límites, series, matrices y gráficas, con resolución paso a paso.",
    tech: ["Python", "SymPy", "Vercel"],
    url: "https://calculadora-definitiva.vercel.app",
  },
  {
    title: "Fallos de Derecho Privado",
    description:
      "65 fallos resumidos para estudiar, con buscador y filtros por rama del derecho y capítulo.",
    tech: ["React", "JavaScript", "Vercel"],
    url: "https://fallos-privado.vercel.app",
  },
];

const skillGroups = [
  {
    title: "Soporte",
    items: ["Mesa de ayuda N1/N2", "Gestión de tickets (Salesforce, Zendesk)", "Diagnóstico remoto", "Escalamiento", "Documentación de soluciones"],
  },
  {
    title: "Sistemas",
    items: ["SAP SD", "AS400", "Microsoft Office", "Excel avanzado (certificado)", "Windows", "Linux"],
  },
  {
    title: "Desarrollo",
    items: ["Python", "SQL (PostgreSQL, MySQL)", "JavaScript", "React", "HTML/CSS", "Git", "Docker"],
  },
  {
    title: "Idiomas",
    items: ["Español (nativo)", "Inglés (bilingüe)"],
  },
];

const education = [
  {
    title: "Contador Público",
    meta: "Universidad de Buenos Aires (UBA), Facultad de Ciencias Económicas · 2026 – presente",
  },
  {
    title: "Técnico en Informática",
    meta: "Instituto Técnico Dr. Emilio Lamarca (secundario) · 2015 – 2021",
  },
  {
    title: "MS Excel – Nivel Avanzado",
    meta: "UTN Facultad Regional Buenos Aires · 2019",
  },
];

const contacts = [
  { label: "Email", value: "canourielalexis@gmail.com", href: "mailto:canourielalexis@gmail.com" },
  { label: "GitHub", value: "github.com/uacano", href: "https://github.com/uacano", external: true },
  { label: "LinkedIn", value: "linkedin.com/in/uriel-cano-45ab82226", href: "https://www.linkedin.com/in/uriel-cano-45ab82226/", external: true },
];

const css = `
  :root {
    color-scheme: light;
    --accent: #2563eb;
    --accent-dark: #1e40af;
    --accent-light: #dbeafe;
    --bg: #faf9f6;
    --text: #222;
    --text-2: #444;
    --body: #555;
    --muted: #666;
    --line: #eaeaea;
    --live: #15803d;
  }

  *, *::before, *::after { margin: 0; padding: 0; box-sizing: border-box; }
  html { scroll-behavior: smooth; }
  @media (prefers-reduced-motion: reduce) { html { scroll-behavior: auto; } }
  html, body, #root { width: 100%; min-height: 100vh; }
  body {
    display: block;
    background: var(--bg);
    color: var(--text);
    font-family: -apple-system, 'Segoe UI', Helvetica, Arial, sans-serif;
    line-height: 1.5;
    text-align: left;
    -webkit-font-smoothing: antialiased;
  }
  #root { max-width: none; margin: 0; padding: 0; text-align: left; }
  a { color: inherit; text-decoration: none; }
  a:focus-visible { outline: 2px solid var(--accent); outline-offset: 3px; border-radius: 4px; }

  /* NAV */
  .nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    display: flex; justify-content: space-between; align-items: center;
    padding: 16px 32px;
    background: rgba(250, 249, 246, 0.92);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid var(--line);
  }
  .nav-name { font-size: 16px; font-weight: 700; }
  .nav-links { display: flex; gap: 28px; }
  .nav-links a { color: var(--muted); font-size: 13px; transition: color 0.2s; }
  .nav-links a:hover { color: var(--accent); }

  /* HERO */
  .hero { max-width: 700px; margin: 0 auto; padding: 120px 32px 80px; }
  .hero-location { font-size: 14px; color: var(--accent); font-weight: 500; margin-bottom: 12px; }
  .hero h1 { font-size: clamp(36px, 6vw, 56px); font-weight: 700; line-height: 1.15; margin-bottom: 8px; }
  .hero-role { font-size: 17px; font-weight: 500; color: var(--text-2); margin-bottom: 20px; }
  .hero-text { font-size: 17px; color: var(--body); line-height: 1.7; max-width: 560px; margin-bottom: 40px; }
  .hero-actions { display: flex; flex-wrap: wrap; gap: 12px; }

  .btn {
    display: inline-block;
    padding: 12px 28px; font-size: 13px; font-weight: 600;
    color: var(--text-2); background: #fff;
    border: 1px solid #d4d4d4; border-radius: 6px;
    transition: border-color 0.2s, opacity 0.2s;
  }
  .btn:hover { border-color: var(--accent); }
  .btn-primary { color: #fff; background: var(--accent); border-color: var(--accent); }
  .btn-primary:hover { opacity: 0.88; }

  /* SECCIONES */
  .section { padding: 80px 32px; border-top: 1px solid var(--line); }
  .section.alt { background: #fff; }
  .container { max-width: 700px; margin: 0 auto; }
  .label {
    font-size: 11px; letter-spacing: 3px; text-transform: uppercase;
    color: var(--accent); font-weight: 600; margin-bottom: 24px;
  }
  .label.spaced { margin-top: 56px; }

  /* EXPERIENCIA */
  .job { padding: 24px 0; border-bottom: 1px solid var(--line); }
  .job:first-of-type { padding-top: 0; }
  .job-head { display: flex; justify-content: space-between; align-items: baseline; flex-wrap: wrap; gap: 4px 12px; margin-bottom: 10px; }
  .job h3 { font-size: 18px; font-weight: 600; color: #333; }
  .job-company { font-weight: 500; color: var(--muted); }
  .job-period { font-size: 12px; color: var(--muted); }
  .job ul { padding-left: 18px; }
  .job li { font-size: 14px; color: var(--body); line-height: 1.65; margin-top: 6px; }

  /* PROYECTOS */
  .project { display: block; padding: 24px 0; border-bottom: 1px solid var(--line); }
  .project-head { display: flex; justify-content: space-between; align-items: center; gap: 12px; margin-bottom: 6px; }
  .project h3 { font-size: 18px; font-weight: 600; color: #333; transition: color 0.2s; }
  .project:hover h3, .project:focus-visible h3 { color: var(--accent); }
  .project-live { display: flex; align-items: center; gap: 5px; flex-shrink: 0; font-size: 11px; color: var(--live); }
  .dot { width: 6px; height: 6px; border-radius: 50%; background: var(--live); }
  .project p { font-size: 14px; color: var(--body); line-height: 1.6; }
  .tags { display: flex; flex-wrap: wrap; gap: 6px; margin-top: 10px; }
  .tag { font-size: 11px; color: var(--body); padding: 3px 8px; background: #efefef; border-radius: 3px; }

  /* HABILIDADES Y FORMACIÓN */
  .skill-group { margin-bottom: 24px; }
  .skill-group h3 { font-size: 13px; font-weight: 600; color: var(--text-2); margin-bottom: 10px; }
  .chips { display: flex; flex-wrap: wrap; gap: 8px; }
  .chip { font-size: 13px; font-weight: 500; color: var(--accent-dark); padding: 6px 14px; background: var(--accent-light); border-radius: 4px; }
  .edu { padding: 14px 0; border-bottom: 1px solid var(--line); }
  .edu-title { font-size: 15px; font-weight: 600; color: #333; }
  .edu-meta { font-size: 13px; color: var(--muted); margin-top: 2px; }

  /* CONTACTO */
  .contact {
    display: flex; justify-content: space-between; align-items: center; gap: 16px;
    padding: 16px 0; border-bottom: 1px solid var(--line);
    transition: border-color 0.2s;
  }
  .contact:hover { border-color: var(--accent); }
  .contact-label { font-size: 13px; color: var(--muted); }
  .contact-value { font-size: 14px; color: var(--text-2); text-align: right; overflow-wrap: anywhere; }

  /* FOOTER */
  .footer {
    display: flex; justify-content: space-between;
    padding: 24px 32px; border-top: 1px solid var(--line);
    font-size: 12px; color: var(--muted);
  }

  /* CELULAR */
  @media (max-width: 520px) {
    .nav { padding: 12px 16px; }
    .nav-name { display: none; }
    .nav-links { width: 100%; justify-content: space-between; gap: 12px; }
    .hero { padding: 96px 20px 56px; }
    .section { padding: 56px 20px; }
    .footer { padding: 20px; }
  }
`;

export default function Portfolio() {
  return (
    <>
      <style>{css}</style>

      <nav className="nav" aria-label="Principal">
        <span className="nav-name">Uriel Cano</span>
        <div className="nav-links">
          {nav.map((n) => (
            <a key={n.id} href={`#${n.id}`}>{n.label}</a>
          ))}
        </div>
      </nav>

      <main>
        {/* HERO */}
        <section className="hero">
          <p className="hero-location">Buenos Aires, Argentina</p>
          <h1>Uriel Cano</h1>
          <p className="hero-role">Mesa de ayuda · Soporte técnico N1/N2 · SAP SD · Técnico en Informática</p>
          <p className="hero-text">
            Técnico en Informática con más de 2 años en soporte a usuarios (banca y B2B):
            diagnóstico y resolución de incidencias en SAP SD, gestión de casos en Salesforce y
            asistencia remota por correo, chat y teléfono. Desarrollo proyectos propios en Python,
            SQL y JavaScript, publicados en la web. Bilingüe español-inglés. Estudiante de
            Contador Público (UBA).
          </p>
          <div className="hero-actions">
            {CV_URL && (
              <a className="btn btn-primary" href={CV_URL} download="CV-Uriel-Cano.pdf">
                Descargar CV
              </a>
            )}
            <a className={CV_URL ? "btn" : "btn btn-primary"} href="#proyectos">Ver proyectos</a>
            <a className="btn" href="#contacto">Contacto</a>
          </div>
        </section>

        {/* EXPERIENCIA */}
        <section id="experiencia" className="section alt">
          <div className="container">
            <h2 className="label">Experiencia</h2>
            {experience.map((job) => (
              <article className="job" key={job.company}>
                <div className="job-head">
                  <h3>
                    {job.role} <span className="job-company">· {job.company}</span>
                  </h3>
                  <span className="job-period">{job.period}</span>
                </div>
                <ul>
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* PROYECTOS */}
        <section id="proyectos" className="section">
          <div className="container">
            <h2 className="label">Proyectos</h2>
            {projects.map((p) => (
              <a
                className="project"
                key={p.title}
                href={p.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="project-head">
                  <h3>
                    {p.title} <span aria-hidden="true">↗</span>
                  </h3>
                  <span className="project-live">
                    <span className="dot" />
                    {p.badge ?? "Live"}
                  </span>
                </div>
                <p>{p.description}</p>
                <div className="tags">
                  {p.tech.map((t) => (
                    <span className="tag" key={t}>{t}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        {/* HABILIDADES Y FORMACIÓN */}
        <section id="habilidades" className="section alt">
          <div className="container">
            <h2 className="label">Habilidades</h2>
            {skillGroups.map((g) => (
              <div className="skill-group" key={g.title}>
                <h3>{g.title}</h3>
                <div className="chips">
                  {g.items.map((s) => (
                    <span className="chip" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}

            <h2 className="label spaced">Formación</h2>
            {education.map((e) => (
              <div className="edu" key={e.title}>
                <p className="edu-title">{e.title}</p>
                <p className="edu-meta">{e.meta}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CONTACTO */}
        <section id="contacto" className="section">
          <div className="container">
            <h2 className="label">Contacto</h2>
            {contacts.map((c) => (
              <a
                className="contact"
                key={c.label}
                href={c.href}
                {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              >
                <span className="contact-label">{c.label}</span>
                <span className="contact-value">{c.value}</span>
              </a>
            ))}
          </div>
        </section>
      </main>

      <footer className="footer">
        <span>Uriel Cano</span>
        <span>2026</span>
      </footer>
    </>
  );
}
