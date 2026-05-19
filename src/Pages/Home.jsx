import React, { useState, useCallback } from "react";
import hand_phone from "../assets/freestocks-mw6Onwg4frY-unsplash.jpg";

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

const loanTypes = [
  {
    emoji: "🏠",
    label: "Home Loan",
    amountMax: 45000,
    amountMin: 1,
    termMin: 2,
    termMax: 30,
    rateMin: 0,
    rateMax: 20,
  },
  {
    emoji: "🚗",
    label: "Car Loan",
    amountMax: 30000,
    amountMin: 1,
    termMin: 1,
    termMax: 10,
    rateMin: 0,
    rateMax: 18,
  },
  {
    emoji: "🎓",
    label: "Student Loan",
    amountMax: 20000,
    amountMin: 500,
    termMin: 1,
    termMax: 15,
    rateMin: 0,
    rateMax: 15,
  },
  {
    emoji: "💰",
    label: "Personal Loan",
    amountMax: 10000,
    amountMin: 100,
    termMin: 1,
    termMax: 5,
    rateMin: 0,
    rateMax: 25,
  },
];

function getSliderBackground(value, min, max) {
  const pct = ((value - min) / (max - min)) * 100;
  return `linear-gradient(to right, #1a3c8e ${pct}%, #d0d5e8 ${pct}%)`;
}

function formatCurrency(n) {
  return "$" + Math.round(n).toLocaleString();
}

const Home = () => {
  const [active, setActive] = useState(0);

  const [activeLoan, setActiveLoan] = useState(0);
  const loan = loanTypes[activeLoan];

  const [amount, setAmount] = useState(15000);
  const [term, setTerm] = useState(5);
  const [rate, setRate] = useState(4);

  const switchLoan = useCallback((idx) => {
    setActiveLoan(idx);
    const l = loanTypes[idx];
    setAmount(Math.round((l.amountMin + l.amountMax) / 3));
    setTerm(Math.round((l.termMin + l.termMax) / 3));
    setRate(Math.round((l.rateMin + l.rateMax) / 4));
  }, []);

  // EMI formula
  const monthlyRate = rate / 100 / 12;
  const months = term * 12;
  let emi = 0;
  if (monthlyRate === 0) {
    emi = amount / months;
  } else {
    emi =
      (amount * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);
  }
  const totalPayable = emi * months;
  const interestAmount = totalPayable - amount;

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

      {/* Banking For */}
      <section className="banking-for">
        <div className="bf-card bf-corp">
          <div className="bf-overlay" />
          <div className="bf-content">
            <h3>Banking For corporates</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Class
              aptent taciti sociosqu ad litora torquent.
            </p>
            <button className="bf-btn">Talk to Us →</button>
          </div>
        </div>
        <div className="bf-divider">
          <div className="bf-diamond" />
        </div>
        <div className="bf-card bf-indiv">
          <div className="bf-overlay" />
          <div className="bf-content">
            <h3>Banking For Individuals</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipiscing elit. Class
              aptent taciti sociosqu ad litora torquent.
            </p>
            <button className="bf-btn">Talk to Us →</button>
          </div>
        </div>
      </section>

      {/* EMI Calculator */}
      <section className="emi-wrapper">
        {/* Section header */}
        <div className="section-header">
          <div className="section-eyebrow">We Offer Banking For Everyone</div>
          <h2 className="section-title">EMI online calculator</h2>
          <p className="section-sub">
            Get your loan calculated easily lorem ipsum dolor
          </p>
        </div>

        {/* Phone image */}
        <div className="phone-image-wrap">
          <div className="phone-image">
            {/* Decorative hands holding phone */}
            <img src={hand_phone} alt="" />
          </div>
        </div>

        {/* Loan type icons */}
        <div className="loan-icons-row">
          {loanTypes.map((l, i) => (
            <button
              key={i}
              className={`loan-icon-btn${activeLoan === i ? " active" : ""}`}
              onClick={() => switchLoan(i)}
              title={l.label}
            >
              {l.emoji}
            </button>
          ))}
        </div>

        {/* Loan title */}
        <h3 className="loan-type-title">{loan.label}</h3>

        {/* Sliders */}
        <div className="sliders-section">
          {/* Loan Amount */}
          <div className="slider-col">
            <div className="slider-label-row">
              <span className="slider-label">Loan Amount</span>
              <span className="slider-range">
                {loan.amountMin} - ${loan.amountMax.toLocaleString()}
              </span>
            </div>
            <input
              type="range"
              className="custom-slider"
              min={loan.amountMin}
              max={loan.amountMax}
              step={100}
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              style={{
                background: getSliderBackground(
                  amount,
                  loan.amountMin,
                  loan.amountMax,
                ),
              }}
            />
            <div className="slider-value-box">{formatCurrency(amount)}</div>
          </div>

          {/* Loan Term */}
          <div className="slider-col">
            <div className="slider-label-row">
              <span className="slider-label">Loan terms</span>
              <span className="slider-range">
                {loan.termMin} - {loan.termMax} Years
              </span>
            </div>
            <input
              type="range"
              className="custom-slider"
              min={loan.termMin}
              max={loan.termMax}
              step={1}
              value={term}
              onChange={(e) => setTerm(Number(e.target.value))}
              style={{
                background: getSliderBackground(
                  term,
                  loan.termMin,
                  loan.termMax,
                ),
              }}
            />
            <div className="slider-value-box">
              {term} {term === 1 ? "Year" : "Years"}
            </div>
          </div>

          {/* Interest Rate */}
          <div className="slider-col">
            <div className="slider-label-row">
              <span className="slider-label">Interest rate</span>
              <span className="slider-range">
                {loan.rateMin} - {loan.rateMax}%
              </span>
            </div>
            <input
              type="range"
              className="custom-slider"
              min={loan.rateMin}
              max={loan.rateMax}
              step={0.5}
              value={rate}
              onChange={(e) => setRate(Number(e.target.value))}
              style={{
                background: getSliderBackground(
                  rate,
                  loan.rateMin,
                  loan.rateMax,
                ),
              }}
            />
            <div className="slider-value-box">{rate}%</div>
          </div>
        </div>

        {/* Results */}
        <div className="results-bar">
          <div className="results-inner">
            <div className="results-cols">
              <div className="result-item">
                <div className="result-label">Expected Monthly EMI</div>
                <div className="result-value">{formatCurrency(emi)}</div>
              </div>
              <div className="result-item">
                <div className="result-label">Interest Amount</div>
                <div className="result-value">
                  {formatCurrency(interestAmount)}
                </div>
              </div>
              <div className="result-item">
                <div className="result-label">Total Payable Amount</div>
                <div className="result-value">
                  {formatCurrency(totalPayable)}
                </div>
              </div>
            </div>
            <button className="apply-btn">
              Apply Online
              <span className="apply-btn-arrow">›</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
