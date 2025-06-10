import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import KirishTesti from './Sections/KirishTesti'
import Bolimlar from "./Sections/Bolimlar";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/kirish/test" element={<KirishTesti />} />
          <Route path="/Bolimlar" element={<Bolimlar />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
