"use client";

import Hero_section from "./components/hero_section";
import StatsSection from "./components/statsSection";


export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden max-w-[1440px] flex flex-col mx-auto">
      <Hero_section/>
      <StatsSection/>
    </main>
  );
}
