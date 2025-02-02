import React from "react";
import pp from "../../assets/pp.jpg";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { Link } from "react-router";
import mypic from "../../assets/mypic.jpg";
export default function Hero() {
  return (
    <>
      <section className="max-w-[1240px] mx-auto relative lg:min-h-[600px] font-Bela py-20 flex items-center ">
        <div className="absolute w-80 h-80 bg-radial from-p/40 -top-44 -right-64 -z-50 to-transparent blur-3xl overflow-hidden rounded-full"></div>

        <h1
          style={{
            WebkitTextStroke: "0.6px #5a1899",
          }}
          className="animate-zoomout font-Sura -z-50 font-extrabold text-transparent absolute text-[250px] md:text-[300px] top-1/2 left-1/2 -translate-x-1/2 md:-translate-x-[240px] -translate-y-[250px] md:-translate-y-1/2"
        >
          HI
        </h1>
        <div className="flex md:flex-row flex-col items-center w-full text-white px-[5%]">
          <div className="md:w-1/2 lg:pl-3">
            <h1>
              <span className="text-3xl md:text-4xl text-[#DDDDDD]">
                I am Eftakhar
              </span>
              <br />{" "}
              <span className="text-5xl md:text-7xl">
                <span className="gradient-text">Frontend Web</span>
                <br />
                <span className="gradient-text">Developer.</span>
              </span>
            </h1>
            <p className="text-lg max-w-[550px] mt-2.5">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div className="items-center flex gap-4 mt-6">
              <Link
                target="_blank"
                to={
                  "https://drive.google.com/file/d/1EwdL-gI1sHILFVjrOfYskTs7unV4HO6s/view?usp=sharing"
                }
              >
                <button className="text-[#AE8DF2] hover:text-white text-sm flex gap-2 items-center px-6 py-[8px] bg-q border border-p hover:bg-p rounded-4xl cursor-pointer ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-4"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                    />
                  </svg>{" "}
                  <span>Download CV</span>
                </button>
              </Link>

              <div className="flex items-center gap-2 py-[6px] ">
                <Link
                  target="_blank"
                  to={"https://www.linkedin.com/in/eftakhar-islam/"}
                >
                  <div className="text-[#AE8DF2] hover:text-white text-sm flex gap-2 items-center px-2 py-2 bg-q border border-p hover:bg-p rounded-4xl cursor-pointer ">
                    <FaLinkedinIn />
                  </div>
                </Link>
                <Link target="_blank" to={"https://github.com/eftakhar-491"}>
                  <div className="text-[#AE8DF2] hover:text-white text-sm flex gap-2 items-center px-2 py-2 bg-q border border-p hover:bg-p rounded-4xl cursor-pointer ">
                    <FaGithub />
                  </div>
                </Link>
                <Link
                  target="_blank"
                  to={"https://www.facebook.com/mdeftakharulislamkhan/"}
                >
                  <div className="text-[#AE8DF2] hover:text-white text-sm flex gap-2 items-center px-2 py-2 bg-q border border-p hover:bg-p rounded-4xl cursor-pointer ">
                    <FaFacebookF />
                  </div>
                </Link>
              </div>
            </div>
          </div>
          <div className="md:w-1/2 mt-8 lg:mt-0">
            {" "}
            <div className="relative   rotate-[5deg] overflow-hidden  hover:rotate-0 transition-all hover:border-2 duration-250 mx-auto md:w-[350px] w-[300px] h-[280px] md:h-[280px] rounded-3xl bg-[#111315] border-[0.4px] border-p">
              <img
                src={mypic}
                alt=""
                className=" rounded-3xl w-full h-full object-cover scale-125 pt-5"
              />
              <div className="absolute w-80 h-80 bg-radial from-p/20 top-32 -left-24 -z-50 to-transparent blur-3xl rounded-full"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
