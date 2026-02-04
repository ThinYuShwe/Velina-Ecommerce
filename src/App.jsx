import { HomePage } from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import { WomenPage } from "./pages/WomenPage.jsx";
import { Login } from "./pages/Login.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";
import {Register} from "./pages/Register.jsx";
import "./App.css";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </>
  );
}

export default App;
