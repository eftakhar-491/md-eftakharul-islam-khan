import React from "react";
import { Link, useNavigate } from "react-router";

export default function ProjectCard({ data }) {
  const navigate = useNavigate();

  return (
    <>
      <div className="group shadow-2xl relative overflow-hidden px-4 pt-7 rounded-t-2xl bg-[#140C1C]">
        <div className="px-3">
          <img
            onClick={() => navigate(`/project/${data?.id}`)}
            className="cursor-pointer w-full rounded-t-lg"
            src={data?.image[0]}
            alt=""
          />
        </div>
        <div className=" left-0 transition-all duration-250  bg-gradient-to-l p-4 w-full from-q to-p absolute group-hover:block -bottom-48 group-hover:bottom-0 text-white">
          <h1 className=" text-2xl font-Bela flex items-center justify-between">
            {data?.name}
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
          <p className="font-Bela text-[14px]">
            Project was about - {data?.category}
          </p>
          <p className="flex flex-wrap gap-x-2">
            {data?.technologies.map((tech) => (
              <span className="text-sm border rounded-2xl px-2 py-[2px] mt-2 block">
                {tech}
              </span>
            ))}
          </p>
          <p className="flex justify-between underline mt-3">
            <span className="flex gap-2">
              <Link target="_blank" to={data?.url}>
                <span>Live Site</span>
              </Link>

              <Link target="_blank" to={data?.gitRepoClient}>
                <span>Github</span>
              </Link>
            </span>
            <span
              className="cursor-pointer"
              onClick={() => navigate(`/project/${data?.id}`)}
            >
              More Details
            </span>
          </p>
        </div>
      </div>
    </>
  );
}
