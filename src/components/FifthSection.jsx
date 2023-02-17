import React, { useState } from "react";
import img1 from "../assets/fifth_section_img_1.svg";
import img2 from "../assets/fifth_section_img_2.svg";
import img3 from "../assets/fifth_section_img_3.svg";
import img4 from "../assets/fifth_section_img_4.svg";
import img5 from "../assets/fifth_section_img_5.svg";
import img6 from "../assets/fifth_section_img_6.svg";
import img7 from "../assets/fifth_section_img_7.svg";
import img8 from "../assets/fifth_section_img_8.svg";
import img9 from "../assets/fifth_section_img_9.svg";
import img10 from "../assets/fifth_section_img_10.jpeg";
import img11 from "../assets/fifth_section_img_11.jpeg";
import Reviews from "./sub-components/Reviews";

const Card = ({ title, description, icon }) => {
  return (
    <div className="w-full max-w-[360px] px-4 flex flex-col justify-center items-start mb-11">
      <img className="w-12 h-12 mb-4" src={icon} />
      <h3 className="text-2xl font-semibold mb-2">{title}</h3>
      <p className="">{description}</p>
    </div>
  );
};

export default function FifthSection() {
  const [cards, setCards] = useState([
    {
      title: "Get started in less than 5 minutes.",
      description:
        "Just use an existing Google Form, add approvers, and we'll notify them via email when submissions are made.",
      icon: img1,
    },
    {
      title: "Multi-level workflows",
      description:
        "To ensure that your executives do not approve a document until it has been reviewed and accepted by other employees, you can set up multi-level approval processes.",
      icon: img2,
    },
    {
      title: "Dynamic Reciepients",
      description:
        "Approvers can be selected based on the answers to a form response or entered manually by the requestor.",
      icon: img3,
    },
    {
      title: "Role Based Workflows",
      description:
        "Assign the following roles to your recipients: Approver, Receive a Copy, and Send Final Email Only",
      icon: img4,
    },
    {
      title: "Conditional Logic",
      description:
        "To prevent unnecessary work for approvers, set logic with your approvals to ensure approvers only receive the requests that are relevant to them.",
      icon: img5,
    },
    {
      title: "One-click Approvals",
      description:
        "Notification emails are sent to users and can be approved with a single click.",
      icon: img6,
    },
    {
      title: "Responsive design",
      description:
        "It is designed to be mobile-first, and seamlessly works on desktop and tablet as well.",
      icon: img7,
    },
    {
      title: "Enterprise grade security",
      description:
        "This ensures you have the complete control of your data with end to end encryption.",
      icon: img8,
    },
    {
      title: "Custom Dashboard",
      description:
        "Track approvals of various forms from a single place! See the approval process for each request in real-time.",
      icon: img9,
    },
  ]);
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-[88px] mt-24">
      <div className="w-full flex flex-col justify-center items-center px-4 mb-16">
        <h3 className="text-2xl md:text-3xl font-bold mb-2">Features</h3>
        <p className="text-base md:text-lg text-center">
          Everything that your organisation will love, & more.
        </p>
      </div>
      <div className="flex flex-col md:flex-row md:flex-wrap md:gap-9 justify-center md:justify-between items-center">
      {cards &&
        cards.map((card, index) => (
          <Card
            title={card.title}
            description={card.description}
            icon={card.icon}
            key={index}
          />
        ))}
      </div>
      <Reviews
        img={img10}
        name={"Alaa Khaled"}
        review={`"Boloforms has changed the way my team and I work. We used to have a very inefficient workflow, but Boloforms has streamlined it and allowed us to get our daily tasks done in a fraction of the time. Plus, it's incredibly user friendly and easy to understand. I highly recommend Boloforms for anyone who needs an efficient Google workflow software!"`}
      />
      <Reviews style={{marginTop: "80px"}} img={img11} name={"Deepak S (Solero Corporation)"} review={`"Easy to use interface and timely support...looking for more features"`} more={false}/>
    </section>
  );
}
