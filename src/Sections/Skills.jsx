import React from "react";
import feedback from "../assets/feedback.jpg";

function Skills() {
return (
    <>
        <div className="w-full h-200 flex bg-gray-300 justify-center p-8 items-center flex-wrap">
            <div className="feedback-image">
                <img
                    className="rounded-tl-4xl"
                    src={feedback}
                    width={548}
                    alt="Error"
                />
            </div>
            <div className="feedback-texts w-150 h-137 bg-white p-8 rounded-br-4xl">
                <h1
                    className="feed-title text-5xl mb-8"
                    style={{ color: "rgb(35, 8, 90)" }}
                >
                    Mahoratlar
                </h1>
                <p className="feed-desc text-black font-weight-500 text-xl mb-5">
                    Tinglash, o'qish, yozish va gapirishni mashq qiling va ishda
                    foydalanish yoki do'stlar bilan samarali muloqot qilish uchun
                    foydali tilni o'rganing.
                </p>

                <ul className="list-item ml-5 mb-15">
                    <li className="item list-disc mb-2">
                        Tinglash va gapirish qobiliyatingizni mashq qilish uchun audio va video.
                    </li>
                    <li className="item list-disc mb-2">
                        Yozish ishlarining barcha turlari uchun namunaviy matnlar.
                    </li>
                    <li className="item list-disc mb-2">
                        Tezroq o'qish va tushunish uchun o'qish qobiliyatingiz ustida ishlang
                        Ko'proq.
                    </li>
                </ul>

                <button className="feed bg-purple-700 text-white text-lg font-semibold py-4 px-8 rounded-lg hover:bg-purple-800 hover:scale-105 transition-transform duration-300">
                    O'rganishni Boshlash
                </button>
            </div>
        </div>
    </>
);
}

export default Skills;
