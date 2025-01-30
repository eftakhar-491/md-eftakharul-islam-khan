import React from "react";
import html from "../../assets/icon/html.png";
import css from "../../assets/icon/css.png";
import js from "../../assets/icon/js.png";
import react from "../../assets/icon/react.png";
import node from "../../assets/icon/node.png";
import express from "../../assets/icon/express.png";
import tailwind from "../../assets/icon/tailwind.png";
import nx from "../../assets/icon/nx.jpeg";
import mg from "../../assets/icon/mg.png";
import git from "../../assets/icon/git.png";
import types from "../../assets/icon/type.png";
import boost from "../../assets/icon/boost.png";
export default function Skills() {
  return (
    <>
      <section id="skills" className=" py-16">
        <div className="font-Bela">
          <h1 className="gradient-text-heading text-4xl text-center font-semibold">
            My Skills
          </h1>

          <p className="text-sm text-white mx-auto text-center max-w-[550px] mt-2.5">
            We put your ideas and thus your wishes in the form of a unique web
            project that inspires you and you customers.{" "}
          </p>
        </div>
        <div className="flex max-w-[1240px] mx-auto px-[5%] gap-6 mt-10 items-center justify-center flex-wrap">
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={html} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                98%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">HTML</p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={css} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                95%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">CSS</p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={js} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                93%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">
              JavaScript
            </p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={mg} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                89%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">Mongo DB</p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={express} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                91%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">
              Express JS
            </p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={react} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                95%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">React JS</p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={node} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                78%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">Node JS</p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={tailwind} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                98%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">
              Tailwind CSS
            </p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={nx} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                45%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">Next JS</p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={git} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                91%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">Github</p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={boost} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                98%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">
              Bootstrap
            </p>
          </div>
          <div className="group w-fit">
            <div className="bg-[#140C1C] transition-all duration-200 group-hover:bg-q group-hover:border-p border border-q  p-6 rounded-2xl shadow-lg flex flex-col items-center">
              <div className="w-20 group-hover:grayscale-0 group-hover:scale-110 transition-scale duration-200 grayscale-100 h-20 rounded-full flex items-center justify-center">
                <img src={types} alt="Figma Logo" className="w-12 h-12" />
              </div>
              <p className="text-gray-400 group-hover:text-purple-200 font-semibold mt-4">
                20%
              </p>
            </div>
            <p className="text-purple-400 text-sm mt-1 text-center">
              TypeScript
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
