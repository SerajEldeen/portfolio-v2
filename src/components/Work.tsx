import Image from "next/image";
import { FaGithub } from "react-icons/fa";
import { CiShare1 } from "react-icons/ci";

const projects = [
  {
    title: "Halcyon Theme",
    description:
      "A minimal, dark blue theme for VS Code, Sublime Text, Atom, iTerm, and more. Available on Visual Studio Marketplace, Package Control, Atom Package Manager, and npm.",
    tech: ["Next.js", "TypeScript", "Tailwind"],
    image: "/Panto.png",
    github: "#",
    live: "#",
  },
  {
    title: "Portfolio Website",
    description:
      "Responsive personal portfolio with modern animations, optimized for performance and SEO.",
    tech: ["React", "Next.js", "Framer Motion"],
    image: "/Panto.png",
    github: "#",
    live: "#",
  },
  // add more here...
];

function Work() {
  return (
    <section className="md:px-50 px-15 py-15" id="work">
      {/* Heading */}
      <h1 className="flex flex-col sm:flex-row items-center gap-4 text-3xl font-medium text-white">
        Some Things I&apos;ve Built
        <span className="md:w-[30%] w-[30%] h-[1px] bg-slate-500" />
      </h1>

      <div className="flex flex-col gap-20">
        {projects.map((project, i) => {
          const isEven = i % 2 === 0;

          return (
            <div
              key={i}
              className={`relative flex flex-col md:flex-row gap-10 ${
                !isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* Image */}
              <div className="z-10 relative w-full h-[400px] md:h-[450px] rounded overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover opacity-10 md:opacity-50 transition-all duration-700 md:hover:opacity-100 cursor-pointer"
                />
              </div>

              {/* Text Side */}
              <div
                className={`absolute z-20 md:top-20 top-10 md:p-0 sm:px-5 px-2 ${
                  isEven ? "md:-right-25" : "md:-left-25"
                }`}
              >
                <p
                  className={`text-cyan-500 md:text-xl text-md  ${
                    isEven ? "md:text-end" : "md:text-start"
                  }`}
                >
                  Featured Project
                </p>

                <h3
                  className={`text-white text-xl md:text-2xl hover:text-cyan-500 cursor-pointer transition-colors duration-300  ${
                    isEven ? "md:text-end" : "md:text-start"
                  }`}
                >
                  {project.title}
                </h3>

                <div className="z-30 md:bg-slate-500 rounded md:px-8 px-4 md:py-3 py-1 mt-2">
                  <p className="text-slate-400 max-w-sm">
                    {project.description}
                  </p>
                </div>

                <ul
                  className={`flex gap-2 pt-5 text-slate-400 sm:text-md text-sm ${
                    isEven ? "md:justify-end" : "md:justify-start"
                  }`}
                >
                  {project.tech.map((tech, idx) => (
                    <li key={idx}>{tech}</li>
                  ))}
                </ul>

                <div
                  className={`flex gap-4 md:pt-5 pt-2 text-white transition-transform cursor-pointer absolute ${
                    isEven ? "md:right-0" : "md:left-0"
                  }`}
                >
                  <FaGithub size={20} className="hover:text-cyan-500" />
                  <CiShare1 size={20} className="hover:text-cyan-500" />
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}

export default Work;
