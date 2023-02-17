import React from "react";
import img1 from "../assets/footer_img_1.svg";
import img2 from "../assets/footer_img_2.svg";
import img3 from "../assets/footer_img_3.svg";
import img4 from "../assets/footer_img_4.svg";
import img5 from "../assets/footer_img_5.svg";

export default function Footer() {
  return (
    <footer className="w-full flex flex-col justify-center items-center mt-24 px-8 md:px-[88px] pt-24 bg-secondary">
      <div className="w-full flex flex-col md:flex-row justify-center items-start">
        <div className="w-full flex flex-col justify-center items-start">
          <a
            href="https://api.whatsapp.com/send/?phone=918830631677&text=Need%20Help%20with%20BoloForms%20Approvals"
            target="_blank"
          >
            <h3 className="font-bold text-2xl mb-3">💬 Live Chat</h3>
          </a>
          <a href="mailto:support@boloforms.com" target="_blank">
            <h3 className="font-bold text-2xl mb-3">📨 Support Email</h3>
          </a>
          <a href="https://approval-docs.boloforms.com/" target="_blank">
            <h3 className="font-bold text-2xl mb-3">📚 Help Center</h3>
          </a>
          <a href="https://calendly.com/boloforms/15min" target="_blank">
            <h3 className="font-bold text-2xl mb-3">📅 Video Call</h3>
          </a>
        </div>
        <div className="w-full flex flex-col justify-center items-start mt-8">
          <h3 className="text-sm font-medium mb-2">Pages</h3>
          <a className="text-sm mb-2" href="/">
            Home
          </a>
          <a className="text-sm mb-2" href="">
            Pricing
          </a>
          <a className="text-sm mb-2" href="">
            Blogs
          </a>
          <a className="text-sm mb-2" href="">
            About us
          </a>
        </div>
        <div className="w-full flex flex-col justify-center items-start mt-8">
          <h3 className="text-sm font-medium mb-2">Products</h3>
          <a className="text-sm mb-2" href="">
            Forms Approval
          </a>
          <a className="text-sm mb-2" href="">
            Signature
          </a>
          <a className="text-sm mb-2" href="">
            Sheetgod
          </a>
          <a className="text-sm mb-2" href="">
            Google Form UI Enhancer
          </a>
          <a className="text-sm mb-2" href="">
            Boloforms Document Generator
          </a>
          <a className="text-sm mb-2" href="">
            Timer + Proctor
          </a>
          <a className="text-sm mb-2" href="">
            Google Meet Attendence Tracker
          </a>
        </div>
        <div className="w-full flex flex-col justify-center items-start mt-8">
          <h3 className="text-sm font-medium mb-2">Legal</h3>
          <a className="text-sm mb-2" href="">
            Terms of Service
          </a>
          <a className="text-sm mb-2" href="">
            Privacy Policy
          </a>
          <a className="text-sm mb-2" href="">
            Refund Policy
          </a>
          <a className="text-sm mb-2" href="">
            Data Security & Policy
          </a>
        </div>
      </div>
      <div className="w-full flex flex-col md:flex-row justify-center md:justify-between items-start mt-12 ">
        <div className="flex text-sm mb-3">
          Made with <img className="h-4 w-auto mx-4" src={img1} /> +
          <img className="h-4 w-auto mx-4" src={img2} /> in India
        </div>
        <div className="flex flex-col justify-center items-start mt-">
          <p className="text-sm mb-2">Select Language</p>
          <select className="text-sm" aria-label="Select">
            <option value="English">Select Language</option>
            <option value="English">English</option>
            <option value="Hindi">Hindi</option>
            <option value="Marathi">Marathi</option>
          </select>
        </div>
      </div>
      <div className="flex justify-center items-center mt-20 mb-28 gap-9">
        <img className="w-6 h-6" src={img3}/>
        <img className="w-6 h-6" src={img4}/>
        <img className="w-6 h-6" src={img5}/>
      </div>
    </footer>
  );
}
