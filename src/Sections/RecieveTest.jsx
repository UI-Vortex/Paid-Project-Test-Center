import { useLocation, useNavigate } from "react-router-dom";

function RecieveTest() {
  const location = useLocation();
  const navigate = useNavigate();

  const { total, correct, wrong, answers } = location.state || {};

  return (
    <>
      <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-6">
        <div className="bg-white rounded-lg p-8 shadow-lg max-w-md w-full text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-4">
            Test yakunlandi!
          </h2>
          <p className="text-xl text-gray-700 mb-2">
            To'g'ri javoblar: {correct}
          </p>
          <p className="text-xl text-gray-700 mb-6">
            Noto'g'ri javoblar: {wrong}
          </p>

          <button
            onClick={() => navigate("/kirish/test")}
            className="mt-4 px-6 cursor-pointer py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600 transition"
          >
            Qayta boshlash
          </button>
        </div>
      </div>
    </>
  );
}

export default RecieveTest;
