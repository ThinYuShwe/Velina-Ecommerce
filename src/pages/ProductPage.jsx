import React, { useState, useMemo, useRef, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import data from "../data.json";
import "./ProductPage.css";
import { useCart } from "../context/CartContext";

const RECOMMENDATION_COUNT = 4;

function imgUrl(path) {
  if (!path) return "";
  return `${import.meta.env.BASE_URL}${path.replace("public/", "")}`;
}

export function ProductPage() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");
  const [showAddedMessage, setShowAddedMessage] = useState(false);
  const messageTimerRef = useRef(null);

  const allProducts = useMemo(
    () => [...data.Men, ...data.Women],
    []
  );
  const product = allProducts.find((p) => p.id === Number(id));

  // Similar items: same gender only (Women id < 100, Men id >= 100), then same category first, exclude current
  const recommendations = useMemo(() => {
    if (!product) return [];
    const currentId = product.id;
    const isWomen = (p) => p.id < 100;
    const sameGender = (p) => isWomen(p) === isWomen(product);
    const sameCategory = (p) => p.category === product.category;

    const pool = allProducts
      .filter((p) => p.id !== currentId && sameGender(p))
      .sort((a, b) => {
        const catA = sameCategory(a) ? 1 : 0;
        const catB = sameCategory(b) ? 1 : 0;
        return catB - catA; 
      });

    return pool.slice(0, RECOMMENDATION_COUNT);
  }, [product, allProducts]);

  useEffect(() => () => {
    if (messageTimerRef.current) clearTimeout(messageTimerRef.current);
  }, []);

  if (!product) {
    return <div className="error-message">Product not found.</div>;
  }

  const handleAddToCart = () => {
    addToCart(product, quantity, selectedSize);
    if (messageTimerRef.current) clearTimeout(messageTimerRef.current);
    setShowAddedMessage(true);
    messageTimerRef.current = setTimeout(() => {
      setShowAddedMessage(false);
      messageTimerRef.current = null;
    }, 3000);
  };

  return (
    <main className="product-page">
      {showAddedMessage && (
        <div className="add-to-cart-message" role="status" aria-live="polite">
          <p className="add-to-cart-message-text">Added to cart!</p>
          <button
            type="button"
            className="add-to-cart-message-close"
            onClick={() => setShowAddedMessage(false)}
            aria-label="Dismiss"
          >
            ×
          </button>
        </div>
      )}
      <Header />
      <div className="product-container">
        <nav className="breadcrumb">
          {product.category} &nbsp; &nbsp; {product.name} &nbsp; &nbsp; SKU-
          {product.id}
        </nav>

        <div className="product-main">
          {/* Left Side: Product Image */}
          <div className="product-image-section">
            <img
              /* This automatically adds /Velina-Ecommerce/ to the front of your path */
              src={`${import.meta.env.BASE_URL}${product.img.replace("public/", "")}`}
              alt={product.name}
              className="main-product-img"
            />
          </div>

          {/* Right Side: Product Details */}
          <div className="product-info-section">
            <div className="title-price-row">
              <h1 className="product-title">{product.name}</h1>
              <div className="price-tag">
                <span className="current-price">{product.price}</span>
              </div>
            </div>

            <p className="product-description">{product.desc}</p>

            {/* Size Selector */}
            <div className="selection-group">
              <h3>Size</h3>
              <div className="size-options">
                {["XS", "S", "M", "L", "XL"].map((size) => (
                  <button
                    key={size}
                    className={`size-btn ${selectedSize === size ? "active" : ""}`}
                    onClick={() => setSelectedSize(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Action Row */}
            <div className="action-row">
              <div className="quantity-selector">
                <button onClick={() => setQuantity(Math.max(1, quantity - 1))}>
                  -
                </button>
                <span>{quantity}</span>
                <button onClick={() => setQuantity(quantity + 1)}>+</button>
              </div>
              <button className="add-to-cart-btn" onClick={handleAddToCart}>
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {recommendations.length > 0 && (
        <section className="recommendation-section" aria-label="You might also like">
          <h2 className="recommendation-heading">You might also like</h2>
          <div className="recommendation-product-grid">
            {recommendations.map((rec, index) => (
              <article key={rec.id} className="recommendation-product-card">
                <figure className="recommendation-product-image-wrapper">
                  <Link to={`/product/${rec.id}`}>
                    <img
                      src={imgUrl(rec.img)}
                      alt={rec.name}
                      className="recommendation-product-image"
                    />
                  </Link>
                  {index === 0 && (
                    <figcaption className="recommendation-product-stock">
                      New Arrival
                    </figcaption>
                  )}
                </figure>
                <div className="recommendation-product-info">
                  <p className="recommendation-product-name">{rec.name}</p>
                  <p className="recommendation-product-price">{rec.price}</p>
                </div>
              </article>
            ))}
          </div>
        </section>
      )}
      <Footer />
    </main>
  );
}
