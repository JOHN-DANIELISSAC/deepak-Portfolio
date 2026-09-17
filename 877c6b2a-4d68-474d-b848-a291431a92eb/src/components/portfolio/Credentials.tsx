import { Award, BadgeCheck, Brain, Briefcase, Coffee, Trophy } from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const certifications = [
  {
    icon: BadgeCheck,
    title: "Junior Software Developer Certification — NSQF Level 3",
    body: "A certification aligned to the National Occupational Standards set by IT-ITeS, validating foundational, industry-recognized software development skills.",
  },
  {
    icon: Briefcase,
    title: "On-the-Job Training Program — KELTRON",
    body: "Completed a hands-on training program at KELTRON, gaining exposure to workplace software practices, professional workflows, and team-based problem-solving.",
  },
  {
    icon: Brain,
    title: "AI for Beginners",
    body: "Completed an introductory course covering fundamentals of Artificial Intelligence and beginner-level applications.",
  },
  {
    icon: Coffee,
    title: "Object-Oriented Programming (OOPs) in Java",
    body: "Studied core object-oriented programming principles including classes, inheritance, polymorphism, and encapsulation using Java.",
  },
];

const hackathonPoints = [
  "Collaborative problem solving",
  "Working under time pressure",
  "Team contribution",
  "Practical technical exposure",
];

export function Credentials() {
  return (
    <>
      <section id="certifications" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="05 — Credentials"
            title="Certifications"
            subtitle="Programs and courses completed alongside my degree."
          />
          <ol className="mt-14 grid gap-5 sm:grid-cols-2">
            {certifications.map((cert, i) => (
              <Reveal
                as="li"
                key={cert.title}
                delay={(i % 2) * 90}
                className="glass relative rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60">
                    <cert.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="font-display text-base font-semibold leading-snug">
                      {cert.title}
                    </h3>
                    <p className="mt-3 text-sm text-muted-foreground">{cert.body}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="achievements" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="06 — Recognition" title="Achievements" />
          <Reveal className="glass relative mt-14 overflow-hidden rounded-3xl p-8 sm:p-12">
            <span className="absolute -left-20 -top-20 h-72 w-72 rounded-full bg-cyan/10 blur-3xl" />
            <div className="relative grid gap-10 lg:grid-cols-[1.2fr_1fr]">
              <div>
                <span className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[image:var(--gradient-primary)]">
                  <Trophy className="h-6 w-6 text-primary-foreground" />
                </span>
                <h3 className="mt-6 text-2xl font-semibold">
                  Adobe Hackathon — Participation Certificate
                </h3>
                <p className="mt-4 max-w-xl text-muted-foreground">
                  Participated in a hackathon organized by Adobe, gaining hands-on exposure to
                  collaborative, time-boxed problem solving alongside participants from different
                  backgrounds.
                </p>
              </div>
              <ul className="grid gap-3 self-center">
                {hackathonPoints.map((point) => (
                  <li
                    key={point}
                    className="flex items-center gap-3 rounded-xl border border-border bg-secondary/40 px-4 py-3 text-sm"
                  >
                    <Award className="h-4 w-4 shrink-0 text-cyan" />
                    {point}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
