import React from "react";
import Hero from "./Hero";
import QualityWork from "./QualityWork";
import Skills from "./Skills";
import { Helmet } from "react-helmet-async";
import Projects from "./Projects";
import Contact from "./Contact";
import Educations from "./Educations";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Md Eftakharul Islam Khan</title>
      </Helmet>
      <Hero />
      <QualityWork />
      <Skills />
      <Educations />
      <Projects />
      <Contact />
    </>
  );
}
