"use client";

import * as Dialog from "@radix-ui/react-dialog";
import { X, Check } from "lucide-react";
import Image from "next/image";
import { Product } from "@/lib/products";
import { Button } from "@/components/ui/button";

interface ProductModalProps {
    product: Product | null;
    isOpen: boolean;
    onClose: () => void;
}

export function ProductModal({ product, isOpen, onClose }: ProductModalProps) {
    if (!product) return null;

    return (
        <Dialog.Root open={isOpen} onOpenChange={onClose}>
            <Dialog.Portal>
                <Dialog.Overlay className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0" />
                <Dialog.Content className="fixed left-[50%] top-[50%] z-50 grid w-full max-w-4xl translate-x-[-50%] translate-y-[-50%] gap-4 border border-border bg-background p-0 shadow-lg duration-200 data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[state=closed]:slide-out-to-left-1/2 data-[state=closed]:slide-out-to-top-[48%] data-[state=open]:slide-in-from-left-1/2 data-[state=open]:slide-in-from-top-[48%] rounded-xl overflow-hidden md:grid-cols-2">

                    {/* Image Side */}
                    <div className="relative h-64 md:h-full bg-muted">
                        <Image
                            src={product.image}
                            alt={product.name}
                            fill
                            className="object-cover"
                        />
                    </div>

                    {/* Content Side */}
                    <div className="flex flex-col p-6 md:p-8 max-h-[90vh] overflow-y-auto">
                        <div className="flex justify-between items-start mb-4">
                            <div>
                                <Dialog.Title className="text-2xl font-bold font-heading">{product.name}</Dialog.Title>
                                <span className="inline-block mt-2 px-3 py-1 bg-secondary/10 text-secondary text-xs font-semibold rounded-full">
                                    {product.category}
                                </span>
                            </div>
                            <Dialog.Close asChild>
                                <button className="p-2 rounded-full hover:bg-muted transition-colors opacity-70 hover:opacity-100">
                                    <X className="w-5 h-5" />
                                </button>
                            </Dialog.Close>
                        </div>

                        <div className="space-y-6">
                            <div>
                                <h4 className="font-semibold text-lg mb-2">Description</h4>
                                <p className="text-muted-foreground leading-relaxed">{product.description}</p>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">Key Features</h4>
                                <ul className="space-y-2">
                                    {product.features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center text-sm text-foreground/80">
                                            <Check className="w-4 h-4 text-secondary mr-2" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div>
                                <h4 className="font-semibold text-lg mb-2">Specifications</h4>
                                <div className="grid grid-cols-2 gap-4">
                                    {Object.entries(product.specifications).map(([key, value]) => (
                                        <div key={key} className="bg-muted/50 p-3 rounded-lg">
                                            <span className="block text-xs text-muted-foreground uppercase">{key}</span>
                                            <span className="font-medium text-sm">{value}</span>
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="pt-4 mt-auto">
                                <Button className="w-full" size="lg" onClick={() => {
                                    onClose();
                                    const contactSection = document.getElementById("contact");
                                    if (contactSection) {
                                        contactSection.scrollIntoView({ behavior: "smooth" });
                                        // Optimistically try to update the form message (if implemented)
                                        // or relies on user to type. 
                                    }
                                }}>
                                    Request Quote
                                </Button>
                            </div>
                        </div>
                    </div>
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
