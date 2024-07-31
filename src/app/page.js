"use client";

import Form from "./components/Form";
import Header from "./components/Header";
import MainSection from "./components/MainSection";

export default function Home() {
  return (
    <main className="min-h-screen w-full overflow-hidden bg-[#0B0B0A] max-w-[1280px] flex flex-col mx-auto px-4">
      
      <Header />

      <div className="flex flex-col lg:flex-row mt-4 ">
        <MainSection />
        <Form />
      </div>

    </main>
  );
}
