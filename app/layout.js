/**
 * @file layout.js
 */
"use client";

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
              className="md:w-1/2 sm:w-2/6 xs:w-1/4 lg:pl-36 md:pl-24 sm:pl-8 xs:pl-4"
              id="logo"
            >
              <Image
                width={286}
                height={144}
                src="/hwe-logo.png"
                alt="Half-Watt Electric logo"
                className="sm:w-1/3 xs:w-full"
              />
            </section>
            <section
              className="md:w-1/2 sm:w-4/6 xs:w-3/4 flex flex-row xs:justify-end md:space-evenly lg:justify-end align-center items-center lg:pr-36 md:pr-24 sm:pr-2 xs:pr-4"
              id="links-and-phone"
            >
              <div className="xs:mr-2 sm:mr-11 lg:mr-28" id="links">
                <Link
                  className="hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs"
                  href="#services"
                >
                  Services
                </Link>
                <Link
                  className="hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs"
                  href="#testimonials"
                >
                  Testimonials
                </Link>
                <Link
                  className="hover:opacity-50 md:mr-6 sm:mr-4 xs:mr-2 font-semibold lg:text-base sm:text-xs xs:text-xs"
                  href="#about-us"
                >
                  About Us
                </Link>
              </div>
              <div
                className={
                  "font-extrabold text-zinc-600 lg:text-base sm:text-xs xs:text-xs"
                }
                id="phone"
              >
                <a href="tel:+19713445857">(971) 344-5857</a>
              </div>
            </section>
          </nav>
          {children}
          <FloatingActionButton />
        </LocaleContext.Provider>
      </body>
    </html>
  );
}
