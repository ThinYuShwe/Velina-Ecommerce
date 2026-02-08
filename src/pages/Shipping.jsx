import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import "./Shipping.css"; // Reuse the base Shipping styles

const Shipping = () => {
  return (
    <div className="Shipping-page shipping">
      <Header />

      {/* Editorial Header Section */}
      <section className="shipping-header-section">
        <div className="shipping-header-content">
          <h1 className="Shipping-title">Shipping & Returns</h1>
          <p className="Shipping-subtitle">
            At Velina Online Shop, enjoy reliable shipping and easy returns.
            We're committed to a smooth shopping experience.
          </p>
        </div>
      </section>

      {/* Main Content Body */}
      <main className="Shipping-body">
        <aside className="Shipping-sidebar">
          <nav className="Shipping-nav">
            <Link to="/privacy" className="Shipping-nav-link">
              Privacy Policy
            </Link>
            <Link to="/shipping" className="Shipping-nav-link active">
              Shipping & Returns
            </Link>
            <Link to="/terms" className="Shipping-nav-link">
              Terms & Conditions
            </Link>
          </nav>
        </aside>

        <article className="Shipping-text-content">
          <section className="Shipping-section">
            <h2>Shipping:</h2>
            <p>
              We offer a variety of shipping options to ensure your order
              reaches you as quickly and conveniently as possible. Shipping
              charges are calculated based on the weight and destination of your
              order, and you can select your preferred shipping method during
              checkout.
            </p>
            <p>
              We aim to process and ship your order within 3-5 business days.
              Once your order is shipped, you will receive a confirmation email
              with tracking details. Please note that delivery times may vary
              depending on your location and the shipping service selected.
            </p>
            <p>
              If your order is lost or damaged in transit, please contact our
              customer service team immediately. We will work with the shipping
              carrier to resolve the issue and ensure you receive your items
              promptly.
            </p>
          </section>

          <section className="Shipping-section">
            <h2>Returns:</h2>
            <p>
              At Velaa Online Shop, we want you to be completely satisfied with
              your purchase. If for any reason you are not happy with your
              order, you may return items within 30 days of delivery.
            </p>
            <ul>
              <li>Items must be in original condition with tags attached.</li>
              <li>
                Returns are processed within 7-10 business days of receipt.
              </li>
              <li>Refunds are issued to the original payment method.</li>
            </ul>
          </section>
        </article>
      </main>

      <Footer />
    </div>
  );
};

export default Shipping;
