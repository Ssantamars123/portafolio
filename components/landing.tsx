"use client";

import type { MouseEvent, ReactNode } from "react";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  Github,
  Linkedin,
  Mail,
  Sparkles,
  GraduationCap,
  Briefcase,
  Trophy,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const PROFILE = {
  name: "Samuel Santamaria",
  brand: "SamuelSantamaria.dev",
  title: "Full-Stack Developer • CS @ EAFIT",
  location: "Medellín, Colombia",
  email: "ssantamars@eafit.edu.co",
  github: "https://github.com/REPLACE_ME",
  linkedin: "https://www.linkedin.com/in/REPLACE_ME",
  // Si quieres botón de CV: mete tu PDF en /public y pon el path aquí (ej: "/SamuelSantamaria-Resume.pdf")
  resumeHref: "",
};

const projects = [
  {
    title: "NexClass — Full-Stack Django Web App",
    desc: "Marketplace educativo: i18n, blog para profesores (role-based), theme switcher, reviews + ranking.",
    tags: ["Django", "Python", "JavaScript", "i18n"],
    href: "#", // demo (Vercel / Render) cuando lo tengas
    github: "#", // repo
    impact: ["i18n in-app", "Teacher blog (RBAC)", "Reviews + leaderboard"],
  },
  {
    title: "Zoho CRM ↔ Siigo ERP Sync (Python + APIs)",
    desc: "Integración y automatización: sincronización de datos clave y flujos de outreach basados en triggers.",
    tags: ["Python", "APIs", "Automation"],
    href: "#",
    github: "#",
    impact: ["1,500+ registros", "5 procesos automatizados", "Workflows de emails"],
  },
  {
    title: "Portfolio (Next.js) — UI Premium",
    desc: "Este sitio: glass + neon, motion, componentes reutilizables, performance y SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    href: "#",
    github: "#",
    impact: ["UI system", "Motion", "Rápido + SEO"],
  },
];

const experience = [
  {
    company: "Dekotendencias S.A.S",
    role: "Summer Intern",
    date: "Feb 2025 – Jul 2025",
    bullets: [
      "Implementé Zoho CRM para fortalecer gestión de clientes y control comercial.",
      "Integré Zoho CRM con Siigo ERP usando Python + APIs para sincronizar datos clave.",
      "Migré y validé 1,500+ registros de clientes, mejorando visibilidad y calidad de datos.",
      "Automaticé 5 procesos core, reduciendo tareas manuales y mejorando eficiencia.",
      "Automaticé outreach con email workflows basados en triggers.",
    ],
  },
  {
    company: "Genius Sports",
    role: "Sports Data Operator",
    date: "May 2025 – Present",
    bullets: [
      "Capturo y valido tracking y play-by-play en vivo (basketball/football).",
      "Verifico datos de jugadores/equipos para asegurar feeds y reportes confiables.",
      "Monitoreo eventos end-to-end, detecto anomalías y escalo bajo presión.",
      "Mantengo alta precisión y detalle en escenarios de tiempo real.",
    ],
  },
];

const education = [
  {
    school: "EAFIT University",
    program: "BSc in Computer Science (Expected Jun 2027)",
    extra: "GPA: 4.1/5.0",
  },
];

const tech = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "shadcn/ui",
  "Angular",
  "Node.js",
  "Django",
  "Python",
  "SQL",
  "MongoDB",
  "Docker",
  "Git/GitHub",
];

