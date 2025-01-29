import React from "react";
import { Link } from "react-router";
import sign from "../../assets/ss.png";
export default function Footer() {
  return (
    <>
      <footer className="pt-16 text-white">
        <div>
          <img className="max-w-[300px] mx-auto" src="/fav.png" alt="" />
          <img className="max-w-[300px] mx-auto" src={sign} alt="" />

          <ul className="flex justify-center gap-4 my-5">
            <Link to="/">
              <li>home</li>
            </Link>
            <Link to="/">
              <li>home</li>
            </Link>
            <Link to="/">
              <li>home</li>
            </Link>
          </ul>
          <hr className="border-p" />
          <p className="py-5 text-sm text-center text-gray-400">
            &#169; 2025 All rights reserved by
            <span className="text-white ml-1">@Eftakharul Islam</span>
          </p>
        </div>
      </footer>
    </>
  );
}
