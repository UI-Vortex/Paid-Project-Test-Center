import { Link } from "react-router-dom";
import logo from "../assets/logo1.jpg";
import { useSpring, animated } from "@react-spring/web";
import { useState } from "react";

function Navbar() {
  const springs = useSpring({
    from: { y: 100 },
    config: { tension: 120, friction: 14 },
    to: { y: 0 },
  });

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <animated.div style={{ ...springs }}>
      <header className="header">
        <nav className="bg-gray-800 p-5 w-auto flex justify-between items-center">
          <Link to="/">
            <img className="rounded-2xl" width={100} src={logo} alt="" />
          </Link>

          {/* Desktop Menu */}
          <ul className="item-list hidden md:flex gap-10 items-center">
            <li className="item">
              <Link
                to="/"
                className="text-lg text-white cursor-pointer transition hover:text-orange-300"
              >
                Bosh Sahifa
              </Link>
            </li>
            <li className="item">
              <Link
                to="/kirish/test"
                className="text-lg text-white cursor-pointer transition hover:text-orange-300"
              >
                Kirish Testi
              </Link>
            </li>
            <li className="item">
              <Link
                to="/"
                className="text-lg text-white cursor-pointer transition hover:text-orange-300"
              >
                Bo'limlar
              </Link>
            </li>
          </ul>

          <h2 className="hidden md:block text-lg text-white cursor-pointer hover:scale-105 transition">
            Mavzuni Boshlash
          </h2>

          {/* Hamburger Icon */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <div className="space-y-2">
              <span className="block w-8 h-1 bg-white rounded"></span>
              <span className="block w-8 h-1 bg-white rounded"></span>
              <span className="block w-8 h-1 bg-white rounded"></span>
            </div>
          </button>
        </nav>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="absolute top-0 left-0 w-full h-screen bg-gray-900 bg-opacity-95 flex flex-col items-center justify-center space-y-6">
            <ul className="item-list flex flex-col gap-6 items-center">
              <li className="item">
                <Link
                  to="/"
                  className="text-xl text-white cursor-pointer transition hover:text-orange-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Bosh Sahifa
                </Link>
              </li>
              <li className="item">
                <Link
                  to="/kirish/test"
                  className="text-xl text-white cursor-pointer transition hover:text-orange-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Kirish Testi
                </Link>
              </li>
              <li className="item">
                <Link
                  to="/"
                  className="text-xl text-white cursor-pointer transition hover:text-orange-300"
                  onClick={() => setMenuOpen(false)}
                >
                  Bo'limlar
                </Link>
              </li>
            </ul>

            <h2
              className="text-xl text-white cursor-pointer hover:scale-105 transition"
              onClick={() => setMenuOpen(false)}
            >
              Mavzuni Boshlash
            </h2>

            <button
              className="text-white text-lg border border-white px-4 py-2 rounded hover:bg-white hover:text-gray-800 transition"
              onClick={() => setMenuOpen(false)}
            >
              Close Menu
            </button>
          </div>
        )}
      </header>
    </animated.div>
  );
}

export default Navbar;
