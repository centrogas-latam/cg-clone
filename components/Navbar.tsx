"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import { Menu } from "lucide-react";

let tabs = [
  { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "soluciones", label: "Soluciones" },
  { id: "contacto", label: "Contacto" },
];

const Navbar = () => {
  let [activeTab, setActiveTab] = useState(tabs[0].id);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="sticky h-14 inset-x-0 top-0 z-30 w-full border-b border-gray-200 bg-white/75 backdrop-blur-md transition-all px-10">
      <div className="flex h-14 items-center justify-between border-b border-zinc-200">
        <a href="#inicio" className="flex z-40 font-semibold w-full">
          <Image
            src="centrogasvectorizado8.svg"
            alt="logo"
            width={65}
            height={65}
          />
        </a>
        <div className="hidden md:flex space-x-1 w-full justify-center">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
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
            </a>
          ))}
        </div>
        <div className="hidden md:flex gap-2 w-full justify-end">
          <Button className="bg-[#00ad10]">Cotiza</Button>
          <Button className="bg-[#2245e3]">Contactanos</Button>
        </div>
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          <Menu color="black" size={24} />
        </button>
      </div>
      {isOpen && (
        <div className="menu md:hidden">
          {tabs.map((tab) => (
            <a
              key={tab.id}
              href={`#${tab.id}`}
              onClick={() => {
                setActiveTab(tab.id);
                setIsOpen(false);
              }}
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
            </a>
          ))}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
