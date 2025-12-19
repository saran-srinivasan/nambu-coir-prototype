"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const formSchema = z.object({
  name: z.string().min(2, "Name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(10, "Valid phone number required"),
  company: z.string().optional(),
  message: z.string().min(10, "Message must be at least 10 characters"),
});

type FormValues = z.infer<typeof formSchema>;

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      company: "",
      message: "",
    },
  });

  async function onSubmit(data: FormValues) {
    setIsSubmitting(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log(data);
    setIsSubmitting(false);
    setSuccess(true);
    form.reset();
    setTimeout(() => setSuccess(false), 5000);
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-16">
          <span className="text-secondary font-semibold tracking-wider uppercase">
            Get In Touch
          </span>
          <h2 className="text-3xl md:text-5xl font-bold font-heading text-foreground mt-2">
            Contact Us
          </h2>
          <p className="text-muted-foreground mt-4 max-w-2xl mx-auto">
            Have questions about our products or need a custom quote? We're here
            to help.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-24">
          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl shadow-lg border border-border">
            <h3 className="text-2xl font-bold font-heading mb-6">
              Send us a Message
            </h3>
            {success ? (
              <div className="h-64 flex flex-col items-center justify-center text-center animate-in fade-in">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <Send className="w-8 h-8" />
                </div>
                <h4 className="text-xl font-bold text-green-700">
                  Message Sent!
                </h4>
                <p className="text-muted-foreground mt-2">
                  We'll get back to you shortly.
                </p>
                <Button
                  variant="outline"
                  className="mt-6"
                  onClick={() => setSuccess(false)}
                >
                  Send Another
                </Button>
              </div>
            ) : (
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="space-y-6"
              >
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium">
                      Name
                    </label>
                    <input
                      {...form.register("name")}
                      className={cn(
                        "w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                        form.formState.errors.name
                          ? "border-red-500"
                          : "border-input"
                      )}
                      placeholder="John Doe"
                    />
                    {form.formState.errors.name && (
                      <p className="text-xs text-red-500">
                        {form.formState.errors.name.message}
                      </p>
                    )}
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="phone" className="text-sm font-medium">
                      Phone
                    </label>
                    <input
                      {...form.register("phone")}
                      className={cn(
                        "w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                        form.formState.errors.phone
                          ? "border-red-500"
                          : "border-input"
                      )}
                      placeholder="+91..."
                    />
                    {form.formState.errors.phone && (
                      <p className="text-xs text-red-500">
                        {form.formState.errors.phone.message}
                      </p>
                    )}
                  </div>
                </div>

                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Email
                  </label>
                  <input
                    {...form.register("email")}
                    className={cn(
                      "w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all",
                      form.formState.errors.email
                        ? "border-red-500"
                        : "border-input"
                    )}
                    placeholder="john@example.com"
                  />
                  {form.formState.errors.email && (
                    <p className="text-xs text-red-500">
                      {form.formState.errors.email.message}
                    </p>
                  )}
                </div>

                <div className="space-y-2">
                  <label htmlFor="company" className="text-sm font-medium">
                    Company (Optional)
                  </label>
                  <input
                    {...form.register("company")}
                    className="w-full px-4 py-2 rounded-md border border-input bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all"
                    placeholder="Your Company Ltd"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium">
                    Message
                  </label>
                  <textarea
                    {...form.register("message")}
                    className={cn(
                      "w-full px-4 py-2 rounded-md border bg-background focus:ring-2 focus:ring-primary/20 outline-none transition-all h-32 resize-none",
                      form.formState.errors.message
                        ? "border-red-500"
                        : "border-input"
                    )}
                    placeholder="I'm interested in..."
                  />
                  {form.formState.errors.message && (
                    <p className="text-xs text-red-500">
                      {form.formState.errors.message.message}
                    </p>
                  )}
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Sending..." : "Send Message"}
                </Button>
              </form>
            )}
          </div>

          {/* Info */}
          <div className="space-y-8">
            <div className="bg-background p-6 rounded-xl border border-border flex items-start gap-4 shadow-sm">
              <MapPin className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-1">Our Location</h4>
                <p className="text-muted-foreground text-sm">
                  Address : No. 253/1C, Chidambarapatti Village ,Manayeripatti
                  post,Palayapatti North , Boothalur TK ,Tanjore - 613402 ,
                  Tamil Nadu
                </p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border flex items-start gap-4 shadow-sm">
              <Phone className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-1">Phone</h4>
                <p className="text-muted-foreground text-sm">+91 9972837971</p>
                <p className="text-xs text-muted-foreground mt-1">
                  Mon-Sat 9am to 6pm
                </p>
              </div>
            </div>

            <div className="bg-background p-6 rounded-xl border border-border flex items-start gap-4 shadow-sm">
              <Mail className="w-6 h-6 text-primary shrink-0 mt-1" />
              <div>
                <h4 className="font-bold text-lg mb-1">Email</h4>
                <p className="text-muted-foreground text-sm">
                  contactus@nambucoir.com
                </p>
              </div>
            </div>

            {/* Map Embed */}
            <div className="rounded-xl overflow-hidden border border-border h-64 shadow-md bg-muted">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d125445.40480644423!2d78.86141105058745!3d10.721452769161324!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3baa93b0836a6ce1%3A0xe0441704c1315892!2sNAMBU%20COIR%20PVT%20LTD!5e0!3m2!1sen!2sin!4v1766164404735!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Nambu Coir Location"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
