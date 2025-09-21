"use client";

import { useState, useEffect } from "react";
import Loading from "./loading";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Social from "@/components/Social";

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
          {/* <Social /> */}
        </>
      )}
    </>
  );
}
