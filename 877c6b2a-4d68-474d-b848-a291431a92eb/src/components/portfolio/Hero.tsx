import { ArrowRight, Mail, Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import heroVisual from "@/assets/hero-visual.jpg";

const stack = ["Java", "Python", "C", "Flutter", "MySQL", "Android Studio"];

export function Hero() {
  return (
    <section id="home" className="relative overflow-hidden pb-20 pt-32 sm:pb-28 sm:pt-40">
      <div className="mx-auto grid max-w-6xl items-center gap-14 px-5 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <Reveal>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 font-mono text-[11px] uppercase tracking-[0.18em] text-cyan">
              <Sparkles className="h-3.5 w-3.5" />
              Open to Internship Opportunities
            </span>
          </Reveal>

          <Reveal delay={90}>
            <h1 className="mt-7 text-4xl font-semibold leading-[1.08] sm:text-5xl lg:text-6xl">
              Hi, I&apos;m <span className="text-gradient">Deepak S</span>
            </h1>
            <p className="mt-4 font-display text-lg text-foreground/85 sm:text-xl">
              Computer Science &amp; Engineering Student
            </p>
          </Reveal>

          <Reveal delay={170}>
            <p className="mt-5 max-w-xl text-muted-foreground">
              A motivated third-year Computer Science and Engineering student interested in software
              development, full-stack web development, mobile application development, databases, and
              Artificial Intelligence.
            </p>
          </Reveal>

          <Reveal delay={240}>
            <div className="mt-9 flex flex-wrap gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                style={{ boxShadow: "var(--shadow-glow)" }}
              >
                Explore My Work
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/40 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </div>
          </Reveal>

          <Reveal delay={320}>
            <ul className="mt-10 flex flex-wrap gap-2">
              {stack.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-border px-3 py-1.5 font-mono text-xs text-muted-foreground"
                >
                  {item}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal delay={200} className="relative">
          <div
            className="glass animate-float-y relative overflow-hidden rounded-3xl p-2"
            style={{ boxShadow: "var(--shadow-glow)" }}
          >
            <img
              src={heroVisual}
              alt="Abstract futuristic developer workspace with floating glass code panels"
              width={1024}
              height={1024}
              className="h-full w-full rounded-2xl object-cover"
            />
          </div>
          <div className="glass absolute -bottom-6 left-4 rounded-2xl px-4 py-3 sm:left-8">
            <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-muted-foreground">
              Focus
            </p>
            <p className="font-display text-sm">Software · Web · Mobile · AI</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
