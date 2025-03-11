/**
 * @file page.js
 */
// Import components and utils
import { fetchBlocksBySlug } from '../../utils/contentfulData';
import { ContactForm } from "../components/contact-form";
import Content from "../content";

// Set metadata
export const metadata = {
  title: 'Contact Us | Half Watt Electric',
  description: 'Full-service installation of low-voltage equipment for fully-tested, fire-safe solutions.',
}

export default async function Contact() {
  const blocksEnglish = await fetchBlocksBySlug('contact', 'en-US');
  const blocksSpanish = await fetchBlocksBySlug('contact', 'es');

  // Wait for the promises to resolve
  const [english, spanish] = await Promise.all([blocksEnglish, blocksSpanish]);

  return (
    <main className="flex min-h-screen flex-col items-center justify-between lg:p-24 xs:p-4">
      <Content key={Math.random()} englishBlocks={english} spanishBlocks={spanish} />
      <div className="container mx-auto py-12 px-4 md:px-6">
        <div className="max-w-2xl mx-auto">
            <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
            <p className="text-muted-foreground mb-8">
            Fill out the form below and we&apos;ll get back to you as soon as possible.
            </p>
            <ContactForm />
        </div>
      </div>
    </main>
  );
}
