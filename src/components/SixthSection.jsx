import React, { useState } from "react";
import Icon3 from "../icons/Icon3";
import Icon1 from "../icons/icon1";
import img1 from "../assets/sixth_section_img_1.jpeg";
import Reviews from "./sub-components/Reviews";

const Cards = ({
  color1,
  color2,
  color3,
  color4 = "",
  color5 = "",
  text1,
  text2 = "",
  width = "88px",
  third = false,
}) => {
  return (
    <div className="w-full flex justify-start items-center mb-4 px-4">
      <div
        style={{
          background: `linear-gradient(to right, #ffffff, ${color1})`,
          width: width,
        }}
        className="h-11 rounded-md mr-1"
      ></div>
      <div
        style={{ background: color2 }}
        className="w-fit h-11 flex justify-center items-center rounded-md px-5 mr-1 gap-2"
      >
        <div className="w-5 h-5">
          <Icon3 color={color3} />
        </div>
        <p style={{ color: color3 }} className="text-[10px]">
          {text1}
        </p>
      </div>
      {third && (
        <div
          style={{ background: color4 }}
          className="w-fit h-11 flex justify-center items-center rounded-md px-5 gap-2"
        >
          <div className="w-5 h-5">
            <Icon3 color={color5} />
          </div>
          <p style={{ color: color5 }} className="text-[10px]">
            {text2}
          </p>
        </div>
      )}
    </div>
  );
};

export default function SixthSection() {
  const [cards, setCards] = useState([
    {
      color1: "#fbf3e5",
      color2: "#f7dff5",
      color3: "#c72d91",
      text1: "Approval Management",
      width: "88px",
    },
    {
      color1: "#dcf5de",
      color2: "#ebf3ff",
      color3: "#0a67ff",
      text1: "Sales Quotation Approval",
      width: "141px",
    },
    {
      color1: "#f5f4fc",
      color2: "#f9f1e1",
      color3: "#f58225",
      text1: "Registration Management",
      width: "80px",
    },
    {
      color1: "#ffe7e5",
      color2: "#dcf5de",
      color3: "#61ba64",
      text1: "Performance Appraisal Request",
      width: "125px",
    },
    {
      color1: "#fbfbfe",
      color2: "#f7dff5",
      color3: "#d86db3",
      color4: "#edecf9",
      color5: "#7e7ede",
      text1: "Qualify Sales Leads",
      text2: "Expense Approval",
      third: true,
      width: "32px",
    },
    {
      color1: "#fefbf6",
      color2: "#f3f2fb",
      color3: "#acacea",
      color4: "#f9f1e1",
      color5: "#f58225",
      text1: "Customer Request Approval",
      text2: "Field Request",
      third: true,
      width: "32px",
    },
    {
      color1: "#fdf5fc",
      color2: "#f2f7ff",
      color3: "#5f9bff",
      color4: "#dcf5de",
      color5: "#61ba64",
      text1: "Travel Request",
      text2: "Vendor Registration",
      third: true,
      width: "32px",
    },
    {
      color1: "#fcf9f4",
      color2: "#ffedeb",
      color3: "#fa9687",
      color4: "#faf1e1",
      color5: "#c72d91",
      text1: "IT Change Management",
      text2: "Purchase Order",
      third: true,
      width: "32px",
    },
  ]);
  return (
    <section className="w-full flex flex-col justify-center items-center mt-24 mb-24 md:px-12">
      <div className="flex flex-col md:flex-row justify-center md:justify-between items-start md:items-center md:px-10">
        <div className="flex flex-col justify-center items-start">
          {cards &&
            cards.map((card, index) => (
              <Cards
                key={index}
                color1={card.color1}
                color2={card.color2}
                color3={card.color3}
                color4={card?.color4}
                color5={card?.color5}
                text1={card.text1}
                text2={card?.text2}
                third={card?.third}
                width={card.width}
              />
            ))}
        </div>
        <div className="w-full md:w-1/2 mt-12 px-4 md:pl-6">
          <h3 className="text-3xl md:text-4xl font-semibold leading-[45px]">
            An End-To-End Workflow Platform For All Your Business Needs
          </h3>
          <p className="text-base mt-6">
            1000+ companies-from Startups to Fortune 500s use BoloForms
            Approvals to build and manage business processes across departments.
          </p>
          <button className="bg-[color:var(--color-primary)] w-fit h-11 flex justify-center items-center rounded-lg gap-4 mt-8 p-6">
            <span className="w-5 h-5 flex justify-center items-center">
              <Icon1 />
            </span>
            <p
              style={{ wordSpacing: "3px" }}
              className="font-semibold text-lg text-white"
            >
              BoloForms Premium
            </p>
          </button>
        </div>
      </div>
      <Reviews
        review={`“ Boloforms has completely revolutionized our form approval process. It is incredibly easy to use and simple to set up, saving us countless hours of work. We can now easily manage all of our form approvals, assign tasks to different team members and track progress all in one place. Boloforms is a must-have for any business looking for an efficient Form Approval Workflow Software! "`}
        type={2}
        img={img1}
        name="Patrick Nyama,"
        designation="Edmonton CA"
      />
    </section>
  );
}
