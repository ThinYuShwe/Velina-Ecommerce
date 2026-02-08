import React from "react";
import { useParams, Link } from "react-router-dom";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import "./JournalDetail.css";
import data from "../data.json";
const JournalDetail = () => {
  const { id } = useParams();

  // Find the specific journal entry by ID
  const entry = data.journals.find((j) => j.id === parseInt(id));

  if (!entry) {
    return <div className="error-message">Journal entry not found.</div>;
  }

  return (
    <main className="journal-detail-page">
      <Header />
      <article className="journal-entry-container">
        <header className="journal-entry-header">
          <p className="journal-category">{entry.category}</p>
          <h1 className="journal-main-title">{entry.title}</h1>
          <p className="journal-date">{entry.date}</p>
        </header>

        <figure className="journal-hero-wrapper">
          <img
            src={`${import.meta.env.BASE_URL}${(entry.image || "").replace("public/", "")}`}
            alt={entry.title}
            className="journal-hero-img"
          />
        </figure>

        <div className="journal-content-body">
          {entry.sections.map((section, index) => (
            <section key={index} className="journal-section">
              <h2 className="journal-section-heading">{section.heading}</h2>
              <p className="journal-text-content">{section.content}</p>
              {section.tip && (
                <div className="journal-tip-box">
                  <strong>Tip:</strong> {section.tip}
                </div>
              )}
            </section>
          ))}
        </div>

        <footer className="journal-footer-nav">
          <Link to="/journal" className="back-to-journal">
            ← Back to Journal
          </Link>
        </footer>
      </article>
      <Footer />
    </main>
  );
};

export default JournalDetail;
