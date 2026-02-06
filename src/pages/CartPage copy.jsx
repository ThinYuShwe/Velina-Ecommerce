import React, { useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Trash2, Plus, Minus } from "lucide-react";
import "./CartPage.css";
import "../index.css";
import Features from "../components/Features.jsx";
// Mock data based on your assets
import productImg1 from "../assets/HomePage/homePageImg1.avif";
import productImg2 from "../assets/HomePage/homePageImg7.avif";

export function CartPage() {
  const [cartItems, setCartItems] = useState([
    {
      id: 1,
      name: "Coral Curve Skirt",
      color: "Coral",
      price: 85.0,
      quantity: 1,
      img: productImg1,
    },
    {
      id: 2,
      name: "Mist Ruffle Top",
      color: "White",
      price: 113.0,
      quantity: 1,
      img: productImg2,
    },
  ]);

  const updateQuantity = (id, delta) => {
    setCartItems((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, quantity: Math.max(1, item.quantity + delta) }
          : item,
      ),
    );
  };

  const removeItem = (id) => {
    setCartItems((prev) => prev.filter((item) => item.id !== id));
  };

  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0,
  );
  const deliveryFee = 50.0;

  return (
    <main className="cart-page-container">
      <Header />

      <div className="cart-content-wrapper">
        <h1 className="cart-title">Shopping Cart</h1>

        <div className="cart-grid">
          {/* Left Side: Product List */}
          <section className="cart-items-section">
            <div className="cart-table-header">
              <span>Product</span>
              <span>Quantity</span>
              <span>Total</span>
              <span>Action</span>
            </div>

            {cartItems.map((item) => (
              <div key={item.id} className="cart-item-row">
                <div className="item-info">
                  <img src={item.img} alt={item.name} className="item-img" />
                  <div>
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-meta">Color: {item.color}</p>
                    <p className="item-price-mobile">
                      ${item.price.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="item-quantity">
                  <button
                    onClick={() => updateQuantity(item.id, -1)}
                    className="qty-btn"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-num">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, 1)}
                    className="qty-btn"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="item-total">
                  ${(item.price * item.quantity).toFixed(2)}
                </div>

                <div className="item-action">
                  <button
                    onClick={() => removeItem(item.id)}
                    className="remove-btn"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}

            {cartItems.length === 0 && (
              <p className="empty-msg">Your cart is empty.</p>
            )}
          </section>

          {/* Right Side: Summary */}
          <aside className="cart-summary-section">
            <div className="summary-card">
              <h3 className="summary-card-title">Order Summary</h3>
              <div className="promo-box">
                <input type="text" placeholder="Discount voucher" />
                <button className="apply-btn">Apply</button>
              </div>

              <div className="summary-row">
                <span>Sub Total</span>
                <span>${subtotal.toFixed(2)} USD</span>
              </div>
              <div className="summary-row">
                <span>Delivery fee</span>
                <span>${deliveryFee.toFixed(2)} USD</span>
              </div>
              <hr />
              <div className="summary-row total">
                <span>Total</span>
                <span>${(subtotal + deliveryFee).toFixed(2)} USD</span>
              </div>

              <button className="checkout-btn">Checkout Now</button>
            </div>
          </aside>
        </div>
      </div>

      <Features />
      <Footer />
    </main>
  );
}
