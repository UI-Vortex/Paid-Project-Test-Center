import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpg";
import students from "../assets/bg-image.jpg";
import Courses from "../Sections/Courses";
import video from "../assets/re.mp4";
import Skills from "../Sections/Skills";
import Why from "../Sections/Why";

function Home() {
  return (
    <>
      <header className="header">
        <nav className="bg-gray-800 p-5 w-auto flex justify-between items-center">
          <Link to="/">
            <img className="rounded-2xl" width={100} src={logo} alt="" />
          </Link>

          <ul className="item-list flex gap-10 items-center ">
            <li className="item">
              <a className="text-lg text-white cursor-pointer">Bosh Sahifa</a>
            </li>
            <li className="item">
              <a className="text-lg text-white cursor-pointer">Kirish Testi</a>
            </li>
            <li className="item">
              <a className="text-lg text-white ">Bo'limlar</a>
            </li>
          </ul>

          <h2 className="text-lg text-white cursor-pointer hover:scale-105 transition">
            Mavzuni Boshlash
          </h2>
        </nav>

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
      </header>
      <Skills />
      <Courses />
      <Why />
    </>
  );
}

export default Home;
