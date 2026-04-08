"use client";
import { motion } from "framer-motion";
import Link from "next/link";

const demos = [
  { id: "market-sentinel", title: "Market Sentinel AI", desc: "Automated market trend hunting and intelligence gathering.", img: "https://images.unsplash.com/photo-1611974789855-9c2a0a7236a3?auto=format&fit=crop&q=80&w=1000" },
  { id: "ai-influencer", title: "AI Influencer Pipeline", desc: "Text-to-video automation for talking-head content.", img: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&q=80&w=1000" },
  { id: "sdlc-orchestrator", title: "SDLC Orchestrator", desc: "Autonomous Dev, QA, and Deployment agents in action.", img: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&q=80&w=1000" }
];

export default function Demos() {
  return (
    <div className="flex flex-col items-center flex-grow py-24 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto w-full space-y-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center space-y-4"
        >
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-black">Product Demos</h1>
          <p className="text-lg text-gray-500 font-normal">See our AI agents orchestrate complex workflows seamlessly.</p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {demos.map((demo, index) => (
            <motion.div 
              key={demo.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-3xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-md transition duration-300 flex flex-col group"
            >
              <div className="h-48 overflow-hidden bg-gray-50">
                <img 
                  src={demo.img} 
                  alt={demo.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                />
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold mb-2 text-black">{demo.title}</h3>
                <p className="text-gray-500 font-normal leading-relaxed mb-6 flex-grow">{demo.desc}</p>
                <Link 
                  href={`/demos/${demo.id}`}
                  className="text-black font-semibold hover:text-gray-600 transition inline-flex items-center"
                >
                  View Demo &rarr;
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
