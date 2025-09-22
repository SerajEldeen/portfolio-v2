"use client";
import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

export default function Social() {
  return (
    <div
      className="
        relative w-full flex justify-center mt-12
        pb-10
        md:fixed md:pb-0 md:bottom-0 md:left-10 md:w-auto md:flex-col md:items-center
        z-50
      "
    >
      <ul className="flex flex-row md:flex-col items-center md:gap-4 gap-8 text-gray-400">
        <li>
          <Link
            href="https://github.com/SerajEldeen"
            target="_blank"
            rel="noreferrer"
            className="md:p-0.5  transition-transform hover:text-cyan-500"
          >
            <FaGithub size={22} />
          </Link>
        </li>
        <li>
          <Link
            href="https://www.linkedin.com/in/seraj-eldeen-abdullah/"
            target="_blank"
            rel="noreferrer"
            className="md:p-0.5  transition-transform hover:text-cyan-500"
          >
            <FaLinkedin size={22} />
          </Link>
        </li>
        <li>
          <Link
            href="mailto:serageldeen13@gmail.com"
            target="_blank"
            rel="noreferrer"
            className="md:p-0.5  transition-transform hover:text-cyan-500"
          >
            <SiGmail size={22} />
          </Link>
        </li>
      </ul>

      {/* only show the line on desktop */}
      <div className="hidden md:block w-px h-24 mt-6 bg-gray-400"></div>
    </div>
  );
}
