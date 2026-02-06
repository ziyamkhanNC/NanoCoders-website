import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import PrivacyPolicy from "./pages/PrivacyPolicy";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home></Home>}></Route>
          <Route
            path="/privacy-policy"
            element={<PrivacyPolicy></PrivacyPolicy>}
          ></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
