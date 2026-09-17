import {
  Blocks,
  Brush,
  Eye,
  Gamepad2,
  GraduationCap,
  Languages as LanguagesIcon,
  Lightbulb,
  Music,
  Repeat,
  School,
  Speech,
  Target,
  Trophy,
  Users,
  Zap,
} from "lucide-react";
import { Reveal, SectionHeading } from "./Reveal";

const education = [
  {
    icon: GraduationCap,
    period: "2024 – 2028 (Expected)",
    title: "B.E Computer Science and Engineering",
    place: "Sri Shakthi Institute of Engineering and Technology",
    detail: "CGPA: 7.4 · Currently in third year",
  },
  {
    icon: School,
    period: "Higher Secondary",
    title: "Higher Secondary Certificate (+2)",
    place: "",
    detail: "Percentage: 92%",
  },
  {
    icon: School,
    period: "10th Standard",
    title: "SSLC / 10th Standard",
    place: "",
    detail: "Percentage: 90%",
  },
];

const strengths = [
  { icon: Target, title: "Problem-Solving Mindset", body: "Breaking problems down before writing code." },
  { icon: Users, title: "Team Collaboration", body: "Working closely with teammates on shared goals." },
  { icon: Repeat, title: "Adaptability", body: "Comfortable adjusting to new tools and situations." },
  { icon: Zap, title: "Fast Learning", body: "Picking up new concepts quickly and applying them." },
  { icon: Speech, title: "Clear Communication", body: "Explaining ideas simply and directly." },
  { icon: Eye, title: "Attention to Detail", body: "Caring about the small things that make software work." },
];

const languages = [
  { name: "English", level: "Fluent" },
  { name: "Malayalam", level: "Known" },
  { name: "Hindi", level: "Basic" },
  { name: "Tamil", level: "Basic Reading" },
];

const hobbies = [
  { icon: Gamepad2, label: "Gaming" },
  { icon: Music, label: "Music" },
  { icon: Trophy, label: "Cricket" },
  { icon: Brush, label: "Drawing" },
  { icon: Blocks, label: "Learning New Technologies" },
];

export function Profile() {
  return (
    <>
      <section id="education" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading eyebrow="07 — Academics" title="Education" />
          <ol className="relative mt-14 mx-auto max-w-3xl border-l border-border pl-8">
            {education.map((item, i) => (
              <Reveal as="li" key={item.title} delay={i * 100} className="relative pb-10 last:pb-0">
                <span className="absolute -left-[2.6rem] flex h-9 w-9 items-center justify-center rounded-full border border-border bg-card">
                  <item.icon className="h-4 w-4 text-primary" />
                </span>
                <div className="glass rounded-2xl p-6">
                  <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-cyan">
                    {item.period}
                  </p>
                  <h3 className="mt-2 font-display text-lg font-semibold">{item.title}</h3>
                  {item.place ? (
                    <p className="mt-1 text-sm text-muted-foreground">{item.place}</p>
                  ) : null}
                  <p className="mt-3 text-sm text-foreground/80">{item.detail}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <section id="strengths" className="py-24">
        <div className="mx-auto max-w-6xl px-5">
          <SectionHeading
            eyebrow="08 — Strengths"
            title="Beyond the Code"
            subtitle="How I work with people and problems."
          />
          <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {strengths.map((item, i) => (
              <Reveal
                as="li"
                key={item.title}
                delay={(i % 3) * 90}
                className="glass rounded-2xl p-7 transition-transform duration-300 hover:-translate-y-1"
              >
                <item.icon className="h-5 w-5 text-violet" />
                <h3 className="mt-4 font-display text-base font-semibold">{item.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{item.body}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      <section id="languages" className="py-24">
        <div className="mx-auto grid max-w-6xl gap-6 px-5 lg:grid-cols-2">
          <Reveal className="glass rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <LanguagesIcon className="h-5 w-5 text-cyan" />
              <h2 className="font-display text-xl font-semibold">Languages</h2>
            </div>
            <ul className="mt-7 grid gap-3 sm:grid-cols-2">
              {languages.map((lang) => (
                <li
                  key={lang.name}
                  className="flex items-center justify-between rounded-xl border border-border bg-secondary/40 px-4 py-3"
                >
                  <span className="text-sm font-medium">{lang.name}</span>
                  <span className="font-mono text-xs text-muted-foreground">{lang.level}</span>
                </li>
              ))}
            </ul>
          </Reveal>

          <Reveal delay={120} className="glass rounded-3xl p-8 sm:p-10">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-5 w-5 text-violet" />
              <h2 className="font-display text-xl font-semibold">Hobbies</h2>
            </div>
            <ul className="mt-7 flex flex-wrap gap-3">
              {hobbies.map((hobby) => (
                <li
                  key={hobby.label}
                  className="flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-4 py-2.5 text-sm transition-colors hover:bg-secondary"
                >
                  <hobby.icon className="h-4 w-4 text-cyan" />
                  {hobby.label}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>
    </>
  );
}
