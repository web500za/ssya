import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { About } from "@/components/about";
import { Programmes } from "@/components/programmes";
import { WhyChooseUs } from "@/components/why-choose-us";
import { Pricing } from "@/components/pricing";
import { Centres } from "@/components/centres";
import { Schedule } from "@/components/schedule";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <About />
        <Programmes />
        <WhyChooseUs />
        <Pricing />
        <Centres />
        <Schedule />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
