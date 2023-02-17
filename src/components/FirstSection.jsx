import React from "react";
import Icon1 from "../icons/Icon1";

export default function FirstSection() {
  return (
    <section className="w-full flex flex-col md:flex-row justify-center items-start md:items-center px-4 md:px-[88px] mt-40 md:mt-60">
      <div className="w-full flex flex-col justify-center items-start md:pr-20">
        <h3 className="text-3xl md:text-4xl font-semibold mb-2 leading-snug md:leading-relaxed">
          Transform Google Forms Into Interactive Workflows
        </h3>
        <p className="text-base md:text-lg leading-7 mb-8 pr-14">
          BoloForms is a Google Forms add on that allows you to add conditional
          logic to your forms. With BoloForms, you can create interactive
          workflows, approval flows & automate processes.
        </p>
        <button className="bg-primary w-full md:w-fit md:px-8 h-11 md:h-14 flex justify-center items-center rounded-lg gap-4 mb-12">
          <span className="w-5 h-5 flex justify-center items-center">
            <Icon1 />
          </span>
          <p
            style={{ wordSpacing: "3px" }}
            className="font-semibold text-base md:text-xl text-white"
          >
            Install For Free
          </p>
        </button>
      </div>
      <div className="w-full h-72 border-4 border-[color:var(--color-primary)] flex justify-center items-center rounded-2xl overflow-hidden">
        <iframe
          className="w-full h-full"
          src="https://www.youtube.com/embed/riiUkCRpIio"
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        ></iframe>
      </div>
    </section>
  );
}
