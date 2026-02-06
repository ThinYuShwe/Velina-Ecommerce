import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Link } from "react-router-dom";
import homePageImg7 from "../assets/HomePage/homePageImg7.avif";
import { Heart, ShoppingBag } from "lucide-react"; // Optional: using lucide-react for icons
import Features from "../components/Features.jsx";

import "./WomenPage.css";
import homePageImg1 from "../assets/HomePage/homePageImg1.avif";

import J1 from "../assets/Journal/J1.avif";
import J2 from "../assets/Journal/J2.avif";
import J3 from "../assets/Journal/J3.avif";
import J4 from "../assets/Journal/J4.avif";
import J5 from "../assets/Journal/J5.avif";
import J6 from "../assets/Journal/J6.avif";
import J7 from "../assets/Journal/J8.avif";
import J8 from "../assets/Journal/J9.jpg";

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

  const articles = [
    {
      id: 1,
      title: "The Art of Slowing Down: Why We Curate with Intention",
      excerpt:
        "A quiet manifesto on the beauty of slow living and intentional curation. In this piece, we explore why Velina exists—not just to sell beautiful things...",
      category: "Editorial",
      image: J1,
    },
    {
      id: 2,
      title: "How to Build a Capsule Wardrobe You'll Actually Love",
      excerpt:
        "A capsule wardrobe isn't about restriction. It's about clarity. It's a quiet rebellion against overconsumption and trend fatigue. A way of dressing...",
      category: "Tips & Tricks",
      image: J2,
    },
    {
      id: 3,
      title: "The Future of Editorial Fashion: Crafting Stories That Last",
      excerpt:
        "In a world where fast fashion dominates headlines and social media feeds are flooded with fleeting trends, we often forget the power of storytelling.",
      category: "Articles",
      image: J3,
    },
    {
      id: 4,
      title: "5 Tips for Building a Slower, More Intentional Wardrobe",
      excerpt:
        "Fast fashion has taught us to chase trends, fill closets, and buy on impulse. But at Velina, we believe that getting dressed should feel like a ritual.",
      category: "Tips & Tricks",
      image: J4,
    },
    {
      id: 5,
      title:
        "The Scent of Memory: Why We Light Candles Even When No One's Watching",
      excerpt:
        "Lighting a candle in the middle of the afternoon. Arranging flowers no one else will notice. Pouring tea into a handmade cup. These small gestures...",
      category: "Editorial",
      image: J5,
    },
    {
      id: 6,
      title:
        "The Art of Mindful Living: How to Create a Sanctuary in Your Home",
      excerpt:
        "In a world that constantly demands our attention, it's easy to forget the importance of creating a space where we can truly unwind and recharge.",
      category: "Articles",
      image: J6,
    },
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

        <section className="journal-sidebar-grid">
          <h2 className="side-journal-title">From the Journal</h2>
          {articles.slice(0, 3).map(
            (
              article, // Show fewer for sidebar
            ) => (
              <div key={article.id} className="side-journal-card-mini">
                <div className="side-journal-image-container">
                  <img src={article.image} alt={article.title} />
                </div>
                <div className="side-journal-info">
                  <h3 className="side-journal-card-title">{article.title}</h3>
                </div>
              </div>
            ),
          )}
        </section>
      </div>

      <Features />
      <Footer />
    </main>
  );
}
