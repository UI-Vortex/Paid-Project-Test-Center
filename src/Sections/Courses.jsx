import React from "react";
import image from '../assets/student.jpeg'

function Courses() {
  return (
    <>
      <div className="w-full h-100" style={{ background: "rgba(93, 235, 75, 0.1)" }}>
        <div className="max-w-screen-xl mx-auto p-5">
          <h1 className="text-4xl font-bold text-center mb-20 mt-20">Kurslarimiz</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img src={image} alt="Course" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">Ingliz Tili Asoslari</h2>
              <p className="text-gray-600 mt-2">Ingliz tilini o'rganishni boshlang.</p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img src={image} alt="Course" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">Ingliz Tili O'rta Daraja</h2>
              <p className="text-gray-600 mt-2">O'rta darajadagi ingliz tili ko'nikmalarini oshiring.</p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer">
                Boshlash
              </button>
            </div>
            <div className="bg-white rounded-lg shadow-lg p-5 cursor-pointer">
              <img src={image} alt="Course" className="w-full h-48 object-cover rounded-t-lg" />
              <h2 className="text-xl font-semibold mt-4">Ingliz Tili Yuksak Daraja</h2>
              <p className="text-gray-600 mt-2">Yuksak darajadagi ingliz tili rivojlantiring.</p>
              <button className="mt-4 px-6 py-2 text-white bg-green-500 rounded-lg hover:bg-white hover:text-green-500 border border-green-500 transition-colors duration-300 cursor-pointer">
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
