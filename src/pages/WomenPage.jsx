import React, { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import Features from "../components/Features.jsx";

// Import your centralized data
import data from "../data.json";

import "./WomenPage.css";

const PRICE_RANGES = [
  { id: "price1", label: "$10 - $100", min: 10, max: 100 },
  { id: "price2", label: "$100 - $200", min: 100, max: 200 },
  { id: "price3", label: "$200 - $300", min: 200, max: 300 },
];

export function WomenPage() {
  const allProducts = data.Women;
  const journals = data.journals;

  // Parse price string (e.g. "$45.00") to number
  const parsePrice = (priceStr) => {
    if (typeof priceStr === "number") return priceStr;
    const num = parseFloat(String(priceStr).replace(/[^0-9.]/g, ""));
    return isNaN(num) ? 0 : num;
  };

  // Get unique categories from women's products (sorted)
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

  // Filter: first by category, then by price range
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
    <main className="women-page-container">
      <Header />

      <div className="women-content-wrapper">
        {/* SIDEBAR FILTERS */}
        <aside className="women-sidebar">
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
        <section className="women-main-content">
          <header className="women-grid-header">
            <h1 className="collection-title">Women's Collection</h1>
            <p className="product-count">{products.length} Products Found</p>
          </header>

          <div className="women-product-grid">
            {products.length === 0 ? (
              <p className="women-no-products">No products match the selected filters.</p>
            ) : (
            products.map((product) => (
              <article key={product.id} className="women-product-card">
                <div className="women-product-image-container">
                  <Link to={`/product/${product.id}`}>
                    <img
                      src={`${import.meta.env.BASE_URL}${(product.img || "").replace("public/", "")}`}
                      alt={product.name}
                    />
                  </Link>
                </div>
                <div className="women-product-details">
                  <h4 className="women-product-title">{product.name}</h4>
                  <p className="women-product-desc">{product.desc}</p>
                  <span className="women-product-price">{product.price}</span>
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
