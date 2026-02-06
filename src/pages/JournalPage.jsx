import React from "react";
import "./JournalPage.css";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";

// Import the JSON object
import data from "../data.json";

const JournalPage = () => {
  // Destructure articles from the imported data
  const { articles } = data;

  return (
    <div className="journal-page">
      <Header />

      {/* Article Grid */}
      <section className="journal">
        <h1 className="journal-header">Journal</h1>
        <div className="journal-grid">
          {/* We use articles from the JSON here */}
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
