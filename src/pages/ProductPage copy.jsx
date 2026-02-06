import React, { useState } from "react";
import "./ProductPage.css";
import productImg from "../assets/HomePage/homePageImg2.avif";

export function ProductPage() {
  const [quantity, setQuantity] = useState(1);
  const [selectedSize, setSelectedSize] = useState("S");

  return (
    <div className="product-container">
      {/* Breadcrumbs */}
      <nav className="breadcrumb">
        Women &nbsp; &nbsp; Outwear &nbsp; &nbsp; SKU-001
      </nav>

      <div className="product-main">
        {/* Left Side: Product Image */}
        <div className="product-image-section">
          <img
            src={productImg}
            alt="Serene Flow Dress"
            className="main-product-img"
          />
        </div>

        {/* Right Side: Product Details */}
        <div className="product-info-section">
          <div className="title-price-row">
            <h1 className="product-title">Serene Flow Dress</h1>
            <div className="price-tag">
              <span className="current-price">$93</span>
              <span className="old-price">$120</span>
            </div>
          </div>

          <p className="product-description">
            Dresses in blue shade. Designed for everyday style. Its lightweight
            structure ensures breathability and ease of movement. Made from
            high-quality, sustainable materials, it offers both comfort and
            style.
          </p>

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

          {/* Color Selector */}
          <div className="selection-group">
            <h3>Color</h3>
            <button className="color-btn active">Blue</button>
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
            <span className="stock-status">Out of stock</span>
          </div>
        </div>
      </div>
    </div>
  );
}
