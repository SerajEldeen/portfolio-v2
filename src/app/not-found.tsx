"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

export default function NotFound() {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 300); // navDelay
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center h-screen text-center bg-[#0a192f]">
      <AnimatePresence>
        {isMounted && (
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
            className="flex flex-col items-center"
          >
            <h1 className="text-[clamp(100px,25vw,200px)] font-mono text-cyan-400 leading-none">
              404
            </h1>
            <h2 className="text-[clamp(30px,5vw,50px)] font-light text-white mt-2">
              Page Not Found
            </h2>
            <Link
              href="/"
              className="mt-6 px-8 py-3 text-xl font-mono text-cyan-400 border border-cyan-400 rounded hover:shadow-3d-cyan transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            >
              Go Home
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
