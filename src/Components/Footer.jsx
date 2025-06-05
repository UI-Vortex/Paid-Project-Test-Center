import React from "react";
import logo from "../assets/logo1.jpg";

function Footer() {
  return (
    <>
      <footer className="bg-gray-800">
        <div className=" flex flex-col sm:flex-row justify-center sm:justify-between items-center p-5 flex-wrap">
          <img
            width={100}
            src={logo}
            className="rounded-2xl mb-4 sm:mb-0"
            alt="Error"
          />

          <ul className="item-list flex flex-col sm:flex-row gap-4 sm:gap-10 items-center text-white text-lg cursor-pointer mb-4 sm:mb-0">
            <li className="item">Bosh Sahifa</li>
            <li className="item">Kirish Testi</li>
            <li className="item">Bo'limlar</li>
          </ul>

          <div className="footer-icons flex gap-5">
            <i className="fa-brands fa-telegram p-3 bg-orange-500 text-white rounded-[50%] cursor-pointer transition hover:translate-y-[-5px]"></i>
            <i className="fa-solid fa-phone p-3 bg-orange-500 text-white rounded-[50%] cursor-pointer transition hover:translate-y-[-5px]"></i>
          </div>
        </div>
        <hr className="bg-white h-[2px] sm: bg-white h-[2px]"/>
        <div className="text-center text-white py-4">
          <p className="mb-2 text-lg font-bold">&copy; 2025 English Learning Platform</p>
          <p className="text-sm text-gray-400 font-bold">Dasturchi: Zubair Muhammadjonov</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