function SpotlightCard({ children }: { children: ReactNode }) {
  return (
    <div className="group relative rounded-2xl p-[1px]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/35 via-cyan-400/30 to-emerald-400/30 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -inset-24 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.18),transparent_35%)]" />
        </div>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

function GlowBg() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <motion.div
        className="absolute left-[-18%] top-[-25%] h-[520px] w-[520px] rounded-full blur-3xl opacity-45
                   bg-gradient-to-tr from-fuchsia-500/70 via-indigo-500/65 to-cyan-400/65"
        animate={{ x: [0, 50, 0], y: [0, 35, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-18%] bottom-[-25%] h-[560px] w-[560px] rounded-full blur-3xl opacity-45
                   bg-gradient-to-tr from-emerald-400/55 via-sky-400/60 to-violet-500/60"
        animate={{ x: [0, -55, 0], y: [0, -30, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75))]" />
    </div>
  );
}

export default function Landing() {
  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    const target = e.target as HTMLElement;
    const card = target.closest(".group") as HTMLElement | null;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-50">
      <GlowBg />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/45 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>{PROFILE.brand}</span>
          </div>

          <nav className="hidden gap-6 text-sm text-neutral-200 md:flex">
            <a className="hover:text-white" href="#projects">
              Proyectos
            </a>
            <a className="hover:text-white" href="#experience">
              Experiencia
            </a>
            <a className="hover:text-white" href="#about">
              Sobre mí
            </a>
            <a className="hover:text-white" href="#contact">
              Contacto
            </a>
          </nav>

          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Hablemos</a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5" onMouseMove={onMove}>
        {/* HERO */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            {PROFILE.location}
            <Badge className="bg-white/10 text-neutral-100 hover:bg-white/15" variant="secondary">
              {PROFILE.title}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
          >
            {PROFILE.name} —{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              construyo productos
            </span>{" "}
            con UI premium y performance.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-base text-neutral-200 md:text-lg"
          >
            Experiencia automatizando procesos (CRM/ERP) y trabajando con datos en tiempo real.
            Stack: Next.js/React/Angular, Node/Django, SQL/MongoDB, Docker.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            <Button asChild className="rounded-2xl">
              <a href="#projects" className="inline-flex items-center gap-2">
                Ver proyectos <ArrowUpRight className="h-4 w-4" />
              </a>
            </Button>

            <Button asChild variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/15">
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>

            {PROFILE.resumeHref ? (
              <Button asChild variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/15">
                <a href={PROFILE.resumeHref} target="_blank" rel="noreferrer">
                  Ver CV
                </a>
              </Button>
            ) : null}
          </motion.div>

          {/* TECH MARQUEE */}
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
            <div className="flex gap-4 py-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <motion.div
                className="flex shrink-0 items-center gap-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[...tech, ...tech].map((t, i) => (
                  <span
                    key={`${t}-${i}`}
                    className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>

          {/* STATS */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { k: "Impacto", v: "1,500+ registros migrados • 5 procesos automatizados", icon: Trophy },
              { k: "Proyecto", v: "NexClass: i18n + blog + reviews/ranking", icon: Sparkles },
              { k: "Focus", v: "UI, performance y buenas prácticas", icon: Trophy },
            ].map((x) => (
              <SpotlightCard key={x.k}>
                <Card className="border-0 bg-transparent">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <x.icon className="h-4 w-4 text-neutral-200" />
                      <CardTitle className="text-base">{x.k}</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-200">{x.v}</CardDescription>
                  </CardHeader>
                </Card>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* PROJECTS */}
        <section id="projects" className="py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Proyectos</h2>
              <p className="mt-2 text-neutral-200">Seleccionados para mostrar impacto y stack real.</p>
            </div>
            <Badge className="hidden bg-white/10 text-neutral-100 md:inline-flex" variant="secondary">
              Featured
            </Badge>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {projects.map((p, idx) => (
              <motion.div
                key={p.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="h-full"
              >
                <SpotlightCard>
                  <Card className="h-full border-0 bg-transparent">
                    <CardHeader>
                      <CardTitle className="text-base">{p.title}</CardTitle>
                      <CardDescription className="text-neutral-200">{p.desc}</CardDescription>
                    </CardHeader>
                    <CardContent className="flex h-full flex-col gap-4">
                      <div className="flex flex-wrap gap-2">
                        {p.tags.map((t) => (
                          <Badge
                            key={t}
                            variant="secondary"
                            className="bg-white/10 text-neutral-100 hover:bg-white/15"
                          >
                            {t}
                          </Badge>
                        ))}
                      </div>

                      <ul className="space-y-1 text-sm text-neutral-200">
                        {p.impact.map((it) => (
                          <li key={it} className="flex items-start gap-2">
                            <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/40" />
                            <span>{it}</span>
                          </li>
                        ))}
                      </ul>

                      <div className="mt-auto flex gap-2">
                        <Button
                          size="sm"
                          variant="secondary"
                          className="bg-white/10 text-white hover:bg-white/15"
                          asChild
                        >
                          <a href={p.github} className="inline-flex items-center gap-2">
                            <Github className="h-4 w-4" /> GitHub
                          </a>
                        </Button>

                        <Button size="sm" className="rounded-xl" asChild>
                          <a href={p.href} className="inline-flex items-center gap-2">
                            Demo <ArrowUpRight className="h-4 w-4" />
                          </a>
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* EXPERIENCE */}
        <section id="experience" className="py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Experiencia</h2>
              <p className="mt-2 text-neutral-200">Trabajo real: automatización + data en tiempo real.</p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {experience.map((e) => (
              <SpotlightCard key={`${e.company}-${e.role}`}>
                <Card className="border-0 bg-transparent">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4 text-neutral-200" />
                      <CardTitle className="text-base">{e.company}</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-200">
                      {e.role} • {e.date}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 text-sm text-neutral-200">
                      {e.bullets.map((b) => (
                        <li key={b} className="flex items-start gap-2">
                          <span className="mt-[6px] h-1.5 w-1.5 rounded-full bg-white/40" />
                          <span>{b}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </SpotlightCard>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* ABOUT / EDUCATION */}
        <section id="about" className="py-14">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
            <div className="md:col-span-1">
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Sobre mí</h2>
              <p className="mt-3 text-neutral-200">
                Me gusta construir productos end-to-end: UI sólida, backend limpio, bases de datos bien modeladas
                y despliegue ordenado.
              </p>
            </div>

            <div className="md:col-span-2 grid grid-cols-1 gap-4 md:grid-cols-2">
              <SpotlightCard>
                <Card className="border-0 bg-transparent">
                  <CardHeader>
                    <div className="flex items-center gap-2">
                      <GraduationCap className="h-4 w-4 text-neutral-200" />
                      <CardTitle className="text-base">Educación</CardTitle>
                    </div>
                    <CardDescription className="text-neutral-200">
                      {education[0].school} — {education[0].program}
                      <span className="block">{education[0].extra}</span>
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SpotlightCard>

              <SpotlightCard>
                <Card className="border-0 bg-transparent">
                  <CardHeader>
                    <CardTitle className="text-base">Skills</CardTitle>
                    <CardDescription className="text-neutral-200">
                      Python, JavaScript, SQL • React/Next/Angular • Django/Node • MongoDB • Linux • Docker • Git
                    </CardDescription>
                  </CardHeader>
                </Card>
              </SpotlightCard>
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* CONTACT */}
        <section id="contact" className="py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contacto</h2>
          <p className="mt-3 text-neutral-200">Email + LinkedIn + GitHub, y listo para aplicar.</p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-2xl" asChild>
              <a href={`mailto:${PROFILE.email}`} className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> {PROFILE.email}
              </a>
            </Button>

            <Button variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/15" asChild>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>

            <Button variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/15" asChild>
              <a href={PROFILE.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </section>

        <footer className="pb-10 pt-2 text-sm text-neutral-400">
          © {new Date().getFullYear()} {PROFILE.name} — Next.js + Tailwind
        </footer>
      </main>
    </div>
  );
}