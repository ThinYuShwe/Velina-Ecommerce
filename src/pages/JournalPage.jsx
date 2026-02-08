import React from "react";
import { Link } from "react-router-dom"; // Add this import
import "./JournalPage.css";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import data from "../data.json";

const JournalPage = () => {
  const { journals } = data;

  // Helper to handle base paths for images
  const getImgUrl = (path) =>
    `${import.meta.env.BASE_URL}${path.replace("public/", "")}`;

  return (
    <div className="journal-page">
      <Header />

      <section className="journal">
        <h1 className="journal-header">Journal</h1>
        <div className="journal-grid">
          {journals.map((journal) => (
            <Link
              to={`/journalDetail/${journal.id}`}
              key={journal.id}
              className="journal-card-link"
            >
              <div className="journal-card">
                <div className="journal-image-container">
                  <img src={getImgUrl(journal.image)} alt={journal.title} />
                </div>
                <div className="journal-info">
                  <h3 className="journal-card-title">{journal.title}</h3>
                  <p className="journal-card-excerpt">{journal.excerpt}</p>
                  <span className="read-more">Read Story</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default JournalPage;
