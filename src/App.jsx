import { HomePage } from "./pages/HomePage.jsx";
import { Routes, Route } from "react-router-dom";
import { WomenPage } from "./pages/WomenPage.jsx";
import { Login } from "./pages/Login.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";
import { Register } from "./pages/Register.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
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
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
      </Routes>
    </>
  );
}

export default App;
