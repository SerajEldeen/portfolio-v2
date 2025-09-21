"use client";

import { motion } from "framer-motion";

export default function Loading() {
  return (
    <div className="flex items-center justify-center h-screen bg-cyan-950">
      <svg
        viewBox="0 0 100 100"
        className="w-[100px] h-[100px]"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <g>
          {/* Hexagon Path */}
          <motion.path
            d="M 50, 5
               L 11, 27
               L 11, 72
               L 50, 95
               L 89, 73
               L 89, 28 z"
            stroke="#06b6d4"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: 1 }}
            transition={{
              duration: 2,
              ease: "easeInOut",
              repeat: Infinity,
              repeatType: "reverse",
            }}
          />

          {/* The "S" Letter */}
          <motion.g
            transform="translate(36, 33)"
            fill="#06b6d4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{
              duration: 1,
              delay: 2,
              repeat: Infinity,
              repeatType: "reverse",
            }}
          >
            <text
              x="0.1416"
              y="33"
              fontFamily="system-ui, Calibre, sans-serif"
              fontSize="50"
              fontWeight="400"
              letterSpacing="4.1666"
            >
              S
            </text>
          </motion.g>
        </g>
      </svg>
    </div>
  );
}
