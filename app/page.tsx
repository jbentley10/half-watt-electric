import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div id="hero">
        <h1>Hero</h1>
      </div>
      <div id="what-we-do">
        <h2>What We Do</h2>
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
