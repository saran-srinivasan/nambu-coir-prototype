"use client";

import { useState, useCallback, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import Autoplay from "embla-carousel-autoplay";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image";

// Placeholder images - would normally be actual assets
const SLIDES = [
  {
    id: 1,
    image: "/images/coconutfarm.jpg",
    title: "Sustainable Coir Solutions",
    subtitle: "From Nature to Your Garden. Premium Eco-Friendly Products.",
  },
  {
    id: 2,
    image: "https://www.pexels.com/photo/green-coconut-tree-lot-2371778/",
    title: "Eco-Friendly & Organic",
    subtitle: "100% Biodegradable Coir Peat for Advanced Horticulture.",
  },
  {
    id: 3,
    image: "https://www.pexels.com/photo/green-coconut-tree-lot-2371778/",
    title: "Global Export Quality",
    subtitle: "Serving sustainable agriculture needs worldwide.",
  },
];

export function Hero() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    Autoplay({ delay: 5000, stopOnInteraction: false }),
  ]);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  const onSelect = useCallback((emblaApi: any) => {
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, []);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect(emblaApi);
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="relative w-full h-screen overflow-hidden bg-background">
      <div className="absolute inset-0 z-0" ref={emblaRef}>
        <div className="flex h-full">
          {SLIDES.map((slide) => (
            <div className="relative min-w-full h-full" key={slide.id}>
              <Image
                src={slide.image}
                alt={slide.title}
                fill
                priority
                className="object-cover"
              />
              {/* Overlay Gradient */}
              <div className="absolute inset-0 bg-black/40" />
            </div>
          ))}
        </div>
      </div>

      {/* Content Overlay */}
      <div className="absolute inset-0 z-10 flex flex-col justify-center items-center text-center text-white px-4">
        <motion.div
          key={selectedIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-4xl space-y-6"
        >
          <span className="inline-block py-1 px-3 rounded-full bg-primary/20 backdrop-blur-sm border border-primary/30 text-primary-foreground text-sm font-semibold tracking-wider uppercase mb-2">
            Nambu Coir Private Limited
          </span>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight drop-shadow-lg">
            {SLIDES[selectedIndex].title}
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-gray-200 max-w-2xl mx-auto font-light drop-shadow-md">
            {SLIDES[selectedIndex].subtitle}
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-8">
            <Button
              size="lg"
              className="text-lg px-8 h-14 bg-primary hover:bg-primary/90 shadow-xl shadow-primary/20"
            >
              Explore Products
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="text-lg px-8 h-14 bg-white/10 hover:bg-white/20 text-white border-white/40 backdrop-blur-sm shadow-xl"
            >
              Get A Quote
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </div>
        </motion.div>
      </div>

      {/* Navigation - Hidden on very small screens if needed, but useful */}
      <button
        onClick={scrollPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all hidden md:block"
      >
        <ChevronLeft className="w-8 h-8" />
      </button>
      <button
        onClick={scrollNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 p-2 rounded-full bg-white/10 backdrop-blur-md hover:bg-white/20 text-white transition-all hidden md:block"
      >
        <ChevronRight className="w-8 h-8" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 flex gap-2">
        {SLIDES.map((_, index) => (
          <button
            key={index}
            onClick={() => emblaApi?.scrollTo(index)}
            className={`w-3 h-3 rounded-full transition-all ${
              index === selectedIndex
                ? "bg-primary w-8"
                : "bg-white/50 hover:bg-white/80"
            }`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
