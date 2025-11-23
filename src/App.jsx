import React from "react";

import Navbar from "./pages/Navbar";
import Hero from "./components/Hero";
import Services from "./components/Services";
import Team from "./components/Team";


export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900">
      <Navbar />
      <Hero />
      <Services />
      <Team />

      <footer className="bg-white border-t py-8 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Nikhil Consultancy. All rights reserved.
      </footer>
    </div>
  );
}

/* ---- Subcomponents ---- */



/* ---- SVG ICONS ---- */

