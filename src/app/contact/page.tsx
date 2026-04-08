"use client";
import { motion } from "framer-motion";
import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function ContactForm() {
  const searchParams = useSearchParams();
  const isSuccess = searchParams.get("success") === "true";

  return (
    <div className="max-w-2xl mx-auto w-full space-y-12">
      <div className="text-center space-y-4">
        <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Get in Touch</h1>
        <p className="text-lg text-gray-500 font-normal">Let's build something remarkable together.</p>
      </div>

      {isSuccess && (
        <motion.div 
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-green-50 border border-green-200 text-green-800 px-6 py-4 rounded-xl text-center font-medium"
        >
          Thank you! Your message has been successfully sent to our team.
        </motion.div>
      )}

      <motion.form 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        action="https://formsubmit.co/Thomas.anderson.mat@gmail.com"
        method="POST"
        className="bg-white p-8 rounded-3xl border border-gray-100 shadow-sm space-y-6"
      >
          {/* FormSubmit Configuration */}
          <input type="hidden" name="_subject" value="New Contact Inquiry from Ekam IT Solutions" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://thomasandersonmat-openclaw.github.io/ekam-it-solutions/contact?success=true" />
          
          {/* Prevent auto-responses to the sender's email to avoid spam traps */}
          <input type="hidden" name="_autoresponse" value="" />
          <input type="hidden" name="_template" value="box" />

          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Name</label>
            <input type="text" name="name" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition" placeholder="John Doe" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Email</label>
            <input type="email" name="email" required className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition" placeholder="john@example.com" />
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">Message</label>
            <textarea name="message" required rows={4} className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black transition" placeholder="How can we help?"></textarea>
          </div>
          <button type="submit" className="w-full bg-black text-white font-medium py-3 rounded-xl hover:bg-gray-800 transition shadow-md">
            Send Message
          </button>
        </motion.form>
    </div>
  );
}

export default function Contact() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-24 px-4 sm:px-6 lg:px-8">
      <Suspense fallback={<div>Loading...</div>}>
        <ContactForm />
      </Suspense>
    </div>
  );
}
