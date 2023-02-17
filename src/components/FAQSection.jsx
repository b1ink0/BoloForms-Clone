import React, { useState } from "react";
import Icon4 from "../icons/Icon4";
import Img1 from "../assets/faq_img_1.svg";
import Img2 from "../assets/footer_img_2.svg";

const FAQ = ({ q, a }) => {
  const [show, setShow] = useState(false);
  return (
    <div
      className="w-full border rounded-lg p-4 mb-4"
      onClick={() => setShow((prev) => !prev)}
    >
      <div className="w-full flex justify-between items-center cursor-pointer">
        <h3 className="text-base md:text-lg font-semibold">{q}</h3>
        <div className="min-w-[50px] flex justify-center items-center">
          <div
            style={{ transform: show ? "" : "rotate(180deg)" }}
            className="w-7 h-7 ml-4"
          >
            <Icon4 />
          </div>
        </div>
      </div>
      {show && <p className="text-sm md:text-base mt-3">{a}</p>}
    </div>
  );
};

export default function FAQSection() {
  const [cardFirstCol, setCardFirstCol] = useState([
    {
      q: "What is the difference between email and request?",
      a: "A request needs to send multiple emails to different recipients and respondent (optional) for approval. This means that one request may costs lots of email quota.",
    },
    {
      q: "What will happen if I run out of email quota?",
      a: "When you run out of email quota, the addon will temporary stop running. You will have to wait for quota renewal to send email again. If you are Free user, you can purchase Individual Plan and enjoy much higher quotas (at least 5000 emails/month) and unlimited emails sent per day.",
    },
    {
      q: "What will happen to my data if I cancel my subscription?",
      a: "You data will still be stored in our database even after your subscription cancellation. If you want to remove your data, please contact to us via support@boloforms.com.",
    },
    {
      q: "I receive a permission error when I try to setup the Add-on",
      a: "This is a known issue with Google permissions and it happens when you are logged in with more than one Google account. Try to sign out of all account except your main account. Alternatively, try Guest/Incognito mode.",
    },
    {
      q: "Can I use the addon if my organisation does not use Google accounts?",
      a: "Yes, but be aware that Form owner/adminstrator in particular still needs Google account. This is because the addon sends email on your Gmail behalf.",
    },
    {
      q: "How can I contact support?",
      a: "For any additional questions, you can contact us on support@boloforms.com or on WhatsApp at +91-8830631677 anytime.",
    },
    {
      q: "Why does the approval workflow sometimes work smoothly and other times throws errors?",
      a: "If you suddenly have an error running when using an add-on, please let us know by sending an email to support@boloforms.com. Our team will contact you as soon as possible to look into the issue. If you need an expedited support, feel free to message us on WhatsApp at +91-8830631677.",
    },
  ]);
  const [cardSecondCol, setCardSecondCol] = useState([
    {
      q: "How to calculate the number of requests based on email quota?",
      a: "Emails & Requests are different. For examples, if you set up a workflow with 2 recipients, a form respondent submit a request then 2 emails counted to be sent to 2 recipients. In average, a request from our users consists of 4 emails. That is why free plan (500 emails) is calculated to be approximately 125 requests per month. The smaller number of recipient you set up in the workflow, the more request you have with a fixed email quota and vice versa.",
    },
    {
      q: "Why the addon requires access to my Google Drive?",
      a: "Permission to Google Drive is only necessary for the addon to perform actions related to your connected Google Form and spreadsheet on your behalf. In no circumstance that we will use those files for any other purposes or sharing to third parties.",
    },
    {
      q: "How does approval workflow feature work?",
      a: "When a Form Respondent sends a request, the addon will automatically send approval notification email to your specified recipient(s). Recipient can make One-click approve/reject decision on email, or, approve/reject & comment on BoloForms Approvals website. Finally, an email will be sent to all recipients notifying the final result.",
    },
    {
      q: "Does recipient need Google Account?",
      a: "No. Recipients do not need Google account. They also do not need to have access to your Google Form or spreadsheet. When a request is sent, recipient will receive an email which includes: One-click Approve & One-click Reject button: to approve/reject immediately. Approve/Reject & Comment button: to open BoloForms Website where you can approve/reject & give comment on the request.",
    },
    {
      q: "How many recipients can I add?",
      a: "There is no limit to the number of recipients. However, be aware that the higher number of recipients is, the quicker your emails quota may run out.",
    },
    {
      q: "Can Form Respondent or Recipients edit a form submission?",
      a: "You can have option to allow Form Respondents to edit their own submission. However, Recipients can not edit submissions from Respondent.",
    },
  ]);
  return (
    <section className="w-full flex flex-col justify-center items-center px-4 md:px-[88px] mt-24">
      <h3 className="text-2xl md:text-4xl font-semibold text-center">
        Frequently Asked Questions
      </h3>
      <div className="w-full flex flex-col md:flex-row md:gap-4 justify-center items-center md:items-start mt-8">
        <div className="w-full flex flex-col justify-center items-center">
          {cardFirstCol &&
            cardFirstCol.map((card, index) => (
              <FAQ key={index} q={card.q} a={card.a} />
            ))}
        </div>
        <div className="w-full flex flex-col justify-center items-center">
          {cardSecondCol &&
            cardSecondCol.map((card, index) => (
              <FAQ key={index} q={card.q} a={card.a} />
            ))}
        </div>
      </div>
      <div className="w-full hidden md:flex flex-col justify-center items-center mt-24">
        <div className="w-full flex flex-col justify-center items-center">
          <div className="w-full flex justify-center items-center gap-5">
            <h3  className="text-4xl font-semibold">Customers Who Are Trusting Us!</h3>
            <img className="w-9 h-9" src={Img2} />
          </div>
          <p className="text-lg mt-4">Customers’ Testimonials</p>
        </div>
        <img className="w-full h-auto mt-10" src={Img1} />
      </div>
    </section>
  );
}
