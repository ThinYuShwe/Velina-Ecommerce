import React from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Features from "../components/Features.jsx";

// Import your centralized data
import data from "../data.json";

import "./WomenPage.css";

export function WomenPage() {
  // Access women's products and articles from JSON
  const products = data.Women;
  const articles = data.articles;

  return (
    <main className="women-page-container">
      <Header />

      <div className="women-content-wrapper">
        {/* SIDEBAR FILTERS */}
        <aside className="women-sidebar">
          <div className="filter-group">
            <h3 className="filter-heading">Brand</h3>
            <div className="filter-item">
              <input type="checkbox" id="velina" />
              <label htmlFor="velina">Velina</label>
            </div>
            <div className="filter-item">
              <input type="checkbox" id="essentials" />
              <label htmlFor="essentials">Essentials</label>
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-heading">Category</h3>
            <div className="filter-item">
              <input type="checkbox" id="dresses" />
              <label htmlFor="dresses">Dresses</label>
            </div>
            <div className="filter-item">
              <input type="checkbox" id="tops" />
              <label htmlFor="tops">Tops</label>
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-heading">Price Range</h3>
            <div className="filter-item">
              <input type="checkbox" id="price1" />
              <label htmlFor="price1">$10 - $100</label>
            </div>
            <div className="filter-item">
              <input type="checkbox" id="price2" />
              <label htmlFor="price2">$100 - $200</label>
            </div>
          </div>
        </aside>

        {/* MAIN PRODUCT SECTION */}
        <section className="women-main-content">
          <header className="women-grid-header">
            <h1 className="collection-title">Women's Collection</h1>
            <p className="product-count">{products.length} Products Found</p>
          </header>

          <div className="women-product-grid">
            {products.map((product) => (
              <article key={product.id} className="women-product-card">
                <div className="women-product-image-container">
                  <Link to={`/product/${product.id}`}>
                    {/* Paths now pull from public folder via JSON */}
                    <img src={product.img} alt={product.name} />
                  </Link>
                </div>
                <div className="women-product-details">
                  <h4 className="women-product-title">{product.name}</h4>
                  <p className="women-product-desc">{product.desc}</p>
                  <span className="women-product-price">{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* JOURNAL SIDEBAR */}
        {/* <section className="journal-sidebar-grid">
          <h2 className="side-journal-title">From the Journal</h2>
          {articles &&
            articles.slice(0, 3).map((article) => (
              <div key={article.id} className="side-journal-card-mini">
                <div className="side-journal-image-container">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="side-journal-info">
                  <h3 className="side-journal-card-title">{article.title}</h3>
                </div>
              </div>
            ))}
        </section> */}
        <section className="journal-sidebar-grid">
          <h2 className="side-journal-title">From the Journal</h2>
          {articles &&
            articles.slice(0, 3).map((article) => (
              <div key={article.id} className="side-journal-card-mini">
                <div className="side-journal-image-container">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="side-journal-info">
                  <h3 className="side-journal-card-title">{article.title}</h3>
                </div>
              </div>
            ))}
        </section>
      </div>

      <Features />
      <Footer />
    </main>
  );
}
