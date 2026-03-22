export function Programmes() {
  return (
    <section id="programmes" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-[#0a4da2]">
            What We Offer
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Two Paths to Your Matric
          </h2>
        </div>

        <div className="grid gap-6 md:grid-cols-2">
          <div className="rounded-lg border-l-4 border-l-[#f5b731] bg-[#f9f9f7] p-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[#f5b731]">
              Programme 1
            </p>
            <h3 className="mb-3 text-xl font-extrabold text-foreground">
              Matric Tuition &amp; Exam Prep
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              Extra lessons for current Grade 12 learners. We provide small
              group teaching for better support, assistance with assignments and
              exam preparation, with a focus on improving results and building
              confidence.
            </p>
          </div>

          <div className="rounded-lg border-l-4 border-l-[#0a4da2] bg-[#f9f9f7] p-8">
            <p className="mb-2 text-[10px] font-bold uppercase tracking-[2px] text-[#0a4da2]">
              Programme 2
            </p>
            <h3 className="mb-3 text-xl font-extrabold text-foreground">
              Adult Matric Completion
            </h3>
            <p className="text-sm leading-relaxed text-muted-foreground">
              A second chance to obtain your Grade 12 certificate. Flexible
              evening classes in a supportive learning environment with qualified
              and dedicated educators. Adults aged 18–65 welcome.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
