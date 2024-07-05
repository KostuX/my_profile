import { Navbar } from "../components/navbar";
import { Foot } from "../components/footer";
import { Head } from "../components/head";
import Lenis from "@studio-freight/lenis";
import React, { useState, useEffect } from "react";

export default function DefaultLayout({ children }) {
  useEffect(() => {
    {
      const lenis = new Lenis();

      lenis.on("scroll", (e) => {
        console.log(e);
      });

      function raf(time) {
        lenis.raf(time);
        requestAnimationFrame(raf);
      }

      requestAnimationFrame(raf);
    }
  }, []);
  return (
    <div>
      <Head />
      <Navbar />
      <main className=" h-screen"> {children}</main>
    </div>
  );
}
