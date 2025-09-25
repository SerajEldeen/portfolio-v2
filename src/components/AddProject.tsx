"use client";
import Link from "next/link";
import { CiFileOn, CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { useState } from "react";
import { motion } from "framer-motion";
import projects from "../static/projects.json";

function AddProject() {
  const [n, setN] = useState(6);

  // Apply pagination
  const shownProjects = projects.slice(0, n);

  const handleShownProjects = () => {
    setN((e) => {
      if (e >= projects.length) return e;
      const newCount = e + 6;
      return newCount > projects.length ? projects.length : newCount;
    });
    if (n >= projects.length) {
      setN(6);
    }
  };

  // Motion variants
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1 },
  };

  return (
    <section className="md:px-50 px-15 py-15 flex justify-center items-center flex-col">
      <h2 className="text-slate-400 md:text-3xl text-2xl mb-2">
        Other NoteWorthy Projects
      </h2>
      <Link
        href="/archive"
        className="relative text-cyan-500 cursor-pointer group"
      >
        view the archive
        <span className="absolute left-0 bottom-0 h-[1px] w-0 bg-cyan-500 transition-all duration-500 group-hover:w-full" />
      </Link>

      {/* Container with stagger animation */}
      <motion.div
        className="flex justify-center flex-col md:flex-row gap-10 py-5 flex-wrap"
        initial="hidden"
        animate="visible"
        transition={{ staggerChildren: 0.15 }}
      >
        {shownProjects.map((e, i) => (
          <Link
            href={e.live || e.github}
            target="_blank"
            rel="noreferrer"
            key={e.title + i}
          >
            <motion.div
              variants={cardVariants}
              transition={{ duration: 0.4, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="bg-slate-800 rounded-xl px-5 py-6 group cursor-pointer max-w-[300px] 
                        hover:shadow-cyan-500/20 transition-all duration-300 border border-slate-700 hover:border-cyan-500/40"
            >
              {/* First Row */}
              <div className="flex justify-between items-center mb-4">
                <CiFileOn size={40} className="text-cyan-500" />
                <div className="flex gap-3">
                  <Link href={e.github} target="_blank" rel="noreferrer">
                    <FaGithub
                      size={22}
                      className="text-slate-400 hover:text-cyan-500 transition-colors"
                    />
                  </Link>
                  {e.live && (
                    <Link href={e.live} target="_blank" rel="noreferrer">
                      <CiShare1
                        size={22}
                        className="text-slate-400 hover:text-cyan-500 transition-colors"
                      />
                    </Link>
                  )}
                </div>
              </div>

              {/* Second Row */}
              <div>
                <h3 className="text-slate-300 text-lg font-semibold group-hover:text-cyan-400 transition-colors duration-300">
                  {e.title}
                </h3>
                <p className="text-slate-400 text-sm mt-2 leading-relaxed">
                  {e.description}
                </p>
              </div>

              {/* Third Row */}
              <ul className="flex flex-wrap gap-2 text-xs mt-4">
                {e.tech.map((tech) => (
                  <li
                    key={tech}
                    className="px-2 py-1 bg-slate-700/60 text-slate-300 rounded-md"
                  >
                    {tech}
                  </li>
                ))}
              </ul>
            </motion.div>
          </Link>
        ))}
      </motion.div>
      {projects.length <= 6 || (
        <button
          type="button"
          className="mt-6 px-8 py-3 text-sm font-mono text-cyan-400 border border-cyan-400 rounded hover:shadow-3d-cyan transition-transform duration-300 hover:-translate-x-1 hover:-translate-y-1 cursor-pointer"
          onClick={handleShownProjects}
        >
          {n < projects.length ? "Show More" : "Show Less"}
        </button>
      )}
    </section>
  );
}

export default AddProject;
