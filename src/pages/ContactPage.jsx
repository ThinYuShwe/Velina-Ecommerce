import React from "react";
import { Mail, Phone, MapPin } from "lucide-react";
import "./ContactPage.css";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const ContactPage = () => {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact-container">
        <header className="contact-header">
          <h1 className="contact-page-header">Contact Us</h1>
          <p>
            Got questions? We'd love to hear from you. Send us a message and
            we'll respond as soon as possible.
          </p>
        </header>

        <div className="contact-grid">
          <section className="contact-form-section">
            <form className="contact-form">
              <div className="form-row">
                <input type="email" placeholder="Email" required />
                <input type="tel" placeholder="Phone" />
              </div>
              <input type="text" placeholder="Name" required />
              <textarea placeholder="Message" rows="6" required></textarea>
              <button type="submit" className="submit-btn">
                Submit Button
              </button>
            </form>
          </section>

          <aside className="newsletter-aside">
            <div className="newsletter-card">
              <h3>Our Newsletters</h3>
              <p>
                Subscribe to get special offers, free giveaways, and
                once-in-a-lifetime deals.
              </p>
              <input type="email" placeholder="Email" />
              <button className="newsletter-btn">Submit Button</button>
            </div>
          </aside>
        </div>

        <div className="info-cards-grid">
          <div className="info-card">
            <div className="info-icon-wrapper">
              <Phone size={24} />
            </div>
            <h4 className="info-icon-wrapper-text">(+876) 765 665</h4>
            <p>Mon - Fri: 9am - 6pm</p>
          </div>
          <div className="info-card">
            <div className="info-icon-wrapper">
              <Mail size={24} />
            </div>
            <h4 className="info-icon-wrapper-text">mail@velina.id</h4>
            <p>Our team usually replies within 24h.</p>
          </div>
          <div className="info-card">
            <div className="info-icon-wrapper">
              <MapPin size={24} />
            </div>
            <h4 className="info-icon-wrapper-text">London Eye, London</h4>
            <p>Visit our flagship store in the heart of the city.</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
