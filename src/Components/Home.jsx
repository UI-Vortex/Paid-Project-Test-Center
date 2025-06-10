import React, { useState } from "react";
import feedback from "../assets/feedback.jpg";
import liveClass from "../assets/live-class-icon.jpg";
import prep from "../assets/preparation-icon.jpg";
import tutor from "../assets/tutor-icon.jpg";
import selfStudy from "../assets/self-study-icon.jpg";
import testCenter from "../assets/testcenter.png";

import students from "../assets/bg-image.jpg";

function Home() {

  return (
    <>
      {/* bg started */}
      <div
        className="test h-screen bg-no-repeat bg-cover bg-center"
        style={{ backgroundImage: `url(${students})` }}
      >
        <div className="flex flex-col items-start justify-center h-full text-left px-10">
          <div className="bg-white bg-opacity-90 p-12 rounded-2xl shadow-2xl max-w-2xl">
            <h1 className="text-5xl font-bold text-gray-800 mb-6">
              Learn English With Us
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              If you learn English, you can dominate the world. Join us to
              enhance your skills, try new methods, and achieve excellence.
            </p>
            <div className="flex flex-col sm:flex-row gap-6">
              <button className="px-10 py-5 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
                Kirish Testi
              </button>
              <button className="px-10 py-5 text-white bg-gradient-to-r from-green-500 to-teal-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
                Mavzuni Boshlash
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* bg ended */}

      {/* skills  started*/}
      <div className="flex flex-col sm:flex-row items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500 text-white shadow-lg p-6 sm:p-10">
        <div className="w-full sm:w-1/2 flex justify-center">
          <img
            className="w-[570px] rounded-lg shadow-lg transform hover:scale-102 transition-transform duration-300"
            src={feedback}
            alt="Feedback"
          />
        </div>
        <div className="w-full sm:w-1/2 mt-6 sm:mt-0 sm:ml-6 text-center sm:text-left">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-4">
            Mahoratlar
          </h1>
          <p className="text-lg mb-10 mt-10">
            Tinglash, o'qish, yozish va gapirishni mashq qiling va ishda
            foydalanish yoki do'stlar bilan samarali muloqot qilish uchun
            foydali tilni o'rganing.
          </p>
          <ul className="list-disc list-inside space-y-3 mb-10">
            <li>
              Tinglash va gapirish qobiliyatingizni mashq qilish uchun audio va
              video.
            </li>
            <li>Yozish ishlarining barcha turlari uchun namunaviy matnlar.</li>
            <li>
              Tezroq o'qish va ko'proq tushunish uchun o'qish qobiliyatingiz
              ustida ishlang.
            </li>
          </ul>
          <button className="mt-6 px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-md hover:bg-purple-600 hover:text-white hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer">
            Batafsil ma'lumot
          </button>
        </div>
      </div>
      {/* skills ended */}

      {/* courses started */}
      <div className="w-full h-full" style={{ background: "rgb(35, 8, 90)" }}>
        <div className="max-w-screen-xl mx-auto p-5">
          <h1 className="text-5xl text-white font-bold text-center mb-20 mt-20">
            Bo'limlar
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-10">
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img
                src={liveClass}
                alt="Course"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">Jonli Efir Darslar</h2>
              <hr className="mt-2" />
              <p className="text-gray-600 mt-2">
                Tajribali o'qituvchilar bilan guruh va yakka tartibda onlayn
                darslar.
              </p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img
                src={prep}
                alt="Course"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">Ielts va Cefr</h2>
              <hr className="mt-2" />
              <p className="text-gray-600 mt-2">
                Shaxsiy va guruhli onlayn darslar orqali kerakli ballni oling.
              </p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img
                src={tutor}
                alt="Course"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">
                Shaxsiy repetitorlik
              </h2>
              <hr className="mt-2" />
              <p className="text-gray-600 mt-2">
                Shaxsiy rejaga qaratilgan birma-bir onlayn sessiyalar.
              </p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img
                src={selfStudy}
                alt="Course"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">
                Mustaqil ta'lim kurslari
              </h2>
              <hr className="mt-2" />
              <p className="text-gray-600 mt-2">
                O'z-o'zini o'rganish onlayn kursi bilan o'z tezligida o'rganing.
              </p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img
                src={selfStudy}
                alt="Course"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">
                Ingliz Tili Yuksak Daraja
              </h2>
              <hr className="mt-2" />
              <p className="text-gray-600 mt-2">
                Yuksak darajadagi ingliz tili rivojlantiring. va bizda o'qing
              </p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img
                src={selfStudy}
                alt="Course"
                className="w-full h-48 object-cover rounded-t-lg"
              />
              <h2 className="text-xl font-semibold mt-4">
                Ingliz Tili Yuksak Daraja
              </h2>
              <hr className="mt-2" />
              <p className="text-gray-600 mt-2">
                Yuksak darajadagi ingliz tili rivojlantiring. va bizda o'qing
              </p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* courses ended */}

      {/* Why learn started */}
      <div className="poster-dominant" style={{ background: "linear-gradient(#BA8B02, #181818)" }}> 
        <div className="poster flex flex-col lg:flex-row justify-between p-6 lg:p-10 items-center">
          <div className="poster-texts text-center lg:text-left mb-6 lg:mb-0 sm:w-1/2">
            <h1
              className="poster-title text-3xl lg:text-5xl font-bold text-white"
              style={{ color: "indigo", letterSpacing: "0.5px" }}
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

            <button className="poster-start text-xl pt-4 lg:pt-6 pr-10 lg:pr-15 pl-10 lg:pl-15 pb-4 lg:pb-6 cursor-pointer text-white  font-bold rounded-full transition-all duration-300 ease-in-out bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 hover:shadow-lg hover:scale-105">
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
      {/* why learn ended */}

      {/* contact started */}
      <div className="Contact" style={{ background: "#00bf8f" }}>
        <div className="flex justify-center items-center min-h-screen">
          <div className="bg-white text-white p-8 rounded-xl shadow-lg w-full max-w-md">
            <h2 className="text-4xl font-bold text-black mb-6 text-center">
              Contact Us
            </h2>
            <form>
              <div className="mb-4">
                <label
                  htmlFor="name"
                  className="block text-black text-lg font-medium mb-2"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="phone"
                  className="block text-black text-lg font-medium mb-2"
                >
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your phone number"
                />
              </div>
              <div className="mb-4">
                <label
                  htmlFor="email"
                  className="block text-black text-lg font-medium mb-2"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg bg-gray-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="Enter your email"
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 mt-4 cursor-pointer bg-blue-500 hover:bg-blue-600 text-white font-semibold rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 transition duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* contact ended */}
    </>
  );
}

export default Home;
