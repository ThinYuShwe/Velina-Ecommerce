import React from 'react';
import './PrivacyPolicy.css';
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";

const PrivacyPolicy = () => {
  return (
    <>
      <Header />
      <div className="privacy-container">
      {/* Hero Section */}
      <section className="privacy-hero">
        <div className="hero-content">
          <h1>Privacy Policy</h1>
          <p>
            At Velaa Online Shop, trust in our robust privacy measures and
            transparent data handling. We're dedicated to safeguarding your
            information.
          </p>
        </div>
        <div className="hero-image-overlay">
          {/* This represents the arm/sleeve image on the right */}
        </div>
      </section>

      {/* Main Content Body */}
      <main className="privacy-main">
        {/* Left Sidebar Navigation */}
        <aside className="privacy-sidebar">
          <ul>
            <li className="active">Privacy Policy</li>
            <li>Shipping & Returns</li>
            <li>Terms & Conditions</li>
          </ul>
        </aside>

        {/* Right Side Content */}
        <article className="privacy-content">
          <p className="intro-text">
            At Velaa Online Shop, we are committed to protecting your privacy and ensuring the
            security of your personal information. This Privacy Policy outlines how we collect, use, and
            safeguard the data you provide when using our website.
          </p>

          <section className="policy-section">
            <h2>1. Information We Collect</h2>
            <p>We may collect various types of information from you, including but not limited to:</p>
            <ul>
              <li>Personal Information: Such as your name, address, email, and phone number.</li>
              <li>Payment Information: Credit/debit card details or other payment methods.</li>
            </ul>
          </section>
        </article>
      </main>
    </div>
      <Footer />
    </>
  );
};

export default PrivacyPolicy;