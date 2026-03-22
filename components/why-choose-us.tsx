import { GraduationCap, PiggyBank, CalendarCheck, Heart } from "lucide-react";

const features = [
  {
    icon: GraduationCap,
    title: "Qualified Educators",
    description:
      "Our team of dedicated, qualified teachers brings real classroom experience to every lesson.",
  },
  {
    icon: PiggyBank,
    title: "Affordable Education",
    description:
      "Structured fee plans starting from R350/month, with a COCT bursary available for qualifying students.",
  },
  {
    icon: CalendarCheck,
    title: "Structured Programmes",
    description:
      "Organised curriculum aligned with the education department, covering all matric subjects.",
  },
  {
    icon: Heart,
    title: "Confidence Building",
    description:
      "We help students build confidence, improve results, and reach their academic goals.",
  },
];

export function WhyChooseUs() {
  return (
    <section className="bg-gradient-to-br from-[#0a4da2] to-[#062a5c] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-[#f5b731]">
            Why Choose Us
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Everything You Need to Succeed
          </h2>
        </div>

        <div className="grid gap-8 sm:grid-cols-2">
          {features.map((feature) => (
            <div key={feature.title} className="flex gap-4">
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-[#f5b731]/15">
                <feature.icon className="h-6 w-6 text-[#f5b731]" />
              </div>
              <div>
                <h3 className="mb-1 text-lg font-bold text-white">
                  {feature.title}
                </h3>
                <p className="text-sm leading-relaxed text-white/60">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
