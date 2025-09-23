"use client";
import Image from "next/image";
import { easeOut, motion } from "framer-motion";

// Variants for staggered paragraphs
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.3 }, // delay between paragraphs
  },
};

const paragraphVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: easeOut } },
};

function About() {
  const skills: string[] = [
    "JavaScript (ES6+)",
    "TypeScript",
    "Next.js",
    "React",
    "Node.js",
    "Express.js",
  ];
  return (
    <section className="md:px-50 px-15 py-15" id="about">
      {/* Heading */}
      <h1 className="flex flex-col sm:flex-row items-center font-medium gap-4 text-3xl text-white">
        About Me
        <span className="md:w-[30%] w-[30%] h-[1px] bg-slate-500" />
      </h1>

      <div className="flex flex-col justify-between items-center md:flex-row gap-10 ">
        {/* Left Side (text) */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <motion.p
            variants={paragraphVariants}
            className="py-3 text-slate-500 font-medium max-w-xl"
          >
            Hello! My name is Seraj Eldeen and I enjoy creating things that live
            on the internet. My interest in web development started back in 2023
            when I decided to try editing custom Tumblr themes — turns out
            hacking together a custom reblog button taught me a lot about HTML &
            CSS!
          </motion.p>

          <motion.p
            variants={paragraphVariants}
            className="py-3 text-slate-500 font-medium max-w-xl"
          >
            Fast-forward to today, and I’ve had the privilege of working at My
            main focus these days is building accessible, inclusive products and
            digital experiences at Upstatement for a variety of clients.
          </motion.p>

          <motion.p
            variants={paragraphVariants}
            className="py-3 text-slate-500 font-medium max-w-xl"
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt
            eligendi porro error tenetur ex ipsam.
          </motion.p>

          <motion.p
            variants={paragraphVariants}
            className="py-3 text-slate-500 font-medium max-w-xl"
          >
            Here are a few technologies I’ve been working with recently:
          </motion.p>

          {/* List of Skills */}
          <motion.div variants={paragraphVariants}>
            <ul className="grid grid-cols-2 gap-x-2 gap-y-1">
              {skills.map((tech) => (
                <li
                  key={tech}
                  className="relative mb-2.5 pl-5 font-medium text-slate-500 before:content-['▹'] before:absolute before:left-0 before:text-cyan-500"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* Right Side (image) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, ease: easeOut }}
          viewport={{ once: true, amount: 0.3 }}
          className="group w-72 h-72 overflow-hidden rounded-md transition-all duration-300 hover:rounded-xl"
        >
          <Image
            src="/avatar.png"
            alt="Avatar"
            width={300}
            height={300}
            className="object-cover w-full h-full md:grayscale transition-all duration-700 group-hover:grayscale-0 group-hover:scale-110"
          />
        </motion.div>
      </div>
    </section>
  );
}

export default About;
