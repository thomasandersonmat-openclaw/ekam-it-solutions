"use client";
import { motion } from "framer-motion";

export default function About() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-24 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto space-y-12"
      >
        <div className="text-center space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">About Ekam</h1>
          <p className="text-lg text-gray-600 font-light max-w-2xl mx-auto">
            Driven by innovation, rooted in excellence. We are the bridge between complex technology and seamless business operations.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 gap-12 pt-8">
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Mission</h3>
            <p className="text-gray-600 leading-relaxed font-light">
              To empower organizations with robust, scalable, and beautifully engineered software solutions that drive real business value and transform user experiences.
            </p>
          </div>
          <div className="space-y-4">
            <h3 className="text-2xl font-semibold">Our Approach</h3>
            <p className="text-gray-600 leading-relaxed font-light">
              We believe in minimalism, both in design and code. Less clutter means fewer bugs, faster load times, and a crystal-clear user journey. Quality over quantity, always.
            </p>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
