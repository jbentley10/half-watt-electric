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
import { documentToReactComponents } from "@contentful/rich-text-react-renderer";

function isEven(num) {
  return num % 2 === 0;
}

const blockByType = (block) => {
  // Get the content type from the block content properties
  const contentType = block.sys.contentType.sys.id;

  switch (contentType) {
    case "heroBlock":
      return (
        <div id="hero" className="flex flex-row items-center md:mb-64 xs:mb-32 xs:pl-4">
          <div
            id="hero__image"
            className="sm:w-2/6 md:w-1/2 lg:w-1/2 sm:pl-8 md:pl-12 md:pr-24 lg:pl-40 lg:pr-96 xs:w-1/4 sm:inline xs:hidden xs:hidden"
          >
            <Image
              src="/bolt.png"
              width={690}
              height={1235}
              alt="A red lightning bolt"
            />
          </div>
          <div id="hero__text" className="sm:w-4/6 md:w-1/2 lg:w-1/2 xs:w-3/4 sm:px-8 md:pr-24 lg:pr-36 xs:mr-0">
            <div className="block sm:mb-24 xs:mb-12">
              <h1 className="xs:text-7xl md:text-8xl font-regular font-display uppercase sm:mb-9 xs:mb-4">
                {block.fields.heading}
              </h1>
              <span className={"font-display md:text-2xl xs:text-xl font-light"}>
                {block.fields.subHeading}
              </span>
            </div>
            <button
              className={
                "bg-brand-primary text-white border-white border-4 rounded-xl px-8 py-5 md:text-3xl sm:text-2xl font-display font-medium"
              }
            >
              Get a quote
            </button>
          </div>
        </div>
      );

    case "whatWeDoBlock":
      return (
        <div
          id="what-we-do"
          className="flex flex-col sm:mb-32 md:px-24 md:mb-64 xs:mb-32"
        >
          <div className={"mb-20"} id="what-we-do__heading">
            <h2 className={"text-6xl font-display font-medium uppercase mb-4"}>
              {block.fields.heading}
            </h2>
            <span className={"text-base font-body text-xl flex md:w-1/2"}>
              {block.fields.subheading}
            </span>
          </div>
          <div
            className="flex flex-row items-center space-between md:mb-12"
            id="what-we-do__1"
          >
            <div className="w-1/2 md:pr-14" id="what-we-do__text">
              <ul>
                <li className={"mb-12"}>
                  <h3 className={"font-display text-3xl leading-tight mb-4"}>
                    {block.fields.block1Heading}
                  </h3>
                  <p className={"font-body text-base"}>
                    {block.fields.block1Subheading}
                  </p>
                </li>
                <li className={"mb-12"}>
                  <h3 className={"font-display text-3xl leading-tight mb-4"}>
                    {block.fields.block2Heading}
                  </h3>
                  <p className={"font-body text-base"}>
                    {block.fields.block2Subheading}
                  </p>
                </li>
              </ul>
            </div>

            <div id="what-we-do__image" className="w-1/2 md:px-14">
              <Image
                src="/what-we-do.png"
                width={1206}
                height={765}
                alt="An image of something"
              />
            </div>
          </div>
          <div className="flex flex-row items-center" id="what-we-do__2">
            <div id="what-we-do__image" className="w-1/2 md:pr-14">
              <Image
                src="/what-we-do.png"
                width={1206}
                height={765}
                alt="An image of something"
              />
            </div>

            <div className="w-1/2 md:px-14" id="what-we-do__text">
              <ul>
                <li className={"mb-12"}>
                  <h3 className={"font-display text-3xl leading-tight mb-4"}>
                    {block.fields.block3Heading}
                  </h3>
                  <p className={"font-body text-base"}>
                    {block.fields.block3Subheading}
                  </p>
                </li>
                <li className={"mb-12"}>
                  <h3 className={"font-display text-3xl leading-tight mb-4"}>
                    {block.fields.block4Heading}
                  </h3>
                  <p className={"font-body text-base"}>
                    {block.fields.block4Subheading}
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      );

    case "whoWeAreBlock":
      return (
        <div
          id="who-we-are"
          className="flex flex-col w-full sm:mb-32 md:px-24 md:mb-64 xs:mb-32"
        >
          <div className={"mb-20"} id="who-we-are__heading">
            <h2 className={"text-6xl font-display font-medium uppercase mb-4"}>
              {block.fields.heading}
            </h2>
            <span className={"text-base font-body text-xl"}>
              {block.fields.subheading}
            </span>
          </div>
          <div
            id="who-we-are__profiles"
            className="flex flex-row space-between"
          >
            <div id="who-we-are__profile--1">
              <div id="who-we-are__profile-1__image"></div>
              <div id="who-we-are__profile-1__heading">
                <h3>{block.fields.block1Heading}</h3>
              </div>
              <div id="who-we-are__profile-1__title">
                <span>{block.fields.block1Title}</span>
              </div>
              <div id="who-we-are__profile-1__subheading">
                <p>{block.fields.block1Subheading}</p>
              </div>
            </div>
            <div id="who-we-are__profile--2">
              <div id="who-we-are__profile-2__image"></div>
              <div id="who-we-are__profile-2__heading">
                <h3>{block.fields.block2Heading}</h3>
              </div>
              <div id="who-we-are__profile-2__title">
                <span>{block.fields.block2Title}</span>
              </div>
              <div id="who-we-are__profile-2__subheading">
                <p>{block.fields.block2Subheading}</p>
              </div>
            </div>
          </div>
        </div>
      );

    case "servicesBlock":
      return (
        <div
          id="services"
          className="flex flex-col w-full sm:mb-32 md:px-24 md:mb-64 xs:mb-32"
        >
          <div className={"mb-20"} id="services__heading">
            <h2 className={"text-6xl font-display font-medium uppercase mb-4"}>
              {block.fields.heading}
            </h2>
            <span className={"text-base font-body text-xl"}>
              {block.fields.subheading}
            </span>
          </div>
          <div id="services__blocks">
            <div className="flex flex-row mb-10">
              <div id="services__block-1">
                <h3
                  id="services__block-1__heading"
                  className="text-3xl font-display mb-4"
                >
                  {block.fields.block1Heading}
                </h3>
                <p id="services__block-1__body">
                  {block.fields.block1Subheading}
                </p>
              </div>
              <div id="services__block-2 mx-4">
                <h3
                  id="services__block-2__heading"
                  className="text-3xl font-display mb-4"
                >
                  {block.fields.block2Heading}
                </h3>
                <p id="services__block-2__body">
                  {block.fields.block2Subheading}
                </p>
              </div>
            </div>
            <div className="flex flex-row mb-10">
              <div id="services__block-3 mx-4">
                <h3
                  id="services__block-3__heading"
                  className="text-3xl font-display mb-4"
                >
                  {block.fields.block3Heading}
                </h3>
                <p id="services__block-3__body">
                  {block.fields.block3Subheading}
                </p>
              </div>
              <div id="services__block-4 mx-4">
                <h3
                  id="services__block-4__heading"
                  className="text-3xl font-display mb-4"
                >
                  {block.fields.block4Heading}
                </h3>
                <p id="services__block-4__body">
                  {block.fields.block4Subheading}
                </p>
              </div>
            </div>
            <div className="flex flex-row">
              <div id="services__block-5 mx-4">
                <h3
                  id="services__block-5__heading"
                  className="text-3xl font-display mb-4"
                >
                  {block.fields.block5Heading}
                </h3>
                <p id="services__block-5__body">
                  {block.fields.block5Subheading}
                </p>
              </div>
            </div>
          </div>
        </div>
      );

    case "testimonials":
      return (
        <div
          id="testimonials"
          className="flex flex-col w-full md:px-24 md:mb-64"
        >
          <div className={"mb-20"} id="testimonials__heading">
            <h2 className={"text-6xl font-display font-medium uppercase mb-4"}>
              {block.fields.heading}
            </h2>
            <span className={"text-base font-body text-xl"}>
              {block.fields.subheading}
            </span>
          </div>
          {block.fields.testimonialBlocks.map((testimonial, index) => (
            <section
              className={`flex flex-col ${
                isEven(index) ? "items-start" : "items-end"
              }`}
              key={index + 2}
              id="testimonial-block"
            >
              <div className={`flex flex-col items-start`}>
                <blockquote className="italic text-2xl border-solid border-zinc-600 border-l-8 py-6 pl-4 mb-4">
                  {documentToReactComponents(testimonial.fields.quote)}
                </blockquote>
                <div
                  className={`flex flex-col pl-7`}
                  id="attribute"
                >
                  <div id="attribute-name">
                    {testimonial.fields.customerName}
                  </div>
                  <div className="italic" id="attribute-company">
                    {testimonial.fields.customerCompany}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      );

    case "footerBlock":
      return (
        <footer className="flex flex-col items-center">
          <span className="mb-4 font-semibold">{block.fields.companyName}</span>
          <span className="mb-4">{block.fields.copyrightInformation}</span>
          <span className="mb-4">{block.fields.phoneNumber}</span>
        </footer>
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
