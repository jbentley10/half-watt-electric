import Image from "next/image";
import React from "react";
import { FaGripfire, FaRegLightbulb } from "react-icons/fa6";
import { GiRingingAlarm } from "react-icons/gi";
import { PiSecurityCameraFill } from "react-icons/pi";
import { TbBrandSpeedtest } from "react-icons/tb";

function BlockWithImage(props) {
  const { block, index } = props;

  return (
    <div
      key={index}
      className={`xs:block md:flex md:items-center md:space-between xs:mb-20 md:mb-12 xs:gap-24 md:gap-0 ${
        index % 2 == 0 ? "md:flex-row-reverse" : "md:flex-row"
      }`}
      id={`what-we-do__${index + 1}`}
    >
      <div className='xs:w-full md:w-1/2 md:px-14' id='what-we-do__text'>
        <ul>
          <li className={"mb-12"}>
            {(() => {
              switch (block.icon) {
                case "alarm":
                  return <GiRingingAlarm className={`text-5xl mr-4`} />;
                case "fire":
                  return <FaGripfire className={`text-5xl mr-4`} />;
                case "dash":
                  return <TbBrandSpeedtest className={`text-5xl mr-4`} />;
                case "camera":
                  return <PiSecurityCameraFill className={`text-5xl mr-4`} />;
                case "light":
                  return <FaRegLightbulb className={`text-5xl mr-4`} />;
                default:
                  return null;
              }
            })()}
            <h3 className={"font-display text-3xl leading-tight mb-4"}>
              {block.fields.heading}
            </h3>
            <p className={"font-body text-base"}>{block.fields.description}</p>
          </li>
        </ul>

        <ul>
          <li className={"mb-12"}>
            {(() => {
              switch (block.icon2) {
                case "alarm":
                  return <GiRingingAlarm className={`text-5xl mr-4`} />;
                case "fire":
                  return <FaGripfire className={`text-5xl mr-4`} />;
                case "dash":
                  return <TbBrandSpeedtest className={`text-5xl mr-4`} />;
                case "camera":
                  return <PiSecurityCameraFill className={`text-5xl mr-4`} />;
                case "light":
                  return <FaRegLightbulb className={`text-5xl mr-4`} />;
                default:
                  return null;
              }
            })()}
            <h3 className={"font-display text-3xl leading-tight mb-4"}>
              {block.fields.heading2}
            </h3>
            <p className={"font-body text-base"}>{block.fields.description2}</p>
          </li>
        </ul>
      </div>

      <div id='what-we-do__image' className='xs:w-full md:w-1/2 md:px-14'>
        <Image
          className={`rounded-3xl shadow-image`}
          src={
            `https://${block.fields.image?.fields.file.url}` ||
            "/placeholder-image.jpg"
          }
          width={block.fields.image?.fields.file.details.image.width || 500}
          height={block.fields.image?.fields.file.details.image.height || 300}
          alt={
            block.fields.image?.fields.file.fileName ||
            `Image for ${block.heading}`
          }
        />
      </div>
    </div>
  );
}

function WhatWeDoBlock(props) {
  return (
    <div
      id='what-we-do'
      className='flex flex-col sm:mb-32 md:px-24 md:mb-64 xs:mb-32'
    >
      <div className={"mb-20"} id='what-we-do__heading'>
        <h2 className={"text-6xl font-display font-medium uppercase mb-4"}>
          {props.heading}
        </h2>
        <span className={"text-base font-body text-xl flex md:w-1/2"}>
          {props.subheading}
        </span>
      </div>
      {props.blocks.map((block, index) => (
        <BlockWithImage key={index} block={block} />
      ))}
    </div>
  );
}

export default WhatWeDoBlock;
