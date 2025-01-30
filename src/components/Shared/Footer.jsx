import React from "react";
import { Link, NavLink, useLocation } from "react-router";
import sign from "../../assets/ss.png";
export default function Footer() {
  const { pathname } = useLocation();
  return (
    <>
      <footer className="pt-16 text-white">
        <div>
          <img className="max-w-[300px] mx-auto" src="/fav.png" alt="" />
          <img className="max-w-[300px] mx-auto" src={sign} alt="" />

          <ul className="flex justify-center gap-4 my-5">
            <NavLink to="/">
              <li>Home</li>
            </NavLink>
            <NavLink to={pathname === "/" ? "#services" : "/#services"}>
              <li>Services</li>
            </NavLink>
            <NavLink to={pathname === "/" ? "#projects" : "/#projects"}>
              <li>Projects</li>
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
          </ul>
          <hr className="border-p/20" />
          <p className="py-5 text-sm text-center text-gray-400">
            &#169; 2025 All rights reserved by
            <span className="text-white ml-1">@Eftakharul Islam</span>
          </p>
        </div>
      </footer>
    </>
  );
}
