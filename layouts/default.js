import { Navbar } from "../components/navbar";
import { Foot } from "../components/footer";
import { Head } from "../components/head";
import ScrollContext from "./ScrollContext";
import React, { useState, useEffect } from "react";

export default function DefaultLayout({ children }) {
  return (
    <div>
      <Head />
      <Navbar />
      <ScrollContext>
        <main className=""> {children}</main>
      </ScrollContext>
    </div>
  );
}
