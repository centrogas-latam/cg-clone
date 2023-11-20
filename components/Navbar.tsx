"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

let tabs = [
  { id: "world", label: "Inicio" },
  { id: "ny", label: "Soluciones" },
  { id: "business", label: "Quiénes somos" },
  { id: "arts", label: "Contacto" },
];

const Navbar = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-md transition-all px-12">
      <div className="flex h-14 items-center justify-between border-b border-zinc-200">
        <div className="md:hidden"></div>
        <Link href="/" className="flex z-40 font-semibold">
          <span className="hidden md:flex">CentrogasLatam</span>
        </Link>
        <div className="flex space-x-1">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`${
                activeTab === tab.id ? "" : "hover:text-gray-500"
              } relative rounded-none px-3 py-1.5 text-sm font-medium text-black outline-sky-400 transition focus-visible:outline-2`}
              style={{
                WebkitTapHighlightColor: "transparent",
              }}
            >
              {activeTab === tab.id && (
                <motion.span
                  layoutId="bubble"
                  className="absolute inset-0 z-10 bg-white mix-blend-difference"
                  style={{ borderRadius: 10 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
