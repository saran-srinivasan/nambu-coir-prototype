"use client";

import { motion } from "framer-motion";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { BadgeCheck, Globe, Factory, Leaf } from "lucide-react";

const STATS = [
    { label: "Years Experience", value: 3, suffix: "+" },
    { label: "Manufacturing Units", value: 3, suffix: "" },
    { label: "Products", value: 15, suffix: "+" },
    { label: "Global Partners", value: 1, suffix: "" },
];

export function About() {
    const { ref, inView } = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    return (
        <section id="about" className="py-20 bg-muted/30">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    {/* Image / Visuals */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="relative"
                    >
                        <div className="relative h-[500px] w-full rounded-2xl overflow-hidden shadow-2xl">
                            <Image
                                src="https://images.unsplash.com/photo-1591857177580-dc82b9ac4e10?q=80&w=2148&auto=format&fit=crop"
                                alt="Nambu Coir Manufacturing"
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                            <div className="absolute bottom-6 left-6 text-white max-w-xs">
                                <p className="font-bold text-lg">Excellence in every block</p>
                                <p className="text-sm opacity-80">Our Thanjavur facility uses state-of-the-art compression technology.</p>
                            </div>
                        </div>
                        {/* Floating Badge */}
                        <div className="absolute -bottom-6 -right-6 bg-background p-6 rounded-xl shadow-xl border border-border hidden md:block">
                            <div className="flex items-center gap-3">
                                <div className="p-3 bg-secondary/10 rounded-full text-secondary">
                                    <BadgeCheck className="w-8 h-8" />
                                </div>
                                <div>
                                    <p className="font-bold text-xl text-foreground">ISO Certified</p>
                                    <p className="text-xs text-muted-foreground">Quality Management</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Content */}
                    <div className="space-y-8">
                        <div>
                            <span className="text-primary font-semibold tracking-wider uppercase">Who We Are</span>
                            <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mt-2 leading-tight">
                                Pioneering Sustainable Coir Solutions Since 2022
                            </h2>
                        </div>

                        <p className="text-muted-foreground text-lg leading-relaxed">
                            Nambu Coir Pvt Ltd is a premier manufacturer and exporter based in Thanjavur, Tamil Nadu.
                            With three state-of-the-art manufacturing units in Thanjavur, Erode, and Dindigul, we specialize
                            in producing high-quality, eco-friendly cocopeat products that meet rigorous global standards
                            (EC below 0.6, pH 5.8-6.8).
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                            <div className="flex gap-4">
                                <div className="mt-1 bg-primary/10 p-2 rounded-lg h-fit text-primary">
                                    <Globe className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">Global Reach</h4>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Exclusive partnership with CocoGrow LLC (Denver, US) for worldwide distribution.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-4">
                                <div className="mt-1 bg-secondary/10 p-2 rounded-lg h-fit text-secondary">
                                    <Leaf className="w-5 h-5" />
                                </div>
                                <div>
                                    <h4 className="font-bold text-foreground">100% Organic</h4>
                                    <p className="text-sm text-muted-foreground mt-1">
                                        Pure, biodegradable substrates ideal for hydroponics and professional horticulture.
                                    </p>
                                </div>
                            </div>
                        </div>

                        {/* Stats Counter */}
                        <div ref={ref} className="grid grid-cols-2 sm:grid-cols-4 gap-4 border-t border-border pt-8">
                            {STATS.map((stat, idx) => (
                                <div key={idx} className="text-center">
                                    <h3 className="text-3xl font-bold text-primary font-heading">
                                        {inView ? <CountUp end={stat.value} duration={2.5} /> : "0"}
                                        {stat.suffix}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">{stat.label}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
