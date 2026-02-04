import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import "../index.css";
// Make sure you create this file or import the login styles here
import "./HomePage.css"; 

export function Login() {
  return (
    <main className="Login-Page">
      <Header />
      
      <Footer />
    </main>
  );
}