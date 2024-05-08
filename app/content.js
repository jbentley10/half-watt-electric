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
import { GiRingingAlarm } from "react-icons/gi";
import { FaGripfire } from "react-icons/fa6";
import { TbBrandSpeedtest } from "react-icons/tb";
import { PiSecurityCameraFill } from "react-icons/pi";
import { FaRegLightbulb } from "react-icons/fa6";

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
        <div
          id="hero"
          className="flex flex-row items-center md:gap-32 md:px-24 md:mb-64 xs:mb-32"
        >
          <div
            id="hero__image"
            className="w-1/2 xs:w-1/4 md:inline sm:hidden xs:hidden"
          >
            <Image
              src="/bolt.png"
              width={690}
              height={1235}
              alt="A red lightning bolt"
            />
          </div>
          <div id="hero__text" className="w-1/2 xs:w-3/4 mr-36 xs:mr-0">
            <div className="block mb-24">
              <h1 className="text-8xl font-medium font-display uppercase mb-9">
                {block.fields.heading}
              </h1>
              <span className={"font-display text-2xl font-light"}>
                {block.fields.subHeading}
              </span>
            </div>
            <button
              className={
                "bg-red-400 text-white border-white stroke-2 rounded-xl px-8 py-5 text-3xl font-display font-medium"
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
            className="xs:block md:flex md:flex-row md:items-center md:space-between xs:mb-20 md:mb-12 xs:gap-24 md:gap-0"
            id="what-we-do__1"
          >
            <div className="xs:w-full md:w-1/2 md:pr-14" id="what-we-do__text">
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

            <div id="what-we-do__image" className="xs:w-full md:w-1/2 md:px-14">
              <Image
                className={`rounded-3xl shadow-image`}
                src={
                  block.fields.rightImage !== undefined
                    ? `https:${block.fields.rightImage.fields.file.url}`
                    : false
                }
                width={
                  block.fields.rightImage !== undefined
                    ? block.fields.rightImage.fields.file.details.image.width
                    : false
                }
                height={
                  block.fields.rightImage !== undefined
                    ? block.fields.rightImage.fields.file.details.image.height
                    : false
                }
                alt={block.fields.rightImage.fields.title}
              />
            </div>
          </div>
          <div
            className="xs:block md:flex md:flex-row md:items-center md:space-between xs:gap-24 md:gap-0"
            id="what-we-do__2"
          >
            <div
              id="what-we-do__image"
              className="xs:w-full md:w-1/2 md:pr-14 xs:mb-8 md:mb-0"
            >
              <div className={`border-white`}>
                <Image
                  className={`rounded-3xl shadow-image`}
                  src={
                    block.fields.leftImage !== undefined
                      ? `https:${block.fields.leftImage.fields.file.url}`
                      : false
                  }
                  width={
                    block.fields.leftImage !== undefined
                      ? block.fields.leftImage.fields.file.details.image.width
                      : false
                  }
                  height={
                    block.fields.leftImage !== undefined
                      ? block.fields.leftImage.fields.file.details.image.height
                      : false
                  }
                  alt={block.fields.leftImage.fields.title}
                />
              </div>
            </div>

            <div className="xs:w-full md:w-1/2 md:px-14" id="what-we-do__text">
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
            className="flex flex-row space-between xs:gap-12 sm:gap-20 md:gap-28 md:justify-center"
          >
            {block.fields.staff.map((staff, index) => (
              <div
                key={index}
                id={`who-we-are__profile--${index}`}
                className="xs:w-1/2 md:w-1/3"
              >
                <div id={`who-we-are__profile-${index}__image`}>
                  <Image
                    className={`rounded-3xl`}
                    src={
                      staff.fields.image !== undefined
                        ? `https:${staff.fields.image.fields.file.url}`
                        : false
                    }
                    width={
                      staff.fields.image !== undefined
                        ? staff.fields.image.fields.file.details.image.width
                        : false
                    }
                    height={
                      staff.fields.image !== undefined
                        ? staff.fields.image.fields.file.details.image.height
                        : false
                    }
                    alt={staff.fields.image.fields.title}
                  />
                </div>
                <div
                  id="who-we-are__profile-1__heading"
                  className={"mt-8 pb-1"}
                >
                  <h3 className={"font-bold text-xl"}>
                    {staff.fields.heading}
                  </h3>
                </div>
                <div id="who-we-are__profile-1__title" className={"pb-4"}>
                  <span className={"italic text-lg pb-2"}>
                    {staff.fields.role}
                  </span>
                </div>
                <div id="who-we-are__profile-1__subheading">
                  <div>{documentToReactComponents(staff.fields.bio)}</div>
                </div>
              </div>
            ))}
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
            <div className="xs:inline md:flex md:flex-row mb-10 xs:gap-12 sm:gap-20 md:gap-28">
              <div className={"flex flex-row"}>
                <GiRingingAlarm className={`text-5xl mr-4`} />
                <div
                  id="services__block-1"
                  className={"xs:mb-8 md:mb-0 w-full"}
                >
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
              </div>
              <div className={"flex flex-row"}>
                <FaGripfire className={`text-5xl mr-4`} />
                <div
                  id="services__block-2"
                  className={"xs:mb-8 md:mb-0 w-full"}
                >
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
            </div>
            <div className="xs:inline md:flex md:flex-row mb-10 xs:gap-12 sm:gap-20 md:gap-28">
              <div className={"flex flex-row"}>
                <TbBrandSpeedtest className={`text-5xl mr-4`} />
                <div
                  id="services__block-3"
                  className={"xs:mb-8 md:mb-0 w-full"}
                >
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
              </div>
              <div className={"flex flex-row"}>
                <PiSecurityCameraFill className={`text-5xl mr-4`} />
                <div
                  id="services__block-4"
                  className={"xs:mb-8 md:mb-0 w-full"}
                >
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
            </div>
            <div className="flex flex-row">
              <div className={"flex flex-row"}>
                <FaRegLightbulb className={`text-5xl mr-4`} />
                <div id="services__block-5">
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
        </div>
      );

    case "testimonials":
      return (
        <div
          id="testimonials"
          className="flex flex-col w-full md:px-24 xs:mb-32 md:mb-64"
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
              className={`flex flex-col xs:mb-20 md:mb-0 ${
                isEven(index) ? "items-start" : "items-end"
              }`}
              key={index + 2}
              id="testimonial-block"
            >
              <div className={`flex flex-col items-start`}>
                <blockquote className="italic text-2xl border-solid border-zinc-600 border-l-8 py-6 pl-4 mb-4">
                  {documentToReactComponents(testimonial.fields.quote)}
                </blockquote>
                <div className={`flex flex-col pl-7`} id="attribute">
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
