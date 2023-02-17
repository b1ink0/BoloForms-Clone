import React from "react";
import img1 from "../assets/third_section_img_1.svg";
import img2 from "../assets/third_section_img_2.svg";
import img3 from "../assets/third_section_img_3.svg";


export default function ThirdSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-[88px] mt-12">
        <h3 className="text-xl md:text-3xl font-semibold mb-2">How does BoloForms work?</h3>
        <p className="text-xs md:text-sm">Set up your first workflow in just 3 easy steps.</p>
        <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-6">
            <div className="w-full flex flex-col md:flex-col-reverse justify-center items-center mt-12">
                <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold">Step 1:</h2>
                <p className="text-sm text-center">Choose a template or add questions to create your Google Form.</p>
                </div>
                <img className="mt-6 hover:-translate-y-2 transition-transform" src={img1} alt="How does BoloForms work?" />
            </div>
            <div className="w-full flex flex-col md:flex-col-reverse justify-center items-center mt-12">
                <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold">Step 2:</h2>
                <p className="text-sm text-center">Enable Single/Multi Step approval and add necessary approvers!</p>
                </div>
                <img className="mt-6 hover:-translate-y-2 transition-transform" src={img2} alt="How does BoloForms work?" />
            </div>
            <div className="w-full flex flex-col md:flex-col-reverse justify-center items-center mt-12">
                <div className="w-full flex flex-col justify-center items-center">
                <h2 className="text-xl font-bold">Step 3:</h2>
                <p className="text-sm text-center">Now you can enable the workflow and share the Google Form.</p>
                </div>
                <img className="mt-6 hover:-translate-y-2 transition-transform" src={img3} alt="How does BoloForms work?" />
            </div>
        </div>
    </section>
  );
}
