import { useState } from "react";
import { ChevronDown, Cpu, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import { Reveal, SectionHeading } from "./Reveal";

const projects = [
  {
    icon: Cpu,
    title: "Automated Agricultural Field Watering System",
    type: "Group Project",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    tech: ["Arduino", "IoT", "Automation"],
    description:
      "An automated irrigation system that uses soil-moisture sensors and Arduino-based automation to water agricultural fields only when needed, reducing water wastage and manual effort involved in field irrigation.",
    features: [
      "Soil-moisture based watering",
      "Arduino-driven automation logic",
      "Reduced water wastage",
      "Less manual irrigation effort",
    ],
    contribution:
      "Worked with the team on system design, sensor integration, and testing, helping refine the automation logic so it responded reliably to real soil conditions.",
  },
  {
    icon: Globe,
    title: "Event Management Website",
    type: "Group Project",
    institution: "Sri Shakthi Institute of Engineering and Technology",
    tech: ["HTML", "CSS", "MySQL"],
    description:
      "A web-based platform that streamlines event registration and booking, allowing organizers to manage event details, schedules, and venue information through a single organized interface.",
    features: [
      "Event registration and booking",
      "Event and schedule management",
      "Venue information",
      "Real-time notifications",
      "Reporting and event performance tracking",
      "Turnout tracking",
    ],
    contribution:
      "Contributed as part of the group project team building the platform's pages and database-backed event information.",
  },
];

export function Projects() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="projects" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="04 — Work"
          title="Projects"
          subtitle="Academic and group projects where ideas turned into working systems."
        />

        <div className="mt-14 grid gap-6">
          {projects.map((project, i) => {
            const open = openIndex === i;
            return (
              <Reveal
                as="article"
                key={project.title}
                delay={i * 100}
                className="glass group relative overflow-hidden rounded-3xl p-8 transition-transform duration-300 hover:-translate-y-1 sm:p-10"
              >
                <span className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-violet/15 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                <div className="relative flex flex-wrap items-start justify-between gap-6">
                  <div className="max-w-2xl">
                    <span className="flex h-12 w-12 items-center justify-center rounded-2xl border border-border bg-secondary/60">
                      <project.icon className="h-5 w-5 text-cyan" />
                    </span>
                    <p className="mt-5 font-mono text-[11px] uppercase tracking-[0.2em] text-primary">
                      {project.type}
                    </p>
                    <h3 className="mt-2 text-2xl font-semibold">{project.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{project.institution}</p>
                    <p className="mt-5 text-muted-foreground">{project.description}</p>
                    <ul className="mt-6 flex flex-wrap gap-2">
                      {project.tech.map((t) => (
                        <li
                          key={t}
                          className="rounded-full border border-border bg-secondary/40 px-3 py-1 font-mono text-xs"
                        >
                          {t}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <span className="font-display text-5xl font-bold text-foreground/10">
                    0{i + 1}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => setOpenIndex(open ? null : i)}
                  aria-expanded={open}
                  className="relative mt-8 inline-flex items-center gap-2 rounded-full border border-border px-5 py-2.5 text-sm font-medium transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                >
                  {open ? "Hide Details" : "View Details"}
                  <ChevronDown
                    className={cn("h-4 w-4 transition-transform", open && "rotate-180")}
                  />
                </button>

                <div
                  className={cn(
                    "relative grid overflow-hidden transition-all duration-500",
                    open ? "mt-8 grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0",
                  )}
                >
                  <div className="overflow-hidden">
                    <div className="grid gap-6 border-t border-border pt-7 sm:grid-cols-2">
                      <div>
                        <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          Key Features
                        </h4>
                        <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
                          {project.features.map((f) => (
                            <li key={f} className="flex gap-2">
                              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[image:var(--gradient-primary)]" />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                      <div>
                        <h4 className="font-mono text-[11px] uppercase tracking-[0.2em] text-muted-foreground">
                          My Contribution
                        </h4>
                        <p className="mt-4 text-sm text-muted-foreground">{project.contribution}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
