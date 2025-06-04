import React from "react";
import testCenter from "../assets/testcenter.png";

function Why() {
return (
    <div>
        <div className="poster-dominant">
            <div className="poster flex justify-between p-8 items-center">
                <div className="poster-texts ">
                    <h1
                        className="poster-title text-5xl w-130 font-bold"
                        style={{ color: "#26ABA3", letterSpacing: "0.5px" }}
                    >
                        Education-Center{" "}
                        <span className="text-black">Zamonaviy pedagogik yondashuv</span>
                    </h1>
                    <p className="poster-desc mt-10 mb-10 font-bold text-gray-500 text-xl">
                        Ushbu Platforma sizga Quyidagilarni beradi
                    </p>
                    <div className="poster-features mb-10">
                        <ul className="pl-8">
                            <li className="text-gray-500 text-lg mb-4">
                                <i className="fa-regular fa-circle-check mr-3 text-yellow-500"></i>
                                O‘quvchilar uchun testlar
                            </li>
                            <li className="text-gray-500 text-lg mb-4">
                                <i className="fa-regular fa-circle-check mr-3 text-yellow-500"></i>
                                O‘qituvchilar uchun testlar
                            </li>
                            <li className="text-gray-500 text-lg mb-4">
                                <i className="fa-regular fa-circle-check mr-3 text-yellow-500"></i>
                                O‘quvchilar uchun darslar
                            </li>
                            <li className="text-gray-500 text-lg mb-4">
                                <i className="fa-regular fa-circle-check mr-3 text-yellow-500"></i>
                                O‘qituvchilar uchun darslar
                            </li>
                        </ul>
                    </div>

                    <button className="poster-start pt-6 pr-15 pl-15 pb-6 cursor-pointer text-white font-bold rounded-full transition-all duration-300 ease-in-out bg-gradient-to-r from-teal-400 to-blue-500 hover:from-blue-500 hover:to-teal-400 hover:shadow-lg hover:scale-105">
                        Boshlash
                    </button>
                </div>
                <div className="poster-img">
                    <img
                        className="rounded-4xl"
                        src={testCenter}
                        height={400}
                        width={700}
                        alt="Error"
                    />
                </div>
            </div>
        </div>
    </div>
);
}

export default Why;
