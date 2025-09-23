"use client";
import LogoHex from "./logoHex";
import Link from "next/link";
import { useState } from "react";
import { easeOut, motion } from "framer-motion";

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#experience", label: "Experience" },
    { href: "#projects", label: "Work" },
    { href: "#contact", label: "Contact" },
  ];
  const navVariants = {
    hidden: { opacity: 0, y: -30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: easeOut, staggerChildren: 0.1 },
    },
  };

  const linkVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
    hover: { scale: 1.1, color: "#06b6d4" },
  };

  return (
    <nav className="flex justify-between items-center px-10 py-5 relative">
      {/* Logo with motion */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <LogoHex size={48} Letter="S" />
      </motion.div>

      {/* Desktop Nav */}
      <motion.div
        className="hidden md:flex justify-center items-center gap-5"
        variants={navVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.ul
          className="flex justify-center items-center gap-5 text-gray-300"
          variants={navVariants}
        >
          {navLinks.map((link) => (
            <motion.li
              key={link.href}
              variants={linkVariants}
              whileHover="hover"
              className="cursor-pointer"
            >
              <Link href={link.href}>{link.label}</Link>
            </motion.li>
          ))}
        </motion.ul>

        {/* Resume button */}
        <motion.div whileHover={{ scale: 1.05 }}>
          <Link
            href="./SerajEldeen.pdf"
            className="ml-4 px-4 py-2 text-sm font-mono text-cyan-500 border border-cyan-500 rounded  hover:shadow-3d-cyan transition-transform duration-300"
          >
            Resume
          </Link>
        </motion.div>
      </motion.div>
      {/* Mobile Toggle */}
      <div
        className="md:hidden flex flex-col justify-center items-end w-8 h-8 relative cursor-pointer z-50"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span
          className={` h-[3px] w-8 bg-cyan-500 rounded transition-all duration-300 ${
            isOpen ? "rotate-45 top-10 fixed" : "top-1 absolute"
          }`}
        ></span>
        <span
          className={`absolute h-[3px] w-6 bg-cyan-500 rounded transition-all duration-300 ${
            isOpen ? "opacity-0 w-8" : "top-3.5"
          }`}
        ></span>
        <span
          className={` h-[3px] w-4 bg-cyan-500 rounded transition-all duration-300 ${
            isOpen ? "-rotate-45 top-10 w-8 fixed" : "top-6 absolute"
          }`}
        ></span>
      </div>
      {/* Mobile Menu */}
      {isOpen && (
        <div className="fixed inset-0 z-40 flex">
          <div className="flex-1  " onClick={() => setIsOpen(false)}></div>

          {/* Sidebar */}
          <div className="w-2/3 sm:w-1/2 h-full bg-cyan-900 text-gray-300 flex flex-col items-center justify-center gap-8 shadow-xl transform transition-transform duration-300 ease-in-out translate-x-0 animate-slide-in-right">
            <ul className="flex flex-col  items-center gap-10 text-lg font-medium">
              {navLinks.map((link) => (
                <li
                  key={link.href}
                  className="transition-colors hover:text-cyan-500 cursor-pointer"
                >
                  <Link href={link.href}>{link.label}</Link>
                </li>
              ))}
            </ul>

            <Link
              href="./SerajEldeen.pdf"
              className="mt-6 px-8 py-3 text-sm font-mono text-cyan-400 border border-cyan-400 rounded hover:shadow-3d-cyan transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:ring-offset-2"
            >
              Resume
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
