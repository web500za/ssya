import { Check } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const eligibility = [
  "Adults who did not complete matric",
  "Current Grade 12 learners needing extra support",
  "Learners committed to improving their academic future",
];

export function About() {
  return (
    <section id="about" className="bg-[#f9f9f7] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <p className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-[#0a4da2]">
          Who We Are
        </p>
        <h2 className="mb-6 text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
          A Second Chance at Education
        </h2>
        <p className="mb-10 max-w-2xl text-base leading-relaxed text-muted-foreground">
          Southern Suburbs Youth Academy is dedicated to helping adults who
          missed the opportunity to complete their matric, as well as current
          Grade 12 learners who need extra academic support. Our qualified
          educators provide structured learning in small groups, focused on
          building confidence and achieving results.
        </p>

        <div className="mb-8">
          <h3 className="mb-4 text-sm font-bold uppercase tracking-widest text-foreground">
            Who Can Apply?
          </h3>
          <ul className="space-y-3">
            {eligibility.map((item) => (
              <li key={item} className="flex items-start gap-3">
                <Check className="mt-0.5 h-5 w-5 shrink-0 text-[#f5b731]" />
                <span className="text-muted-foreground">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <Badge className="bg-[#f5b731]/15 text-[#f5b731] border-[#f5b731]/30 hover:bg-[#f5b731]/20 text-sm px-4 py-1.5">
          COCT Bursary Available
        </Badge>
      </div>
    </section>
  );
}
