import React from "react";
import { Link, NavLink } from "react-router";

export default function Nav() {
  return (
    <>
      <nav>
        <div className="max-w-[1240px] mx-auto flex justify-between items-center py-4 px-[5%] text-white">
          <h1 className="font-semibold">eftakhar491@gmail.com</h1>
          <ul className="flex items-center text-sm space-x-6">
            <NavLink to="/">
              <li>Services</li>
            </NavLink>
            <NavLink to="/">
              <li>Works</li>
            </NavLink>
            <NavLink to="/">
              <li>Resume</li>
            </NavLink>
            <NavLink to="/">
              <li>Skills</li>
            </NavLink>
            <NavLink to="/">
              <li>Contact</li>
            </NavLink>
            <button className="flex gap-2 items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
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
          </ul>
        </div>
      </nav>
    </>
  );
}
