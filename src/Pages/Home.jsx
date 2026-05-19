import React, { useState } from "react";

const tickers = [
  "💹 Foreign Exchange Rates",
  "📊 USD Buy 60.2 | Sell 63.1",
  "💰 GBP Buy 80.1 | Sell 83.5",
  "💵 EUR Buy 70.3 | Sell 73.8",
  "📈 JPY Buy 0.51 | Sell 0.54",
  "🏦 AED Buy 16.4 | Sell 17.1",
  "✨ Fixed Deposits up to 8.5% PA",
];

const services = [
  {
    icon: "🏛️",
    title: "Online Banking",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus sed sit amet ipsum mauris fusce commodo.",
  },
  {
    icon: "💳",
    title: "Smart Cards",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus sed sit amet ipsum mauris fusce commodo.",
  },
  {
    icon: "📊",
    title: "Investments",
    desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec a diam lectus sed sit amet ipsum mauris fusce commodo.",
  },
];

const tabs = ["Banking Solutions", "Industry", "Industry Expertise"];

const Home = () => {
  const [active, setActive] = useState(0);
  return (
    <div className="home">
      <section className="hero">
        <div className="hero-bg" />
        <div className="container hero-inner">
          <div className="hero-content">
            <span className="hero-tag">No. 1 Banking for Everyone</span>
            <h1>
              Innovative Banking
              <br />
              Solutions For Future
            </h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam quis.
            </p>
            <div className="hero-btns">
              <button className="btn-orange">Book an Appointment</button>
              <button className="btn-white-outline">Apply Today →</button>
            </div>
          </div>
          <div className="hero-img-side">
            <div className="hero-person-visual">
              <div className="hero-circle" />
              <div className="hero-silhouette" />
            </div>
          </div>
        </div>
      </section>

      {/* Ticker Bar */}

      <div className="ticker-bar">
        <div className="ticker-track">
          {[...tickers, ...tickers].map((t, i) => (
            <span key={i} className="ticker-item">
              {t}
            </span>
          ))}
        </div>
      </div>

      {/* Services */}

      <section className="services-section">
        <div className="container">
          <div className="section-header center">
            <span className="section-tag">No. 1 Banking for Everyone</span>
            <h2 className="section-title">World Class Banking Services</h2>
            <p className="section-sub">
              Search vel odio. Varius accumsan. Aenean pulvinar
            </p>
          </div>
          <div className="services-grid">
            {services.map((s, i) => (
              <div className="service-card" key={i}>
                <div className="service-icon-wrap">
                  <span className="service-icon">{s.icon}</span>
                </div>
                <h3>{s.title}</h3>
                <p>{s.desc}</p>
                <a href="#" className="service-link">
                  Read More →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About */}
      <section className="economy-section">
        <div className="economy-img-col">
          <div className="economy-img-bg" />
          <div className="economy-img-overlay"></div>
        </div>
        <div className="economy-content-col">
          <span className="section-tag">About Rosano Bank</span>
          <h2>
            Building A More compact
            <br />
            our future Economy
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Nunc
            vulputate libero et velit interdum, ac aliquet odio mattis.
          </p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc
            vulputate libero et velit interdum.
          </p>
          <div className="economy-stats">
            <div className="economy-stat">
              <span className="stat-num">25+</span>
              <span className="stat-label">Years Experience</span>
            </div>
            <div className="economy-stat">
              <span className="stat-num">1.2M</span>
              <span className="stat-label">Happy Clients</span>
            </div>
          </div>
          <div className="economy-tabs">
            {tabs.map((tab, i) => (
              <button
                key={i}
                className={`eco-tab ${active === i ? "active" : ""}`}
                onClick={() => setActive(i)}
              >
                {tab}
              </button>
            ))}
          </div>
          <div className="economy-tab-content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco.
            </p>
          </div>
          <button className="btn-orange mt-20">Apply For An Account →</button>
        </div>
      </section>
    </div>
  );
};

export default Home;
