import { ArrowUp, Mail, MapPin, Phone, Send } from "lucide-react";
import { useEffect, useState } from "react";
import { toast } from "sonner";
import { Reveal, SectionHeading } from "./Reveal";
import { cn } from "@/lib/utils";

const EMAIL = "deepaksd9207063@gmail.com";
const PHONE = "+91 8129663932";

const details = [
  { icon: Mail, label: "Email", value: EMAIL, href: `mailto:${EMAIL}` },
  { icon: Phone, label: "Phone", value: PHONE, href: "tel:+918129663932" },
  { icon: MapPin, label: "Location", value: "Palakkad, Kerala, India", href: undefined },
];

const navLinks = [
  { id: "home", label: "Home" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "projects", label: "Projects" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "contact", label: "Contact" },
];

export function Contact() {
  return (
    <section id="contact" className="py-24">
      <div className="mx-auto max-w-6xl px-5">
        <SectionHeading
          eyebrow="09 — Contact"
          title="Let's Build Something Together"
          subtitle="I'm currently looking to gain practical industry experience through internship or entry-level opportunities and continue developing as a well-rounded software developer."
        />

        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.1fr]">
          <Reveal className="glass rounded-3xl p-8 sm:p-10">
            <ul className="space-y-5">
              {details.map((item) => (
                <li key={item.label} className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-secondary/60">
                    <item.icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
                      {item.label}
                    </p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="break-all text-sm text-foreground transition-colors hover:text-cyan"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm">{item.value}</p>
                    )}
                  </div>
                </li>
              ))}
            </ul>

            <a
              href={`mailto:${EMAIL}`}
              className="mt-9 inline-flex items-center gap-2 rounded-full bg-[image:var(--gradient-primary)] px-6 py-3 text-sm font-semibold text-primary-foreground transition-transform hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
              style={{ boxShadow: "var(--shadow-glow)" }}
            >
              <Send className="h-4 w-4" />
              Send Email
            </a>
          </Reveal>

          <Reveal delay={120} className="glass rounded-3xl p-8 sm:p-10">
            <ContactForm />
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactForm() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const field =
    "mt-2 w-full rounded-xl border border-input bg-secondary/40 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring";

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        toast("Messaging isn't connected yet", {
          description: `This form isn't sending messages. Please email ${EMAIL} directly.`,
        });
      }}
      className="space-y-5"
    >
      <div>
        <label htmlFor="name" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Name
        </label>
        <input
          id="name"
          required
          value={form.name}
          onChange={(e) => setForm({ ...form, name: e.target.value })}
          placeholder="Your name"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="email" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Email
        </label>
        <input
          id="email"
          type="email"
          required
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          placeholder="you@example.com"
          className={field}
        />
      </div>
      <div>
        <label htmlFor="message" className="font-mono text-[10px] uppercase tracking-[0.22em] text-muted-foreground">
          Message
        </label>
        <textarea
          id="message"
          required
          rows={5}
          value={form.message}
          onChange={(e) => setForm({ ...form, message: e.target.value })}
          placeholder="Tell me about the opportunity"
          className={field}
        />
      </div>
      <button
        type="submit"
        className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-6 py-3 text-sm font-semibold transition-colors hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      >
        Send Message
        <Send className="h-4 w-4" />
      </button>
      <p className="text-xs text-muted-foreground">
        Email delivery isn&apos;t connected yet, so this form doesn&apos;t send messages. Use the
        email or phone details instead.
      </p>
    </form>
  );
}

export function Footer() {
  return (
    <footer className="border-t border-border py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-5 text-center">
        <nav aria-label="Footer navigation">
          <ul className="flex flex-wrap justify-center gap-x-5 gap-y-2">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  href={`#${link.id}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        <p className="text-sm text-muted-foreground">© 2026 Deepak S. All rights reserved.</p>
        <p className="font-mono text-xs text-muted-foreground">Designed &amp; Built with curiosity.</p>
      </div>
    </footer>
  );
}

export function BackToTop() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > 600);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <button
      type="button"
      aria-label="Back to top"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className={cn(
        "glass fixed bottom-6 right-6 z-40 flex h-11 w-11 items-center justify-center rounded-full transition-all duration-300 hover:-translate-y-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring",
        visible ? "opacity-100" : "pointer-events-none translate-y-3 opacity-0",
      )}
    >
      <ArrowUp className="h-4 w-4" />
    </button>
  );
}
