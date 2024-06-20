import React from "react";

const social = [
  {
    name: "instagram",
    link: "Instagram",
  },
  {
    name: "facebook",
    link: "facebook.",
  },
  {
    name: "linkedIn",
    link: "LinkedIn.",
  },
  {
    name: "Email",
    link: "Email.",
  },
];

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
                My Resume
              </a>
            </li>
          </ul>
        </section>
      </section>

      <div className="border-t lg: select-none  md:max-w-xl animate-slidein max-w-sm w-screen border-gray-200 py-4 ">
        <div className="flex justify-between items-center py-24">
          <p className=" text-center   font-Garet text-white">
            © Kasim Kazmi 2024
          </p>
          <div className="flex flex-wrap space-x-4">
            {social.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="hover:underline mr-20font-Garet text-white "
              >
                {item.name}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default footer;
