import { SiMinutemailer } from "react-icons/si";
import { MdOutlinePhoneInTalk } from "react-icons/md";
import { MdAlternateEmail } from "react-icons/md";
import { FiHome } from "react-icons/fi";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
export default function Contact() {
  const form = useRef();
  const handelSendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_EMAIL_SERVICE,
        import.meta.env.VITE_EMAIL_TEMPLATE,
        form.current,
        import.meta.env.VITE_EMAIL_KEY
      )
      .then(
        (result) => {},
        (error) => {}
      );

    e.target.reset();
  };
  return (
    <>
      <section id="contact" className="bg-black w-full py-16">
        <div className="max-w-[1240px] flex flex-col-reverse lg:flex-row items-center  mx-auto px-[5%]">
          <div className="lg:w-1/2 bg-[#140C1C] p-10 rounded-2xl">
            <div className="font-Bela">
              <h1 className="gradient-text-heading text-2xl md:text-4xl text-center font-semibold">
                Let’s work together!
              </h1>

              <p className="text-sm text-white mx-auto text-center max-w-[550px] mt-2.5">
                I design and code beautifully simple things and i love what i
                do. Just simple like that!{" "}
              </p>
            </div>
            <form
              ref={form}
              onSubmit={handelSendEmail}
              className="font-Bela text-white gap-3 mt-5 flex flex-col"
            >
              <input
                required
                className="border-gray-800 border outline-0 transition duration-300 focus:border-p bg-black p-2 pl-5 rounded-lg"
                type="text"
                name="user_name"
                placeholder="Name"
              />
              <input
                required
                className="border-gray-800 border outline-0 transition duration-300 focus:border-p bg-black p-2 pl-5 rounded-lg"
                type="email"
                name="user_email"
                placeholder="Email address"
              />
              <textarea
                required
                className="border-gray-800 border outline-0 transition duration-300 focus:border-p bg-black p-2 pl-5 rounded-lg"
                name="message"
                rows="7"
                placeholder="Message"
              ></textarea>
              <button
                type="submit"
                className="mt-3 text-center flex gap-2 items-center px-6 py-[6px] text-[16px] bg-gradient-to-r hover:from-q hover:to-p from-p to-q transition-colors duration-500  rounded-4xl cursor-pointer "
              >
                <SiMinutemailer /> Send email
              </button>
            </form>
          </div>
          <div className="text-white lg:w-1/2 lg:ml-10 mb-5 lg:mb-0">
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
