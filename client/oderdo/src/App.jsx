import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./OderdoHome/Home";
import "flowbite";
import OderdoTech from "./OderdoTechnology/OderdoTech";
import OderdoAboutUs from "./OderdoAboutUs/OderdoAboutUs";
import OderdoInvestors from "./OderdoInvestors/OderdoInvestors";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/technology" element={<OderdoTech />} />
        <Route path="/aboutus" element={<OderdoAboutUs />} />
        <Route path="/investors" element={<OderdoInvestors />} />
      </Routes>
      <div className="custom-card mt-5">
        <button className="custom-button">Custom Button</button>
        <div className="w-24 h-24 custom-animation mt-5"></div>
      </div>
    </BrowserRouter>
  );
}

export default App;
