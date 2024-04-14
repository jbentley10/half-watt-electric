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
  // Get the content type from the block content properties
  const contentType = block.sys.contentType.sys.id;

  console.log(block);

  switch (contentType) {
    case "heroBlock":
      return (
        <div id="hero" className="flex flex-row items-center mb-64">
          <div id="hero__image" className="w-1/2 ml-36 sm:hidden">
            <Image
              src="/bolt.png"
              width={690}
              height={1235}
              alt="A red lightning bolt"
            />
          </div>
          <div id="hero__text" className="w-1/2 mr-36">
            <div className="block mb-24">
              <h1 className="text-8xl font-medium font-display uppercase mb-9">{block.fields.heading}</h1>
              <span className={'font-display text-2xl font-light'}>{block.fields.subHeading}</span>
            </div>
            <button className={'bg-red-400 text-white border-white stroke-2 rounded-xl px-8 py-5 text-3xl font-display font-medium'}>Get a quote</button>
          </div>
        </div>
      );

    case "whoWeAreBlock":
      return (
        <div id="what-we-do">
          <div className={'mb-20'} id="what-we-do__heading">
            <h2 className={'text-6xl font-display font-medium uppercase mb-4'}>{block.fields.heading}</h2>
            <span className={'text-base font-body text-xl'}>{block.fields.subheading}</span>
        </div>
          <div className="flex flex-row items-center" id="what-we-do__1">
            <div className="w-1/2" id="what-we-do__text">              
              <ul>
                <li className={'mb-12'}>
                  <h3 className={'font-display text-3xl leading-tight mb-4'}>{block.fields.block1Heading}</h3>
                  <p className={'font-body text-base'}>{block.fields.block1Subheading}</p>
                </li>
                <li className={'mb-12'}>
                  <h3 className={'font-display text-3xl leading-tight mb-4'}>{block.fields.block2Heading}</h3>
                  <p className={'font-body text-base'}>{block.fields.block2Subheading}</p>
                </li>
              </ul>
            </div>

            <div id="what-we-do__image" className="w-1/2">
              <Image
                src="/what-we-do.png"
                width={1206}
                height={765}
                alt="An image of something"
              />
            </div>
          </div>
          <div className="flex flex-row items-center" id="what-we-do__2">
            <div id="what-we-do__image" className="w-1/2">
              <Image
                src="/what-we-do.png"
                width={1206}
                height={765}
                alt="An image of something"
              />
            </div>

            <div className="w-1/2" id="what-we-do__text">
              <ul>
                <li className={'mb-12'}>
                  <h3 className={'font-display text-3xl leading-tight mb-4'}>{block.fields.block3Heading}</h3>
                  <p className={'font-body text-base'}>{block.fields.block3Subheading}</p>
                </li>
                <li className={'mb-12'}>
                  <h3 className={'font-display text-3xl leading-tight mb-4'}>{block.fields.block4Heading}</h3>
                  <p className={'font-body text-base'}>{block.fields.block4Subheading}</p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );
    default:
      return false;
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
