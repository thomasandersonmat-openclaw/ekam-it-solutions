"use client";
import { motion } from "framer-motion";

const services = [
  { title: "Enterprise AI Integration", desc: "Seamlessly integrate LLMs and autonomous agents into your existing corporate infrastructure with a focus on security, reliability, and the 'Clean Core' pattern." },
  { title: "AI-Enabled SDLC", desc: "Upgrade your software lifecycle. Our orchestrator uses Dev, QA, and Deployment agents to break down requirements, write code, run tests, and spin up Docker sandboxes." },
  { title: "Custom AI Skills", desc: "Tailored AI capabilities integrating directly into your workflows, from automated market trend hunting to intelligent data parsing." },
  { title: "AI Influencer Pipelines", desc: "End-to-end automation for creating high-quality, talking-head video content from text and single reference images." }
];

export default function Services() {
  return (
    <div className="flex flex-col items-center flex-grow py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-16 w-full">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-gray-900">Our Services</h1>
          <p className="text-lg text-gray-600 font-light">End-to-end solutions for modern enterprises.</p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition duration-300"
            >
              <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
              <p className="text-gray-600 font-light leading-relaxed">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
