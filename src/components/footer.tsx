import React from "react";
// import { Bg, Bg1, insta, fb, linkedIn, Email } from "../assets/index";

const social = [
  {
    name: "instagram",
    link: "Instagram",
    // icon: { insta },
  },
  {
    name: "facebook",
    link: "facebook.",
    // icon: { fb },
  },
  {
    name: "linkedIn",
    link: "LinkedIn.",
    // icon: { linkedIn },
  },
  {
    name: "Email",
    link: "Email.",
    // icon: { Email },
  },
];
function footer() {
  return (
    <div className="bg-white bg-footer-background bg-cover bg-no-repeat  items-center h-screen w-screen">
      <div className="flex justify-center items-center">
        <div className=" container mx-auto text-left pb-10">
          <p className="text-white text-lg font-bold mb-4 font-Garet">
            SAY HELLO
          </p>
          <ul className="text-lg font-medium">
            <li className="mb-2">
              <a
                href="mailto:kasimkazmi@gmail.com"
                className="hover:underline text-white font-Garet"
              >
                kasimkazmi@gmail.com
              </a>
            </li>
            <li>
              <a
                href="https://t.me/mrolaolu"
                className="hover:underline font-Garet"
              >
                t.me/mrolaolu
              </a>
            </li>
          </ul>
        </div>
        <div className="  flex-col justify-ali">
          <ul className="flex justify-center gap-6 flex-col">
            <li>
              <a href="#" className="hover:underline text-white font-Garet">
                My Work
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white font-Garet">
                My Shelf
              </a>
            </li>
            <li>
              <a
                href="https://read.cv/kasimkazmi"
                rel="noopener"
                target="_blank"
                className="hover:underline text-white font-Garet"
              >
                My Resume
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t-2 border-white-500  pr-20 mx-auto ml-20">
        <div className="flex justify-between items-center ">
          <p className=" ml-20 text-white underline-offset-1 text-center font-Garet">
            © Kasim Kazmi 2024
          </p>
          <div className="flex flex-wrap mr-20">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:underline mr-20 text-white"
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default footer;
