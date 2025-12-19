"use client";

import { motion } from "framer-motion";
import {
    Trees,
    Hammer,
    Droplets,
    Cog,
    Sun,
    ClipboardCheck,
    Package,
    Ship
} from "lucide-react";

const steps = [
    {
        icon: Trees,
        title: "1. Harvesting",
        description: "Mature coconuts are carefully harvested from our sustainable palm groves.",
    },
    {
        icon: Hammer,
        title: "2. Extraction",
        description: "Husks are separated from the nuts, beginning the raw material collection.",
    },
    {
        icon: Droplets,
        title: "3. Retting",
        description: "Husks are soaked in water to soften the fibers naturally.",
    },
    {
        icon: Cog,
        title: "4. Defibering",
        description: "Mechanical drums extract the clean coir fibers from the husks.",
    },
    {
        icon: Sun,
        title: "5. Drying",
        description: "Fibers and pith are naturally sun-dried to reduce moisture content.",
    },
    {
        icon: ClipboardCheck,
        title: "6. Quality Check",
        description: "Rigorous sorting and testing for EC, pH, and impurities (sand/stones).",
    },
    {
        icon: Package,
        title: "7. Compression",
        description: "Processed material is hydraulically compressed into 5kg or 650g blocks.",
    },
    {
        icon: Ship,
        title: "8. Shipping",
        description: "Finished goods happen to Container loading & export to global destinations.",
    },
];

export function ProcessTimeline() {
    return (
        <section id="process" className="py-20 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-16">
                    <span className="text-primary font-semibold tracking-wider uppercase">Our Journey</span>
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mt-2">
                        From Husk to Premium Coir
                    </h2>
                    <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
                        A sustainable cycle of transforming nature's bounty into high-value horticultural products.
                    </p>
                </div>

                {/* Desktop Horizontal Timeline */}
                <div className="relative hidden lg:block">
                    {/* Connecting Line */}
                    <div className="absolute top-1/2 left-0 w-full h-1 bg-border -translate-y-1/2 rounded-full" />
                    <motion.div
                        className="absolute top-1/2 left-0 h-1 bg-primary -translate-y-1/2 rounded-full origin-left"
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1.5, ease: "easeInOut" }}
                    />

                    <div className="grid grid-cols-8 gap-4">
                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 50 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ delay: index * 0.15 }}
                                className="relative z-10 flex flex-col items-center group"
                            >
                                <div className="w-16 h-16 rounded-full bg-background border-4 border-primary/20 text-primary flex items-center justify-center shadow-sm group-hover:border-primary group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300 transform group-hover:scale-110 cursor-pointer">
                                    <step.icon className="w-8 h-8" />
                                </div>
                                <div className="mt-6 text-center px-1">
                                    <h3 className="font-bold text-sm text-foreground mb-2 whitespace-nowrap">{step.title}</h3>
                                    <p className="text-xs text-muted-foreground leading-tight hidden group-hover:block transition-all absolute top-full left-1/2 -translate-x-1/2 w-48 bg-card p-3 rounded-lg shadow-lg border border-border z-20">
                                        {step.description}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                {/* Mobile Vertical Timeline */}
                <div className="lg:hidden relative border-l-2 border-border ml-8 space-y-10 pl-8 py-4">
                    {steps.map((step, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, x: -20 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="relative"
                        >
                            <div className="absolute top-0 -left-[45px] w-10 h-10 rounded-full bg-background border-2 border-primary text-primary flex items-center justify-center">
                                <step.icon className="w-5 h-5" />
                            </div>
                            <div className="bg-card p-6 rounded-xl border border-border shadow-sm">
                                <h3 className="font-bold text-lg text-foreground mb-2">{step.title}</h3>
                                <p className="text-sm text-muted-foreground">{step.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
