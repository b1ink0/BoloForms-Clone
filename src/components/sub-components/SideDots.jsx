import React from "react";
import Img1 from "../../assets/side_dots_img_1.svg";
import Img2 from "../../assets/side_dots_img_2.svg";
import Img3 from "../../assets/side_dots_img_3.svg";
import Img4 from "../../assets/side_dots_img_4.svg";

export default function SideDots() {
  return (
    <div className="hidden md:flex flex-col gap-9 fixed top-[calc(50%_-_60px)] left-4 z-10">
      <a href="#section_2" className="cursor-pointer absolute top-0 left-0 dots w-3 h-3 flex justify-center items-center gap-4 hover:-translate-y-2 bg-[#cbcbcb] hover:bg-primary text-white rounded-3xl hover:w-52 hover:h-9 transition-all overflow-hidden">
        <img className="w-5 opacity-0 h-5" src={Img1} alt="SideDots" />
        <p className="text-base opacity-0 ">Our Customers</p>
      </a>
      <a href="#section_3" className=" cursor-pointer absolute top-10 left-0 dots w-3 h-3 flex justify-center items-center gap-4 hover:-translate-y-2 bg-[#cbcbcb] hover:bg-primary text-white rounded-3xl hover:w-52 hover:h-9 transition-all overflow-hidden">
        <img className="w-5 opacity-0 h-5" src={Img4} alt="SideDots" />
        <p className="text-base opacity-0 ">How to use?</p>
      </a>
      <a href="#section_5" className=" cursor-pointer absolute top-20 left-0 dots w-3 h-3 flex justify-center items-center gap-4 hover:-translate-y-2 bg-[#cbcbcb] hover:bg-primary text-white rounded-3xl hover:w-52 hover:h-9 transition-all overflow-hidden">
        <img className="w-5 opacity-0 h-5" src={Img2} alt="SideDots" />
        <p className="text-base opacity-0 ">Features</p>
      </a>
      <a href="#section_8" className=" cursor-pointer absolute top-[120px] left-0 dots w-3 h-3 flex justify-center items-center gap-4 hover:-translate-y-2 bg-[#cbcbcb] hover:bg-primary text-white rounded-3xl hover:w-52 hover:h-9 transition-all overflow-hidden">
        <img className="w-5 opacity-0 h-5" src={Img3} alt="SideDots" />
        <p className="text-base opacity-0 ">Support</p>
      </a>
    </div>
  );
}
