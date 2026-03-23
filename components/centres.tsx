import { MapPin, Building2, School } from "lucide-react";

const centres = [
  {
    name: "Parkwood — Grassy Park",
    type: "Main Office",
    icon: Building2,
    description:
      "Our headquarters and primary learning centre in the heart of the Southern Suburbs.",
    mapQuery: "Parkwood+Grassy+Park+Cape+Town",
    highlight: true,
  },
  {
    name: "Koeberg High School — Maitland",
    type: "Satellite Centre",
    icon: School,
    description:
      "Serving learners in the Maitland area with the same quality tuition and support.",
    mapQuery: "Koeberg+High+School+Maitland+Cape+Town",
    highlight: false,
  },
  {
    name: "Glendale High School — Mitchell's Plain",
    type: "Satellite Centre",
    icon: School,
    description:
      "Bringing SSYA programmes to the Mitchell's Plain community.",
    mapQuery: "Glendale+High+School+Mitchells+Plain+Cape+Town",
    highlight: false,
  },
];

export function Centres() {
  return (
    <section id="centres" className="bg-[#f9f9f7] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-[#0a4da2]">
            Our Centres
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Where to Find Us
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-muted-foreground">
            With three locations across Cape Town, quality matric tuition is
            always within reach.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {centres.map((centre) => (
            <div
              key={centre.name}
              className={`relative rounded-lg border p-6 transition-shadow hover:shadow-md ${
                centre.highlight
                  ? "border-[#0a4da2]/30 bg-[#0a4da2] text-white"
                  : "border-border bg-white"
              }`}
            >
              {centre.highlight && (
                <span className="absolute -top-3 left-4 rounded-full bg-[#f5b731] px-3 py-0.5 text-[10px] font-bold uppercase tracking-wider text-[#062a5c]">
                  Head Office
                </span>
              )}

              <centre.icon
                className={`mb-4 h-8 w-8 ${
                  centre.highlight ? "text-[#f5b731]" : "text-[#0a4da2]"
                }`}
              />

              <p
                className={`mb-1 text-[10px] font-bold uppercase tracking-wider ${
                  centre.highlight ? "text-white/60" : "text-muted-foreground"
                }`}
              >
                {centre.type}
              </p>

              <h3
                className={`mb-2 text-lg font-bold ${
                  centre.highlight ? "text-white" : "text-foreground"
                }`}
              >
                {centre.name}
              </h3>

              <p
                className={`mb-4 text-sm ${
                  centre.highlight ? "text-white/70" : "text-muted-foreground"
                }`}
              >
                {centre.description}
              </p>

              <a
                href={`https://www.google.com/maps/search/?api=1&query=${centre.mapQuery}`}
                target="_blank"
                rel="noopener noreferrer"
                className={`inline-flex items-center gap-1.5 rounded-md px-3 py-1.5 text-xs font-semibold transition-colors ${
                  centre.highlight
                    ? "bg-white/20 text-white hover:bg-white/30"
                    : "bg-[#0a4da2] text-white hover:bg-[#0a4da2]/90"
                }`}
              >
                <MapPin className="h-3.5 w-3.5" />
                Open in Google Maps
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
