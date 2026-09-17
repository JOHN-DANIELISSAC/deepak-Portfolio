import {
  Brain,
  Code2,
  Database,
  Layers,
  Lightbulb,
  MessagesSquare,
  Rocket,
  Smartphone,
  Users,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const highlights = [
  { icon: Lightbulb, label: "Problem Solving" },
  { icon: Users, label: "Team Collaboration" },
  { icon: Rocket, label: "Continuous Learning" },
  { icon: MessagesSquare, label: "Clear Communication" },
];

const interests = [
  {
    icon: Layers,
    title: "Full Stack Web Development",
    body: "Building complete web applications across frontend, backend, and database layers.",
  },
  {
    icon: Brain,
    title: "Artificial Intelligence",
    body: "Exploring AI and machine learning concepts and their applications in software.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    body: "Building Android applications and exploring cross-platform development using Flutter.",
  },
  {
    icon: Code2,
    title: "Software Development",
    body: "Writing clean, efficient code and understanding how software systems are designed.",
  },
  {
    icon: Database,
    title: "Database Technologies",
    body: "Designing and managing relational databases for real-world applications.",
  },
  {
    icon: Rocket,
    title: "Emerging Technologies",
    body: "Experimenting with new tools, frameworks, and technologies.",
  },
];

export function About() {
  return (
    <>
      <section id="about" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="01 — Introduction" title="About Me" />

          <div className="mt-14 grid gap-8 lg:grid-cols-[1.4fr_1fr]">
            <Reveal className="glass rounded-3xl p-8 sm:p-10">
              <div className="space-y-5 text-muted-foreground">
                <p>
                  Deepak S is a third-year Computer Science and Engineering student with a growing
                  foundation in programming, full-stack web development, mobile app development, and
                  database technologies.
                </p>
                <p>
                  He takes a hands-on and curiosity-driven approach to learning and applies new
                  concepts through academic and group projects.
                </p>
                <p>
                  His current technical interests include Android application development using
                  Android Studio and Flutter, Artificial Intelligence, web development, programming,
                  and database technologies.
                </p>
                <p>
                  He enjoys learning emerging technologies and turning classroom knowledge into
                  practical software solutions.
                </p>
              </div>
            </Reveal>

            <div className="grid gap-4 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <Reveal
                  key={item.label}
                  delay={i * 80}
                  className="glass group rounded-2xl p-6 transition-transform duration-300 hover:-translate-y-1"
                >
                  <item.icon className="h-6 w-6 text-cyan" />
                  <p className="mt-4 font-display text-sm font-semibold">{item.label}</p>
                </Reveal>
              ))}
              <Reveal
                delay={340}
                className="glass rounded-2xl p-6 sm:col-span-2"
                aria-label="Education snapshot"
              >
                <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                  Currently
                </p>
                <p className="mt-2 text-sm">
                  Third year, B.E Computer Science and Engineering — Sri Shakthi Institute of
                  Engineering and Technology · CGPA 7.4
                </p>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      <section id="interests" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="02 — Interests"
            title="What I Love Building"
            subtitle="The areas of technology I keep coming back to."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {interests.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 90}
                className="glass group relative overflow-hidden rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1.5"
              >
                <span className="absolute inset-x-0 -top-24 h-40 bg-primary/20 opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-100" />
                <span className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-secondary/60">
                  <item.icon className="h-5 w-5 text-primary" />
                </span>
                <h3 className="relative mt-5 font-display text-base font-semibold">{item.title}</h3>
                <p className="relative mt-3 text-sm text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>
    </>
  );
}
