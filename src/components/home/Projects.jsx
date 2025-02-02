import React, { useEffect, useState } from "react";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const [projects, setProjects] = useState([]);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data));
  }, []);
  console.log(projects);
  return (
    <>
      <section id="projects" className=" py-16">
        <div className="font-Bela">
          <h1 className="gradient-text-heading text-3xl md:text-4xl text-center font-semibold">
            My Recent Projects
          </h1>

          <p className="text-sm px-4 text-white mx-auto text-center max-w-[550px] mt-2.5">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className="relative grid grid-cols-1 md:grid-cols-2 max-w-[1240px] px-[5%] mx-auto gap-5 mt-10">
          <div className="absolute w-80 h-80 bg-radial from-p/40 top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  -z-50 to-transparent blur-3xl overflow-hidden rounded-full"></div>

          {projects?.map((project) => (
            <ProjectCard key={project.id} data={project} />
          ))}
        </div>
      </section>
    </>
  );
}
