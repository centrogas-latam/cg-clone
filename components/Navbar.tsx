"use client";
import React from "react";
import {
  Navbar,
  NavbarBrand,
  NavbarMenuToggle,
  NavbarMenuItem,
  NavbarMenu,
  NavbarContent,
  NavbarItem,
  Link,
  // Button,
} from "@nextui-org/react";
import Image from "next/image";
import { Button } from "./ui/button";

const tabs = [
  // { id: "inicio", label: "Inicio" },
  { id: "quienes-somos", label: "Quiénes somos" },
  { id: "soluciones", label: "Soluciones" },
  { id: "contacto", label: "Contacto" },
];

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [activeTab, setActiveTab] = React.useState(tabs[0].id);

  return (
    <Navbar isBordered isMenuOpen={isMenuOpen} onMenuOpenChange={setIsMenuOpen}>
      <NavbarContent className="sm:hidden" justify="start">
        <NavbarMenuToggle
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
        />
      </NavbarContent>

      <NavbarContent>
        <NavbarBrand>
          <Link href="/" className="flex z-40 font-semibold w-full">
            <Image
              src="centrogasvectorizado8.svg"
              alt="logo"
              width={75}
              height={75}
            />
          </Link>
        </NavbarBrand>
      </NavbarContent>

      <NavbarContent className="hidden sm:flex gap-4" justify="center">
        {tabs.map((tab) => (
          <NavbarItem key={tab.id}>
            <Link
              color={activeTab === tab.id ? "primary" : "foreground"}
              href={`#${tab.id}`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </Link>
          </NavbarItem>
        ))}
      </NavbarContent>

      <NavbarContent justify="end">
        <NavbarItem className=" lg:flex">
          <a
            href="https://wa.me/+56949094922"
            className="bg-[#00AD10] hover:[bg-#2245e3] text-white text-sm px-4 py-2 rounded-lg"
          >
            Cotizar
          </a>
        </NavbarItem>
        {/* <NavbarItem>
          <a
            href="https://wa.me/+56949094922"
            className="bg-[#2245e3] text-white text-sm px-4 py-2 rounded-lg"
          >
            Contactános
          </a>
        </NavbarItem> */}
      </NavbarContent>

      <NavbarMenu>
        {tabs.map((tab, index) => (
          <NavbarMenuItem key={tab.id}>
            <Link
              className="w-full"
              color={activeTab === tab.id ? "primary" : "foreground"}
              href={`#${tab.id}`}
              onClick={() => {
                setActiveTab(tab.id);
                setIsMenuOpen(false);
              }}
            >
              {tab.label}
            </Link>
          </NavbarMenuItem>
        ))}
      </NavbarMenu>
    </Navbar>
  );
}
