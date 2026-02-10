import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Trash2, Plus, Minus } from "lucide-react";
import "./CartPage.css";
import "../index.css";
import Features from "../components/Features.jsx";
// Mock data based on your assets
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "../context/CartContext";

export function CartPage() {
  const navigate = useNavigate();
  const { cartItems, updateQuantity, removeItem } = useCart();
  const [showEmptyCartMessage, setShowEmptyCartMessage] = useState(false);

  // 3. Keep your subtotal logic (it works the same!)
  const subtotal = cartItems.reduce(
    (acc, item) => acc + item.numericPrice * item.quantity,
    0,
  );
  const deliveryFee = 50.0;
  const totalAmount = subtotal + deliveryFee;

  return (
    <main className="cart-page-container">
      <Header />
      <div className="cart-content-wrapper">
        <h1 className="cart-title">Shopping Cart</h1>
        <div className="cart-grid">
          <section className="cart-items-section">
            {cartItems.length === 0 && (
              <p className="empty-msg">Your cart is empty.</p>
            )}
            {cartItems.map((item) => (
              <div key={`${item.id}-${item.size}`} className="cart-item-row">
                <div className="item-info">
                  {/* Updated Image Path Logic */}
                  <img
                    src={`${import.meta.env.BASE_URL}${item.img.replace("public/", "")}`}
                    alt={item.name}
                    className="item-img"
                  />
                  <div>
                    <h4 className="item-name">{item.name}</h4>
                    <p className="item-meta">Size: {item.size}</p>
                    <p className="item-price-mobile">
                      ${item.numericPrice.toFixed(2)}
                    </p>
                  </div>
                </div>

                <div className="item-quantity">
                  {/* Note: Pass item.size to the functions */}
                  <button
                    onClick={() => updateQuantity(item.id, item.size, -1)}
                    className="qty-btn"
                  >
                    <Minus size={14} />
                  </button>
                  <span className="qty-num">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.size, 1)}
                    className="qty-btn"
                  >
                    <Plus size={14} />
                  </button>
                </div>

                <div className="item-total">
                  ${(item.numericPrice * item.quantity).toFixed(2)}
                </div>

                <div className="item-action">
                  <button
                    onClick={() => removeItem(item.id, item.size)}
                    className="remove-btn"
                  >
                    <Trash2 size={18} />
                  </button>
                </div>
              </div>
            ))}
          </section>

          <aside className="cart-summary-section">
            <div className="summary-card">
              <h3 className="summary-card-title">Order Summary</h3>
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
                <span>${totalAmount.toFixed(2)} USD</span>
              </div>
              <button
                className="checkout-btn"
                onClick={() => {
                  if (cartItems.length === 0) {
                    setShowEmptyCartMessage(true);
                    return;
                  }
                  navigate("/thankyou");
                }}
              >
                Checkout Now
              </button>
            </div>
          </aside>
        </div>
      </div>
      <Features />
      <Footer />

      {showEmptyCartMessage && (
        <div
          className="cart-message-overlay"
          onClick={() => setShowEmptyCartMessage(false)}
          role="presentation"
        >
          <div
            className="cart-message-box"
            onClick={(e) => e.stopPropagation()}
          >
            <p className="cart-message-text">
              Your cart is empty. Please add items before checkout.
            </p>
            <button
              type="button"
              className="cart-message-btn"
              onClick={() => setShowEmptyCartMessage(false)}
            >
              OK
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
