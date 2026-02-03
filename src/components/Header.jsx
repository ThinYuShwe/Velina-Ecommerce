import "../index.css";
import "./Header.css";
import hamburger from "../assets/shared/hamburger.png";
import shoppingBag from "../assets/shared/shopping-bag.png";
import closeIcon from "../assets/shared/icon-close.svg";
import user from "../assets/shared/user.png";
import { NavLink } from "react-router-dom";
import { useState } from "react";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-left">
        <button
          className="icon-button"
          onClick={() => setOpen(true)}
        >
          <img src={hamburger} alt="Hamburger Menu" className="hamburger" />
        </button>
        <p className="brand-name">Velina</p>
      </div>

      <div className="header-right">
        <button className="icon-button">
          <img src={user} alt="User" className="user-icon" />
        </button>
        <button className="icon-button">
          <img src={shoppingBag} alt="Shopping Bag" className="shopping-bag" />
        </button>
      </div>

      {open && (
        <nav className="header-nav-links">
          <button
            className="close-icon"
            onClick={() => setOpen(false)}
          >
            <img src={closeIcon} alt="Close menu" />
          </button>

          <NavLink to="/" className="header-nav-link" onClick={() => setOpen(false)}>
            Home
          </NavLink>
          <NavLink to="/products" className="header-nav-link" onClick={() => setOpen(false)}>
            Products
          </NavLink>
          <NavLink to="/about" className="header-nav-link" onClick={() => setOpen(false)}>
            About
          </NavLink>
        </nav>
      )}
    </header>
  );
}
