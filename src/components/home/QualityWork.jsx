import React, { useEffect } from "react";
import { useLocation } from "react-router";

export default function QualityWork() {
  const { hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const element = document.getElementById(hash.substring(1));
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, [hash]);
  return (
    <>
      <section id="services" className=" bg-black py-16">
        <div className="font-Bela">
          <h1 className="gradient-text-heading text-3xl md:text-4xl text-center font-semibold">
            My Quality Services
          </h1>

          <p className="text-sm text-white mx-auto text-center max-w-[550px] mt-2.5">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.
          </p>
        </div>
        <div className="mt-8 max-w-[1240px] mx-auto px-[5%] text-white">
          <div className=" transition-bg duration-500 px-5 cursor-pointer hover:bg-p border-b border-q py-4 group grid gap-1 lg:gap-5 lg:grid-cols-[25px_300px_1fr_30px]">
            <h2 className="text-p group-hover:text-white text-xl font-Bela self-center">
              01
            </h2>
            <h1 className="text-3xl font-Bela self-center">MERN Stack Dev.</h1>
            <p className="text-sm self-center font-Bela">
              I develop full-stack web applications using the MERN stack,
              ensuring seamless integration between frontend and backend. My
              focus is on performance, scalability, and user experience,
              delivering dynamic and responsive applications.
            </p>
            <span className="text-p lg:mt-0 mt-2 group-hover:text-white self-center font-extrabold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 self-center transition-rotate duration-500 group-hover:-rotate-90 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </span>
          </div>
          <div className=" transition-bg duration-500 px-5 cursor-pointer hover:bg-p border-b border-q py-4 group grid gap-1 lg:gap-5 lg:grid-cols-[25px_300px_1fr_30px]">
            <h2 className="text-p group-hover:text-white text-xl font-Bela self-center">
              02
            </h2>
            <h1 className="text-3xl font-Bela self-center">
              Frontend Web Dev.
            </h1>
            <p className="text-sm self-center font-Bela">
              I specialize in building interactive, user-friendly, and visually
              appealing web interfaces. Using modern frameworks and best
              practices, I ensure seamless performance, responsiveness, and
              accessibility across all devices. My focus is on creating engaging
              experiences that enhance usability and functionality.
            </p>
            <span className="text-p lg:mt-0 mt-2 group-hover:text-white self-center font-extrabold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 self-center transition-rotate duration-500 group-hover:-rotate-90 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </span>
          </div>
          <div className=" transition-bg duration-500 px-5 cursor-pointer hover:bg-p border-b border-q py-4 group grid gap-1 lg:gap-5 lg:grid-cols-[25px_300px_1fr_30px]">
            <h2 className="text-p group-hover:text-white text-xl font-Bela self-center">
              03
            </h2>
            <h1 className="text-3xl font-Bela self-center">
              Responsive & On-Time Delivery
            </h1>
            <p className="text-sm self-center font-Bela">
              I create websites that adapt flawlessly to all devices, ensuring a
              smooth user experience. My workflow is efficient, guaranteeing
              high-quality results within deadlines.
            </p>
            <span className="text-p lg:mt-0 mt-2 group-hover:text-white self-center font-extrabold">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="size-6 self-center transition-rotate duration-500 group-hover:-rotate-90 "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
