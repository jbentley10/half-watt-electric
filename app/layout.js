/**
 * @file layout.js
 */
'use client'

// Import styles
import "./globals.css";

// Import dependencies
import React, { useState } from "react";
import { Inter } from "next/font/google";
import Image from "next/image";
import Link from "next/link";

// Import components and utils
import FloatingActionButton from "./components/floating-action-button";
import { LocaleContext } from "./locale-provider";

// Declare fonts
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const [isEnglish, setIsEnglish] = useState(true);

  return (
    <html lang="en">
      <body
        className={`${inter.className} bg-gradient-to-br from-gradient-orange via-gradient-yellow to-gradient-red`}
      >
        <LocaleContext.Provider
          value={{ isEnglish: isEnglish, setIsEnglish: setIsEnglish }}
        >
          {/* Navigation */}
          <nav className="w-full flex flex-row items-center justify-between xs:justify-end lg:py-16 md:py-10 sm:py-8 xs:py-6">
            <section
              className="md:w-1/2 xs:w-1/4 lg:pl-36 md:pl-24 sm:pl-1"
              id="logo"
            >
              <Image
                width={286}
                height={144}
                src="/hwe-logo.png"
                alt="Half-Watt Electric logo"
              />
            </section>
            <section
              className="md:w-1/2 xs:w-3/4 flex flex-row align-center md:space-evenly lg:pr-36 md:pr-24 sm:pr-1"
              id="links-and-phone"
            >
              <div className="mr-11" id="links">
                <Link
                  className="mr-6 lg:text-base sm:text-xs xs:text-xs"
                  href="#services"
                >
                  Services
                </Link>
                <Link
                  className="mr-6 lg:text-base sm:text-xs xs:text-xs"
                  href="#testimonials"
                >
                  Testimonials
                </Link>
                <Link
                  className="mr-6 lg:text-base sm:text-xs xs:text-xs"
                  href="#about-us"
                >
                  About Us
                </Link>
              </div>
              <div className={"lg:text-base sm:text-xs xs:text-xs"} id="phone">
                <span>(999) 999-9999)</span>
              </div>
            </section>
          </nav>
          {children}
          <FloatingActionButton />
          <footer>
            <span>Footer</span>
          </footer>
        </LocaleContext.Provider>
      </body>
    </html>
  );
}
