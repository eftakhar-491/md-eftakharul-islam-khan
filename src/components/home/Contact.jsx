import { SiMinutemailer } from "react-icons/si";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FiHome } from "react-icons/fi";
export default function Contact() {
  return (
    <>
      <section id="contact" className="bg-black w-full py-16">
        <div className="max-w-[1240px] flex items-center  mx-auto px-[5%]">
          <div className="w-1/2 bg-[#140C1C] p-10 rounded-2xl">
            <div className="font-Bela">
              <h1 className="gradient-text-heading text-4xl text-center font-semibold">
                Let’s work together!
              </h1>

              <p className="text-sm text-white mx-auto text-center max-w-[550px] mt-2.5">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!{" "}
              </p>
            </div>
            <form className="font-Bela text-white gap-3 mt-5 flex flex-col">
              <input
                className="border-gray-800 border outline-0 transition duration-300 focus:border-p bg-black p-2 pl-5 rounded-lg"
                type="text"
                name="name"
                placeholder="Name"
              />
              <input
                className="border-gray-800 border outline-0 transition duration-300 focus:border-p bg-black p-2 pl-5 rounded-lg"
                type="email"
                name="email"
                placeholder="Email address"
              />
              <textarea
                className="border-gray-800 border outline-0 transition duration-300 focus:border-p bg-black p-2 pl-5 rounded-lg"
                name="message"
                rows="7"
                placeholder="Message"
              ></textarea>
              <button className="mt-3 text-center flex gap-2 items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                <SiMinutemailer /> Send email
              </button>
            </form>
          </div>
          <div className="text-white w-1/2 ml-10">
            <div className="flex mb-5 gap-5 items-center">
              <div className="w-fit flex gap-2 items-center px-3 py-3 text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                <MdOutlinePhoneInTalk />
              </div>

              <div>
                <h4 className="text-lg font-Bela">Phone</h4>
                <p className="text-xl font-Bela -mt-2">+880 17202 33950</p>
              </div>
            </div>
            <div className="flex mb-5 gap-5 items-center">
              <div className="w-fit flex gap-2 items-center px-3 py-3 text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                <MdAlternateEmail />
              </div>

              <div>
                <h4 className="text-lg font-Bela">Email</h4>
                <p className="text-xl font-Bela -mt-2">eftakhar491@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-5 items-center">
              <div className="w-fit flex gap-2 items-center px-3 py-3 text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer ">
                <FiHome />
              </div>

              <div>
                <h4 className="text-lg font-Bela">Address</h4>
                <p className="text-xl font-Bela -mt-2">
                  North Shahjahanpur, Dhaka-1217, Bangladesh
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
