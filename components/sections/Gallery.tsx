"use client";

import { useState, useCallback, useEffect } from "react";
import Image from "next/image";
import * as Dialog from "@radix-ui/react-dialog";
import useEmblaCarousel from "embla-carousel-react";
import { X, ChevronLeft, ChevronRight, ZoomIn } from "lucide-react";
import { Button } from "@/components/ui/button";

const GALLERY_IMAGES = [
  {
    src: "https://nambucoir.com/img/factory8.jpeg",
    alt: "Raw Coconut Husks",
    category: "Materials",
  },
  {
    src: "https://nambucoir.com/img/factory9.jpeg",
    alt: "Processing Machinery",
    category: "Factory",
  },
  {
    src: "https://nambucoir.com/img/factory10.jpeg",
    alt: "Drying Yard",
    category: "Process",
  },
  {
    src: "https://nambucoir.com/img/factory11.jpeg",
    alt: "Compressed Blocks",
    category: "Products",
  },
  {
    src: "https://nambucoir.com/img/factory12.jpeg",
    alt: "Export Loading",
    category: "Logistics",
  },
  {
    src: "https://nambucoir.com/img/factory13.jpeg",
    alt: "Greenhouse Usage",
    category: "Application",
  },
];

export function Gallery() {
  const [open, setOpen] = useState(false);
  const [initialSlide, setInitialSlide] = useState(0);
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    align: "center",
  });

  const openLightbox = (index: number) => {
    setInitialSlide(index);
    setOpen(true);
  };

  useEffect(() => {
    if (emblaApi && open) {
      emblaApi.scrollTo(initialSlide, true);
    }
  }, [emblaApi, open, initialSlide]);

  const scrollPrev = useCallback(
    () => emblaApi && emblaApi.scrollPrev(),
    [emblaApi]
  );
  const scrollNext = useCallback(
    () => emblaApi && emblaApi.scrollNext(),
    [emblaApi]
  );

  return (
    <section id="gallery" className="py-20 bg-background">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <span className="text-primary font-semibold tracking-wider uppercase">
            Our World
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mt-2">
            Gallery & Infrastructure
          </h2>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {GALLERY_IMAGES.map((img, idx) => (
            <div
              key={idx}
              className="group relative aspect-square overflow-hidden rounded-xl cursor-pointer bg-muted"
              onClick={() => openLightbox(idx)}
            >
              <Image
                src={img.src}
                alt={img.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors flex items-center justify-center opacity-0 group-hover:opacity-100">
                <ZoomIn className="text-white w-8 h-8 drop-shadow-lg" />
              </div>
            </div>
          ))}
        </div>

        <Dialog.Root open={open} onOpenChange={setOpen}>
          <Dialog.Portal>
            <Dialog.Overlay className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md animate-in fade-in" />
            <Dialog.Content className="fixed inset-0 z-50 flex items-center justify-center pointer-events-none">
              <div className="w-full max-w-5xl px-4 pointer-events-auto relative">
                {/* Close Button */}
                <Dialog.Close asChild>
                  <button className="absolute -top-12 right-4 text-white hover:text-primary transition-colors">
                    <X className="w-8 h-8" />
                  </button>
                </Dialog.Close>

                {/* Carousel */}
                <div className="overflow-hidden rounded-lg" ref={emblaRef}>
                  <div className="flex">
                    {GALLERY_IMAGES.map((img, idx) => (
                      <div
                        key={idx}
                        className="relative flex-[0_0_100%] min-w-0 aspect-video bg-black"
                      >
                        <Image
                          src={img.src}
                          alt={img.alt}
                          fill
                          className="object-contain"
                        />
                        <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent text-white">
                          <p className="font-bold text-lg">{img.alt}</p>
                          <p className="text-sm opacity-80">{img.category}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Navigation */}
                <button
                  onClick={scrollPrev}
                  className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 lg:-translate-x-16 p-2 rounded-full sm:bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <ChevronLeft className="w-10 h-10" />
                </button>
                <button
                  onClick={scrollNext}
                  className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/2 lg:translate-x-16 p-2 rounded-full sm:bg-white/10 hover:bg-white/20 text-white transition-all"
                >
                  <ChevronRight className="w-10 h-10" />
                </button>
              </div>
            </Dialog.Content>
          </Dialog.Portal>
        </Dialog.Root>
      </div>
    </section>
  );
}
