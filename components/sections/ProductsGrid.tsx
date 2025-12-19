"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { PRODUCTS, Product } from "@/lib/products";
import { ProductModal } from "./ProductModal";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { ArrowRight, Leaf } from "lucide-react";
import { cn } from "@/lib/utils";

const CATEGORIES = ["All", "Grow Bags", "Blocks", "Chips", "Fiber", "Loose"];

export function ProductsGrid() {
    const [filter, setFilter] = useState("All");
    const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);

    const filteredProducts = filter === "All"
        ? PRODUCTS
        : PRODUCTS.filter(p => p.category === filter);

    return (
        <section id="products" className="py-20 bg-background/50">
            <div className="container mx-auto px-4 md:px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground">Our Products</h2>
                    <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full" />
                </div>

                {/* Filters */}
                <div className="flex flex-wrap justify-center gap-2 mb-12">
                    {CATEGORIES.map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={cn(
                                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                                filter === cat
                                    ? "bg-secondary text-secondary-foreground shadow-lg shadow-secondary/20"
                                    : "bg-white border border-border text-muted-foreground hover:bg-muted"
                            )}
                        >
                            {cat}
                        </button>
                    ))}
                </div>

                {/* Grid */}
                <motion.div
                    layout
                    className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProducts.map((product) => (
                            <motion.div
                                layout
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.2 }}
                                key={product.id}
                                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                            >
                                <div className="relative h-64 overflow-hidden">
                                    <Image
                                        src={product.image}
                                        alt={product.name}
                                        fill
                                        className="object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
                                    <div className="absolute top-4 left-4">
                                        <span className="bg-white/90 backdrop-blur-sm text-foreground text-xs font-bold px-3 py-1 rounded-full flex items-center gap-1 shadow-sm">
                                            <Leaf className="w-3 h-3 text-secondary" />
                                            {product.category}
                                        </span>
                                    </div>
                                </div>

                                <div className="p-6">
                                    <h3 className="text-xl font-bold font-heading mb-2 group-hover:text-primary transition-colors">
                                        {product.name}
                                    </h3>
                                    <p className="text-muted-foreground text-sm line-clamp-2 mb-4">
                                        {product.description}
                                    </p>

                                    <div className="flex items-center justify-between mt-auto">
                                        <Button
                                            variant="ghost"
                                            className="p-0 h-auto hover:bg-transparent text-primary hover:text-primary/80"
                                            onClick={() => setSelectedProduct(product)}
                                        >
                                            Learn More <ArrowRight className="w-4 h-4 ml-1" />
                                        </Button>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>

            <ProductModal
                product={selectedProduct}
                isOpen={!!selectedProduct}
                onClose={() => setSelectedProduct(null)}
            />
        </section>
    );
}
