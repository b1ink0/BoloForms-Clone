import React from "react";
import Img1 from "../../assets/side_dots_img_1.svg";
import Img2 from "../../assets/side_dots_img_2.svg";
import Img3 from "../../assets/side_dots_img_3.svg";
import Img4 from "../../assets/side_dots_img_4.svg";

export default function SideDots() {
  return (
    <div className="hidden md:flex flex-col gap-9 fixed top-2/4 left-4 z-10">
      <div className=" cursor-pointer dots w-3 h-3 flex justify-center items-center gap-4 bg-[#cbcbcb] hover:bg-primary text-white rounded-3xl hover:w-52 hover:h-9 transition-all overflow-hidden">
        <img className="w-5 opacity-0 h-5" src={Img1} alt="SideDots" />
        <p className="text-base opacity-0 ">Our Customers</p>
      </div>
      <div className=" cursor-pointer dots w-3 h-3 flex justify-center items-center gap-4 bg-[#cbcbcb] hover:bg-primary text-white rounded-3xl hover:w-52 hover:h-9 transition-all overflow-hidden">
        <img className="w-5 opacity-0 h-5" src={Img4} alt="SideDots" />
        <p className="text-base opacity-0 ">How to use?</p>
      </div>
      <div className=" cursor-pointer dots w-3 h-3 flex justify-center items-center gap-4 bg-[#cbcbcb] hover:bg-primary text-white rounded-3xl hover:w-52 hover:h-9 transition-all overflow-hidden">
        <img className="w-5 opacity-0 h-5" src={Img2} alt="SideDots" />
        <p className="text-base opacity-0 ">Features</p>
      </div>
      <div className=" cursor-pointer dots w-3 h-3 flex justify-center items-center gap-4 bg-[#cbcbcb] hover:bg-primary text-white rounded-3xl hover:w-52 hover:h-9 transition-all overflow-hidden">
        <img className="w-5 opacity-0 h-5" src={Img3} alt="SideDots" />
        <p className="text-base opacity-0 ">Support</p>
      </div>
    </div>
  );
}
