import { Clock, CalendarDays } from "lucide-react";

export function Schedule() {
  return (
    <section className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-[#0a4da2]">
            Class Schedule
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            When We Meet
          </h2>
        </div>

        <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-3">
          <div className="flex gap-4 rounded-lg border bg-[#f9f9f7] p-6">
            <CalendarDays className="mt-0.5 h-6 w-6 shrink-0 text-[#0a4da2]" />
            <div>
              <h3 className="mb-1 font-bold text-foreground">Monday</h3>
              <p className="text-sm text-muted-foreground">Evening classes</p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border bg-[#f9f9f7] p-6">
            <CalendarDays className="mt-0.5 h-6 w-6 shrink-0 text-[#0a4da2]" />
            <div>
              <h3 className="mb-1 font-bold text-foreground">Thursday</h3>
              <p className="text-sm text-muted-foreground">Evening classes</p>
            </div>
          </div>

          <div className="flex gap-4 rounded-lg border bg-[#f9f9f7] p-6">
            <Clock className="mt-0.5 h-6 w-6 shrink-0 text-[#0a4da2]" />
            <div>
              <h3 className="mb-1 font-bold text-foreground">Saturday</h3>
              <p className="text-sm text-muted-foreground">08:30 – 14:30</p>
            </div>
          </div>
        </div>

        <p className="mx-auto mt-6 max-w-lg text-center text-sm text-muted-foreground">
          Classes run at all three centres. Check with us for the schedule at
          your nearest location.
        </p>
      </div>
    </section>
  );
}
