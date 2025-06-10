import React, { useEffect, useState } from "react";
import { quizzes } from "../Data";
import { useSpring, animated } from "@react-spring/web";
import { i, ul } from "framer-motion/client";
import { useNavigate } from "react-router-dom";

function KirishTesti() {
  const [data, setData] = useState(quizzes.in);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);

  useEffect(() => {
    setData(quizzes.in);
  },[])

  const springs = useSpring({
    from: { y: 0 },
    config: { tension: 120, friction: 14 },
    to: { y: 100 },
  });

  const handleNext = () => {
    if(data.length-1 > index) {
      setIndex(prev => prev +1);
    } else {
      alert("Test tugadi, rahmat!");
      setShow(true);

    }
  }
  
  const handleRestart = () => {
    setIndex(0);
    setShow(false);
    setData(quizzes.in);
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center">
        <div className="bg-white p-6 rounded-lg shadow-md w-3/4">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">{data[index].quiz}</h2>
          <ul className="space-y-3">
            {data[index].options.map((item) => (
              <li className="text-lg text-gray-700 flex items-center" key={item.id}>
                <input type="radio" className="mr-2" />
                {item}
              </li>
            ))}
          </ul>
          <button
            className={`mt-6 px-6 py-3 bg-blue-500 cursor-pointer text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105 ${show ? 'hidden' : ''}`}
            onClick={() => handleNext()}
            disabled={show}
          >
            Keyingi
          </button> <br />

          <button
            className="mt-6 px-6 py-3 bg-blue-500 cursor-pointer text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ease-in-out transform hover:scale-105"
            onClick={() => handleRestart()}
          >
            Qayta boshlash
          </button>
        </div>
      </div>
    </>
  );
}

export default KirishTesti;
