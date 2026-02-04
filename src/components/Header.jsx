import "../index.css";
import "./Header.css";
import hamburger from "../assets/shared/hamburger.png";
import shoppingBag from "../assets/shared/shopping-bag.png";
import closeIcon from "../assets/shared/icon-close.svg";
import user from "../assets/shared/user.png";
import { NavLink } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

export function Header() {
  const [open, setOpen] = useState(false);
  const [showAuth, setShowAuth] = useState(false); // state for auth links visibility
  const authRef = useRef(null); // ref for the auth links container

  // Effect to handle clicks outside the auth links

  useEffect(() => {
    function handleClickOutside(event) {
      if (authRef.current && !authRef.current.contains(event.target)) {
        setShowAuth(false);
      }
    }

    if (showAuth) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showAuth]);

  return (
    <header className="header">
      <div className="header-left">
        <button className="icon-button" onClick={() => setOpen(true)}>
          <img src={hamburger} alt="Hamburger Menu" className="hamburger" />
        </button>
        <p className="brand-name">Velina</p>
      </div>

      {/* <div className="header-right">
        <div className="auth-hover-wrapper">
          <button
            className="icon-button"
            onClick={() => setShowAuth(!showAuth)}
            ref={authRef}
          >
            <img src={user} alt="User" className="user-icon" />
          </button>

          {showAuth && (
            <div className="header-auth-links">
              <NavLink
                to="/login"
                className="cart-link"
                onClick={() => setShowAuth(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                className="cart-link"
                onClick={() => setShowAuth(false)}
              >
                Sign up
              </NavLink>
            </div>
          )}
        </div>

        <button className="icon-button">
          <img src={shoppingBag} alt="Shopping Bag" className="shopping-bag" />
        </button>
      </div> */}
      <div className="header-right">
        {/* MOVE THE REF HERE */}
        <div className="auth-hover-wrapper" ref={authRef}>
          <button
            className="icon-button"
            onClick={() => setShowAuth(!showAuth)}
            /* Remove ref from here */
          >
            <img src={user} alt="User" className="user-icon" />
          </button>

          {showAuth && (
            <div className="header-auth-links">
              <NavLink
                to="/login"
                className="cart-link"
                onClick={() => setShowAuth(false)}
              >
                Login
              </NavLink>
              <NavLink
                to="/register"
                className="cart-link"
                onClick={() => setShowAuth(false)}
              >
                Register
              </NavLink>
            </div>
          )}
        </div>

        <button className="icon-button">
          <img src={shoppingBag} alt="Shopping Bag" className="shopping-bag" />
        </button>
      </div>

      {open && (
        <nav className="header-nav-links">
          <button className="close-icon" onClick={() => setOpen(false)}>
            <img src={closeIcon} alt="Close menu" />
          </button>

          <NavLink
            to="/"
            className="header-nav-link"
            onClick={() => setOpen(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="header-nav-link"
            onClick={() => setOpen(false)}
          >
            Women
          </NavLink>
          <NavLink
            to="/products"
            className="header-nav-link"
            onClick={() => setOpen(false)}
          >
            Men
          </NavLink>
          <NavLink
            to="/about"
            className="header-nav-link"
            onClick={() => setOpen(false)}
          >
            About
          </NavLink>
        </nav>
      )}
    </header>
  );
}
