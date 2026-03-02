"use client";

import Image from "next/image";
import {
  type CSSProperties,
  type MouseEvent as ReactMouseEvent,
  type ReactNode,
  useEffect,
  useMemo,
  useRef,
  useState,
} from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowUpRight,
  Briefcase,
  Command,
  Copy,
  Github,
  GraduationCap,
  Linkedin,
  Mail,
  Sparkles,
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

/* ----------------------------- DATA / CONSTANTS ---------------------------- */

const NEXCLASS_REPO = "https://github.com/jpjimenezq/NexClass";

const PROFILE = {
  name: "Samuel Santamaria",
  brand: "SamuelSantamaria.dev",
  title: "Full-Stack Developer • CS @ EAFIT",
  location: "Medellín, Colombia",
  email: "ssantamars@eafit.edu.co",
  github: "https://github.com/Ssantamars123",
  linkedin: "https://www.linkedin.com/in/samuel-santamaria-044a0a290/?isSelfProfile=true",
  // ✅ tu archivo ya está en: public/projects/SamuelSantamaria-Resume-Updated-v2.pdf
  resumeHref: "/projects/SamuelSantamaria-Resume-Updated-v2.pdf",
};

type Project = {
  title: string;
  desc: string;
  tags: string[];
  href?: string; // demo
  github: string;
  impact: string[];
  logo?: string;
};

const projects: Project[] = [
  {
    title: "NexClass — Full-Stack Django Web App",
    desc: "Plataforma educativa tipo marketplace: usuarios/roles, búsqueda, favoritos, mensajería, blog de profesores y sistema de reviews/ranking (arquitectura multi-app).",
    tags: ["Django", "Python", "HTML/CSS", "JavaScript"],
    href: "", // no demo por ahora
    github: NEXCLASS_REPO,
    logo: "/projects/nexclass.png",
    impact: [
      "Arquitectura modular multi-app (users, search, favorites, reviews, teacher_blog)",
      "Features: búsqueda + favoritos + mensajería interna + inscripciones",
      "Sistema de reviews/ranking + extensible",
    ],
  },
  {
    title: "Zoho CRM ↔ Siigo ERP Sync (Python + APIs)",
    desc: "Integración y automatización: sincronización de datos clave y flujos de outreach basados en triggers.",
    tags: ["Python", "APIs", "Automation"],
    href: "",
    github: "#",
    impact: ["1,500+ registros", "5 procesos automatizados", "Workflows de emails"],
  },
  {
    title: "Portfolio (Next.js) — UI Premium",
    desc: "Este sitio: glass + neon, motion, componentes reutilizables, performance y SEO.",
    tags: ["Next.js", "TypeScript", "Tailwind", "shadcn/ui"],
    href: "",
    github: "#",
    impact: ["UI system", "Motion", "Rápido + SEO"],
  },
];

// Featured project removed per user request. Related data and constants deleted.

type ExperienceItem = {
  company: string;
  role: string;
  date: string;
  location?: string;
  bullets: string[];
};

const experience: ExperienceItem[] = [
  {
    company: "Dekotendencias S.A.S",
    role: "Summer Intern",
    date: "Feb 2025 – Jul 2025",
    location: "Medellín, Colombia",
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
    location: "Medellín, Colombia",
    bullets: [
      "Capturo y valido tracking y play-by-play en vivo (basketball/football).",
      "Verifico datos de jugadores/equipos para asegurar feeds y reportes confiables.",
      "Monitoreo eventos end-to-end, detecto anomalías y escalo bajo presión.",
      "Mantengo alta precisión y detalle en escenarios de tiempo real.",
    ],
  },
];

type EducationItem = {
  school: string;
  program: string;
  location?: string;
  extra?: string;
  coursework?: string;
};

