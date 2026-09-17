import { Code2, Database, Monitor, Smartphone, Wrench } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const groups = [
  { icon: Code2, title: "Programming Languages", items: ["C", "Java", "Python"] },
  { icon: Monitor, title: "Frontend", items: ["HTML", "CSS"] },
  { icon: Smartphone, title: "Mobile Development", items: ["Android Studio", "Flutter"] },
  { icon: Database, title: "Database", items: ["MySQL"] },
  { icon: Wrench, title: "Tools", items: ["VS Code", "GitHub", "Canva"] },
];

export function Skills() {
  return (
    <section id="skills" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="03 — Toolkit"
          title="Technical Skills"
          subtitle="Languages, platforms, and tools I work with today."
        />

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {groups.map((group, i) => (
            <Reveal
              key={group.title}
              delay={(i % 3) * 90}
              className="glass rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-secondary/60">
                  <group.icon className="h-4.5 w-4.5 text-violet" />
                </span>
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.12em]">
                  {group.title}
                </h3>
              </div>
              <ul className="mt-6 flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <li
                    key={item}
                    className="rounded-full border border-border bg-secondary/40 px-3.5 py-1.5 font-mono text-xs text-foreground/90"
                  >
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
