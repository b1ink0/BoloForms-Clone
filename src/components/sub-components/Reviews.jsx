import React from "react";
import img2 from "../../assets/forth_section_img_2.svg";
import Icon2 from "../../icons/Icon2";
import Icon1 from "../../icons/icon1";
import Icon3 from "../../icons/Icon3";

export default function Reviews({
  img,
  name,
  review,
  more = true,
  style = {},
  type = 1,
  designation = "",
}) {
  return (
    <>
      {type === 1 ? (
        <>
          <div
            style={style}
            className="w-full box-shadow-primary flex justify-center items-center p-4 md:p-10 mb-20 rounded-3xl"
          >
            <img
              className="h-16 w-16 md:w-32 md:h-32 rounded-full object-cover"
              src={img}
              alt=""
            />
            <div className="w-full flex flex-col justify-center items-start pl-4 md:pl-12">
              <img className="h-6 w-auto rounded-full mb-4" src={img2} alt="" />
              <p className="text-sm md:text-base">{review}</p>
              <h3 className="text-base md:text-lg font-semibold mt-1">{name}</h3>
            </div>
          </div>
          {more && (
            <>
            <div className="w-full flex flex-col md:flex-row justify-center items-center md:gap-5">
              <button className="bg-primary w-fit h-11 md:h-14 flex justify-center items-center rounded-lg gap-4 mb-5 p-6">
                <span className="w-5 h-5 flex justify-center items-center">
                  <Icon2 />
                </span>
                <p
                  style={{ wordSpacing: "3px" }}
                  className="font-semibold text-xs md:text-xl text-white"
                >
                  Install For Free
                </p>
              </button>
              <button className="border-2 border-[color:var(--color-primary)] w-fit h-11 md:h-14 flex justify-center items-center rounded-lg gap-4 mb-5 p-6">
                <span className="w-5 h-5 flex justify-center items-center">
                  <Icon1 style={{ fill: "var(--color-primary)" }} />
                </span>
                <p
                  style={{ wordSpacing: "3px" }}
                  className="font-semibold text-xs md:text-xl text-[color:var(--color-primary)]"
                >
                  BoloForms Premium
                </p>
              </button>
            </div>
              <div className="w-full flex flex-col md:flex-row justify-center items-start md:gap-4">
                <div className="w-fit flex justify-center items-center mb-2">
                  <div className="w-6 h-6 mr-2">
                    <Icon3 />
                  </div>
                  <p className="text-xs  md:text-base text-gray-600 font-medium">
                    Trusted by 50000+ Businesses
                  </p>
                </div>
                <div className="w-fit flex justify-center items-center mb-2">
                  <div className="w-6 h-6 mr-2">
                    <Icon3 />
                  </div>
                  <p className="text-xs md:text-base  text-gray-600 font-medium">
                    30 Days Money Back Guarantee
                  </p>
                </div>
                <div className="w-fit flex justify-center items-center">
                  <div className="w-6 h-6 mr-2">
                    <Icon3 />
                  </div>
                  <p className="text-xs md:text-base  text-gray-600 font-medium">
                    1-1 Zoom & WhatsApp Onboarding
                  </p>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
       <div className="w-full bg-[#9a6afd] flex flex-col justify-center items-center px-4 md:px-36 pt-16 mt-12">
            <p className="text-lg font-semibold text-white text-center">{review}</p>
            <img className="h-6 w-auto rounded-full mb-4 mt-6" src={img2} alt="" />
            <div className="w-full flex justify-center items-center gap-4 mt-10 mb-20">
                <img className="w-20 h-20 border-2 rounded-full object-cover" src={img}/>
                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-lg font-semibold mt-1 text-white">{name}</h3>
                    <p className="text-sm text-white">{designation}</p>
                </div>
            </div>
       </div>
      )}
    </>
  );
}
