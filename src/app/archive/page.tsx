"use client";
import { useState } from "react";
import Navbar from "@/components/Navbar";
import Link from "next/link";
import { CiShare1 } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";
import { easeOut, motion } from "framer-motion";
import SoftwareEngineering from "../../static/softwareEngineerArchive.json";
import DataScientist from "../../static/dataScienceArchive.json";

function Page() {
  const [active, setActive] = useState("data");
  const data = active === "software" ? SoftwareEngineering : DataScientist;

  // Animation settings
  const container = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };

  const row = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: easeOut } },
  };

  return (
    <>
      <Navbar />
      <section className="md:px-40 px-10 py-5">
        <div className="flex md:flex-row flex-col justify-between items-center flex-wrap gap-3">
          <div>
            <h1 className="text-slate-400 text-5xl">Archive</h1>
            <p className="text-cyan-500 leading-10 tracking-wide">
              A big list of things I&apos;ve worked on
            </p>
          </div>

          {/* Filter Buttons */}
          <div className="flex gap-3">
            <button
              type="button"
              onClick={() => setActive("data")}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                active === "data"
                  ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/30"
                  : "border-slate-600 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Data Scientist
            </button>
            <button
              type="button"
              onClick={() => setActive("software")}
              className={`px-5 py-2 rounded-full border transition-all duration-300 ${
                active === "software"
                  ? "bg-cyan-500 text-white border-cyan-500 shadow-lg shadow-cyan-500/30"
                  : "border-slate-600 text-slate-300 hover:bg-slate-700"
              }`}
            >
              Software Engineer
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto mt-10">
          <motion.table
            key={active} // this re-triggers animation when switching
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
              {data.map((project, idx) => (
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
                    {project.live && (
                      <Link
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <CiShare1
                          size={22}
                          className="hover:text-cyan-500 text-slate-400"
                        />
                      </Link>
                    )}
                    {project.github && (
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
                    )}
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
