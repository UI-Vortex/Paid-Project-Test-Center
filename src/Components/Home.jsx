import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpg";
import students from "../assets/bg-image.jpg";
import Courses from "../Sections/Courses";
import video from "../assets/re.mp4";
import Skills from "../Sections/Skills";

function Home() {
  return (
    <>
      <header className="header">
        <nav className="bg-gray-800 p-5 w-auto flex justify-between items-center">
          <Link to="/">
            <img className="rounded-2xl" width={100} src={logo} alt="" />
          </Link>

          <ul className="item-list flex gap-10 items-center cursor-pointer">
            <li className="item transform transition hover:-translate-y-1">
              <a className="text-lg text-white">Bosh Sahifa</a>
            </li>
            <li className="item transform transition hover:-translate-y-1">
              <a className="text-lg text-white">Kirish Testi</a>
            </li>
            <li className="item transform transition hover:-translate-y-1">
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
          <div className="transform translate-y-24 ml-20">
            <div className="test bg-white w-150 h-95 rounded-xl p-15">
              <h1 className="text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-10">
                Education Technology
              </h1>
              <p className="text-lg mb-10">
                Join Us For live interactive Sessions with top industry experts
                and take your education to next level
              </p>

              <button className="px-8 py-5 mt-5 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
                Kirish Testi
              </button>
              <button className="px-8 py-5 mt-5 ml-10 text-white bg-gradient-to-r from-blue-500 to-purple-600 rounded-full shadow-lg hover:shadow-xl transform hover:scale-105 transition duration-300 cursor-pointer">
                Mavzuni Boshlash
              </button>
            </div>
          </div>
        </div>
      </header>
      <Skills />
      <Courses />
    </>
  );
}

export default Home;
