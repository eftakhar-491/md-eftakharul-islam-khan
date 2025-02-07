import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router";
import signeture from "../../assets/ss.png";

export default function Nav() {
  const [bgColor, setBgColor] = useState("bg-transparent");
  const { pathname } = useLocation();
  const [menu, setMenu] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setBgColor(" backdrop-blur-2xl bg-black/70 shadow shadow-q/30"); // Change to the color you want after 700px
      } else {
        setBgColor("bg-transparent"); // Default background color
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <>
      <nav className={`${bgColor} fixed top-0 left-0 w-full z-50`}>
        <div className="max-w-[1240px] mx-auto flex justify-between items-center py-4 px-[5%] text-white">
          <h1 className="font-semibold flex items-center gap-3">
            {" "}
            <span className="text-2xl shrink-0 font-Rubik">
              <img className="h-[36px] md:h-[50px]" src={signeture} alt="" />
            </span>{" "}
          </h1>
          <span className="cursor-pointer lg:hidden flex items-center gap-2">
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1EwdL-gI1sHILFVjrOfYskTs7unV4HO6s/view?usp=sharing"
            >
              <button className="flex gap-2 items-center px-4 w-full py-[6px] text-[12px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={1.5}
                  stroke="currentColor"
                  className="size-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
                  />
                </svg>{" "}
                Download CV
              </button>
            </Link>
            <span onClick={() => setMenu((p) => !p)}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="size-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                />
              </svg>
            </span>
          </span>
          {menu && (
            <ul
              onClick={() => setMenu((p) => !p)}
              className="absolute flex flex-col gap-4 top-0 w-screen h-screen bg-black/70 left-0 items-center justify-center text-sm space-x-6"
            >
              <NavLink
                className="min-w-[200px] bg-gradient-to-l ml-4 hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer px-6 py-[6px] text-[16px]"
                to={pathname === "/" ? "#services" : "/#services"}
              >
                <li>Services</li>
              </NavLink>
              <NavLink
                className="min-w-[200px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer px-6 py-[6px] text-[16px]"
                to={pathname === "/" ? "#projects" : "/#projects"}
              >
                <li>projects</li>
              </NavLink>

              <NavLink
                className="min-w-[200px] bg-gradient-to-l ml-4 hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer px-6 py-[6px] text-[16px]"
                to={pathname === "/" ? "#skills" : "/#skills"}
              >
                <li>Skills</li>
              </NavLink>
              <NavLink
                to={pathname === "/" ? "#contact" : "/#contact"}
                className="min-w-[200px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer px-6 py-[6px] text-[16px]"
              >
                <li>Contact</li>
              </NavLink>
              <NavLink
                to={pathname === "/" ? "#about" : "/#about"}
                className="min-w-[200px] bg-gradient-to-l hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer px-6 py-[6px] text-[16px]"
              >
                <li>About me</li>
              </NavLink>
            </ul>
          )}
          <ul className="hidden lg:flex items-center text-sm space-x-6">
            <NavLink to={pathname === "/" ? "#services" : "/#services"}>
              <li>Services</li>
            </NavLink>
            <NavLink to={pathname === "/" ? "#projects" : "/#projects"}>
              <li>projects</li>
            </NavLink>

            <NavLink to={pathname === "/" ? "#skills" : "/#skills"}>
              <li>Skills</li>
            </NavLink>
            <NavLink to={pathname === "/" ? "#contact" : "/#contact"}>
              <li>Contact</li>
            </NavLink>
            <NavLink to={pathname === "/" ? "#about" : "/#about"}>
              <li>About me</li>
            </NavLink>
            <Link
              target="_blank"
              to="https://drive.google.com/file/d/1EwdL-gI1sHILFVjrOfYskTs7unV4HO6s/view?usp=sharing"
            >
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
            </Link>
          </ul>
        </div>
      </nav>
    </>
  );
}
