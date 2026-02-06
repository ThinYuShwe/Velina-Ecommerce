import React, { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

function parsePrice(priceStr) {
  if (typeof priceStr === "number") return priceStr;
  const num = parseFloat(String(priceStr).replace(/[^0-9.]/g, ""));
  return isNaN(num) ? 0 : num;
}

export function CartProvider({ children }) {
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product, quantity = 1, size = "S") => {
    const numericPrice = parsePrice(product.price);
    setCartItems((prev) => {
      const existing = prev.find(
        (item) => item.id === product.id && item.size === size
      );
      if (existing) {
        return prev.map((item) =>
          item.id === product.id && item.size === size
            ? { ...item, quantity: item.quantity + quantity }
            : item
        );
      }
      return [
        ...prev,
        {
          id: product.id,
          name: product.name,
          img: product.img,
          size,
          quantity,
          numericPrice,
        },
      ];
    });
  };

  const updateQuantity = (id, size, delta) => {
    setCartItems((prev) =>
      prev
        .map((item) => {
          if (item.id !== id || item.size !== size) return item;
          const newQty = Math.max(0, item.quantity + delta);
          return newQty === 0 ? null : { ...item, quantity: newQty };
        })
        .filter(Boolean)
    );
  };

  const removeItem = (id, size) => {
    setCartItems((prev) =>
      prev.filter((item) => !(item.id === id && item.size === size))
    );
  };

  return (
    <CartContext.Provider
      value={{ cartItems, addToCart, updateQuantity, removeItem }}
    >
      {children}
    </CartContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components -- hook belongs with this context
export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return ctx;
}
