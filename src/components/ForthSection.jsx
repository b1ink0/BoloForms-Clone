import React from "react";
import img1 from "../assets/forth_section_img_1.jpeg";
import Reviews from "./sub-components/Reviews";

export default function ForthSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-[88px] mt-24">
      <Reviews
        img={img1}
        name={"Repa Mandala"}
        review={`"Boloforms has been an absolute lifesaver for me. It makes workflow
            tasks much easier and helps to ensure that everything runs smoothly.
            I love how it automates tasks and eliminates manual processes,
            saving me time and effort. It's a great Google Workflow software and
            is well worth the money!"`}
      />
    </section>
  );
}
