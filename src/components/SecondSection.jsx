import React from "react";
import img1 from "../assets/second_section_img_1.svg";
import img2 from "../assets/second_section_img_2.svg";
import img3 from "../assets/second_section_img_3.svg";
import img4 from "../assets/second_section_img_4.svg";
import img5 from "../assets/second_section_img_5.svg";

export default function SecondSection() {
  return (
    <section className="w-full flex flex-col justify-center items-start px-4 md:px-48 mt-12 mb-44">
      <h3 className="w-full text-center text-xl md:text-3xl font-semibold">
        BoloForms Is Used By
      </h3>
      <div className="w-full overflow-x-auto mt-16 flex flex-row">
        <div className="flex">
          <div className="w-60 h-60 border rounded-xl mr-7">
            <img src={img1} alt="BoloForms Is Used By" />
          </div>
          <div className="w-60 h-60 border rounded-xl mr-7">
            <img src={img2} alt="BoloForms Is Used By" />
          </div>
          <div className="w-60 h-60 border rounded-xl mr-7">
            <img src={img3} alt="BoloForms Is Used By" />
          </div>
          <div className="w-60 h-60 border rounded-xl mr-7">
            <img src={img4} alt="BoloForms Is Used By" />
          </div>
          <div className="w-60 h-60 border rounded-xl mr-7">
            <img src={img5} alt="BoloForms Is Used By" />
          </div>
        </div>
      </div>
    </section>
  );
}
