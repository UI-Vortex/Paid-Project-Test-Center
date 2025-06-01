import React from "react";
import liveClass from '../assets/live-class-icon.jpg';
import prep from '../assets/preparation-icon.jpg';
import tutor from '../assets/tutor-icon.jpg';
import selfStudy from '../assets/self-study-icon.jpg';

function Courses() {
  return (
    <>
      <div className="w-full h-full" style={{ background: "rgb(35, 8, 90)" }}>
        <div className="max-w-screen-xl mx-auto p-5">
          <h1 className="text-5xl text-white font-bold text-center mb-20 mt-20">Bo'limlar</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img src={liveClass} alt="Course" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">Jonli Efir Darslar</h2>
              <p className="text-gray-600 mt-2">Tajribali o'qituvchilar bilan guruh va yakka tartibda onlayn darslar.
              </p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img src={prep} alt="Course" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">Ielts va Cefr</h2>
              <p className="text-gray-600 mt-2">Shaxsiy va guruhli onlayn darslar orqali kerakli ballni oling.</p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img src={tutor} alt="Course" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">
              Shaxsiy repetitorlik</h2>
              <p className="text-gray-600 mt-2">Shaxsiy rejaga qaratilgan birma-bir onlayn sessiyalar.
              </p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img src={selfStudy} alt="Course" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">Mustaqil ta'lim kurslari</h2>
              <p className="text-gray-600 mt-2">O'z-o'zini o'rganish onlayn kursi bilan o'z tezligida o'rganing.</p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img src={selfStudy} alt="Course" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">Ingliz Tili Yuksak Daraja</h2>
              <p className="text-gray-600 mt-2">Yuksak darajadagi ingliz tili rivojlantiring. va bizda o'qing</p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img src={selfStudy} alt="Course" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">Ingliz Tili Yuksak Daraja</h2>
              <p className="text-gray-600 mt-2">Yuksak darajadagi ingliz tili rivojlantiring. va bizda o'qing</p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer tranform hover:scale-105">
                Boshlash
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Courses;