const education: EducationItem[] = [
  {
    school: "EAFIT University",
    location: "Medellín, Colombia",
    program: "BSc in Computer Science (Expected Jun 2027)",
    extra: "GPA: 4.1/5.0",
    coursework: "Relevant coursework: C, C++, Java, JavaScript, Python; Unix/Linux environments",
  },
  {
    school: "Academie Ste-Cécile International School",
    location: "Ontario, Canada",
    program: "Study Abroad – Intensive English Program (2017)",
  },
  {
    school: "Winston-Salem State University",
    location: "Medellín, Colombia",
    program: "Advanced English Language Program (2017–2019)",
  },
];

type LeadershipItem = {
  org: string;
  role: string;
  date: string;
  location?: string;
  bullets: string[];
};

const leadership: LeadershipItem[] = [
  {
    org: "Aguapanelazos ONG",
    role: "Volunteer",
    date: "Dec 2025",
    location: "Medellín, Colombia",
    bullets: [
      "Participé en jornadas de apoyo comunitario entregando alimentos y regalos a familias de bajos recursos.",
      "Coordiné rutas y logística con voluntarios para cubrir varios barrios de manera eficiente.",
      "Impulsé conciencia social mediante interacción directa con comunidades vulnerables.",
    ],
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

const skills = {
  languages: ["Python", "JavaScript", "SQL"],
  frontend: ["Angular (v21)", "React", "HTML", "CSS"],
  backend: ["Django", "Node.js"],
  databases: ["MongoDB"],
  tools: ["Git/GitHub", "Linux", "Docker"],
  spoken: ["Spanish (native)", "English (B2 CEFR)"],
  interests: ["Gaming", "Motocross", "Soccer", "Gym", "Swimming"],
} as const;

type Action =
  | {
      id: string;
      title: string;
      subtitle?: string;
      kind: "section";
      href: string;
      icon?: ReactNode;
    }
  | {
      id: string;
      title: string;
      subtitle?: string;
      kind: "external";
      href: string;
      icon?: ReactNode;
    }
  | { id: string; title: string; subtitle?: string; kind: "mailto"; icon?: ReactNode }
  | {
      id: string;
      title: string;
      subtitle?: string;
      kind: "copyEmail";
      icon?: ReactNode;
    };

/* --------------------------------- HELPERS -------------------------------- */

/** Deterministic PRNG (evita hydration mismatch) */
function mulberry32(seed: number) {
  return function () {
    let t = (seed += 0x6d2b79f5);
    t = Math.imul(t ^ (t >>> 15), t | 1);
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61);
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function round(n: number, d = 4) {
  const k = 10 ** d;
  return Math.round(n * k) / k;
}

/* ------------------------------- UI COMPONENTS ------------------------------ */

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
  const particles = useMemo(() => {
    const rand = mulberry32(1337);
    return Array.from({ length: 12 }, (_, i) => ({
      id: i,
      x: round(rand() * 100, 4),
      y: round(rand() * 100, 4),
      size: round(1 + rand() * 2.5, 3),
      dur: round(6 + rand() * 10, 3),
      delay: round(rand() * 3, 3),
      opacity: round(0.15 + rand() * 0.35, 3),
    }));
  }, []);

  const meteors = useMemo(() => {
    const rand = mulberry32(4242);
    return Array.from({ length: 3 }, (_, i) => ({
      id: i,
      x: round(10 + rand() * 80, 4),
      y: round(rand() * 55, 4),
      dur: round(2.6 + rand() * 2.8, 3),
      delay: round(rand() * 2.5, 3),
    }));
  }, []);

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
        className="absolute left-[-14%] top-[-20%] h-[560px] w-[560px] rounded-full blur-3xl opacity-80 mix-blend-screen bg-gradient-to-tr from-cyan-400/90 via-indigo-500/85 to-fuchsia-500/80"
        animate={{ x: [0, 70, 0], y: [0, 40, 0], scale: [1, 1.08, 1] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute right-[-14%] bottom-[-22%] h-[620px] w-[620px] rounded-full blur-3xl opacity-80 mix-blend-screen bg-gradient-to-tr from-emerald-400/80 via-sky-400/85 to-violet-500/80"
        animate={{ x: [0, -80, 0], y: [0, -50, 0], scale: [1, 1.06, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute left-[18%] top-[32%] h-[460px] w-[460px] rounded-full blur-3xl opacity-60 mix-blend-screen bg-gradient-to-tr from-pink-400/70 via-purple-400/65 to-cyan-300/60"
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
            opacity: [p.opacity, Math.min(p.opacity + 0.35, 1), p.opacity],
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
              placeholder="Buscar… (Projects, Experience, About, Contact, Resume)"
              className="w-full bg-transparent text-sm text-white placeholder:text-neutral-400 outline-none"
            />
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
                      {a.kind === "section"
                        ? "Go"
                        : a.kind === "external"
                        ? "Open"
                        : a.kind === "mailto"
                        ? "Mail"
                        : "Copy"}
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

/* --------------------------------- PAGE ----------------------------------- */

export default function Landing() {
  const [paletteOpen, setPaletteOpen] = useState(false);

  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 120,
    damping: 20,
    mass: 0.25,
  });

  const actions: Action[] = useMemo(
    () => [
      {
        id: "go-projects",
        title: "Projects",
        subtitle: "Sección de proyectos",
        kind: "section",
        href: "#projects",
        icon: <Sparkles className="h-4 w-4" />,
      },
      {
        id: "go-exp",
        title: "Experience",
        subtitle: "Trabajo y roles",
        kind: "section",
        href: "#experience",
        icon: <Briefcase className="h-4 w-4" />,
      },
      {
        id: "go-about",
        title: "About",
        subtitle: "Educación, skills, liderazgo",
        kind: "section",
        href: "#about",
        icon: <GraduationCap className="h-4 w-4" />,
      },
      {
        id: "go-contact",
        title: "Contact",
        subtitle: "Email y links",
        kind: "section",
        href: "#contact",
        icon: <Mail className="h-4 w-4" />,
      },
      {
        id: "open-resume",
        title: "Open Resume (PDF)",
        subtitle: PROFILE.resumeHref,
        kind: "external",
        href: PROFILE.resumeHref,
        icon: <ArrowUpRight className="h-4 w-4" />,
      },
      {
        id: "open-nexclass",
        title: "Open NexClass repo",
        subtitle: NEXCLASS_REPO,
        kind: "external",
        href: NEXCLASS_REPO,
        icon: <Github className="h-4 w-4" />,
      },
      {
        id: "open-github",
        title: "Open GitHub",
        subtitle: PROFILE.github,
        kind: "external",
        href: PROFILE.github,
        icon: <Github className="h-4 w-4" />,
      },
      {
        id: "open-linkedin",
        title: "Open LinkedIn",
        subtitle: PROFILE.linkedin,
        kind: "external",
        href: PROFILE.linkedin,
        icon: <Linkedin className="h-4 w-4" />,
      },
      {
        id: "mail",
        title: "Send email",
        subtitle: PROFILE.email,
        kind: "mailto",
        icon: <Mail className="h-4 w-4" />,
      },
      {
        id: "copy-email",
        title: "Copy email",
        subtitle: PROFILE.email,
        kind: "copyEmail",
        icon: <Copy className="h-4 w-4" />,
      },
    ],
    []
  );

  const runAction = async (a: Action) => {
    try {
      if (a.kind === "section") {
        const el = document.querySelector(a.href);
        if (el)
          (el as HTMLElement).scrollIntoView({
            behavior: "smooth",
            block: "start",
          });
      } else if (a.kind === "external") {
        window.open(a.href, "_blank", "noopener,noreferrer");
      } else if (a.kind === "mailto") {
        window.location.href = `mailto:${PROFILE.email}`;
      } else if (a.kind === "copyEmail") {
        try {
          await navigator.clipboard.writeText(PROFILE.email);
        } catch {
          window.prompt("Copy email:", PROFILE.email);
        }
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

  const rafRef = useRef<number | null>(null);

  const onMove = (e: ReactMouseEvent<HTMLDivElement>) => {
    if (rafRef.current) return;

    const clientX = e.clientX;
    const clientY = e.clientY;
    const host = e.currentTarget as HTMLElement;

    rafRef.current = window.requestAnimationFrame(() => {
      rafRef.current = null;

      const hostRect = host.getBoundingClientRect();
      host.style.setProperty("--mx", `${clientX - hostRect.left}px`);
      host.style.setProperty("--my", `${clientY - hostRect.top}px`);

      const el = document.elementFromPoint(clientX, clientY) as HTMLElement | null;

      const card = el?.closest(".group") as HTMLElement | null;
      if (card) {
        const rect = card.getBoundingClientRect();
        card.style.setProperty("--x", `${clientX - rect.left}px`);
        card.style.setProperty("--y", `${clientX - rect.left}px`);
        card.style.setProperty("--y", `${clientY - rect.top}px`);
      }

      const parallax = el?.closest("[data-parallax]") as HTMLElement | null;
      if (parallax) {
        const r = parallax.getBoundingClientRect();
        const nx = (clientX - r.left) / r.width - 0.5;
        const ny = (clientY - r.top) / r.height - 0.5;
        parallax.style.setProperty("--px", `${nx * 18}px`);
        parallax.style.setProperty("--py", `${ny * 18}px`);
      }
    });
  };

  useEffect(() => {
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <div
      className="relative min-h-screen text-neutral-50"
      onMouseMove={onMove}
      style={{ ["--mx" as any]: "50%", ["--my" as any]: "20%" } as CSSProperties}
    >
      <DynamicBg />

      <div className="fixed left-0 right-0 top-0 z-[80] h-[3px] bg-white/5">
        <motion.div
          className="h-full bg-gradient-to-r from-cyan-300 via-fuchsia-300 to-emerald-300"
          style={{ scaleX, transformOrigin: "0% 50%" }}
        />
        <div className="absolute inset-0 blur-md opacity-60 bg-gradient-to-r from-cyan-300/30 via-fuchsia-300/30 to-emerald-300/30" />
      </div>

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
            <Badge
              className="bg-white/10 text-neutral-100 hover:bg-white/15"
              variant="secondary"
            >
              {PROFILE.title}
            </Badge>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 flex flex-col items-center gap-4 md:flex-row md:flex-row-reverse md:items-center md:gap-6"
          >
            <div className="relative h-96 w-96 md:h-[30rem] md:w-[40rem] rounded-2xl p-1 bg-gradient-to-tr from-fuchsia-800/10 via-indigo-700/8 to-cyan-400/8 shadow-2xl">
              <div className="relative h-full w-full overflow-hidden rounded-xl bg-neutral-900">
                <Image
                  src="/projects/fotosamuel.png"
                  alt="Samuel Santamaria"
                  fill
                  priority
                  className="object-cover object-[80%_30%]"
                />
              </div>
            </div>

            <h1 className="text-3xl font-semibold tracking-tight md:text-6xl text-center md:text-left">
              {PROFILE.name} —{" "}
              <span className="bg-gradient-to-r from-fuchsia-300 via-indigo-200 to-cyan-200 bg-clip-text text-transparent">
                Diseño y construyo productos digitales
              </span>
              {" "}centrados en la experiencia y el rendimiento.
            </h1>
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-base text-neutral-200 md:text-lg"
          >
            Full-stack dev enfocado en UI, performance y features reales. Django/Node, React/Next/Angular, SQL/MongoDB,
            Docker.
          </motion.p>

          {/* ✅ SOLO CV (borrados los 2 botones del NexClass del HERO) */}
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="mt-8 flex flex-col gap-3 sm:flex-row"
          >
            {PROFILE.resumeHref ? (
              <Button
                asChild
                variant="secondary"
                className="rounded-2xl bg-white/10 text-white hover:bg-white/15"
              >
                <a
                  href={PROFILE.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Descargar CV <ArrowUpRight className="h-4 w-4" />
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
                  <span
                    key={`${t}-${i}`}
                    className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-neutral-200"
                  >
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        <Separator className="bg-white/10" />

        <Separator className="bg-white/10" />

        {/* PROJECTS */}
        <section id="projects" className="py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Proyectos
              </h2>
              <p className="mt-2 text-neutral-200">
                Selección corta para mostrar impacto y stack real.
              </p>
            </div>
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
                      <CardTitle className="text-base">
                        <span className="inline-flex items-center gap-3">
                          {p.logo ? (
                            <span className="relative h-9 w-9 overflow-hidden rounded-xl border border-white/15 bg-white/8">
                              <Image
                                src={p.logo}
                                alt="Project logo"
                                fill
                                className="object-contain p-1"
                              />
                            </span>
                          ) : null}
                          <span>{p.title}</span>
                        </span>
                      </CardTitle>
                      <CardDescription className="text-neutral-200">
                        {p.desc}
                      </CardDescription>
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
                          <a
                            href={p.github}
                            target="_blank"
                            rel="noreferrer"
                            className="inline-flex items-center gap-2"
                          >
                            <Github className="h-4 w-4" /> GitHub
                          </a>
                        </Button>

                        {p.href ? (
                          <Button size="sm" className="rounded-xl" asChild>
                            <a
                              href={p.href}
                              target="_blank"
                              rel="noreferrer"
                              className="inline-flex items-center gap-2"
                            >
                              Demo <ArrowUpRight className="h-4 w-4" />
                            </a>
                          </Button>
                        ) : null}
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
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Experiencia
              </h2>
              <p className="mt-2 text-neutral-200">
                Roles recientes y resultados medibles.
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-2">
            {experience.map((e, idx) => (
              <motion.div
                key={`${e.company}-${e.role}`}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.5, delay: idx * 0.06 }}
                className="h-full"
              >
                <SpotlightCard>
                  <Card className="h-full border-0 bg-transparent">
                    <CardHeader>
                      <CardTitle className="text-base">
                        <span className="inline-flex w-full items-center justify-between gap-3">
                          <span>{e.company}</span>
                          <span className="text-xs text-neutral-300">
                            {e.date}
                          </span>
                        </span>
                      </CardTitle>
                      <CardDescription className="text-neutral-200">
                        {e.role}
                        {e.location ? ` • ${e.location}` : ""}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="space-y-3">
                      <ul className="space-y-2 text-sm text-neutral-200">
                        {e.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/40" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                </SpotlightCard>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* ABOUT (CV MERGE) */}
        <section id="about" className="py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Sobre mí
              </h2>
              <p className="mt-2 text-neutral-200">
                Educación, liderazgo y skills (CV integrado).
              </p>
            </div>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-5 md:grid-cols-3">
            {/* EDUCATION */}
            <SpotlightCard>
              <Card className="h-full border-0 bg-transparent">
                <CardHeader>
                  <CardTitle className="text-base">Educación</CardTitle>
                  <CardDescription className="text-neutral-200">
                    Formación y coursework.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {education.map((ed) => (
                    <div
                      key={`${ed.school}-${ed.program}`}
                      className="rounded-2xl border border-white/15 bg-white/8 p-4"
                    >
                      <div className="text-sm font-medium text-white">
                        {ed.school}
                      </div>
                      {ed.location ? (
                        <div className="text-xs text-neutral-300">
                          {ed.location}
                        </div>
                      ) : null}
                      <div className="mt-2 text-sm text-neutral-200">
                        {ed.program}
                      </div>
                      {ed.extra ? (
                        <div className="mt-2 text-xs text-neutral-300">
                          {ed.extra}
                        </div>
                      ) : null}
                      {ed.coursework ? (
                        <div className="mt-2 text-xs text-neutral-300">
                          {ed.coursework}
                        </div>
                      ) : null}
                    </div>
                  ))}
                </CardContent>
              </Card>
            </SpotlightCard>

            {/* LEADERSHIP */}
            <SpotlightCard>
              <Card className="h-full border-0 bg-transparent">
                <CardHeader>
                  <CardTitle className="text-base">Liderazgo</CardTitle>
                  <CardDescription className="text-neutral-200">
                    Impacto fuera del trabajo.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {leadership.map((l) => (
                    <div
                      key={`${l.org}-${l.role}`}
                      className="rounded-2xl border border-white/15 bg-white/8 p-4"
                    >
                      <div className="flex items-center justify-between gap-3">
                        <div className="text-sm font-medium text-white">
                          {l.org}
                        </div>
                        <div className="text-xs text-neutral-300">{l.date}</div>
                      </div>
                      <div className="text-xs text-neutral-300">
                        {l.role}
                        {l.location ? ` • ${l.location}` : ""}
                      </div>

                      <ul className="mt-3 space-y-2 text-sm text-neutral-200">
                        {l.bullets.map((b) => (
                          <li key={b} className="flex items-start gap-2">
                            <span className="mt-[7px] h-1.5 w-1.5 rounded-full bg-white/40" />
                            <span>{b}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </SpotlightCard>

            {/* SKILLS */}
            <SpotlightCard>
              <Card className="h-full border-0 bg-transparent">
                <CardHeader>
                  <CardTitle className="text-base">Skills</CardTitle>
                  <CardDescription className="text-neutral-200">
                    Stack + idiomas + intereses.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  {(
                    [
                      ["Languages", skills.languages],
                      ["Frontend", skills.frontend],
                      ["Backend", skills.backend],
                      ["Databases", skills.databases],
                      ["Tools", skills.tools],
                      ["Spoken", skills.spoken],
                    ] as const
                  ).map(([label, items]) => (
                    <div key={label}>
                      <div className="text-xs font-medium text-neutral-200">
                        {label}
                      </div>
                      <div className="mt-2 flex flex-wrap gap-2">
                        {items.map((t) => (
                          <span
                            key={t}
                            className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-neutral-200"
                          >
                            {t}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}

                  <div>
                    <div className="text-xs font-medium text-neutral-200">
                      Interests
                    </div>
                    <div className="mt-2 flex flex-wrap gap-2">
                      {skills.interests.map((t) => (
                        <span
                          key={t}
                          className="rounded-full border border-white/15 bg-white/8 px-3 py-1 text-xs text-neutral-200"
                        >
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            </SpotlightCard>
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* CONTACT */}
        <section id="contact" className="py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">
                Contacto
              </h2>
              <p className="mt-2 text-neutral-200">Links directos + CV.</p>
            </div>
          </div>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Button asChild className="rounded-2xl">
              <a
                href={`mailto:${PROFILE.email}`}
                className="inline-flex items-center gap-2"
              >
                <Mail className="h-4 w-4" /> {PROFILE.email}
              </a>
            </Button>

            <Button
              type="button"
              variant="secondary"
              className="rounded-2xl bg-white/10 text-white hover:bg-white/15"
              onClick={async () => {
                try {
                  await navigator.clipboard.writeText(PROFILE.email);
                } catch {
                  window.prompt("Copy email:", PROFILE.email);
                }
              }}
            >
              <Copy className="mr-2 h-4 w-4" /> Copiar email
            </Button>

            <Button
              asChild
              variant="secondary"
              className="rounded-2xl bg-white/10 text-white hover:bg-white/15"
            >
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>

            <Button
              asChild
              variant="secondary"
              className="rounded-2xl bg-white/10 text-white hover:bg-white/15"
            >
              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2"
              >
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>

            {PROFILE.resumeHref ? (
              <Button
                asChild
                variant="secondary"
                className="rounded-2xl bg-white/10 text-white hover:bg-white/15"
              >
                <a
                  href={PROFILE.resumeHref}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2"
                >
                  Descargar CV <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
            ) : null}
          </div>
        </section>

        <div className="h-10" />
      </main>
    </div>
  );
}