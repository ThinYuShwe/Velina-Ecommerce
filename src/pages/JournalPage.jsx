import React from "react";
import "./JournalPage.css";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";

import J1 from "../assets/Journal/J1.avif";
import J2 from "../assets/Journal/J2.avif";
import J3 from "../assets/Journal/J3.avif";
import J4 from "../assets/Journal/J4.avif";
import J5 from "../assets/Journal/J5.avif";
import J6 from "../assets/Journal/J6.avif";
import J7 from "../assets/Journal/J8.avif";
import J8 from "../assets/Journal/J9.jpg";

const JournalPage = () => {
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
    <div className="journal-page">
      <Header />

      {/* Article Grid */}
      <section className="journal">
        <h1 className="journal-header">Journal</h1>
        <div className="journal-grid">
          {articles.map((article) => (
            <div key={article.id} className="journal-card">
              <div className="journal-image-container">
                <img src={article.image} alt={article.title} />
              </div>
              <div className="journal-info">
                <h3 className="journal-card-title">{article.title}</h3>
                <p className="journal-card-excerpt">{article.excerpt}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default JournalPage;
