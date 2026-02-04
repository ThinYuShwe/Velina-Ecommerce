import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import HomePageBg from "../assets/HomePage/HomePageBg.mp4";
import { Link } from "react-router-dom";
import "../index.css";
import "./HomePage.css";
import Features from "../components/Features.jsx";
import { useNavigate } from "react-router-dom";
import rightArrow from "../assets/Homepage/right-arrow.png";
import rightArrowWhite from "../assets/Homepage/right-arrow-white.png";
import homePageImg1 from "../assets/HomePage/homePageImg1.avif";
import homePageImg2 from "../assets/HomePage/homePageImg2.avif";
import homePageImg3 from "../assets/HomePage/homePageImg3.avif";
import homePageImg4 from "../assets/HomePage/homePageImg4.avif";
import girlImg1 from "../assets/HomePage/girlImg1.avif";
import homePageImg5 from "../assets/HomePage/homePageImg5.avif";
import homePageImg6 from "../assets/HomePage/homePageImg6.avif";
import homePageImg7 from "../assets/HomePage/homePageImg7.avif";
import homePageImg8 from "../assets/HomePage/homePageImg8.avif";
import girlImgNoBg from "../assets/HomePage/girlImgNoBg.png";
import homePageImg9 from "../assets/HomePage/homePageImg9.avif";
import homePageImg10 from "../assets/HomePage/homePageImg10.avif";
import homePageImg11 from "../assets/HomePage/homePageImg11.avif";
import homePageImg12 from "../assets/HomePage/homePageImg12.avif";

