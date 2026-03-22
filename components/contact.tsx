"use client";

import { useState } from "react";
import { Phone, MessageCircle, Mail, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const contactDetails = [
  { icon: Phone, label: "Call", value: "083 561 5572", href: "tel:+27835615572" },
  {
    icon: MessageCircle,
    label: "WhatsApp",
    value: "060 410 0509",
    href: "https://wa.me/27604100509",
  },
  {
    icon: Mail,
    label: "Email",
    value: "southernsuburbsyouthacademy@gmail.com",
    href: "mailto:southernsuburbsyouthacademy@gmail.com",
  },
  { icon: MapPin, label: "Location", value: "Glendale High School, Southern Suburbs, Cape Town" },
];

export function Contact() {
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);

    const formspreeId = process.env.NEXT_PUBLIC_FORMSPREE_ID;
    if (!formspreeId) {
      const name = data.get("name");
      const phone = data.get("phone");
      const message = data.get("message");
      window.location.href = `mailto:southernsuburbsyouthacademy@gmail.com?subject=Enquiry from ${name}&body=Phone: ${phone}%0A%0A${message}`;
      return;
    }

    await fetch(`https://formspree.io/f/${formspreeId}`, {
      method: "POST",
      body: data,
      headers: { Accept: "application/json" },
    });

    setSubmitted(true);
  }

  return (
    <section id="contact" className="bg-white py-20 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 text-center">
          <p className="mb-2 text-[11px] font-bold uppercase tracking-[2px] text-[#0a4da2]">
            Get In Touch
          </p>
          <h2 className="text-3xl font-extrabold tracking-tight text-foreground md:text-4xl">
            Ready to Start?
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-2">
          {/* Contact details */}
          <div className="space-y-6">
            <p className="text-muted-foreground">
              Have questions about our programmes or registration? Get in touch
              — we&apos;d love to help you take the next step.
            </p>
            <div className="space-y-4">
              {contactDetails.map((detail) => (
                <div key={detail.label} className="flex items-start gap-3">
                  <detail.icon className="mt-0.5 h-5 w-5 shrink-0 text-[#0a4da2]" />
                  <div>
                    <p className="text-xs font-bold uppercase tracking-wider text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        target={detail.href.startsWith("http") ? "_blank" : undefined}
                        rel={detail.href.startsWith("http") ? "noopener noreferrer" : undefined}
                        className="text-sm font-medium text-foreground transition-colors hover:text-[#0a4da2]"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="text-sm text-foreground">{detail.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* WhatsApp CTA */}
            <a
              href="https://wa.me/27604100509"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#25D366] px-6 text-sm font-bold text-white transition-colors hover:bg-[#22c55e]"
            >
              <MessageCircle className="h-5 w-5" />
              Chat on WhatsApp
            </a>
          </div>

          {/* Enquiry form */}
          <div className="rounded-lg border bg-[#f9f9f7] p-8">
            {submitted ? (
              <div className="flex h-full items-center justify-center text-center">
                <div>
                  <p className="mb-2 text-2xl font-bold text-[#0a4da2]">
                    Thank you!
                  </p>
                  <p className="text-muted-foreground">
                    We&apos;ve received your enquiry and will be in touch soon.
                  </p>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="name" className="mb-1 block text-sm font-medium">
                    Full Name <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your full name"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="mb-1 block text-sm font-medium">
                    Phone Number <span className="text-red-500">*</span>
                  </label>
                  <Input
                    id="phone"
                    name="phone"
                    type="tel"
                    required
                    placeholder="e.g. 083 000 0000"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="mb-1 block text-sm font-medium">
                    Email <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                  />
                </div>
                <div>
                  <label htmlFor="programme" className="mb-1 block text-sm font-medium">
                    Programme Interest
                  </label>
                  <select
                    id="programme"
                    name="programme"
                    className="flex h-10 w-full items-center rounded-lg border border-input bg-transparent px-3 py-2 text-sm transition-colors outline-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50"
                    defaultValue=""
                  >
                    <option value="" disabled>
                      Select a programme
                    </option>
                    <option value="matric-tuition">
                      Matric Tuition &amp; Exam Prep
                    </option>
                    <option value="adult-completion">
                      Adult Matric Completion
                    </option>
                  </select>
                </div>
                <div>
                  <label htmlFor="message" className="mb-1 block text-sm font-medium">
                    Message <span className="text-muted-foreground text-xs">(optional)</span>
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    placeholder="Any questions or additional info..."
                    rows={3}
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-[#0a4da2] text-white font-bold hover:bg-[#0a4da2]/90"
                >
                  Send Enquiry
                </Button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
