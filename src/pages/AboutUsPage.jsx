import React from "react";
import "./AboutUsPage.css";

// Assuming these images exist in your assets
import teamImg1 from "../assets/AboutUsPage/team1.avif";
import teamImg2 from "../assets/AboutUsPage/team2.avif";
import teamImg3 from "../assets/AboutUsPage/team3.avif";
import vision1 from "../assets/AboutUsPage/vision1.avif";
import mission1 from "../assets/AboutUsPage/mission1.avif";
// import visionImg from "../assets/About/vision-moodboard.jpg";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

const AboutUsPage = () => {
  return (
    <div className="about-page-container">
      <Header />
      {/* 1. Hero Section */}
      <section className="about-hero">
        <h1 className="about-title">About us</h1>
        <p className="about-subtitle">
          Get to know the story, values, and vision behind Velina—where modern
          fashion meets mindful design.
        </p>
      </section>

      {/* 2. Image Gallery Section */}
      <section className="about-gallery">
        <div className="about-image-wrapper bg-purple">
          <img src={teamImg1} alt="Style Persona 1" />
        </div>
        <div className="about-image-wrapper bg-green">
          <img src={teamImg2} alt="Style Persona 2" />
        </div>
        <div className="about-image-wrapper bg-lavender">
          <img src={teamImg3} alt="Style Persona 3" />
        </div>
      </section>

      {/* 3. Contrast Text Section (Zoomed-in Part 1) */}
      <section className="about-contrast-section">
        <div className="contrast-content">
          <p>
            Velina is an online clothing brand built around the{" "}
            <strong>beauty of contrast</strong> — clean silhouettes in
            expressive tones. Whether it's a lavender tee or a peach-toned
            hoodie, our collections are designed to be both
            <strong> effortless and eye-catching.</strong>
          </p>
        </div>
      </section>

      {/* 4. Our Vision Section (Zoomed-in Part 2) */}
      <section className="about-vision-section">
        <div className="vision-container">
          <div className="vision-text">
            <h2>Our Vision</h2>
            <p>
              At Velina, we believe that beauty lives in the balance of
              contrast: bold simplicity, soft structure, and expressive tones.
              Our vision is to redefine everyday fashion with calm confidence
              and effortless charm.
            </p>
          </div>
          <div className="vision-image">
            <img src={vision1} alt="Velina Moodboard" />
          </div>
        </div>
      </section>

      <section className="about-mission-section">
        <div className="mission-container">
          <div className="mission-text">
            <h2>Our Mission</h2>
            <p>
              We exist to create thoughtful pieces designed to be worn, loved,
              and lived in. Every garment is made with attention to detail,
              embracing slow fashion principles that respect both people and
              planet.
            </p>
          </div>
          <div className="mission-image">
            <img src={mission1} alt="Velina Moodboard" />
          </div>
        </div>
      </section>

      {/* 5. Stats Section: Velaa by the Numbers */}
      <section className="about-stats-section">
        <div className="stats-header">
          <h2>Velaa by the Numbers</h2>
          <p>
            A glimpse into the reach and impact of Velaa—measured through
            purpose, not just numbers.
          </p>
        </div>

        <div className="stats-grid">
          <div className="stat-card bg-pink">
            <h3>16K+</h3>
            <h4>Pieces sold worldwide</h4>
            <p>
              Loved by customers across Europe, with every piece crafted to make
              a lasting impression.
            </p>
          </div>

          <div className="stat-card bg-blue">
            <h3>12+</h3>
            <h4>Countries reached</h4>
            <p>
              From Amsterdam to Barcelona, Velaa Proudly travels with
              style—wherever you are.
            </p>
          </div>

          <div className="stat-card bg-yellow">
            <h3>98%</h3>
            <h4>Customer satisfaction rate</h4>
            <p>
              Our buyers fell in love with the feel, fit, and philosophy behind
              each collection and individual products.
            </p>
          </div>

          <div className="stat-card bg-green-light">
            <h3>0%</h3>
            <h4>We don’t overproduce</h4>
            <p>
              Rooted in slow fashion, we produce intentionally only what’s
              needed, nothing more.
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default AboutUsPage;
