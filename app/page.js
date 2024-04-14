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
