import Link from "next/link";
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-foreground text-white pt-16 pb-8">
            <div className="container mx-auto px-4 md:px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
                    {/* Company Info */}
                    <div className="space-y-4">
                        <h3 className="text-2xl font-bold font-heading text-primary-foreground">Nambu Coir</h3>
                        <p className="text-gray-300 leading-relaxed">
                            Leading manufacturer of eco-friendly organic coir products. Committed to sustainability, quality, and global excellence.
                        </p>
                        <div className="flex gap-4 pt-2">
                            <Link href="#" className="hover:text-primary transition-colors"><Facebook className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Instagram className="w-5 h-5" /></Link>
                            <Link href="#" className="hover:text-primary transition-colors"><Linkedin className="w-5 h-5" /></Link>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="space-y-4">
                        <h4 className="text-lg font-bold font-heading text-primary-foreground">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/" className="text-gray-300 hover:text-white transition-colors">Home</Link></li>
                            <li><Link href="#products" className="text-gray-300 hover:text-white transition-colors">Products</Link></li>
                            <li><Link href="#process" className="text-gray-300 hover:text-white transition-colors">Our Process</Link></li>
                            <li><Link href="#gallery" className="text-gray-300 hover:text-white transition-colors">Gallery</Link></li>
                            <li><Link href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact Details */}
                    <div className="space-y-4 lg:col-span-2">
                        <h4 className="text-lg font-bold font-heading text-primary-foreground">Contact Us</h4>
                        <div className="space-y-4">
                            <div className="flex items-start gap-3 text-gray-300">
                                <MapPin className="w-5 h-5 text-primary shrink-0 mt-1" />
                                <p>No. 253/1C, Chidambarapatti Village, Manayeripatti post, Palayapatti North, Boothalur TK, Tanjore – 613402, Tamil Nadu</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Phone className="w-5 h-5 text-primary shrink-0" />
                                <p>+91 9972837971</p>
                            </div>
                            <div className="flex items-center gap-3 text-gray-300">
                                <Mail className="w-5 h-5 text-primary shrink-0" />
                                <p>contactus@nambucoir.com</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-sm text-gray-400 text-center md:text-left">
                        &copy; {new Date().getFullYear()} Nambu Coir Private Limited. All rights reserved.
                    </p>
                    <div className="flex gap-6 text-sm text-gray-400">
                        <Link href="#" className="hover:text-white">Privacy Policy</Link>
                        <Link href="#" className="hover:text-white">Terms of Service</Link>
                    </div>
                </div>
            </div>
        </footer>
    );
}
