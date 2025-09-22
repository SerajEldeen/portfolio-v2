"use client";
import { useState } from "react";
import { motion, AnimatePresence, easeOut } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

function Experience() {
  const [activeIndex, setActiveIndex] = useState<number>(0);

  const companies = [
    {
      name: "Upstatement",
      role: "Software Engineer",
      date: "July-December 2025",
      whatDone: [
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
      ],
    },
    {
      name: "Google",
      role: "Software Engineer",
      date: "July-December 2025",
      whatDone: [
        "Built scalable web apps with React and Node.js.",
        "Optimized queries to handle millions of records in milliseconds.",
        "Collaborated with cross-functional teams to deliver projects on time.",
      ],
    },
    {
      name: "Microsoft",
      role: "Software Engineer",
      date: "July-December 2025",
      whatDone: [
        "Worked on cloud infrastructure with Azure.",
        "Implemented CI/CD pipelines using GitHub Actions.",
        "Improved performance of enterprise applications.",
      ],
    },
    {
      name: "Amazon",
      role: "Software Engineer",
      date: "July-December 2025",
      whatDone: [
        "Developed microservices for e-commerce platforms.",
        "Enhanced checkout experience leading to 10% higher conversions.",
        "Implemented caching with Redis to speed up APIs.",
      ],
    },
  ];

  const activeCompany = companies[activeIndex];

  return (
    <section className="md:px-50 px-15 py-15" id="experience">
      {/* Heading */}
      <h1 className="flex flex-col sm:flex-row items-center gap-4 text-3xl font-medium text-white">
        Where I&apos;ve Worked
        <span className="md:w-[30%] w-[30%] h-[1px] bg-slate-500" />
      </h1>

      <motion.div
        className="py-5 flex md:flex-row flex-col justify-center items-center gap-10"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* Left Side */}
        <motion.ul
          className="flex flex-row md:flex-col gap-5 overflow-x-auto md:overflow-y-auto w-full md:w-[200px] max-w-[400px] md:max-h-[200px]"
          variants={containerVariants}
        >
          {companies.map((company, index) => (
            <motion.li
              key={index}
              variants={itemVariants}
              className={`relative z-10 ${
                activeIndex === index ? "text-cyan-500" : "text-white"
              } pl-2 pb-3 cursor-pointer py-1 transition-colors duration-300`}
              onClick={() => setActiveIndex(index)}
            >
              {company.name}
              {activeIndex === index && (
                <motion.div
                  layoutId="activeHighlight"
                  className="absolute left-0 top-0 h-full w-full bg-gray-700/40 rounded-md -z-10"
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                />
              )}
            </motion.li>
          ))}
        </motion.ul>

        {/* Right Side with animation */}
        <div className="flex-1 text-white">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCompany.name}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4, ease: "easeOut" }}
            >
              <h3 className="text-2xl font-semibold">
                {activeCompany.role}
                <span className="text-cyan-500"> @ {activeCompany.name}</span>
              </h3>
              <p className="text-lg text-gray-400">{activeCompany.date}</p>

              <motion.ul
                className="pl-5 mt-3 space-y-2"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
              >
                {activeCompany.whatDone.map((task, i) => (
                  <motion.li
                    key={i}
                    variants={itemVariants}
                    className="before:content-['▹'] before:text-cyan-500 text-xl"
                  >
                    {task}
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          </AnimatePresence>
        </div>
      </motion.div>
    </section>
  );
}

export default Experience;
