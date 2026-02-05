import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import homePageImg7 from "../assets/HomePage/homePageImg7.avif";
import { Heart, ShoppingBag } from "lucide-react"; // Optional: using lucide-react for icons
import Features from "../components/Features.jsx";

import "./WomenPage.css";
import homePageImg1 from "../assets/HomePage/homePageImg1.avif";
// ... (keep other imports)

export function WomenPage() {
  const products = [
    {
      id: 1,
      img: homePageImg1,
      name: "Coral Curve Skirt",
      price: "$85.00",
      desc: "Silk and linen blend",
    },
    {
      id: 2,
      img: homePageImg7,
      name: "Mist Ruffle Top",
      price: "$113.00",
      desc: "Lightweight summer knit",
    },
    // ... add more products
  ];

  return (
    <main className="women-page-container">
      <Header />

      <div className="women-content-wrapper">
        {/* SIDEBAR FILTERS */}
        <aside className="women-sidebar">
          <div className="filter-group">
            <h3 className="filter-heading">Brand</h3>
            <div className="filter-item">
              <input type="checkbox" id="velina" />
              <label htmlFor="velina">Velina</label>
            </div>
            <div className="filter-item">
              <input type="checkbox" id="essentials" />
              <label htmlFor="essentials">Essentials</label>
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-heading">Category</h3>
            <div className="filter-item">
              <input type="checkbox" id="dresses" />
              <label htmlFor="dresses">Dresses</label>
            </div>
            <div className="filter-item">
              <input type="checkbox" id="tops" />
              <label htmlFor="tops">Tops</label>
            </div>
          </div>

          <div className="filter-group">
            <h3 className="filter-heading">Price Range</h3>
            <div className="filter-item">
              <input type="checkbox" id="dresses" />
              <label htmlFor="prices">$10 - $100</label>
            </div>
            <div className="filter-item">
              <input type="checkbox" id="tops" />
              <label htmlFor="prices">$100 - $200</label>
            </div>
          </div>
        </aside>

        <section className="women-main-content">
          <header className="women-grid-header">
            <h1 className="collection-title">Women's Collection</h1>
            <p className="product-count">{products.length} Products Found</p>
          </header>

          <div className="women-product-grid">
            {products.map((product) => (
              <article key={product.id} className="women-product-card">
                <div className="women-product-image-container">
                  <Link to={`/product/${product.id}`}>
                    <img src={product.img} alt={product.name} />
                  </Link>
                  <div className="product-actions">
                    <button className="action-btn">
                      <Heart size={18} />
                    </button>
                    <button className="action-btn">
                      <ShoppingBag size={18} />
                    </button>
                  </div>
                </div>
                <div className="women-product-details">
                  <h4 className="women-product-title">{product.name}</h4>
                  <p className="women-product-desc">{product.desc}</p>
                  <span className="women-product-price">{product.price}</span>
                </div>
              </article>
            ))}
          </div>
        </section>
      </div>

      <Features />
      <Footer />
    </main>
  );
}
