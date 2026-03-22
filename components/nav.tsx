"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const links = [
  { href: "#about", label: "About" },
  { href: "#programmes", label: "Programmes" },
  { href: "#pricing", label: "Fees" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 w-full bg-[#0a4da2]">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#" className="text-xl font-black tracking-tight text-white">
          SSYA
        </a>

        {/* Desktop links */}
        <div className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm text-white/70 transition-colors hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex h-9 items-center rounded-lg bg-[#f5b731] px-4 text-sm font-bold text-[#062a5c] transition-colors hover:bg-[#f5b731]/90"
          >
            Enquire Now
          </a>
        </div>

        {/* Mobile menu */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger
            className="text-white md:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-6 w-6" />
          </SheetTrigger>
          <SheetContent side="right" className="w-72 bg-[#062a5c] border-[#062a5c]">
            <div className="flex flex-col gap-6 pt-8">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="text-lg font-medium text-white/80 transition-colors hover:text-white"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="mt-4 inline-flex h-10 items-center justify-center rounded-lg bg-[#f5b731] px-4 text-sm font-bold text-[#062a5c] transition-colors hover:bg-[#f5b731]/90"
              >
                Enquire Now
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
