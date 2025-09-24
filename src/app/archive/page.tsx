"use client";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { easeOut, motion } from "framer-motion";

function Page() {
  const projects = [
    {
      year: "2025",
      title: "Portfolio Website",
      madeAt: "Personal",
      builtWith: "Next.js, TailwindCSS",
      preview: "https://example.com",
      github: "https://github.com/username/portfolio",
    },
    {
      year: "2024",
      title: "Stock Tracker",
      madeAt: "DEPI Internship",
      builtWith: "React, Node.js, PostgreSQL",
      preview: "https://example.com",
      github: "https://github.com/username/stock-tracker",
    },
  ];

  // parent container for stagger effect
  const container = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  // each row animation
  const row = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: easeOut },
    },
  };

  return (
    <>
      <Navbar />
      <section className="md:px-40 px-10 py-5">
        <h1 className="text-slate-400 text-5xl">Archive</h1>
        <p className="text-cyan-500 leading-10 tracking-wide">
          A big list of things I&apos;ve worked on
        </p>

        {/* Table */}
        <div className="overflow-x-auto mt-10">
          <motion.table
            className="w-full text-left border-collapse"
            variants={container}
            initial="hidden"
            animate="visible"
          >
            <thead>
              <tr className="text-slate-500 border-b border-slate-700">
                <th className="py-3 px-4">Year</th>
                <th className="py-3 px-4">Title</th>
                <th className="py-3 px-4 md:table-cell hidden">Made at</th>
                <th className="py-3 px-4 md:table-cell hidden">Built with</th>
                <th className="py-3 px-4">Links</th>
              </tr>
            </thead>
            <motion.tbody variants={container}>
              {projects.map((project, idx) => (
                <motion.tr
                  key={idx}
                  variants={row}
                  className="border-b border-slate-800 hover:bg-slate-800/40 transition"
                >
                  <td className="py-3 px-4 text-slate-400">{project.year}</td>
                  <td className="py-3 px-4 text-slate-200">{project.title}</td>
                  <td className="py-3 px-4 text-slate-400 md:table-cell hidden">
                    {project.madeAt}
                  </td>
                  <td className="py-3 px-4 text-slate-400 md:table-cell hidden">
                    {project.builtWith}
                  </td>
                  <td className="py-3 px-4 flex gap-3">
                    <Link
                      href={project.preview}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <CiShare1
                        size={22}
                        className="hover:text-cyan-500 text-slate-400"
                      />
                    </Link>
                    <Link
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub
                        size={22}
                        className="hover:text-cyan-500 text-slate-400"
                      />
                    </Link>
                  </td>
                </motion.tr>
              ))}
            </motion.tbody>
          </motion.table>
        </div>
      </section>
    </>
  );
}

export default Page;
