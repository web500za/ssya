import { Clock, MapPin } from "lucide-react";

export function Schedule() {
  return (
    <section className="bg-[#f9f9f7] py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-[#0a4da2]">
            Class Schedule
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            When &amp; Where
          </h2>
        </div>

        <div className="mx-auto grid max-w-2xl gap-6 sm:grid-cols-2">
          <div className="flex gap-4 rounded-lg bg-white p-6">
            <Clock className="mt-0.5 h-6 w-6 shrink-0 text-[#0a4da2]" />
            <div>
              <h3 className="mb-2 font-bold text-foreground">Class Times</h3>
              <div className="space-y-1 text-sm text-muted-foreground">
                <p>Monday &amp; Thursday — Evening classes</p>
                <p>Saturday — 08:30 to 14:30</p>
              </div>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg bg-white p-6">
            <MapPin className="mt-0.5 h-6 w-6 shrink-0 text-[#0a4da2]" />
            <div>
              <h3 className="mb-2 font-bold text-foreground">Location</h3>
              <p className="mb-3 text-sm text-muted-foreground">
                Glendale High School
                <br />
                Southern Suburbs, Cape Town
              </p>
              <a
                href="https://www.google.com/maps/search/?api=1&query=Glendale+High+School+Cape+Town"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-md bg-[#0a4da2] px-3 py-1.5 text-xs font-semibold text-white transition-colors hover:bg-[#0a4da2]/90"
              >
                <MapPin className="h-3.5 w-3.5" />
                Open in Google Maps
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
