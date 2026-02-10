import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import "./ThankYou.css";

const ThankYou = () => {
  return (
    <div className="thank-you-page">
      <Header />

      <main className="thank-you-container">
        <section className="thank-you-content">
          <div className="status-icon">
            <svg width="64" height="64" viewBox="0 0 64 64" fill="none">
              <circle cx="32" cy="32" r="31" stroke="#1a1a1a" strokeWidth="2" />
              <path
                d="M20 32L28 40L44 24"
                stroke="#1a1a1a"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>

          <h1 className="thank-you-title">Thank you for your order</h1>
          <p className="thank-you-message">
            Your order has been received and is being processed. We'll send you
            a confirmation email with tracking details shortly.
          </p>

          <div className="order-details-brief">
            <p>
              Order Number: <strong>#VLN-77429</strong>
            </p>
          </div>

          <div className="thank-you-actions">
            <Link to="/" className="continue-shopping-btn">
              Continue Shopping
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default ThankYou;
