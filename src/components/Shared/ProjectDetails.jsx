import React from "react";
import bg from "../../assets/bg.png";
import { Link } from "react-router";
import { SiRefinedgithub } from "react-icons/si";
import { IoServerSharp } from "react-icons/io5";
export default function ProjectDetails() {
  return (
    <>
      <section className="bg-[#050709] w-full h-full">
        <div
          style={{
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            backgroundPosition: "center",
            background: `linear-gradient(45deg, #3E087Ed0 , #550842f0 ,#3E087Ed0), url(${bg}) `,
          }}
          className="h-[300px] flex flex-col justify-center items-center"
        >
          <h1 className="pt-24 text-3xl font-Bela font-semibold text-white">
            Project name
          </h1>
          <p className="text-sm mx-auto max-w-[600px] px-4 text-center text-white/70 ">
            {" "}
            A Scholarship Management Systen
          </p>
          <p className="text-white mt-5 text-sm font-Bela">
            Home {">"} Projects {">"}{" "}
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto px-[5%] mt-24 text-white">
          <div className="bg-q p-12">
            <img
              className="w-full object-cover"
              src="https://www.elegantthemes.com/blog/wp-content/uploads/2024/05/how-to-make-a-wordpress-portfolio-page-ft-img-3-min.jpg"
              alt=""
            />
          </div>
          <div className="mt-10 flex justify-between pb-40">
            <div className="w-1/2">
              <h1 className="text-3xl font-Bela font-semibold">Name</h1>
              <p className="mb-3 text-sm flex gap-2">
                <span>10/5/2024</span> to
                <span>10/5/2024</span>
              </p>
              <p>
                {" "}
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Possimus numquam harum natus reprehenderit, assumenda ratione
                non quo voluptas. Veniam explicabo quaerat, nobis eligendi
                aliquid officiis optio fugiat maxime consequatur tenetur
                suscipit molestiae nesciunt voluptatibus nisi maiores mollitia
                tempora distinctio ipsam.{" "}
              </p>
              <div className="flex gap-3 mt-5">
                <Link to={"/"}>
                  <button className="flex gap-2 items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                    Live Site{" "}
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
                        d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                      />
                    </svg>
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="flex gap-2 items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                    <SiRefinedgithub /> Github Client{" "}
                  </button>
                </Link>
                <Link to={"/"}>
                  <button className="flex gap-2 items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                    {" "}
                    <IoServerSharp /> Github Server
                  </button>
                </Link>
              </div>
            </div>
            <div className="w-1/2 h-full">
              <div className="">
                <h2 className="text-xl font-semibold font-Bela">
                  Technologies
                </h2>
              </div>
              <div className="flex gap-3 ">
                <span className="mt-3 text-[#AE8DF2] hover:text-white text-sm flex gap-2 items-center px-6 py-[4px] bg-q border border-p hover:bg-p rounded-4xl  ">
                  Mongodb
                </span>
                <span className="mt-3 text-[#AE8DF2] hover:text-white text-sm flex gap-2 items-center px-6 py-1 bg-q border border-p hover:bg-p rounded-4xl  ">
                  Mongodb
                </span>
                <span className="mt-3 text-[#AE8DF2] hover:text-white text-sm flex gap-2 items-center px-6 py-1 bg-q border border-p hover:bg-p rounded-4xl  ">
                  Mongodb
                </span>
                <span className="mt-3 text-[#AE8DF2] hover:text-white text-sm flex gap-2 items-center px-6 py-1 bg-q border border-p hover:bg-p rounded-4xl  ">
                  Mongodb
                </span>
              </div>
              <div>
                <h2 className="text-xl font-semibold font-Bela mt-3">
                  Key Fetures
                </h2>
                <ul className="list-disc ml-5 mt-3">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold font-Bela mt-3">
                  What to improve
                </h2>
                <ul className="list-disc ml-5 mt-3">
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                  <li>Lorem ipsum dolor sit amet.</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
