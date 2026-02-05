import React from "react";
import "./Features.css";

// Import your icons (make sure these files exist in your assets folder)
import iconSecure from "../assets/Features/icon-secure.png";
import iconReturn from "../assets/Features/icon-return.png";
import iconGlobal from "../assets/Features/icon-global.png";
import iconHelp from "../assets/Features/icon-help.png";

const Features = () => {
  const featureData = [
    {
      title: "Secure Checkout",
      desc: "Your info stays safe with us. All payments are encrypted and protected.",
      img: iconSecure,
      colorClass: "bg-green",
    },
    {
      title: "Easy Returns",
      desc: "Changed your mind? No worries — you have 30 days to send it back, stress-free.",
      img: iconReturn,
      colorClass: "bg-pink",
    },
    {
      title: "Worldwide Delivery",
      desc: "From our shop to your doorstep. Fast, reliable shipping wherever you are.",
      img: iconGlobal,
      colorClass: "bg-blue",
    },
    {
      title: "Here to Help",
      desc: "Need something? Our support team's just a message away, always happy to chat.",
      img: iconHelp,
      colorClass: "bg-yellow",
    },
  ];

  return (
    <section className="features-page-container">
      {featureData.map((item, index) => (
        <article key={index} className="feature-page-card">
          <div className={`icon-box ${item.colorClass}`}>
            <img
              src={item.img}
              alt={item.title}
              className="feature-page-icon-img"
            />
          </div>
          <h3 className="feature-page-title">{item.title}</h3>
          <p className="feature-page-text">{item.desc}</p>
        </article>
      ))}
    </section>
  );
};

export default Features;
