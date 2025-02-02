import React, { useEffect, useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Pagination, Navigation, Autoplay } from "swiper/modules";
import bg from "../../assets/bg.png";
import { data, Link, useParams } from "react-router";
import { SiRefinedgithub } from "react-icons/si";
import { IoServerSharp } from "react-icons/io5";
import Loading from "./Loading";
export default function ProjectDetails() {
  const [loading, setLoading] = useState(true);
  const [slider, setSlider] = useState(2);
  const { id } = useParams();
  const [projects, setProjects] = useState([]);
  console.log(id);
  useEffect(() => {
    fetch("/projects.json")
      .then((res) => res.json())
      .then((data) => setProjects(data?.filter((i) => i?.id === parseInt(id))));
  }, []);
  useEffect(() => {
    if (window.innerWidth < 768) {
      setSlider(1);
      console.log(slider);
    } else {
      setSlider(2);
    }
  }, []);
  useEffect(() => {
    if (projects.length > 0) {
      const timeout = setTimeout(() => {
        setLoading(false);
      }, 900);
      return () => clearTimeout(timeout);
    }
  }, [projects]);

  return (
    <>
      {loading && <Loading data={projects} />}
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
          <h1 className=" text-3xl font-Bela font-semibold text-white">
            {projects[0]?.name}
          </h1>
          <p className="text-sm mx-auto max-w-[600px] px-4 text-center text-white/70 ">
            {" "}
            A Scholarship Management Systen
          </p>
          <p className="text-white mt-5 text-sm font-Bela">
            Home {">"} Projects {">"} {projects[0]?.category}
          </p>
        </div>
        <div className="max-w-[1240px] mx-auto px-[5%] mt-24 text-white">
          <div className="bg-q p-6 lg:p-12">
            <img
              className="w-full object-cover"
              src={projects[0]?.image[0]}
              alt=""
            />
          </div>
          <div className="mt-10 flex flex-col lg:flex-row justify-between ">
            <div className="lg:w-1/2">
              <h1 className="text-3xl font-Bela font-semibold">
                {projects[0]?.name}
              </h1>
              <p className="mb-3 text-sm flex gap-2">
                <span>{projects[0]?.startDate}</span> to
                <span>{projects[0]?.endDate}</span>
              </p>
              <p> {projects[0]?.description}</p>
              {projects[0]?.credential?.email && (
                <p className="font-Bela mt-3">
                  <h2 className="text-xl">Credential:</h2>
                  <span>Email: {projects[0]?.credential?.email}</span>
                  <br />{" "}
                  <span>Password: {projects[0]?.credential?.password}</span>
                </p>
              )}
              <div className="flex gap-3 mt-5">
                <Link to={projects[0]?.url} target="_blank">
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
                {projects[0]?.gitRepoClient && (
                  <Link to={projects[0]?.gitRepoClient} target="_blank">
                    <button className="flex gap-2 items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                      <SiRefinedgithub /> Github Client{" "}
                    </button>
                  </Link>
                )}
                {projects[0]?.gitRepoServer && (
                  <Link to={projects[0]?.gitRepoServer} target="_blank">
                    <button className="flex gap-2 items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                      {" "}
                      <IoServerSharp /> Github Server
                    </button>
                  </Link>
                )}
              </div>
            </div>
            <div className="lg:w-1/2 mt-4 lg:mt-0 h-full">
              <div className="">
                <h2 className="text-xl font-semibold font-Bela">
                  Technologies
                </h2>
              </div>
              <div className="flex gap-x-3 flex-wrap">
                {projects[0]?.technologies?.map((item, i) => (
                  <span
                    key={i}
                    className="mt-3 text-[#AE8DF2] hover:text-white text-sm flex gap-2 items-center px-6 py-[4px] bg-q border border-p hover:bg-p rounded-4xl  "
                  >
                    {item}
                  </span>
                ))}
              </div>
              <div>
                <h2 className="text-xl font-semibold font-Bela mt-3">
                  Key Fetures
                </h2>
                <ul className="list-disc ml-5 mt-3">
                  {projects[0]?.keyFeatures?.map((item, i) => (
                    <li key={i + "k"}>{item}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h2 className="text-xl font-semibold font-Bela mt-3">
                  What to improve
                </h2>
                <ul className="list-disc ml-5 mt-3">
                  {projects[0]?.whatToImprove?.map((item, i) => (
                    <li key={i + "k"}>{item}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="max-w-[1240px] mx-auto px-[5%] mt-10 pb-24">
          <Swiper
            centeredSlides={true}
            autoplay={{
              delay: 2500,
              disableOnInteraction: false,
            }}
            slidesPerView={slider}
            spaceBetween={30}
            loop={true}
            pagination={{
              clickable: true,
            }}
            // navigation={true}
            modules={[Pagination, Autoplay]}
            className="mySwiper h-64"
          >
            {projects[0]?.image?.map((img, i) => (
              <SwiperSlide key={i + "img"}>
                <img className="h-full" src={img} alt="" />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
    </>
  );
}
