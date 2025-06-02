import React from "react";
import feedback from "../assets/feedback.jpg";

function Skills() {
  return (
    <>
      {/* <div className="feedback-container w-full h-200 bg-green-100 p-4 sm:p-15 h-380">
        <h1
          className="font-bold text-4xl text-center mb-20"
          style={{ color: "rgb(35, 8, 90)" }}
        >
          Biz sizga haqiqiy dunyoda ishonchli muloqot qilishingizga yordam
          beradigan to'g'ri vositalarni taqdim etamiz
        </h1>
        <div className="flex justify-center items-center m-auto w-full xl:w-300 h-100 lg:w-200 h-130 md:w-150 h-130 sm:flex-row flex-wrap">
          <div className="feed-image">
            <img className="rounded-tl-4xl sm:w-100 h-100 lg:w-200 h-140" src={feedback} alt="error" />
          </div>
          <div className="feed-text bg-white rounded-br-4xl p-10 sm:w-130 h-100 p-0 lg: w-200 h-130">
            <h1 className="text-4xl font-bold mb-10" style={{ color: "rgb(35, 8, 90)" }}>Mahoratlar</h1>
            <p className="text-lg mb-5">
              Tinglash, o'qish, yozish va gapirishni mashq qiling va ishda
              foydalanish yoki do'stlar bilan samarali muloqot qilish uchun
              foydali tilni o'rganing.
            </p>
            <ul className="list-item list-disc">
              <li className="item mb-5">
                Tinglash va gapirish qobiliyatingizni mashq qilish uchun audio
                va video.
              </li>
              <li className="item mb-5">
                Yozish ishlarining barcha turlari uchun namunaviy matnlar..
              </li>
              <li className="item">
                Tezroq o'qish va ko'proq tushunish uchun o'qish qobiliyatingiz
                ustida ishlang..
              </li>
            </ul>
          </div>
        </div>
      </div> */}
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
                    Tinglash va gapirish qobiliyatingizni mashq qilish uchun audio
                    va video.
                </li>
                <li>
                    Yozish ishlarining barcha turlari uchun namunaviy matnlar.
                </li>
                <li>
                    Tezroq o'qish va ko'proq tushunish uchun o'qish qobiliyatingiz
                    ustida ishlang.
                </li>
            </ul>
            <button
                className="mt-6 px-6 py-3 bg-white text-purple-700 font-bold rounded-lg shadow-md hover:bg-purple-600 hover:text-white hover:shadow-lg transform hover:scale-105 hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
                Batafsil ma'lumot
            </button>
        </div>
    </div>
    </>
  );
}

export default Skills;
