import Image from "next/image";

import { fetchBlocksBySlug } from '../utils/contentfulData';
import Content from "./content";

export default async function Home() {
  const blocksEnglish = await fetchBlocksBySlug('home', 'en-US');
  const blocksSpanish = await fetchBlocksBySlug('home', 'es');

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Content key={Math.random()} englishBlocks={english} spanishBlocks={spanish} />
      <div id="what-we-do">
        <div className="flex flex-row items-center" id="what-we-do__1">
          <div id="what-we-do__image" className="w-1/2">
            <Image
              src="/what-we-do.png"
              width={1206}
              height={765}
              alt="An image of something"
            />
          </div>
          <div className="w-1/2" id="what-we-do__text">
            <h2>What We Do</h2>
            <span>
              At Half-Watt Electric, we provide a variety of services to suit
              your business’ needs.
            </span>
            <ul>
              <li>
                <h3>Text</h3>
                <p>Body</p>
              </li>
              <li>
                <h3>Text</h3>
                <p>Body</p>
              </li>
              <li>
                <h3>Text</h3>
                <p>Body</p>
              </li>
              <li>
                <h3>Text</h3>
                <p>Body</p>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-row items-center" id="what-we-do__2">
          <div className="w-1/2" id="what-we-do__text">
            <h2>What We Do</h2>
            <span>
              At Half-Watt Electric, we provide a variety of services to suit
              your business’ needs.
            </span>
            <ul>
              <li>
                <h3>Text</h3>
                <p>Body</p>
              </li>
              <li>
                <h3>Text</h3>
                <p>Body</p>
              </li>
              <li>
                <h3>Text</h3>
                <p>Body</p>
              </li>
              <li>
                <h3>Text</h3>
                <p>Body</p>
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
      </div>
      <div id="who-we-are">
        <h2>Who We Are</h2>
      </div>
      <div id="services">
        <h2>Service</h2>
      </div>
      <div id="testimonials">
        <h2>Testimonials</h2>
      </div>
    </main>
  );
}
