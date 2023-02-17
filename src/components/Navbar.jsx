import React, { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import burger from "../assets/nav_burger.svg";
import close from "../assets/nav_close.svg";
import Icon4 from "../icons/Icon4";
import Img1 from "../assets/nav_img_1.svg";
import Img2 from "../assets/nav_img_2.svg";
import Img3 from "../assets/nav_img_3.svg";

export default function Navbar() {
  const [show, setShow] = useState(false);
  const [showMenu, setShowMenu] = useState(false);

  useEffect(() => {
    if (document.getElementById("root")) {
      function handleClickOutside(event) {
        if (document.getElementById("root").contains(event.target)) {
          setShowMenu(false);
        }
      }
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, []);

  return (
    <nav
      style={{ height: show ? "100%" : "" }}
      className="w-full md:h-[75px] xl:px-44 fixed top-0 flex flex-col md:flex-row justify-start md:justify-around items-center bg-nav"
    >
      <div className="w-full md:w-fit h-[75px] flex justify-between items-center px-4">
        <a href="/">
          <img src={logo} className="w-32 h-auto" alt="BoloForms" />
        </a>
        <button
          className="mr-4 md:hidden"
          onClick={() => setShow((prev) => !prev)}
        >
          <img className="w-6 h-6" src={show ? close : burger} />
        </button>
      </div>
      {show && (
        <div className="fadeIn w-full h-full flex flex-col justify-start items-start bg-nav-secondary px-4 pt-8">
          <a
            className="text-lg text-[#262626] font-medium cursor-pointer mb-4"
            href=""
          >
            Products
          </a>
          <a
            className="text-lg text-[#262626] font-medium cursor-pointer mb-4"
            href=""
          >
            Pricing
          </a>
          <a
            className="text-lg text-[#262626] font-medium cursor-pointer mb-4"
            href=""
          >
            Blogs
          </a>
          <a
            className="text-lg text-[#262626] font-medium cursor-pointer mb-4"
            href=""
          >
            Guides
          </a>
          <a
            className="text-lg text-[#262626] font-medium cursor-pointer mb-4"
            href=""
          >
            Templates
          </a>
          <a
            className="text-lg text-[#262626] font-medium cursor-pointer mb-4"
            href=""
          >
            About Us
          </a>
          <button className="w-full text-lg font-medium text-primary py-2 border-2 hover:bg-primary transition-colors hover:text-white border-[var(--color-primary)] rounded-xl mt-10">
            Install Now
          </button>
          <button className="w-full text-lg font-medium bg-primary py-2 rounded-xl text-white mt-5">
            BoloForms Premium
          </button>
        </div>
      )}
      <div className="hidden md:flex fadeIn w-full lg:w-[calc(100%_-_128px)] h-full md:h-auto flex-col md:flex-row justify-start md:justify-between items-start md:items-center bg-nav-secondary md:bg-[#00000000] px-4 pt-8 md:pt-0">
        <div className="w-auto flex justify-evenly items-center">
          <button
            className="text-lg text-[#262626] font-medium md:font-semibold md:text-sm cursor-pointer mb-4 md:mb-0 mr-9 flex"
            onClick={() => setShowMenu((prev) => !prev)}
          >
            Product
            <div className="w-5 h-5 rotate-180 ml-1">
              <Icon4 />
            </div>
          </button>
          <a
            className="text-lg text-[#262626] font-medium md:font-semibold md:text-sm cursor-pointer mb-4 md:mb-0 mr-9"
            href=""
          >
            Pricing
          </a>
          <a
            className="text-lg md:hidden text-[#262626] font-medium md:font-semibold md:text-sm cursor-pointer mb-4 md:mb-0 mr-2"
            href=""
          >
            Blogs
          </a>
          <a
            className="text-lg text-[#262626] font-medium md:font-semibold md:text-sm cursor-pointer mb-4 md:mb-0 mr-9"
            href=""
          >
            Guides
          </a>
          <a
            className="text-lg text-[#262626] font-medium md:font-semibold md:text-sm cursor-pointer mb-4 md:mb-0 mr-9"
            href=""
          >
            Templates
          </a>
          <a
            className="text-lg md:hidden text-[#262626] font-medium md:font-semibold md:text-sm cursor-pointer mb-4 md:mb-0 mr-2"
            href=""
          >
            About Us
          </a>
        </div>
        <div className="w-full md:w-fit flex flex-col md:flex-row justify-center md:justify-end items-center">
          <button className="w-full ml-32 md:w-fit md:px-5 text-lg md:text-base font-medium text-primary py-2 border-2 hover:bg-primary transition-colors hover:text-white border-[var(--color-primary)] rounded-xl mt-10 md:mt-0 md:mr-5">
            Install Now
          </button>
          <button className="w-full md:w-fit md:px-5 text-lg md:text-base font-medium bg-primary py-2 rounded-xl text-white mt-5 md:mt-0">
            BoloForms Premium
          </button>
        </div>
      </div>
      {showMenu && (
        <div
          className="max-w-[750px] border box-shadow-tertiary fixed top-[75px]  bg-nav-secondary p-6 bg-white rounded-xl"
          onClick={() => setShowMenu((prev) => !prev)}
        >
          <div className="flex p-4 gap-4 mt-6 rounded-xl hover:bg-[#f3e8ff]">
            <img className="w-6 h-6" src={Img1} />
            <div className="flex flex-col justify-center items-start">
              <h3 className="font-semibold text-base">Form Approvals</h3>
              <p className="text-sm">
                Create interactive workflows, approval flows & automate
                processes using Google Forms.
              </p>
            </div>
          </div>
          <div className="flex p-4 gap-4 mt-3 rounded-xl hover:bg-[#f3e8ff]">
            <img className="w-6 h-6" src={Img2} />
            <div className="flex flex-col justify-center items-start hover:bg-[#f3e8ff]">
              <h3 className="font-semibold text-base">SheetGod</h3>
              <p className="text-sm">AI-powered Excel magic easy!</p>
            </div>
          </div>
          <div className="flex p-4 gap-4 mt-3 mb-6 rounded-xl hover:bg-[#f3e8ff]">
            <img className="w-6 h-6" src={Img3} />
            <div className="flex flex-col justify-center items-start">
              <h3 className="font-semibold text-base">Signature</h3>
              <p className="text-sm">Add Signature href your Google Forms</p>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
