import React, { useState } from "react";
import img1 from "../assets/eight_section_img_1.png";
import img2 from "../assets/eight_section_img_2.png";
import img3 from "../assets/eight_section_img_3.png";
import img4 from "../assets/eight_section_img_4.png";
import img5 from "../assets/eight_section_img_5.png";

const Card = ({ img, title, desc, btnTitle }) => {
  return (
    <div className="max-w-[300px] md:w-60 md:h-[450px] flex flex-col justify-center items-start p-8 box-shadow-tertiary rounded-xl mb-6">
      <img className="w-full h-auto" src={img} />
      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-3">{desc}</p>
      <button className="w-full border-2 border-[var(--color-primary)] hover:bg-[var(--color-primary)] hover:text-white py-2 rounded-lg mt-8 text-sm font-medium">
        {btnTitle}
      </button>
    </div>
  );
};

export default function EighthSection() {
  const [cards, setCards] = useState([
    {
      img: img2,
      title: "? Whatsapp chat",
      desc: "Ask a question right now.",
      btnTitle: "Start a chat",
    },
    {
      img: img3,
      title: "? Email",
      desc: "Get in touchby email.",
      btnTitle: "Send an email",
    },
    {
      img: img4,
      title: "? Help center",
      desc: "In Depth Guides.",
      btnTitle: "Read articles",
    },
    {
      img: img5,
      title: "? Google Meet",
      desc: "Guided support and Q&A.",
      btnTitle: "Book a time",
    },
  ]);
  return (
    <section id="section_8" className="w-full flex flex-col justify-center items-center px-8 md:px-[88px] mt-24">
      <div className="w-full flex flex-col justify-center items-center mb-12">
        <img className="w-auto h-10" src={img1} alt="" />
        <h3 className="text-3xl md:text-5xl font-bold text-center mt-4">
          Award-winning support<span className="text-primary">.</span>
        </h3>
        <p className="text-base md:text-xl text-center mt-4">
          Best-in-class support. We’re always here to help – here’s how to
          connect.
        </p>
      </div>
      <div className="w-full flex flex-col md:flex-row md:flex-wrap md:gap-8 justify-center items-center">
        {cards &&
          cards.map((card, index) => (
            <Card
              img={card.img}
              desc={card.desc}
              title={card.title}
              btnTitle={card.btnTitle}
            />
          ))}
      </div>
    </section>
  );
}
