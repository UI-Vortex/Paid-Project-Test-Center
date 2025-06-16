import React, { useEffect, useState } from "react";
import { quizzes } from "../Data";
import { useSpring, animated } from "@react-spring/web";
import { i, ul } from "framer-motion/client";
import { useNavigate } from "react-router-dom";
import RecieveTest from "./RecieveTest";

function KirishTesti() {
  const [data, setData] = useState(quizzes.in);
  const [index, setIndex] = useState(0);
  const [show, setShow] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const navigate = useNavigate();

  const [correctAnswers, setCorrectAnswers] = useState([]);

  useEffect(() => {
    setData(quizzes.in);
  }, []);

  const handleNext = () => {
    const currentQuestion = data[index];
  
    if (selectedOption === currentQuestion.answer) {
      setCorrectAnswers((prev) => [...prev, currentQuestion]);
    }
  
    if (index < data.length - 1) {
      setIndex((prev) => prev + 1);
      setSelectedOption(null);
    } else {
      navigate("/test/javoblar", {
        state: {
          total: data.length,
          correct: correctAnswers.length + (selectedOption === currentQuestion.answer ? 1 : 0),
          wrong: data.length - (correctAnswers.length + (selectedOption === currentQuestion.answer ? 1 : 0)),
          answers: [...correctAnswers, ...(selectedOption === currentQuestion.answer ? [currentQuestion] : [])],
        },
      });
    }
  };

  const handleRestart = () => {
    setIndex(0);
    setShow(false);
    setCorrectCount(0);
    setWrongCount(0);
    setSelectedOption(null);
    setData(quizzes.in);
  };

  const springs = useSpring({
    from: { y: 0 },
    config: { tension: 120, friction: 14 },
    to: { y: 200 },
  });

  return (
    <>
      {/* start here */}
      <div className="min-h-screen bg-gradient-to-br from-gray-600 to-gray-600 flex flex-col items-center justify-center p-5">
        <div className="bg-white p-6 rounded-lg shadow-xl w-11/12 md:w-3/4 lg:w-1/2">
          <div className="flex flex-col items-center gap-6 p-5">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4 text-center">
              {data[index].quiz}
            </h2>

            <ul className="space-y-4 w-full">
              {data[index].options.map((item, i) => (
                <li
                  className="text-lg text-gray-700 flex items-center bg-gray-100 p-3 rounded-lg hover:bg-gray-200 transition duration-300 ease-in-out"
                  key={item.id || i} // just in case item.id is undefined
                >
                  <input
                    type="radio"
                    name={`question-${index}`} // group radio buttons by question index
                    className="mr-3 accent-blue-500"
                    value={item}
                    checked={selectedOption === item}
                    onChange={() => setSelectedOption(item)}
                  />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <button
              className={`px-6 py-3 bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out transform ${
                show ? "hidden" : ""
              }`}
              onClick={() => handleNext()}
              disabled={show}
            >
              Keyingi
            </button>

            <button
              className="px-6 py-3 bg-gradient-to-r from-green-500 to-teal-600 text-white font-semibold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition duration-300 ease-in-out transform"
              onClick={() => handleRestart()}
            >
              Qayta boshlash
            </button>
          </div>
        </div>
      </div>
      {/* ended here */}
      {show && <RecieveTest correct={correctCount} wrong={wrongCount} />}
    </>
  );
}

export default KirishTesti;
