import Image from "next/image";

import { fetchBlocksBySlug } from '../utils/contentfulData';
import Content from "./content";

export default async function Home() {
  const blocksEnglish = await fetchBlocksBySlug('home', 'en-US');
  const blocksSpanish = await fetchBlocksBySlug('home', 'es');

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <main className="min-h-screen">
      <Content key={Math.random()} englishBlocks={english} spanishBlocks={spanish} />
    </main>
  );
}
