import React from "react";
import img1 from "../assets/seventh_section_img_1.svg";
import img2 from "../assets/seventh_section_img_2.svg";
import img3 from "../assets/seventh_section_img_3.jpeg";
import img4 from "../assets/seventh_section_img_4.jpeg";
import img5 from "../assets/seventh_section_img_5.png";
import img6 from "../assets/seventh_section_img_6.png";
import Reviews from "./sub-components/Reviews";

export default function SeventhSection() {
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-[88px] mt-12">
      <div className="w-full border rounded-xl flex flex-col justify-center items-center px-1 mb-14">
        <div className="w-full  flex flex-col justify-center items-center p-8">
          <h3 className="text-xl md:text-3xl font-bold mb-2 text-center">
            Fully Automated Workflows
          </h3>
          <p className="text-sm md:text-xl text-center">
            No more painful manual approval management and wasting countless
            hours.
          </p>
        </div>
        <div className="w-full flex flex-col md:flex-row justify-center items-center">
          <div className="w-full md:w-80 flex flex-col justify-center items-center bg-gradient-to-r from-white to-[#f7e0f5] rounded-xl p-5 ">
            <div className="w-full flex justify-start items-center mt bg-white rounded-xl px-8 py-4 gap-4 mb-5">
              <img className="w-6 h-6" src={img1} alt="" />
              <p className="text-gray-500 font-semibold">Leave Application</p>
            </div>
            <div className="w-full flex justify-start items-center mt bg-white rounded-xl px-8 py-4 gap-4 mb-5">
              <img className="w-6 h-6" src={img1} alt="" />
              <p className="text-gray-500 font-semibold">Purchase Order</p>
            </div>
            <div className="w-full flex justify-start items-center mt bg-white rounded-xl px-8 py-4 gap-4 mb5">
              <img className="w-6 h-6" src={img1} alt="" />
              <p className="text-gray-500 font-semibold">Fulfilment</p>
            </div>
          </div>
          <div className="border-r-2 h-24 md:border-r-0 md:border-t-2 md:h-0 md:w-24"></div>
          <img className="w-auto md:w-36 h-28 md:h-auto md:ml-6" src={img2} />
          <div className="border-r-2 h-24 md:border-r-0 md:border-t-2 md:h-0 md:w-24"></div>
          <div className="w-full md:w-80 flex flex-col justify-center items-center bg-gradient-to-r from-[#edf4ff] to-white rounded-xl p-5">
            <div className="w-full flex justify-start items-center mt bg-white rounded-xl px-8 py-4 gap-4 mb-5">
              <img className="w-6 h-6" src={img1} alt="" />
              <p className="text-gray-500 font-semibold">Approve</p>
            </div>
            <div className="w-full flex justify-start items-center mt bg-white rounded-xl px-8 py-4 gap-4 mb-5">
              <img className="w-6 h-6" src={img1} alt="" />
              <p className="text-gray-500 font-semibold">Reject</p>
            </div>
            <div className="w-full flex justify-start items-center mt bg-white rounded-xl px-8 py-4 gap-4 mb5">
              <img className="w-6 h-6" src={img1} alt="" />
              <p className="text-gray-500 font-semibold">Send Pdf</p>
            </div>
          </div>
        </div>
        <p className="text-s md:text-xl text-center mt-12 mb-10 px-8">
          BoloForms workflows acts as a glue holding together all your approval
          processes.
        </p>
      </div>
      <Reviews
        img={img3}
        name={"Raman R"}
        review={`"I recently started using Boloforms for my Google Forms and it has been an absolute game-changer. The software is intuitive and user friendly, so I was able to set up my forms quickly & easily. It also provides powerful analytics to understand and act on the data collected from my forms in real-time. Overall, it's been a great experience using Boloforms and I highly recommend it!"`}
      />
      <Reviews
        style={{ marginTop: "100px" }}
        img={img4}
        name={"John M."}
        more={false}
        review={`"Customer support is super awesome, Great add on for our team! This helps our task management must easier. I can easily keep track of my member's request and work progress. The approval process is smooth and extremely quick. I highly recommend this addon especially for small business like mine."`}
      />
      <div className="w-full md:px-14">
        <div className="w-full rounded-xl box-shadow-secondary flex flex-col md:flex-row justify-center items-start p-4 md:p-10 overflow-hidden">
          <img className="w-12 h-12 md:w-20 md:h-20" src={img5} alt="" />
          <div className="flex flex-col justify-center items-start mt-4 md:mt-0 md:pl-10">
            <p className="text-sm md:text-base font-semibold text-gray-600 mb-4">
              MY 100% NO-RISK DOUBLE-GUARANTEE
            </p>
            <h3 className="text-base md:text-xl font-bold mb-4">
              If you don’t like BoloForms over the next 30 days, I will happily
              refund 100% of your purchase. No questions asked.
            </h3>
            <p className="text-sm md:text-base mb-4">Here's why I'm offering this -</p>
            <p className="text-sm md:text-base mb-4">
              I have seen the power of automating your business workflows. Take
              some time out of your busy schedule today and see what all things
              can be automated in your workflows.
            </p>
            <p className="text-sm md:text-base mb-4">
              You will find that most of your time is going in doing things that
              could be done better by automating. You just have to give it a
              shot!
            </p>
            <p className="text-sm md:text-base mb-4">
              Start with automating small workflow and then gradually you will
              love it!!
            </p>
            <p className="text-sm md:text-base mb-4">
              Thank you, and I hope we'll get the opportunity to be a part of
              your growth journey soon!
            </p>
            <img
              className="w-auto h-16 -translate-x-[34px] translate-y-[18px] mt-3"
              src={img6}
              alt=""
            />
            <h3 className="font-semibold text-lg">Paresh Deshmukh</h3>
            <p className="text-xs font-semibold">Co-Founder BoloForms</p>
          </div>
        </div>
      </div>
    </section>
  );
}
