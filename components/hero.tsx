export function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-[#0a4da2] via-[#0a4da2] to-[#062a5c] py-24 md:py-32">
      {/* Decorative angled gold accent */}
      <div className="absolute -right-20 -top-20 h-80 w-80 rotate-[15deg] bg-[#f5b731]/10" />
      <div className="absolute -left-16 bottom-0 h-64 w-64 rotate-[-20deg] bg-[#f5b731]/5" />

      <div className="relative mx-auto max-w-6xl px-6">
        <p className="mb-4 text-[11px] font-bold uppercase tracking-[3px] text-[#f5b731]">
          Where Education Matters
        </p>
        <h1 className="mb-4 max-w-xl text-4xl font-light leading-[1.1] text-white md:text-5xl lg:text-6xl">
          It&apos;s Never Too Late
          <br />
          to{" "}
          <span className="font-black text-[#f5b731]">
            Finish Your Matric
          </span>
        </h1>
        <p className="mb-2 text-lg text-white/60">
          Supportive. Affordable. Life-changing.
        </p>
        <p className="mb-8 text-sm text-white/45">
          Adults aged 18–65. Monday, Thursday &amp; Saturday classes.
        </p>
        <div className="flex flex-wrap gap-3">
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-lg bg-[#f5b731] px-6 text-sm font-extrabold text-[#062a5c] transition-colors hover:bg-[#f5b731]/90"
          >
            Enquire Now
          </a>
          <a
            href="#about"
            className="inline-flex h-10 items-center rounded-lg border border-white/30 px-6 text-sm font-semibold text-white transition-colors hover:bg-white/10"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
}
