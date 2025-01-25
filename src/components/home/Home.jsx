import React from "react";
import Hero from "./Hero";

export default function Home() {
  return (
    <>
      <main className="max-w-[1240px] mx-auto">
        <Hero />
        <p className="min-h-40">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor
          suscipit vel, iste hic, temporibus tempora doloribus incidunt et
          placeat vitae perspiciatis saepe quos. Quis nihil laudantium
          perferendis qui saepe eius?
        </p>
      </main>
    </>
  );
}
