import React from "react";
import { Link } from "react-router";

export default function Educations() {
  return (
    <>
      <section id="about" className="bg-black w-full py-16">
        <div>
          <div className="font-Bela">
            <h1 className="gradient-text-heading text-3xl md:text-4xl text-center font-semibold">
              About Me
            </h1>

            <p className="text-sm px-4 text-white mx-auto text-center max-w-[550px] mt-2.5">
              We put your ideas and thus your wishes in the form of a unique web
              project that inspires you and you customers.{" "}
            </p>
          </div>
          <div className="max-w-[1240px] mt-5 px-[5%] mx-auto flex lg:flex-row flex-col items-center text-white">
            <div className="lg:w-1/2">
              <h1 className="gradient-text-heading font-semibold text-xl md:text-2xl font-Bela mb-3">
                I am, Md Eftakharul Islam Khan
              </h1>
              <p className="text-sm font-Bela text-gray-300 pr-4">
                I am a programming{" "}
                <span className="text-p text-lg font-semibold">
                  {" "}
                  enthusiast.
                </span>{" "}
                I love coding and learning website development. I started my
                programming journey when I was in class 12. I did not follow the
                academic system to learn programming. I always tried to learn
                programming in a different way. I started doing research on
                programming. I started watching YouTube videos and kept
                practicing. Now I feel passionate about it. Not only programming
                but I also love playing games online. In my free time, I play
                games like Clash of Clans, Call of Duty, PUBG etc. I also give
                tuition to some students. I am a
                <span className="text-p text-lg font-semibold">
                  {" "}
                  hardworking
                </span>{" "}
                and focused individual. Whenever I start doing something
                productive, I do not let my focus shift anywhere else. I love to
                take challenges because challenges give me opportunities to
                learn something new. So, being an optimistic individual, I
                always look for opportunities and accomplishments.
              </p>
            </div>
            <div className="lg:w-1/2 mt-3 lg:mt-0">
              <h1 className="gradient-text-heading   text-2xl font-Bela font-semibold">
                Education Qualification
              </h1>
              <p className=" font-Bela text-gray-300 mt-2">
                HON'S in Accounting - Tejgaon College, Dhaka
                <span className="text-sm block">Jul 2019 to Present</span>{" "}
                <span className="text-sm -mt-1 block">
                  Seasion : 2019 - 2020
                </span>
              </p>
              <h1 className="gradient-text-heading mt-4  text-2xl font-Bela font-semibold">
                Hobbies And Interests
              </h1>
              <ul className="text-sm font-Bela text-gray-300 list-decimal marker:text-p ml-4 marker:text-lg mt-3">
                <li>
                  <span className="text-[15px] font-semibold">
                    UI/UX Design:
                  </span>{" "}
                  Exploring design principles and creating intuitive interfaces
                  using Figma and Adobe XD.
                </li>
                <li>
                  <span className="text-[15px] font-semibold">
                    Learning New Technologies:
                  </span>{" "}
                  Staying updated with emerging tools and frameworks like
                  Typescript and AngulerJs in web development.
                </li>
                <li>
                  <span className="text-[15px] font-semibold">
                    Coding Challenges:
                  </span>{" "}
                  Solving programming problems on platforms like{" "}
                  <Link
                    className="text-p text-lg font-semibold font-Bela hover:border-b-2 hober:border-p"
                    to={"https://leetcode.com/u/eftakharislam/"}
                  >
                    LeetCode.
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
