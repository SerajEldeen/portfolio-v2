"use client";

import { useState, useEffect } from "react";
import Loading from "./loading";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Experience from "@/components/Experience";
import Work from "@/components/Work";
import AddProject from "@/components/AddProject";
import Contact from "@/components/Contact";

export default function Home() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 4040);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {showLoader ? (
        <Loading />
      ) : (
        <>
          <Hero />
          <About />
          <Experience />
          <Work />
          <AddProject />
          <Contact />
        </>
      )}
    </>
  );
}
