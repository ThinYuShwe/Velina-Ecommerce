import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { useParams } from "react-router-dom"; // Import this to get the ID from the URL
import data from "../data.json"; // Import your JSON data
import "./ProductPage.css";

export function ProductPage() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  // Combine Men and Women arrays to search for the product
  const allProducts = [...data.Men, ...data.Women];

  // Find the product that matches the ID from the URL
  // We use Number(id) because params are strings, but IDs in JSON are numbers
  const product = allProducts.find((p) => p.id === Number(id));

  // If the product hasn't been found yet, show a loading state or error
  if (!product) {
    return <div className="error-message">Product not found.</div>;
  }

  return (
    <main className="product-page">
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

              <button className="add-to-cart-btn">Add to Cart</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </main>
  );
}
