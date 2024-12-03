import { Navbar } from "../components/navbar";
import { Foot } from "../components/footer";
import { Head } from "../components/head";
import ScrollContext from "./ScrollContext";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";
import React, { useState, useEffect } from "react";

export default function DefaultLayout({ children }) {
  const [isHydrated, setIsHidrated] = useState(false);

  useEffect(() => {
    setIsHidrated(true);
  }, []);
  return (
    <div>
      <Head />
      <Navbar />
      <ScrollContext>
        <main className=""> {children}</main>
      </ScrollContext>
      {isHydrated && <SpeedInsights />}
      <Analytics />
    </div>
  );
}
