"use client";
import { motion } from "framer-motion";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center flex-grow py-24 px-4 sm:px-6 lg:px-8 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="max-w-3xl space-y-8"
      >
        <h1 className="text-5xl md:text-7xl font-bold tracking-tighter text-black">
          Simplify Your Tech.
          <br className="hidden sm:block" /> 
          <span className="text-gray-400">Amplify Your Growth.</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mx-auto font-normal leading-relaxed">
          Ekam IT Solutions delivers premium, enterprise-grade technology services with elegant simplicity. We build the future so you can focus on today.
        </p>
        <div className="pt-8 flex justify-center space-x-4">
          <Link href="/services" passHref>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-black text-white px-8 py-3 rounded-full font-medium transition block"
            >
              Explore Services
            </motion.a>
          </Link>
          <Link href="/demos" passHref>
            <motion.a 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="bg-gray-100 text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition block"
            >
              View Demos
            </motion.a>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}
