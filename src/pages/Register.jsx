import React from "react";
import "./Register.css";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import registerBg from "../assets/HomePage/homePageImg8.avif"; // Replace with your image path

export function Register() {
  return (
    <main className="register-page">
      <Header />
      <div className="register-container">
        <div className="register-content">
          {/* Left Side: Form */}
          <div className="register-form-section">
            <div className="form-header">
              <h2>Register</h2>
              <p>
                Lorem ipsum dolor sit amet elit. Sapiente sit aut eos
                consectetur adipisicing.
              </p>
            </div>

            <form className="register-form">
              <div className="input-group">
                <input type="email" placeholder="Email" required />
              </div>
              <div className="input-group">
                <input type="password" placeholder="Password" required />
              </div>
              <div className="input-group">
                <input
                  type="password"
                  placeholder="Re-type Password"
                  required
                />
              </div>

              <div className="terms-checkbox">
                <input type="checkbox" id="terms" required />
                <label htmlFor="terms">
                  Agree our <a href="#">Terms and Conditions</a>
                </label>
              </div>

              <button type="submit" className="btn-register">
                Register
              </button>

              <div className="divider">
                <span>— or —</span>
              </div>

              <div className="social-logins">
                <button type="button" className="social-btn facebook">
                  <i className="fa fa-facebook"></i> Register with Facebook
                </button>
                <button type="button" className="social-btn twitter">
                  <i className="fa fa-twitter"></i> Register with Twitter
                </button>
                <button type="button" className="social-btn google">
                  <i className="fa fa-google"></i> Register with Google
                </button>
              </div>
            </form>
          </div>

          {/* Right Side: Image */}
          <div className="register-image-section">
            <img src={registerBg} alt="Register Hero" />
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
