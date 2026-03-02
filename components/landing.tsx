"use client";

import {
  useEffect,
  useMemo,
  useRef,
  useState,
  type CSSProperties,
  type MouseEvent,
  type ReactNode,
} from "react";
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
  Command,
  Copy,
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
  resumeHref: "", // "/SamuelSantamaria-Resume.pdf" si pones el pdf en /public
};

const projects = [
  {
    title: "NexClass — Full-Stack Django Web App",
    desc: "Marketplace educativo: i18n, blog para profesores (role-based), theme switcher, reviews + ranking.",
    tags: ["Django", "Python", "JavaScript", "i18n"],
    href: "#",
    github: "#",
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

const FEATURED = {
  title: "NexClass — Full-Stack Django Web App",
  subtitle: "Mini case study",
  desc: "Marketplace educativo con i18n, blog para profesores (RBAC), theme switcher y sistema de reviews/ranking. Enfocado en UX, arquitectura limpia y features reales.",
  tags: ["Django", "Python", "JavaScript", "i18n", "RBAC"],
  metrics: [
    { k: "Scope", v: "Auth, perfiles, búsqueda, favoritos, blog" },
    { k: "Quality", v: "i18n + themes + UI consistente" },
    { k: "Outcome", v: "Base lista para escalar features" },
  ],
  github: "#",
  demo: "#",
};

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

type Action =
  | { id: string; title: string; subtitle?: string; kind: "section"; href: string; icon?: ReactNode }
  | { id: string; title: string; subtitle?: string; kind: "external"; href: string; icon?: ReactNode }
  | { id: string; title: string; subtitle?: string; kind: "mailto"; icon?: ReactNode }
  | { id: string; title: string; subtitle?: string; kind: "copyEmail"; icon?: ReactNode };

function SpotlightCard({ children }: { children: ReactNode }) {
  return (
    <div className="group relative rounded-2xl p-[1px]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/45 via-cyan-400/40 to-emerald-400/40 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative overflow-hidden rounded-2xl border border-white/15 bg-white/8 backdrop-blur">
        <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
          <div className="absolute -inset-24 bg-[radial-gradient(circle_at_var(--x)_var(--y),rgba(255,255,255,0.22),transparent_38%)]" />
        </div>
        <div className="relative">{children}</div>
      </div>
    </div>
  );
}

function DynamicBg() {
  const particles = useMemo(
    () =>
      Array.from({ length: 22 }, (_, i) => ({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        dur: 6 + Math.random() * 10,
        delay: Math.random() * 3,
        opacity: 0.15 + Math.random() * 0.35,
      })),
    []
  );

  const meteors = useMemo(
    () =>
      Array.from({ length: 6 }, (_, i) => ({
        id: i,
        x: 10 + Math.random() * 80,
        y: Math.random() * 55,
        dur: 2.6 + Math.random() * 2.8,
        delay: Math.random() * 2.5,
      })),
    []
  );

  return (
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 bg-[#0B1020]" />

      <div className="absolute inset-0 opacity-100 [background:radial-gradient(circle_at_15%_20%,rgba(56,189,248,0.22),transparent_45%),radial-gradient(circle_at_85%_25%,rgba(168,85,247,0.18),transparent_50%),radial-gradient(circle_at_50%_90%,rgba(244,63,94,0.14),transparent_55%)]" />

      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "radial-gradient(circle at var(--mx) var(--my), rgba(255,255,255,0.16), transparent 40%)",
        }}
      />

      <motion.div
        className="absolute left-[-14%] top-[-20%] h-[560px] w-[560px] rounded-full blur-3xl opacity-80 mix-blend-screen
                   bg-gradient-to-tr from-cyan-400/90 via-indigo-500/85 to-fuchsia-500/80"
        animate={{ x: [0, 70, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-14%] bottom-[-22%] h-[620px] w-[620px] rounded-full blur-3xl opacity-80 mix-blend-screen
                   bg-gradient-to-tr from-emerald-400/80 via-sky-400/85 to-violet-500/80"
        animate={{ x: [0, -80, 0], y: [0, -50, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] top-[32%] h-[460px] w-[460px] rounded-full blur-3xl opacity-60 mix-blend-screen
                   bg-gradient-to-tr from-pink-400/70 via-purple-400/65 to-cyan-300/60"
        animate={{ x: [0, 35, 0], y: [0, -25, 0], scale: [1, 1.04, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
      />

      {particles.map((p) => (
        <motion.span
          key={p.id}
          className="absolute rounded-full bg-white"
          style={{
            left: `${p.x}%`,
            top: `${p.y}%`,
            width: `${p.size}px`,
            height: `${p.size}px`,
            opacity: p.opacity,
          }}
          animate={{
            y: [0, -18, 0],
            opacity: [p.opacity, p.opacity + 0.35, p.opacity],
          }}
          transition={{
            duration: p.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: p.delay,
          }}
        />
      ))}

      {meteors.map((m) => (
        <motion.span
          key={m.id}
          className="absolute h-px w-44 rotate-[-20deg] bg-gradient-to-r from-transparent via-white/55 to-transparent"
          style={{ left: `${m.x}%`, top: `${m.y}%` }}
          animate={{ x: [0, -900], y: [0, 520], opacity: [0, 1, 0] }}
          transition={{
            duration: m.dur,
            repeat: Infinity,
            ease: "easeInOut",
            delay: m.delay,
            repeatDelay: 2.2,
          }}
        />
      ))}

      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.16),transparent_55%)]" />

      <div
        className="absolute inset-0 opacity-[0.14]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.08) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.08) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />
    </div>
  );
}

function CommandPaletteModal({
  open,
  onClose,
  actions,
  runAction,
}: {
  open: boolean;
  onClose: () => void;
  actions: Action[];
  runAction: (a: Action) => void;
}) {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return actions;
    return actions.filter((a) => {
      const hay = `${a.title} ${a.subtitle ?? ""}`.toLowerCase();
      return hay.includes(q);
    });
  }, [actions, query]);

  useEffect(() => {
    if (!open) return;
    setQuery("");
    setActive(0);
    const t = setTimeout(() => inputRef.current?.focus(), 10);
    return () => clearTimeout(t);
  }, [open]);

  useEffect(() => {
    if (!open) return;

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();

      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((v) => Math.min(v + 1, Math.max(filtered.length - 1, 0)));
      }
      if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((v) => Math.max(v - 1, 0));
      }
      if (e.key === "Enter") {
        e.preventDefault();
        const a = filtered[active];
        if (a) runAction(a);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open, filtered, active, onClose, runAction]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-[60]">
      <div
        className="absolute inset-0 bg-black/55 backdrop-blur-sm"
        onMouseDown={onClose}
      />
      <div className="absolute inset-0 flex items-start justify-center p-4 pt-20">
        <div
          className="w-full max-w-2xl overflow-hidden rounded-2xl border border-white/15 bg-[#0B1020]/85 backdrop-blur-xl shadow-2xl"
          onMouseDown={(e) => e.stopPropagation()}
        >
          <div className="flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
            <Command className="h-4 w-4 text-neutral-200" />
            <input
              ref={inputRef}
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Buscar… (Projects, Contact, GitHub, LinkedIn)"
              className="w-full bg-transparent text-sm text-white placeholder:text-neutral-400 outline-none"
            />
            <div className="hidden sm:flex items-center gap-1 text-xs text-neutral-300">
              <span className="rounded-md border border-white/15 bg-white/5 px-2 py-1">
                ↑↓
              </span>
              <span className="rounded-md border border-white/15 bg-white/5 px-2 py-1">
                Enter
              </span>
              <span className="rounded-md border border-white/15 bg-white/5 px-2 py-1">
                Esc
              </span>
            </div>
          </div>

          <div className="max-h-[360px] overflow-auto p-2">
            {filtered.length === 0 ? (
              <div className="px-3 py-8 text-center text-sm text-neutral-300">
                No results.
              </div>
            ) : (
              <div className="space-y-1">
                {filtered.map((a, idx) => (
                  <button
                    key={a.id}
                    onMouseEnter={() => setActive(idx)}
                    onClick={() => runAction(a)}
                    className={[
                      "flex w-full items-center justify-between gap-3 rounded-xl px-3 py-3 text-left transition",
                      idx === active
                        ? "bg-white/10 border border-white/15"
                        : "hover:bg-white/8 border border-transparent",
                    ].join(" ")}
                  >
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-white/15 bg-white/8">
                        {a.icon ?? <Sparkles className="h-4 w-4" />}
                      </span>
                      <div>
                        <div className="text-sm font-medium text-white">
                          {a.title}
                        </div>
                        {a.subtitle ? (
                          <div className="text-xs text-neutral-300">
                            {a.subtitle}
                          </div>
                        ) : null}
                      </div>
                    </div>

                    <div className="text-xs text-neutral-300">
                      {a.kind === "section" ? "Go" : a.kind === "external" ? "Open" : a.kind === "mailto" ? "Mail" : "Copy"}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="flex items-center justify-between border-t border-white/10 bg-white/5 px-4 py-3 text-xs text-neutral-300">
            <span>Tip: Ctrl+K / Cmd+K</span>
            <span className="hidden sm:inline">Navega rápido como VSCode ✨</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Landing() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  const actions: Action[] = useMemo(
    () => [
      { id: "go-featured", title: "Featured Project", subtitle: "Mini case study", kind: "section", href: "#featured", icon: <Trophy className="h-4 w-4" /> },
      { id: "go-projects", title: "Projects", subtitle: "Sección de proyectos", kind: "section", href: "#projects", icon: <Sparkles className="h-4 w-4" /> },
      { id: "go-exp", title: "Experience", subtitle: "Trabajo y roles", kind: "section", href: "#experience", icon: <Briefcase className="h-4 w-4" /> },
      { id: "go-about", title: "About", subtitle: "Educación y skills", kind: "section", href: "#about", icon: <GraduationCap className="h-4 w-4" /> },
      { id: "go-contact", title: "Contact", subtitle: "Email y links", kind: "section", href: "#contact", icon: <Mail className="h-4 w-4" /> },
      { id: "open-github", title: "Open GitHub", subtitle: PROFILE.github, kind: "external", href: PROFILE.github, icon: <Github className="h-4 w-4" /> },
      { id: "open-linkedin", title: "Open LinkedIn", subtitle: PROFILE.linkedin, kind: "external", href: PROFILE.linkedin, icon: <Linkedin className="h-4 w-4" /> },
      { id: "mail", title: "Send email", subtitle: PROFILE.email, kind: "mailto", icon: <Mail className="h-4 w-4" /> },
      { id: "copy-email", title: "Copy email", subtitle: PROFILE.email, kind: "copyEmail", icon: <Copy className="h-4 w-4" /> },
    ],
    []
  );

  const runAction = async (a: Action) => {
    try {
      if (a.kind === "section") {
        const el = document.querySelector(a.href);
        if (el) (el as HTMLElement).scrollIntoView({ behavior: "smooth", block: "start" });
      } else if (a.kind === "external") {
        window.open(a.href, "_blank", "noopener,noreferrer");
      } else if (a.kind === "mailto") {
        window.location.href = `mailto:${PROFILE.email}`;
      } else if (a.kind === "copyEmail") {
        await navigator.clipboard.writeText(PROFILE.email);
      }
    } finally {
      setPaletteOpen(false);
    }
  };

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isK = e.key.toLowerCase() === "k";
      if ((e.ctrlKey || e.metaKey) && isK) {
        e.preventDefault();
        setPaletteOpen(true);
      }
      if (e.key === "Escape") setPaletteOpen(false);
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  const onMove = (e: MouseEvent<HTMLDivElement>) => {
    // 1) Cursor glow del fondo
    const host = e.currentTarget as HTMLElement;
    const hostRect = host.getBoundingClientRect();
    host.style.setProperty("--mx", `${e.clientX - hostRect.left}px`);
    host.style.setProperty("--my", `${e.clientY - hostRect.top}px`);

    const target = e.target as HTMLElement;

    // 2) Parallax del Featured
    const parallax = target.closest("[data-parallax]") as HTMLElement | null;
    if (parallax) {
      const r = parallax.getBoundingClientRect();
      const nx = (e.clientX - r.left) / r.width - 0.5;
      const ny = (e.clientY - r.top) / r.height - 0.5;
      parallax.style.setProperty("--px", `${nx * 28}px`);
      parallax.style.setProperty("--py", `${ny * 28}px`);
    }

    // 3) Spotlight de cards
    const card = target.closest(".group") as HTMLElement | null;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    card.style.setProperty("--x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--y", `${e.clientY - rect.top}px`);
  };

  return (
    <div
      className="relative min-h-screen text-neutral-50"
      onMouseMove={onMove}
      style={
        {
          ["--mx" as any]: "50%",
          ["--my" as any]: "20%",
        } as CSSProperties
      }
    >
      <DynamicBg />

      <CommandPaletteModal
        open={paletteOpen}
        onClose={() => setPaletteOpen(false)}
        actions={actions}
        runAction={runAction}
      />

      <header className="sticky top-0 z-30 border-b border-white/10 bg-[#0B1020]/55 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/15 bg-white/8">
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

          <div className="flex items-center gap-2">
            <Button
              type="button"
              variant="secondary"
              size="sm"
              onClick={() => setPaletteOpen(true)}
              className="hidden md:inline-flex rounded-full bg-white/10 text-white hover:bg-white/15"
            >
              <Command className="mr-2 h-4 w-4" />
              Ctrl K
            </Button>

            <Button asChild size="sm" className="rounded-full">
              <a href="#contact">Hablemos</a>
            </Button>
          </div>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-neutral-200"
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
            <span className="bg-gradient-to-r from-fuchsia-300 via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
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
            Experiencia automatizando procesos (CRM/ERP) y trabajando con datos en tiempo real. Stack:
            Next.js/React/Angular, Node/Django, SQL/MongoDB, Docker.
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
          <div className="mt-10 overflow-hidden rounded-2xl border border-white/15 bg-white/8 backdrop-blur">
            <div className="flex gap-4 py-3 [mask-image:linear-gradient(to_right,transparent,black_12%,black_88%,transparent)]">
              <motion.div
                className="flex shrink-0 items-center gap-3"
                animate={{ x: ["0%", "-50%"] }}
                transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              >
                {[...tech, ...tech].map((t, i) => (
                  <span key={`${t}-${i}`} className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-neutral-200">
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

        {/* FEATURED PROJECT */}
        <section id="featured" className="py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Featured Project</h2>
              <p className="mt-2 text-neutral-200">Mini case study con parallax + mockup.</p>
            </div>
            <Badge className="hidden bg-white/10 text-neutral-100 md:inline-flex" variant="secondary">
              {FEATURED.subtitle}
            </Badge>
          </div>

          <div
            data-parallax
            className="mt-8 rounded-3xl border border-white/15 bg-white/8 backdrop-blur overflow-hidden"
            style={
              {
                ["--px" as any]: "0px",
                ["--py" as any]: "0px",
              } as CSSProperties
            }
          >
            <div className="grid grid-cols-1 gap-8 p-6 md:grid-cols-2 md:p-10">
              <div>
                <div className="flex flex-wrap gap-2">
                  {FEATURED.tags.map((t) => (
                    <Badge key={t} variant="secondary" className="bg-white/10 text-neutral-100 hover:bg-white/15">
                      {t}
                    </Badge>
                  ))}
                </div>

                <h3 className="mt-5 text-2xl font-semibold tracking-tight md:text-3xl">{FEATURED.title}</h3>
                <p className="mt-3 text-neutral-200">{FEATURED.desc}</p>

                <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {FEATURED.metrics.map((m) => (
                    <div key={m.k} className="rounded-2xl border border-white/15 bg-white/8 p-4">
                      <div className="text-sm font-medium text-white">{m.k}</div>
                      <div className="mt-1 text-sm text-neutral-200">{m.v}</div>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-col gap-3 sm:flex-row">
                  <Button asChild className="rounded-2xl">
                    <a href={FEATURED.demo} className="inline-flex items-center gap-2">
                      Ver demo <ArrowUpRight className="h-4 w-4" />
                    </a>
                  </Button>

                  <Button asChild variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/15">
                    <a href={FEATURED.github} className="inline-flex items-center gap-2">
                      <Github className="h-4 w-4" /> GitHub
                    </a>
                  </Button>
                </div>
              </div>

              <div className="relative">
                <motion.div
                  className="relative rounded-3xl border border-white/15 bg-black/20 overflow-hidden"
                  style={{ transform: "translate3d(var(--px), var(--py), 0)" }}
                  animate={{ y: [0, -6, 0] }}
                  transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
                >
                  <div className="aspect-[16/10] w-full">
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(56,189,248,0.35),transparent_40%),radial-gradient(circle_at_80%_20%,rgba(168,85,247,0.30),transparent_45%),radial-gradient(circle_at_55%_90%,rgba(244,63,94,0.22),transparent_55%)]" />
                    <div
                      className="absolute inset-0 opacity-[0.12]"
                      style={{
                        backgroundImage:
                          "linear-gradient(rgba(255,255,255,0.10) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.10) 1px, transparent 1px)",
                        backgroundSize: "48px 48px",
                      }}
                    />
                    <div className="absolute left-0 right-0 top-0 flex items-center gap-2 border-b border-white/10 bg-white/5 px-4 py-3">
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <span className="h-2.5 w-2.5 rounded-full bg-white/25" />
                      <div className="ml-3 h-2 w-40 rounded-full bg-white/10" />
                    </div>
                    <div className="absolute inset-0 p-6 pt-14">
                      <div className="h-5 w-2/3 rounded-full bg-white/10" />
                      <div className="mt-3 h-3 w-1/2 rounded-full bg-white/8" />
                      <div className="mt-6 grid grid-cols-3 gap-3">
                        <div className="h-20 rounded-2xl bg-white/8 border border-white/10" />
                        <div className="h-20 rounded-2xl bg-white/8 border border-white/10" />
                        <div className="h-20 rounded-2xl bg-white/8 border border-white/10" />
                      </div>
                      <div className="mt-4 h-28 rounded-2xl bg-white/8 border border-white/10" />
                    </div>
                    <motion.div
                      className="absolute -inset-24 rotate-12 bg-gradient-to-r from-transparent via-white/10 to-transparent"
                      animate={{ x: ["-30%", "130%"] }}
                      transition={{ duration: 2.8, repeat: Infinity, ease: "linear" }}
                    />
                  </div>
                </motion.div>

                <p className="mt-3 text-xs text-neutral-300">
                  *Puedes reemplazar el mockup por screenshots reales.
                </p>
              </div>
            </div>
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
                          <Badge key={t} variant="secondary" className="bg-white/10 text-neutral-100 hover:bg-white/15">
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
                        <Button size="sm" variant="secondary" className="bg-white/10 text-white hover:bg-white/15" asChild>
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
                Me gusta construir productos end-to-end: UI sólida, backend limpio, bases de datos bien modeladas y despliegue ordenado.
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