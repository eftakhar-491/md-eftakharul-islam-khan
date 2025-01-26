import React from "react";

export default function ProjectCard() {
  return (
    <>
      <div className="group shadow-2xl relative overflow-hidden px-4 pt-7 rounded-t-2xl bg-[#140C1C]">
        <div className="px-3">
          <img
            className="w-full rounded-t-lg"
            src="https://i.ibb.co.com/Xx4VMfJ/p1.jpg"
            alt=""
          />
        </div>
        <div className="cursor-pointer left-0 transition-all duration-250  bg-gradient-to-l p-4 w-full from-q to-p absolute group-hover:block -bottom-22 group-hover:bottom-0 text-white">
          <h1 className=" text-2xl font-Bela flex items-center justify-between">
            CHRONO CRAFT
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6 group-hover:rotate-280 delay-100 transition-rotate duration-500"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m4.5 4.5 15 15m0 0V8.25m0 11.25H8.25"
                />
              </svg>
            </span>
          </h1>
          <p className="font-Bela text-[14px]">Project was about -</p>
        </div>
      </div>
    </>
  );
}
