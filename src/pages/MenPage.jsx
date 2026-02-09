import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import Features from "../components/Features.jsx";

// Import your centralized data
import data from "../data.json";

import "./MenPage.css";

const PRICE_RANGES = [
  { id: "price1", label: "$10 - $100", min: 10, max: 100 },
  { id: "price2", label: "$100 - $200", min: 100, max: 200 },
  { id: "price3", label: "$200 - $300", min: 200, max: 300 },
];

export function MenPage() {
  const allProducts = data.Men;
  const journals = data.journals;

  const parsePrice = (priceStr) => {
    if (typeof priceStr === "number") return priceStr;
    const num = parseFloat(String(priceStr).replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  const categories = useMemo(() => {
    const set = new Set(allProducts.map((p) => p.category));
    return Array.from(set).sort();
  }, [allProducts]);

  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedPriceRanges, setSelectedPriceRanges] = useState([]);

  const toggleCategory = (category) => {
    setSelectedCategories((prev) =>
      prev.includes(category)
        ? prev.filter((c) => c !== category)
        : [...prev, category]
    );
  };

  const togglePriceRange = (rangeId) => {
    setSelectedPriceRanges((prev) =>
      prev.includes(rangeId)
        ? prev.filter((id) => id !== rangeId)
        : [...prev, rangeId]
    );
  };

  const products = useMemo(() => {
    let list =
      selectedCategories.length === 0
        ? allProducts
        : allProducts.filter((p) => selectedCategories.includes(p.category));

    if (selectedPriceRanges.length === 0) return list;

    const ranges = selectedPriceRanges.map((id) =>
      PRICE_RANGES.find((r) => r.id === id)
    ).filter(Boolean);
    return list.filter((p) => {
      const price = parsePrice(p.price);
      return ranges.some((r) => price >= r.min && price <= r.max);
    });
  }, [allProducts, selectedCategories, selectedPriceRanges]);

  return (
    <main className="men-page-container">
      <Header />

      <div className="men-content-wrapper">
        {/* SIDEBAR FILTERS */}
        <aside className="men-sidebar">
          <div className="filter-group">
            <h3 className="filter-heading">Category</h3>
            {categories.map((category) => (
              <div key={category} className="filter-item">
                <input
                  type="checkbox"
                  id={`cat-${category}`}
                  checked={selectedCategories.includes(category)}
                  onChange={() => toggleCategory(category)}
                />
                <label htmlFor={`cat-${category}`}>{category}</label>
              </div>
            ))}
          </div>

          <div className="filter-group">
            <h3 className="filter-heading">Price Range</h3>
            {PRICE_RANGES.map((range) => (
              <div key={range.id} className="filter-item">
                <input
                  type="checkbox"
                  id={range.id}
                  checked={selectedPriceRanges.includes(range.id)}
                  onChange={() => togglePriceRange(range.id)}
                />
                <label htmlFor={range.id}>{range.label}</label>
              </div>
            ))}
          </div>
        </aside>

        {/* MAIN PRODUCT SECTION */}
        <section className="men-main-content">
          <header className="men-grid-header">
            <h1 className="collection-title">Men's Collection</h1>
            <p className="product-count">{products.length} Products Found</p>
          </header>

          <div className="men-product-grid">
            {products.length === 0 ? (
              <p className="men-no-products">No products match the selected filters.</p>
            ) : (
            products.map((product) => (
              <article key={product.id} className="men-product-card">
                <div className="men-product-image-container">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={`${import.meta.env.BASE_URL}${(product.img || "").replace("public/", "")}`}
                      alt={product.name}
                    />
                  </Link>
                </div>
                <div className="men-product-details">
                  <h4 className="men-product-title">{product.name}</h4>
                  <p className="men-product-desc">{product.desc}</p>
                  <span className="men-product-price">{product.price}</span>
                </div>
              </article>
            ))
            )}
          </div>
        </section>

        <section className="journal-sidebar-grid">
          <h2 className="side-journal-title">From the Journal</h2>
          {journals &&
            journals.slice(0, 3).map((journal) => (
              <Link
                key={journal.id}
                to={`/journalDetail/${journal.id}`}
                className="side-journal-card-mini"
              >
                <div className="side-journal-image-container">
                  <img
                    src={`${import.meta.env.BASE_URL}${(journal.image || "").replace("public/", "")}`}
                    alt={journal.title}
                  />
                </div>
                <div className="side-journal-info">
                  <h3 className="side-journal-card-title">{journal.title}</h3>
                </div>
              </Link>
            ))}
        </section>
      </div>

      <Features />
      <Footer />
    </main>
  );
}
