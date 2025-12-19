"use client";

import { MessageCircle } from "lucide-react";
import { motion } from "framer-motion";

export function FloatingAction() {
    return (
        <motion.a
            href="https://wa.me/919972837971"
            target="_blank"
            rel="noopener noreferrer"
            className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#1fbd58] transition-colors flex items-center justify-center group"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
        >
            <MessageCircle className="w-8 h-8" />
            <span className="absolute right-full mr-3 text-foreground bg-background px-3 py-1 rounded-md shadow-md text-sm font-medium whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
                Get Instant Quote
            </span>
            {/* Pulse effect */}
            <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-30 animate-ping" />
        </motion.a>
    );
}
