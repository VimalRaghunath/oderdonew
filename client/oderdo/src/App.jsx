import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./OderdoHome/Home";
import 'flowbite';


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
