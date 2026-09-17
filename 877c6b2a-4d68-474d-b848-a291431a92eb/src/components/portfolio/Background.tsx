const particles = [
  { left: "8%", top: "22%", delay: "0s", size: 6 },
  { left: "24%", top: "68%", delay: "1.4s", size: 4 },
  { left: "42%", top: "14%", delay: "2.2s", size: 5 },
  { left: "61%", top: "54%", delay: "0.8s", size: 3 },
  { left: "78%", top: "28%", delay: "3s", size: 6 },
  { left: "90%", top: "74%", delay: "1.9s", size: 4 },
];

export function Background() {
  return (
    <div aria-hidden className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
      <div className="absolute inset-0 grid-backdrop opacity-40" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_35%,var(--color-background)_85%)]" />
      <div className="animate-drift absolute -left-40 -top-40 h-[34rem] w-[34rem] rounded-full bg-primary/20 blur-[130px]" />
      <div className="animate-drift absolute -right-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-violet/20 blur-[140px] [animation-delay:-6s]" />
      <div className="animate-drift absolute bottom-0 left-1/3 h-[26rem] w-[26rem] rounded-full bg-cyan/10 blur-[130px] [animation-delay:-11s]" />
      {particles.map((p) => (
        <span
          key={p.left + p.top}
          className="animate-float-y absolute rounded-full bg-cyan/50 shadow-[0_0_12px_2px] shadow-cyan/30"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            animationDelay: p.delay,
          }}
        />
      ))}
    </div>
  );
}
