import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import "./LegalPage.css";

const LegalPage = () => {
  return (
    <div className="legal-container">
      <Header />

      <main className="legal-main">
        {/* Hero Section */}
        <section className="legal-hero">
          <div className="legal-hero-text">
            <h1>Terms & Conditions</h1>
            <p>
              At Velina Online Shop, embrace clear and fair terms and
              conditions. We're dedicated to a transparent and hassle-free
              shopping journey.
            </p>
          </div>
        </section>

        <div className="legal-content-wrapper">
          {/* Side Navigation */}
          <aside className="legal-sidebar">
            <nav>
              <ul>
                <li>
                  <a href="#privacy">Privacy Policy</a>
                </li>
                <li>
                  <a href="#shipping">Shipping & Returns</a>
                </li>
                <li className="active">
                  <a href="#terms">Terms & Conditions</a>
                </li>
              </ul>
            </nav>
          </aside>

          {/* Main Text Content */}
          <article className="legal-article">
            <section id="introduction">
              <h2>1. Introduction</h2>
              <p>
                Welcome to Velina Online Shop! These Terms and Conditions
                ("Terms") govern your use of our website and any products or
                services we offer. By accessing or using our site, you agree to
                be bound by these Terms.
              </p>
            </section>

            <section id="eligibility">
              <h2>2. Eligibility</h2>
              <p>
                You must be at least 18 years old to use our website and make
                purchases. By using our site, you represent and warrant that you
                meet this age requirement.
              </p>
            </section>

            <section id="registration">
              <h2>3. Account Registration</h2>
              <p>
                To make purchases you may need to create an account with us. You
                agree to provide accurate and complete information and keep your
                credentials secure.
              </p>
            </section>
          </article>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default LegalPage;
