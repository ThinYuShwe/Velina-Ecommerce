import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";

import "./HomePage.css";
import "../index.css";
import "./WomenPage.css";

import homePageImg1 from "../assets/HomePage/homePageImg1.avif";
import homePageImg2 from "../assets/HomePage/homePageImg2.avif";
import homePageImg3 from "../assets/HomePage/homePageImg3.avif";
import homePageImg4 from "../assets/HomePage/homePageImg4.avif";
import homePageImg5 from "../assets/HomePage/homePageImg5.avif";
import homePageImg6 from "../assets/HomePage/homePageImg6.avif";

export function WomenPage() {
  return (
    <main className="women-page">
      <Header />
    
      <section className="women-page-header">
        <h1 className="women-page-title">Women's Clothing</h1>
        <section className="women-section-collections">
          <section className="women-page-filters">
            <div className="women-categories">
              <h2 className="filter-title">Categories</h2>
              <div className="filter-options">
                <input type="checkbox" name="category" id="category1" />
                <label htmlFor="category1">Dresses</label>

                <input type="checkbox" name="category" id="category2" />
                <label htmlFor="category2">Tops</label>

                <input type="checkbox" name="category" id="category3" />
                <label htmlFor="category3">Bottoms</label>
              </div>
            </div>
            <div className="women-price">
              <h2 className="filter-title">Price Range</h2>
              <div className="filter-options">
                <input type="checkbox" name="price" id="price1" />
                <label htmlFor="price1">Under $25</label>

                <input type="checkbox" name="price" id="price2" />
                <label htmlFor="price2">$25 - $50</label>

                <input type="checkbox" name="price" id="price3" />
                <label htmlFor="price3">$50+</label>
              </div>
            </div>
          </section>
          <section className="women-product-section">
            <div className="women-product-grid">
              {[
                {
                  img: homePageImg1,
                  name: "Coral Curve Skirt",
                  price: "$85.00",
                  to: "/product/coral-curve-skirt",
                },
                {
                  img: homePageImg2,
                  name: "Mist Ruffle Top",
                  price: "$113",
                  to: "/product/mist-ruffle-top",
                },
                {
                  img: homePageImg3,
                  name: "Willow Kint Top",
                  price: "$95",
                  to: "/product/willow-kint-top",
                },
                {
                  img: homePageImg4,
                  name: "Midnight Hoodie",
                  price: "$97",
                  to: "/product/midnight-hoodie",
                },
                {
                  img: homePageImg5,
                  name: "Willow Kint Top",
                  price: "$95",
                  to: "/product/willow-kint-top-2",
                },
                {
                  img: homePageImg6,
                  name: "Midnight Hoodie",
                  price: "$97",
                  to: "/product/midnight-hoodie-2",
                },
              ].map((product, index) => (
                <article key={index} className="women-product-card">
                  <figure className="women-product-image-wrapper">
                    <Link to={product.to}>
                      <img
                        src={product.img}
                        alt={product.name}
                        className="women-product-image"
                      />
                    </Link>
                  </figure>
                  <div className="women-product-info">
                    <p className="women-product-name">{product.name}</p>
                    <p className="women-product-price">{product.price}</p>
                  </div>
                </article>
              ))}
            </div>
          </section>
          <section className="women-page-articles">
            
          </section>
        </section>
      </section>

      <Footer />
    </main>
  );
}
