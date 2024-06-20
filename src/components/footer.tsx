import React from "react";
import {
  FaFacebook,
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const social = [
  {
    name: "Facebook",
    link: "https://www.linkedin.com/in/kasimkazmi/",
  },
  {
    name: "LinkedIn",
    link: "https://www.facebook.com/Nobody.judge.me.",
  },
  {
    name: "Github",
    link: "https://github.com/kasimkazmi.",
  },
  {
    name: "Instagram",
    link: "https://www.instagram.com/its_always_be_me/.",
  },
];
const ICONS = {
  Facebook: FaFacebook,
  Github: FaGithub,
  LinkedIn: FaLinkedin,
  Instagram: FaInstagram,
};
function footer() {
  return (
    <footer className="bg-footer-background bg-cover bg-no-repeat h-screen  flex-col justify-center flex items-center w-screen">
      <section className=" container  ml-20   animate-slidein300 -slidein pb-72 flex">
        <div className=" mb-4 select-none">
          <p className="text-lg text-white font-bold mb-4 cursor-default animate-bounce">
            👋 SAY HELLO
          </p>
          <ul className="text-lg font-medium">
            <li
              className=" text-white mb-2 hover:underline  bg-button-Color hover:bg-hover-color font-bold py-2 px-4 rounded transition-colors duration-500  hover:shadow-color-shadow
            "
            >
              <a href="mailto:kasimkazmi@gmail.com">kasimkazmi@gmail.com</a>
            </li>
            <li className="text-white mb-2 hover:underline bg-button-Color hover:bg-hover-color font-bold py-2 px-4 rounded transition-colors duration-500 hover:shadow-color-shadow">
              <a href="https://discord.gg/T2TvD7wR">Discord</a>
            </li>
          </ul>
        </div>
        <section className=" flex  pl-36 select-none ">
          <ul className="gap-4  flex justify-center flex-col">
            <li>
              <a
                href="#"
                className="text-white hover:underline  hover:shadow-li-shadow shadow-color-shadow"
              >
                My Work
              </a>
            </li>
            <li>
              <a
                href="#"
                className="text-white hover:underline  hover:shadow-li-shadow shadow-color-shadow"
              >
                My Shelf
              </a>
            </li>
            <li>
              <a
                href="https://read.cv/kasimkazmi"
                rel="noopener"
                target="_blank"
                className="text-white hover:underline hover:shadow-li-shadow shadow-color-shadow"
              >
                My Résumé
              </a>
            </li>
          </ul>
        </section>
      </section>

      <section className=" select-none w-screen px-16 ">
        <hr className="relative  h-px animate-pulse pb-9" />

        <div className="flex flex-wrap text-white space-x-4 justify-center text-2xl">
          {social.map((item, index) => {
            const Icon = ICONS[item.name];
            return (
              <a
                key={index}
                href={item.link}
                aria-label={item.name}
                className=" font-Garet"
              >
                <Icon className="hover:animate-pulse transform transition-transform duration-500 hover:scale-125" />
              </a>
            );
          })}
        </div>
        <div className=" pt-14">
          <p className=" text-center font-Garet text-white">
            © 2024 Kasim Kazmi . All Rights Reserved. Get in Touch ©
          </p>
        </div>
      </section>
    </footer>
  );
}

export default footer;