export function HomePage() {
  const navigate = useNavigate();
  return (
    <main className="home-page">
      <Header />
      <section className="home-page-hero">
        <video
          src={HomePageBg}
          className="homePageBg-video"
          autoPlay
          loop
          muted
          playsInline
        />
        <div className="home-intro">
          <div className="home-intro-title-gp">
            <p className="home-intro-subtitle">Effortless Style,</p>
            <p className="home-intro-title">Thoughtfully Made</p>
          </div>
          <p className="home-intro-description">
            Modern essentials in soft tones and timeless cuts — designed to feel
            good and look even better.
          </p>

          <div className="home-intro-actions">
            <button
              className="shop-btn shop-btn-women"
              onClick={() => navigate("/women")}
            >
              <span className="shop-btn-text">Shop Women</span>
              <img
                src={rightArrowWhite}
                alt="right arrow"
                aria-hidden="true"
                className="shop-btn-icon"
              />
            </button>

            <button className="shop-btn shop-btn-men">
              <span className="shop-btn-text">Shop Men</span>
              <img
                src={rightArrow}
                alt=""
                aria-hidden="true"
                className="shop-btn-icon"
              />
            </button>
          </div>
        </div>
      </section>
      <div className="section-collection">
        <section className="product-section" aria-label="Featured Products">
          <div className="product-section-header">
            <h1>Pastel Dreams</h1>
            <p>Soft hues, bold styles — embrace the pastel aesthetic.</p>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <figure className="product-image-wrapper">
                <Link>
                  <img
                    src={homePageImg1}
                    alt="Coral Curve Skirt"
                    className="product-image"
                  />
                </Link>
                <figcaption className="product-stock">Out of Stock</figcaption>
              </figure>
              <div className="product-info">
                <p className="product-name">Coral Curve Skirt</p>
                <p className="product-price">$85.00</p>
              </div>
            </article>

            <article className="product-card">
              <figure className="product-image-wrapper">
                <Link>
                  <img
                    src={homePageImg2}
                    alt="Mist Ruffle Top"
                    className="product-image"
                  />
                </Link>
                <figcaption className="product-stock">Out of Stock</figcaption>
              </figure>
              <div className="product-info">
                <p className="product-name">Mist Ruffle Top</p>
                <p className="product-price">$113</p>
              </div>
            </article>

            <article className="product-card">
              <figure className="product-image-wrapper">
                <Link>
                  <img
                    src={homePageImg3}
                    alt="Willow Kint Top"
                    className="product-image"
                  />
                </Link>
                <figcaption className="product-stock">Out of Stock</figcaption>
              </figure>
              <div className="product-info">
                <p className="product-name">Willow Kint Top</p>
                <p className="product-price">$95</p>
              </div>
            </article>

            <article className="product-card">
              <figure className="product-image-wrapper">
                <Link>
                  <img
                    src={homePageImg4}
                    alt="Midnight Hoodie"
                    className="product-image"
                  />
                </Link>
                <figcaption className="product-stock">Out of Stock</figcaption>
              </figure>
              <div className="product-info">
                <p className="product-name">Midnight Hoodie</p>
                <p className="product-price">$97</p>
              </div>
            </article>
          </div>

          <button className="view-all-btn">
            <span>View All</span>
            <img
              src={rightArrow}
              alt=""
              aria-hidden="true"
              className="view-all-icon"
            />
          </button>
        </section>

        <article className="feature-article">
          <div className="feature-text">
            <h2 className="feature-title">A softer take on style.</h2>
            <p className="feature-description">
              We’re here for effortless fashion that fits your mood — light,
              calm, and just a little playful. Inspired by pastel palettes,
              natural textures, and the kind of pieces you’ll reach for every
              day.
            </p>
          </div>
          <div className="feature-image-wrapper">
            <img
              src={girlImg1}
              alt="Girl in pastel outfit"
              className="feature-image"
            />
          </div>
        </article>

        <section className="product-section" aria-label="Featured Products">
          <div className="product-section-header">
            <h2 className="product-section-title">Summer 2025</h2>
            <p>Your go-to picks for a sun-soaked season.</p>
          </div>
          <div className="product-grid">
            <article className="product-card">
              <figure className="product-image-wrapper">
                <Link>
                  <img
                    src={homePageImg5}
                    alt="Coral Curve Skirt"
                    className="product-image"
                  />
                </Link>
                <figcaption className="product-stock">Out of Stock</figcaption>
              </figure>
              <div className="product-info">
                <p className="product-name">Coral Curve Skirt</p>
                <p className="product-price">$85.00</p>
              </div>
            </article>

            <article className="product-card">
              <figure className="product-image-wrapper">
                <Link>
                  <img
                    src={homePageImg6}
                    alt="Mist Ruffle Top"
                    className="product-image"
                  />
                </Link>
                <figcaption className="product-stock">Out of Stock</figcaption>
              </figure>
              <div className="product-info">
                <p className="product-name">Mist Ruffle Top</p>
                <p className="product-price">$113</p>
              </div>
            </article>

            <article className="product-card">
              <figure className="product-image-wrapper">
                <Link>
                  <img
                    src={homePageImg7}
                    alt="Willow Kint Top"
                    className="product-image"
                  />
                </Link>
                <figcaption className="product-stock">Out of Stock</figcaption>
              </figure>
              <div className="product-info">
                <p className="product-name">Willow Kint Top</p>
                <p className="product-price">$95</p>
              </div>
            </article>

            <article className="product-card">
              <figure className="product-image-wrapper">
                <Link>
                  <img
                    src={homePageImg8}
                    alt="Midnight Hoodie"
                    className="product-image"
                  />
                </Link>
                <figcaption className="product-stock">Out of Stock</figcaption>
              </figure>
              <div className="product-info">
                <p className="product-name">Midnight Hoodie</p>
                <p className="product-price">$97</p>
              </div>
            </article>
          </div>

          <button className="view-all-btn">
            <span>View All</span>
            <img
              src={rightArrow}
              alt=""
              aria-hidden="true"
              className="view-all-icon"
            />
          </button>
        </section>

        <article className="collection-article">
          <div className="collection-content">
            <h3 className="collection-season">Summer 2025</h3>
            <p className="collection-description">
              Effortless fashion for every mood — light, calm, and a little
              playful. Inspired by pastels, natural textures, and everyday
              essentials.
            </p>
            <button className="collection-btn">
              <span className="collection-btn-text">Explore Collection</span>
              <img
                src={rightArrowWhite}
                alt=""
                aria-hidden="true"
                className="collection-btn-icon"
              />
            </button>
          </div>

          <div className="collection-image-wrapper">
            <img
              src={girlImgNoBg}
              alt="Girl in pastel outfit"
              className="collection-image"
            />
          </div>
        </article>

        <section className="pastel-section" aria-label="Featured Products">
          <header className="pastel-section-header">
            <h1 className="pastel-section-title">Pastel Dreams</h1>
            <p className="pastel-section-subtitle">
              Soft hues, bold styles — embrace the pastel aesthetic.
            </p>
          </header>

          <div className="pastel-product-row">
            <article className="pastel-product-card">
              <figure className="pastel-product-media">
                <img
                  src={homePageImg9}
                  alt="Coral Curve Skirt"
                  className="pastel-product-image"
                />
                <figcaption className="pastel-product-badge blage-1">
                  <p className="pastel-product-title">Outwear</p>
                  <p className="pastel-product-color-theme">
                    Light, flowy, easy
                  </p>
                  <button className="pastel-view-all-btn">
                    <span className="pastel-view-all-text">Shop Now</span>
                    <img
                      src={rightArrowWhite}
                      alt=""
                      aria-hidden="true"
                      className="pastel-view-all-icon"
                    />
                  </button>
                </figcaption>
              </figure>
            </article>
            <article className="pastel-product-card">
              <figure className="pastel-product-media">
                <Link>
                  <img
                    src={homePageImg10}
                    alt="Coral Curve Skirt"
                    className="pastel-product-image"
                  />
                </Link>
                <figcaption className="pastel-product-badge badge-2">
                  <p className="pastel-product-title">Outwear</p>
                  <p className="pastel-product-color-theme">
                    Light, flowy, easy
                  </p>
                  <button className="pastel-view-all-btn">
                    <span className="pastel-view-all-text">Shop Now</span>
                    <img
                      src={rightArrowWhite}
                      alt=""
                      aria-hidden="true"
                      className="pastel-view-all-icon"
                    />
                  </button>
                </figcaption>
              </figure>
            </article>
            <article className="pastel-product-card">
              <figure className="pastel-product-media">
                <Link>
                  <img
                    src={homePageImg11}
                    alt="Coral Curve Skirt"
                    className="pastel-product-image"
                  />
                </Link>
                <figcaption className="pastel-product-badge badge-3">
                  <p className="pastel-product-title">Outwear</p>
                  <p className="pastel-product-color-theme">
                    Light, flowy, easy
                  </p>
                  <button className="pastel-view-all-btn">
                    <span className="pastel-view-all-text">Shop Now</span>
                    <img
                      src={rightArrowWhite}
                      alt=""
                      aria-hidden="true"
                      className="pastel-view-all-icon"
                    />
                  </button>
                </figcaption>
              </figure>
            </article>
            <article className="pastel-product-card">
              <figure className="pastel-product-media">
                <Link>
                  <img
                    src={homePageImg12}
                    alt="Coral Curve Skirt"
                    className="pastel-product-image"
                  />
                </Link>
                <figcaption className="pastel-product-badge badge-4">
                  <p className="pastel-product-title">Outwear</p>
                  <p className="pastel-product-color-theme">
                    Light, flowy, easy
                  </p>
                  <button className="pastel-view-all-btn">
                    <span className="pastel-view-all-text">Shop Now</span>
                    <img
                      src={rightArrowWhite}
                      alt=""
                      aria-hidden="true"
                      className="pastel-view-all-icon"
                    />
                  </button>
                </figcaption>
              </figure>
            </article>
          </div>
        </section>
      </div>
      <Features />
      <Footer />
    </main>
  );
}
