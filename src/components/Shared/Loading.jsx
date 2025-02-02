import React from "react";

export default function Loading({ data }) {
  //   if (data.length > 0) return null;
  return (
    <>
      <section
        className={`${
          data.length > 0 && "slide-up"
        } fixed top-0 left-0 w-full h-full text-white bg-black bg-opacity-50 flex justify-center items-center z-[80]`}
      >
        <div className="tracking-[30px]">
          {data.length === 0 && (
            <>
              <span className="loading-letter">L</span>
              <span className="loading-letter">O</span>
              <span className="loading-letter">A</span>
              <span className="loading-letter">D</span>
              <span className="loading-letter">I</span>
              <span className="loading-letter">N</span>
              <span className="loading-letter">G</span>
            </>
          )}
        </div>
      </section>
    </>
  );
}
