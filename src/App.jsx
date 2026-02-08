import { HomePage } from "./pages/HomePage.jsx";
// import { Routes, Route } from "react-router-dom";
import { WomenPage } from "./pages/WomenPage.jsx";
import { MenPage } from "./pages/MenPage.jsx";
import { Login } from "./pages/Login.jsx";
import { ProductPage } from "./pages/ProductPage.jsx";
import { Register } from "./pages/Register.jsx";
import { CartPage } from "./pages/CartPage.jsx";
import ContactPage from "./pages/ContactPage.jsx";
import AboutUsPage from "./pages/AboutUsPage.jsx";
import JournalPage from "./pages/JournalPage.jsx";
import JournalDetail from "./pages/JournalDetail.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/women" element={<WomenPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/product/:id" element={<ProductPage />} />
        <Route path="/register" element={<Register />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutus" element={<AboutUsPage />} />
        <Route path="/journal" element={<JournalPage />} />
        <Route path="/journalDetail/:id" element={<JournalDetail />} />
        <Route path="/men" element={<MenPage />} />
      </Routes>
    </>
  );
}

export default App;
