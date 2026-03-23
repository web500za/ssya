const links = [
  { href: "#about", label: "About" },
  { href: "#programmes", label: "Programmes" },
  { href: "#pricing", label: "Fees" },
  { href: "#centres", label: "Centres" },
  { href: "#contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#062a5c] py-12">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-center gap-6 text-center md:flex-row md:justify-between md:text-left">
          <div>
            <p className="text-lg font-black text-white">SSYA</p>
            <p className="text-sm text-white/50">Where Education Matters</p>
          </div>

          <div className="flex flex-wrap justify-center gap-6">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-white/50 transition-colors hover:text-white"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.facebook.com/SouthernSuburbsYouthAcademy/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-white/50 transition-colors hover:text-white"
            >
              Facebook
            </a>
          </div>
        </div>

        <div className="mt-8 border-t border-white/10 pt-6 text-center">
          <p className="text-xs text-white/30">
            &copy; {new Date().getFullYear()} Southern Suburbs Youth Academy.
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
