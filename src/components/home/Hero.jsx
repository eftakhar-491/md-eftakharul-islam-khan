import React from "react";

export default function Hero() {
  return (
    <>
      <section className="relative font-Bela min-h-[600px] flex items-center ">
        <h1
          style={{
            WebkitTextStroke: "1px #5a1899",
          }}
          className=" font-Sura -z-50 font-extrabold text-transparent absolute text-[300px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        >
          HI
        </h1>
        <div className="flex w-full text-white px-[5%]">
          <div className="w-1/2">
            <h1>
              <span className="text-4xl">I am Eftakhar</span>
              <br />{" "}
              <span className="text-7xl">
                Frontend Web <br /> Developer.
              </span>
            </h1>
            <p className="text-lg max-w-[550px] mt-2.5">
              I break down complex user experinece problems to create integritiy
              focussed solutions that connect billions of people
            </p>
            <div>
              <button className="flex gap-2 items-center px-6 py-[6px] text-[16px] bg-q border border-p hover:bg-p mt-6 rounded-4xl cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-5"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>{" "}
                Download CV
              </button>
              <div></div>
            </div>
          </div>
          <div></div>
        </div>
      </section>
    </>
  );
}
