"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import { Loader2, Mail, Phone, User } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

export function ContactSection() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState<{
    type: "success" | "error" | null;
    message: string;
  }>({ type: null, message: "" });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: null, message: "" });

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        setStatus({
          type: "success",
          message: "Message sent successfully! We'll get back to you soon.",
        });
        setFormData({ name: "", email: "", phone: "", message: "" });
      } else {
        throw new Error(data.error || "Failed to send message");
      }
    } catch (error) {
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again later.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="relative w-full bg-foreground/10 py-24">
      <div  id="contact" className="max-w-7xl mx-auto px-4 overflow-hidden">
        <div className="mx-auto grid lg:grid-cols-2 gap-20 lg:gap-24 items-center">
          {/* Left Side - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <div className="sticky top-24">
              <span className="px-6 py-1.5 bg-orange-200/10 border border-border text-foreground/80 rounded-full inline-block text-sm mb-4">
                Contact Us
              </span>
              <h2 className="text-[3rem] font-bold text-orange-500 uppercase mb-6 leading-none tracking-tight ">
                Follow
                <span className="block mt-2">Competitions</span>
              </h2>
              <p className="text-base text-foreground/70 mb-8 leading-relaxed">
                Have questions about India Masters? We're here to help! Reach out to us 
                and become part of the cricket legacy.
              </p>
              
              {/* Contact Info */}
              <div className="space-y-6 mt-12">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-200/10 flex items-center justify-center">
                    <Mail className="w-4 h-4 text-orange-200" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Email us at</p>
                    <a href="mailto:kartikey@indiamasters.co.in" className="text-base hover:text-orange-200 transition-colors">
                    kartikey@indiamasters.co.in
                    </a>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 rounded-full bg-orange-200/10 flex items-center justify-center">
                    <Phone className="w-4 h-4 text-orange-200" />
                  </div>
                  <div>
                    <p className="text-sm text-foreground/60">Call us at</p>
                    <a href="tel:+919266622460" className="text-base hover:text-orange-200 transition-colors">
                    +919266622460
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="relative"
          >
            <motion.form
              onSubmit={handleSubmit}
              className="relative bg-background/70 backdrop-blur-sm border border-border rounded-2xl p-8"
            >
              <div className="space-y-2">
                {/* Name Field */}
                <div className="space-y-1">
                  <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <User className="w-4 h-4" />
                    Name <span className="text-orange-200">*</span>
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-foreground/5 border border-border 
                             focus:outline-none focus:ring-2 focus:ring-orange-200/20 focus:border-orange-200/50
                             transition-all duration-300"
                    placeholder="Enter your name"
                  />
                </div>

                {/* Email Field */}
                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <Mail className="w-4 h-4" />
                    Email <span className="text-orange-200">*</span>
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-foreground/5 border border-border 
                             focus:outline-none focus:ring-2 focus:ring-orange-200/20 focus:border-orange-200/50
                             transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>

                {/* Phone Field */}
                {/* <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground/80 flex items-center gap-2">
                    <Phone className="w-4 h-4" />
                    Phone Number <span className="text-sm  text-foreground/40">(Optional)</span>
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-foreground/5 border border-border 
                             focus:outline-none focus:ring-2 focus:ring-orange-200/20 focus:border-primary/50
                             transition-all duration-300"
                    placeholder="Enter your phone number"
                  />
                </div> */}

                {/* Message Field */}
                <div className="space-y-2">
                  <label className="text-base font-medium text-foreground/80">
                    Message <span className="text-sm  text-foreground/40">(Optional)</span>
                  </label>
                  <textarea
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2 rounded-lg bg-foreground/5 border border-border 
                             focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary/50
                             transition-all duration-300 min-h-[100px] resize-y"
                    placeholder="Your message here..."
                  />
                </div>
              </div>

              {/* Status Message */}
              {status.type && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={cn(
                    "mt-2 p-4 rounded-xl border text-sm",
                    status.type === "success" 
                      ? "bg-green-500/10 border-green-500/20 text-green-500" 
                      : "bg-red-500/10 border-red-500/20 text-red-500"
                  )}
                >
                  {status.message}
                </motion.div>
              )}

              {/* Submit Button */}
              <div className="mt-4">
                <button
                  type="submit"
                  disabled={isLoading}
                  className={cn(
                    "w-full px-6 py-3 rounded-lg bg-orange-700/90 text-foreground text-base",
                    "hover:bg-pr transition-all duration-300",
                    "focus:outline-none focus:ring-2 focus:ring-pr/20",
                    "disabled:opacity-50 disabled:cursor-not-allowed",
                    "flex items-center justify-center gap-2"
                  )}
                >
                  {isLoading && <Loader2 className="w-5 h-5 animate-spin" />}
                  <span>{isLoading ? "Sending..." : "Send Message"}</span>
                </button>
              </div>
            </motion.form>
          </motion.div>
        </div>
      </div>
    </section>
  );
} 