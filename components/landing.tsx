"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Github, Linkedin, Mail, Sparkles } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

const projects = [
  {
    title: "ERP (Angular 21) — En desarrollo",
    desc: "Arquitectura modular + foco en UX. Admin, contable, inventario y POS.",
    tags: ["Angular", "TypeScript", "UI/UX"],
    href: "#",
    github: "#",
  },
  {
    title: "NexClass (Django)",
    desc: "Plataforma estudiantes-profesores. Auth, búsqueda, favoritos y blog.",
    tags: ["Django", "Python", "SQL"],
    href: "#",
    github: "#",
  },
  {
    title: "Portfolio (Next.js)",
    desc: "Diseño premium, performance alto, SEO y componentes reutilizables.",
    tags: ["Next.js", "Tailwind", "shadcn/ui"],
    href: "#",
    github: "#",
  },
];

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

      {/* spotlight */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(255,255,255,0.10),transparent_55%)]" />

      {/* grid */}
      <div
        className="absolute inset-0 opacity-[0.18]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.07) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.07) 1px, transparent 1px)",
          backgroundSize: "72px 72px",
        }}
      />

      {/* vignette */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,rgba(0,0,0,0.75))]" />
    </div>
  );
}

function GradientBorderCard({ children }: { children: React.ReactNode }) {
  return (
    <div className="group relative rounded-2xl p-[1px]">
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-fuchsia-500/40 via-cyan-400/35 to-emerald-400/35 opacity-0 blur-sm transition-opacity duration-300 group-hover:opacity-100" />
      <div className="relative rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
        {children}
      </div>
    </div>
  );
}

export default function Landing() {
  return (
    <div className="relative min-h-screen bg-neutral-950 text-neutral-50">
      <GlowBg />

      {/* NAV */}
      <header className="sticky top-0 z-30 border-b border-white/10 bg-neutral-950/45 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
          <div className="flex items-center gap-2 font-semibold tracking-tight">
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-xl border border-white/10 bg-white/5">
              <Sparkles className="h-4 w-4" />
            </span>
            <span>TuNombre.dev</span>
          </div>

          <nav className="hidden gap-6 text-sm text-neutral-200 md:flex">
            <a className="hover:text-white" href="#projects">Proyectos</a>
            <a className="hover:text-white" href="#about">Sobre mí</a>
            <a className="hover:text-white" href="#contact">Contacto</a>
          </nav>

          <Button asChild size="sm" className="rounded-full">
            <a href="#contact">Hablemos</a>
          </Button>
        </div>
      </header>

      <main className="mx-auto max-w-6xl px-5">
        {/* HERO */}
        <section className="py-16 md:py-24">
          <motion.div
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55 }}
            className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-neutral-200"
          >
            <span className="h-2 w-2 rounded-full bg-emerald-400" />
            Disponible para proyectos / prácticas
            <Badge className="bg-white/10 text-neutral-100 hover:bg-white/15" variant="secondary">
              Full-Stack
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.05 }}
            className="mt-6 text-4xl font-semibold tracking-tight md:text-6xl"
          >
            Un portafolio{" "}
            <span className="bg-gradient-to-r from-fuchsia-400 via-indigo-300 to-cyan-300 bg-clip-text text-transparent">
              tipo empresa
            </span>{" "}
            que se siente premium.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-5 max-w-2xl text-base text-neutral-200 md:text-lg"
          >
            Full-stack dev enfocado en UI limpia, performance y buenas prácticas.
            Next.js, React, Angular, Node, Django, SQL y Docker.
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

            <Button
              asChild
              variant="secondary"
              className="rounded-2xl bg-white/10 text-white hover:bg-white/15"
            >
              <a href="#contact">Contacto</a>
            </Button>
          </motion.div>

          {/* “stats” */}
          <div className="mt-10 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { k: "Stack", v: "Next.js • TS • Tailwind" },
              { k: "UI", v: "shadcn/ui + motion" },
              { k: "Meta", v: "Proyectos con impacto" },
            ].map((x) => (
              <GradientBorderCard key={x.k}>
                <Card className="border-0 bg-transparent">
                  <CardHeader>
                    <CardTitle className="text-base">{x.k}</CardTitle>
                    <CardDescription className="text-neutral-200">{x.v}</CardDescription>
                  </CardHeader>
                </Card>
              </GradientBorderCard>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* PROJECTS */}
        <section id="projects" className="py-14">
          <div className="flex items-end justify-between gap-4">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Proyectos</h2>
              <p className="mt-2 text-neutral-200">
                Selección corta y contundente. Luego hacemos página por proyecto (case study).
              </p>
            </div>

            <Badge className="hidden bg-white/10 text-neutral-100 md:inline-flex" variant="secondary">
              3 destacados
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
                <GradientBorderCard>
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
                </GradientBorderCard>
              </motion.div>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* ABOUT */}
        <section id="about" className="py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Sobre mí</h2>
          <p className="mt-3 max-w-3xl text-neutral-200">
            Me gusta construir productos end-to-end: UI sólida, backend limpio, base de datos bien modelada
            y despliegue ordenado.
          </p>

          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3">
            {[
              { title: "Frontend", items: "React, Next.js, Angular, Tailwind, UI systems" },
              { title: "Backend", items: "Node.js, Django, APIs REST, Auth" },
              { title: "Data/DevOps", items: "SQL, MongoDB, Git/GitHub, Linux, Docker" },
            ].map((s) => (
              <GradientBorderCard key={s.title}>
                <Card className="border-0 bg-transparent">
                  <CardHeader>
                    <CardTitle className="text-base">{s.title}</CardTitle>
                    <CardDescription className="text-neutral-200">{s.items}</CardDescription>
                  </CardHeader>
                </Card>
              </GradientBorderCard>
            ))}
          </div>
        </section>

        <Separator className="bg-white/10" />

        {/* CONTACT */}
        <section id="contact" className="py-14">
          <h2 className="text-2xl font-semibold tracking-tight md:text-3xl">Contacto</h2>
          <p className="mt-3 text-neutral-200">
            Pon aquí tus links reales y quedas listo para aplicar.
          </p>

          <div className="mt-6 flex flex-col gap-3 sm:flex-row">
            <Button className="rounded-2xl" asChild>
              <a href="mailto:tuemail@correo.com" className="inline-flex items-center gap-2">
                <Mail className="h-4 w-4" /> Email
              </a>
            </Button>

            <Button variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/15" asChild>
              <a href="#" className="inline-flex items-center gap-2">
                <Linkedin className="h-4 w-4" /> LinkedIn
              </a>
            </Button>

            <Button variant="secondary" className="rounded-2xl bg-white/10 text-white hover:bg-white/15" asChild>
              <a href="#" className="inline-flex items-center gap-2">
                <Github className="h-4 w-4" /> GitHub
              </a>
            </Button>
          </div>
        </section>

        <footer className="pb-10 pt-2 text-sm text-neutral-400">
          © {new Date().getFullYear()} TuNombre — Next.js + Tailwind
        </footer>
      </main>
    </div>
  );
}