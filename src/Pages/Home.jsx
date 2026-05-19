import React from "react";

const tickers = [
  "💹 Foreign Exchange Rates",
  "📊 USD Buy 60.2 | Sell 63.1",
  "💰 GBP Buy 80.1 | Sell 83.5",
  "💵 EUR Buy 70.3 | Sell 73.8",
  "📈 JPY Buy 0.51 | Sell 0.54",
  "🏦 AED Buy 16.4 | Sell 17.1",
  "✨ Fixed Deposits up to 8.5% PA",
];

const Home = () => {
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
    </div>
  );
};

export default Home;
