import React from "react";

function header() {
  return (
    <div className="flex lg:flex-1">
      <a href="main" className="-m-1.5 p-1.5">
        <span className="sr-only">Kasim Kazmi</span>
        <img
          className="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
          alt=""
        />
      </a>
    </div>
  );
}

export default header;

//TODO  make use of this for scrollTop functionality import ScrollToTop from "react-scroll-to-top"

//TODO Animated logo

//TODO animated left side navbar
