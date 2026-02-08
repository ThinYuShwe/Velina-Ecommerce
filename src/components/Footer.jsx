import "./Footer.css";
import "../index.css";
import rightArrow from "../assets/HomePage/right-arrow-white.png";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        {/* Newsletter */}
        <section className="footer-newsletter">
          <p className="footer-newsletter-text">
            Subscribe to our mailing list & earn 20% off code to your inbox
          </p>

          <form className="footer-newsletter-form">
            <input
              type="email"
              placeholder="Your email address"
              className="footer-newsletter-input"
            />
            <button type="submit" className="footer-newsletter-btn">
              <img
                src={rightArrow}
                alt=""
                aria-hidden="true"
                className="footer-newsletter-icon"
              />
            </button>
          </form>

          <p className="footer-newsletter-subtext">
            By joining our email list, you're saying yes to style updates, cozy
            vibes, and thoughtful emails. We'll always treat your info with
            care.
          </p>
        </section>

        {/* Footer Links */}
        <nav className="footer-links">
          <div className="footer-links-left">
            <div className="footer-links-group">
              <h3 className="footer-links-title">Products</h3>
              <nav className="footer-links-list">
                <Link to="/women">Women</Link>
                <Link to="/men">Men</Link>
                <Link to="/">Collections</Link>
                <Link to="/women">Categories</Link>
              </nav>
            </div>

            <div className="footer-links-group">
              <h3 className="footer-links-title">Company</h3>
              <ul className="footer-links-list">
                <li>
                  <Link to="/aboutus" className="footer-link">
                    About Us
                  </Link>
                </li>
                <li>Careers</li>
                <li>
                  <Link to="/contact" className="footer-link">
                    Contact Us
                  </Link>
                </li>
                <li>Stores</li>
                <li>
                  <Link to="/journal" className="footer-link">
                    Journal
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-links-right">
            <div className="footer-links-group">
              <h3 className="footer-links-title">Find us on</h3>
              <ul className="footer-links-list">
                <li>Instagram</li>
                <li>Twitter</li>
                <li>Threads</li>
                <li>Etsy</li>
              </ul>
            </div>

            <div className="footer-links-group">
              <h3 className="footer-links-title">Legal</h3>
              <ul className="footer-links-list">
                <li>Terms & Conditions</li>
                <li>Privacy Policy</li>
                <li>Shipping & Return</li>
                <li>404</li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="footer-bottom">
        <p className="footer-brand">Velina</p>
      </div>
    </footer>
  );
}
