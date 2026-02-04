import { HomePage } from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import { WomenPage } from "./pages/WomenPage.jsx";

import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
      </Routes>
    </>
  );
}

export default App;
