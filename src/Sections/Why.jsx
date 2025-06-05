import React from "react";
import testCenter from "../assets/testcenter.png";

function Why() {
  return (
    <div>
      <div
        className="poster-dominant"
        style={{ background: "linear-gradient(#BA8B02, #181818)" }}
      >
        <div className="poster flex flex-col lg:flex-row justify-between p-6 lg:p-10 items-center">
          <div className="poster-texts text-center lg:text-left mb-6 lg:mb-0 sm:w-1/2">
            <h1
              className="poster-title text-3xl lg:text-5xl font-bold"
              style={{ color: "#00bf8f", letterSpacing: "0.5px" }}
            >
              Education-Center{" "}
              <span className="text-white">Zamonaviy pedagogik yondashuv</span>
            </h1>
            <p className="poster-desc text-white mt-6 lg:mt-10 mb-6 lg:mb-10 font-bold text-gray-500 text-lg lg:text-xl">
              Ushbu Platforma sizga Quyidagilarni beradi
            </p>
            <div className="poster-features mb-6 lg:mb-10">
              <ul className="pl-4 lg:pl-8">
                <li className="text-white text-base lg:text-lg mb-3 lg:mb-4 flex items-center">
                  <i className="fa-regular fa-circle-check mr-2 lg:mr-3 text-yellow-500"></i>
                  O‘quvchilar uchun testlar
                </li>
                <li className="text-white text-base lg:text-lg mb-3 lg:mb-4 flex items-center">
                  <i className="fa-regular fa-circle-check mr-2 lg:mr-3 text-yellow-500"></i>
                  O‘qituvchilar uchun testlar
                </li>
                <li className="text-white text-base lg:text-lg mb-3 lg:mb-4 flex items-center">
                  <i className="fa-regular fa-circle-check mr-2 lg:mr-3 text-yellow-500"></i>
                  O‘quvchilar uchun darslar
                </li>
                <li className="text-white text-base lg:text-lg mb-3 lg:mb-4 flex items-center">
                  <i className="fa-regular fa-circle-check mr-2 lg:mr-3 text-yellow-500"></i>
                  O‘qituvchilar uchun darslar
                </li>
              </ul>
            </div>

            <button className="poster-start text-xl pt-4 lg:pt-6 pr-10 lg:pr-15 pl-10 lg:pl-15 pb-4 lg:pb-6 cursor-pointer text-white font-bold rounded-full transition-all duration-300 ease-in-out bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 hover:shadow-lg hover:scale-105">
              Boshlash
            </button>
          </div>
          <div className="poster-img">
            <img
              className="rounded-2xl lg:rounded-4xl w-full lg:w-auto max-w-xs lg:max-w-xl sm:max-w-xl"
              src={testCenter}
              alt="Error"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Why;
