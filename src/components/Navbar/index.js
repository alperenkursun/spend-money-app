import React from "react";

function Navbar() {
  return (
    <div className="flex items-center text-3xl font-bold h-24 bg-white mb-6">
      <div
        className="ml-auto mr-auto pl-3.5px w-full flex items-center"
        style={{ width: "1000px", paddingLeft: "14px" }}
      >
        <a className="cursor-pointer p-1" href="/">
          Spend Money App
        </a>
        <a
          className="cursor-pointer hover:text-4xl p-1"
          href="https://www.linkedin.com/in/alperenkursun/"
          target="_blank"
        >
          <i
            class="fa-brands fa-linkedin"
            style={{ color: "rgb(10,102,194)" }}
          ></i>
        </a>
        <a
          className="cursor-pointer hover:text-4xl p-1"
          href="https://github.com/alperenkursun"
          target="_blank"
        >
          <i class="fa-brands fa-square-github"></i>
        </a>
      </div>
    </div>
  );
}

export default Navbar;
