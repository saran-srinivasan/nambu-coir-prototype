import { Navbar } from "@/components/sections/Navbar";
import { Hero } from "@/components/sections/Hero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { ProductsGrid } from "@/components/sections/ProductsGrid";
import { About } from "@/components/sections/About";
import { Gallery } from "@/components/sections/Gallery";
import { Contact } from "@/components/sections/Contact";
import { Footer } from "@/components/sections/Footer";
import { FloatingAction } from "@/components/sections/FloatingAction";

export default function Home() {
  return (
    <main className="min-h-screen relative">
      <Navbar />
      <Hero />
      <ProcessTimeline />
      <ProductsGrid />
      <About />
      <Gallery />
      <Contact />
      <Footer />
      <FloatingAction />
    </main>
  );
}
