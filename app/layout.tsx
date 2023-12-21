"use client";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import { Toaster } from "@/components/ui/toaster";
import { NextUIProvider } from "@nextui-org/react"; // NextUIProvider
import { Provider } from "@radix-ui/react-toast";
import { Slider } from "@nextui-org/react";
import SliderComponent from "@/components/SliderComponent";
import CardSlider from "@/components/CardsSliderComponent";
import Carousel1 from "@/components/CardSlider";
import SliderBrands from "@/components/SliderBrands";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Toaster />
          <Navbar />
          <SliderComponent />
          <SliderBrands />
          <CardSlider />
          <Carousel1 />
          {children}
        </Provider>
      </body>
    </html>
  );
}
