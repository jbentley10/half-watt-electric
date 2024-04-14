/**
 * @file content.js
 */
"use client";

// Component that's called from inside page.js
// All it does is look at each content block,
// and assign it the appropriate React component(s)

// Import depdencies
import { useState, useContext, useEffect } from "react";
import Image from "next/image";

// Import components
import { LocaleContext } from "./locale-provider";

const blockByType = (block) => {
  console.log("I did it");
  console.log(block);

  // Get the content type from the block content properties
  const contentType = block.sys.contentType.sys.id;

  switch (contentType) {
    case "heroBlock":
      return (
        <div id="hero" className="flex flex-row items-center">
          <div id="hero__image" className="w-1/2 ml-36">
            <Image
              src="/bolt.png"
              width={690}
              height={1235}
              alt="A red lightning bolt"
            />
          </div>
          <div id="hero__text" className="w-1/2 mr-36">
            <h1>SAFE.</h1>
            <h1>LOW-VOLT.</h1>
            <h1>TESTED.</h1>
            <span>
              Discover our low-voltage expertise: precision installs, fire-safe
              solutions, and tested reliability for peace of mind.
            </span>
            <button>Get a quote</button>
          </div>
        </div>
      );
      break;
    default:
      return (
        <div id="hero" className="flex flex-row items-center">
          <div id="hero__image" className="w-1/2 ml-36">
            <Image
              src="/bolt.png"
              width={690}
              height={1235}
              alt="A red lightning bolt"
            />
          </div>
          <div id="hero__text" className="w-1/2 mr-36">
            <h1>SAFE.</h1>
            <h1>LOW-VOLT.</h1>
            <h1>TESTED.</h1>
            <span>
              Discover our low-voltage expertise: precision installs, fire-safe
              solutions, and tested reliability for peace of mind.
            </span>
            <button>Get a quote</button>
          </div>
        </div>
      );
  }
};

// Component recieves a single array of block objects
export default function Content({ englishBlocks, spanishBlocks }) {
  const isEnglish = useContext(LocaleContext);
  const [translatedBlocks, setTranslatedBlocks] = useState(englishBlocks);

  useEffect(() => {
    isEnglish.isEnglish === true
      ? setTranslatedBlocks(englishBlocks)
      : setTranslatedBlocks(spanishBlocks);
  }, [isEnglish.isEnglish, englishBlocks, spanishBlocks]);

  return (
    translatedBlocks &&
    translatedBlocks.map((block) => {
      return blockByType(block);
    })
  );
}
