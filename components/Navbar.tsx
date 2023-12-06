"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { Button } from "./ui/button";

let tabs = [
  { id: "world", label: "Inicio" },
  { id: "business", label: "Quiénes somos" },
  { id: "ny", label: "Soluciones" },
  { id: "arts", label: "Contacto" },
];

const Navbar = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-md transition-all px-36">
      <div className="flex h-14 items-center justify-between border-b border-zinc-200">
        <div className="md:hidden"></div>
        <Link href="/" className="flex z-40 font-semibold w-full">
          <Image
            src="centrogasvectorizado8.svg"
            alt="logo"
            width={65}
            height={65}
          />
        </Link>
        <div className="flex space-x-1 w-full justify-center">
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
                  className="absolute inset-0 z-10 bg-black mix-blend-difference"
                  style={{ borderRadius: 10 }}
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
              {tab.label}
            </button>
          ))}
        </div>
        <div className="flex  gap-2 w-full justify-end">
          <Button className="bg-[#00ad10]">Cotiza</Button>
          <Button className="bg-[#2245e3]">Contactanos</Button>
        </div>
      </div>
    </nav>
  );
};
export default Navbar;
