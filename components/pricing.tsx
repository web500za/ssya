import { Badge } from "@/components/ui/badge";

const tiers = [
  { subjects: "1–2 Subjects", price: "R350", popular: false },
  { subjects: "3–5 Subjects", price: "R550", popular: true },
  { subjects: "6–7 Subjects", price: "R700", popular: false },
];

export function Pricing() {
  return (
    <section id="pricing" className="bg-[#062a5c] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-[#f5b731]">
            Affordable Education
          </p>
          <h2 className="mb-3 text-3xl font-extrabold tracking-tight text-white md:text-4xl">
            Simple, Transparent Fees
          </h2>
          <p className="text-sm text-white/50">
            R2,000 once-off registration (includes all textbooks &amp;
            department registration)
          </p>
        </div>

        <div className="mx-auto grid max-w-3xl gap-4 sm:grid-cols-3">
          {tiers.map((tier) => (
            <div
              key={tier.subjects}
              className={`relative rounded-lg p-6 text-center ${
                tier.popular
                  ? "border-2 border-[#f5b731] bg-[#f5b731]/10"
                  : "border border-white/10 bg-white/5"
              }`}
            >
              {tier.popular && (
                <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#f5b731] text-[#062a5c] font-bold text-[10px] uppercase tracking-wider hover:bg-[#f5b731]">
                  Popular
                </Badge>
              )}
              <p className="mb-1 text-sm text-white/50">{tier.subjects}</p>
              <p className="mb-1 font-mono text-4xl font-black text-[#f5b731]">
                {tier.price}
              </p>
              <p className="text-xs text-white/40">per month</p>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-flex h-10 items-center rounded-lg bg-[#f5b731] px-6 text-sm font-extrabold text-[#062a5c] transition-colors hover:bg-[#f5b731]/90"
          >
            Enquire About Registration
          </a>
        </div>
      </div>
    </section>
  );
}
