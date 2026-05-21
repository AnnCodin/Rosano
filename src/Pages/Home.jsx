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

const GearIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);

const WalletIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="2" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <circle cx="16" cy="14" r="1" />
  </svg>
);

const CoinsIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="9" cy="11" r="4" />
    <path d="M14.12 5.88A4 4 0 1119 13" />
    <path d="M5 20h8" />
    <path d="M9 15v5" />
  </svg>
);

const ShoppingBagIcon = () => (
  <svg
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.6"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" />
    <line x1="3" y1="6" x2="21" y2="6" />
    <path d="M16 10a4 4 0 01-8 0" />
  </svg>
);

const loanCards = [
  {
    title: "Loan For Students",
    desc: "Dolor amety consectetur vulputa adipis elit mil. Nunc libero et velit interdum venium aliquet odio typesm",
    img: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&q=80",
  },
  {
    title: "Loan For Home",
    desc: "Dolor amety consectetur vulputa adipis elit mil. Nunc libero et velit interdum venium aliquet odio typesm",
    img: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=600&q=80",
  },
  {
    title: "Loan For Business",
    desc: "Dolor amety consectetur vulputa adipis elit mil. Nunc libero et velit interdum venium aliquet odio typesm",
    img: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&q=80",
  },
];

const features = [
  {
    icon: <WalletIcon />,
    title: "Pay For Necessities",
    desc: "Nunc vulputate libero velit interdum",
  },
  {
    icon: <CoinsIcon />,
    title: "Pay For Necessities",
    desc: "Nunc vulputate libero velit interdum",
  },
  {
    icon: <ShoppingBagIcon />,
    title: "Pay For online shoppings",
    desc: "Nunc vulputate libero velit interdum",
  },
];

const CalendarIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ width: 14, height: 14, color: "#f5820a" }}
  >
    <rect x="1.5" y="2.5" width="13" height="12" rx="1.5" />
    <path d="M1.5 6.5h13M5 1.5v2M11 1.5v2" />
  </svg>
);

const CommentIcon = () => (
  <svg
    viewBox="0 0 16 16"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    style={{ width: 14, height: 14, color: "#f5820a" }}
  >
    <path d="M2 2.5h12a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-.5.5H5l-3 2.5V3a.5.5 0 0 1 .5-.5z" />
  </svg>
);

const ArrowRight = () => (
  <svg
    viewBox="0 0 14 14"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    style={{ width: 13, height: 13 }}
  >
    <path d="M2 7h10M8 3l4 4-4 4" />
  </svg>
);

const serviceCards = [
  {
    title: "Trades FX",
    desc: "Dolor amety consectetur vulputate adipiscing elit mil. Nunc libero.",
    photo:
      "https://images.unsplash.com/photo-1611532736597-de2d4265fba3?w=600&q=80",
  },
  {
    title: "Mutual Funds",
    desc: "Dolor amety consectetur vulputate adipiscing elit mil. Nunc libero.",
    photo:
      "https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=600&q=80",
  },
  {
    title: "Multi Currency AC's",
    desc: "Dolor amety consectetur vulputate adipiscing elit mil. Nunc libero.",
    photo:
      "https://images.unsplash.com/photo-1560472355-536de3962603?w=600&q=80",
  },
];

const newsItems = [
  {
    thumb:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&q=80",
    date: "Jan,20,2025",
    comments: "30 Comments",
    title: "Never Worry About What To Do About Banking Again With These Tips",
  },
  {
    thumb:
      "https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?w=300&q=80",
    date: "Jan,20,2025",
    comments: "30 Comments",
    title: "Never Worry About What To Do About Banking Again With These Tips",
  },
];

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
          <h2 className="section-title">EMI Online Calculator</h2>
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

      {/*Loans */}
      <div className="banking-wrapper">
        <section className="loans-section">
          <div className="loans-eyebrow">We Offer Banking For Everyone</div>
          <h2 className="loans-title">Loans &amp; Finances</h2>
          <p className="loans-subtitle">
            Blandit vel ultrices. Mattis accumsan egestas pulvinar
          </p>

          <div className="cards-grid">
            {loanCards.map((card) => (
              <div className="loan-card" key={card.title}>
                <img
                  className="loan-card-img"
                  src={card.img}
                  alt={card.title}
                  loading="lazy"
                />
                <div className="loan-card-body">
                  <h3 className="loan-card-title">{card.title}</h3>
                  <p className="loan-card-desc">{card.desc}</p>
                  <button className="btn-apply">
                    Apply Today <GearIcon />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* BANKING CARD SECTION */}
        <section className="card-section">
          <div className="card-section-img-wrap">
            <img
              className="card-section-img"
              src="https://images.unsplash.com/photo-1515187029135-18ee286d815b?w=800&q=80"
              alt="Banking presentation"
              loading="lazy"
            />
            <div className="credit-card-badge">
              <svg
                width="54"
                height="36"
                viewBox="0 0 54 36"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="54" height="36" rx="5" fill="url(#cardGrad)" />
                {/* Magnetic stripe */}
                <rect
                  x="0"
                  y="9"
                  width="54"
                  height="7"
                  fill="rgba(0,0,0,0.45)"
                />
                {/* Chip */}
                <rect
                  x="5"
                  y="20"
                  width="10"
                  height="8"
                  rx="1.5"
                  fill="#d4a843"
                />
                <line
                  x1="10"
                  y1="20"
                  x2="10"
                  y2="28"
                  stroke="#b8922a"
                  strokeWidth="0.8"
                />
                <line
                  x1="5"
                  y1="24"
                  x2="15"
                  y2="24"
                  stroke="#b8922a"
                  strokeWidth="0.8"
                />
                {/* Visa text */}
                <text
                  x="27"
                  y="31"
                  textAnchor="middle"
                  fill="white"
                  fontSize="9"
                  fontWeight="bold"
                  fontFamily="Arial, sans-serif"
                  letterSpacing="1"
                >
                  VISA
                </text>
                {/* Overlapping circles (Mastercard-style) */}
                <circle cx="41" cy="25" r="5" fill="#eb001b" opacity="0.9" />
                <circle cx="48" cy="25" r="5" fill="#f79e1b" opacity="0.9" />
                <defs>
                  <linearGradient
                    id="cardGrad"
                    x1="0"
                    y1="0"
                    x2="54"
                    y2="36"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop offset="0%" stopColor="#1a3a6b" />
                    <stop offset="100%" stopColor="#0d2244" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
          </div>

          <div className="card-section-content">
            <div className="section-eyebrow">Banking Cards &amp; Finances</div>
            <h2 className="section-heading">
              Get your personalized banking card now
            </h2>
            <p className="section-body">
              Lorem ipsum dolor sit amet, consectetur adipisc elit. Nunctimi
              vulput velit interdum, ac aliquet odio mattis. Classesicop aptent
              tacitiso ciosqu eptum ostrio antario glosses.
            </p>

            <div className="features-list">
              {features.map((f, i) => (
                <div className="feature-item" key={i}>
                  <div className="feature-icon">{f.icon}</div>
                  <div className="feature-text">
                    <h4>{f.title}</h4>
                    <p>{f.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Services & News */}
      <div className="banking-wrapper">
        {/* ── Services Section ── */}
        <section className="services-sectionn">
          <div className="services-bg" />
          <div className="services-overlay" />
          <div className="section-inner">
            <div className="section-tag">
              <span className="tag-line" />
              <span className="tag-text">We Offer Banking For Everyone</span>
            </div>
            <h2 className="section-heading">Secure your money</h2>
            <p className="section-sub">
              Blandit vel varius ultrices. Mattis accumsan egestas pulvinar
            </p>

            <div className="cards-grid">
              {serviceCards.map((card, i) => (
                <div className="service-card" key={i}>
                  <div
                    className="card-photo"
                    style={{ backgroundImage: `url(${card.photo})` }}
                  />
                  <div className="card-overlay" />
                  <div className="card-content">
                    <span className="card-accent" />
                    <h3 className="card-title">{card.title}</h3>
                    <p className="card-desc">{card.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── News Section ── */}
        <section className="news-section">
          <div className="section-inner">
            <div className="section-tag">
              <span className="tag-line" />
              <span className="tag-text">We Offer Banking For Everyone</span>
            </div>
            <h2 className="section-heading">Our News & Insights</h2>
            <p className="section-sub">
              Blandit vel varius ultrices. Mattis accumsan egestas pulvinar
            </p>

            <div className="news-grid">
              {/* Featured post */}
              <div className="news-featured">
                <div style={{ position: "relative" }}>
                  <img
                    src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=800&q=80"
                    alt="Industry news"
                    className="featured-img"
                  />
                  <span className="featured-tag-badge">Current Account</span>
                </div>
                <div className="featured-meta">
                  <span className="meta-item">
                    <CalendarIcon /> Jan,20,2025
                  </span>
                  <span className="meta-item">
                    <CommentIcon /> 30 Comments
                  </span>
                </div>

                <h3 className="featured-title">
                  Industry's Imperatives For Sustainability…
                </h3>
                <button className="more-btn">
                  More News <ArrowRight />
                </button>
              </div>

              {/* News list */}
              <div className="news-list">
                {newsItems.map((item, i) => (
                  <div className="news-item" key={i}>
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="news-thumb"
                    />
                    <div>
                      <div className="news-item-meta">
                        <span className="meta-item">
                          <CalendarIcon /> {item.date}
                        </span>
                        <span className="meta-item">
                          <CommentIcon /> {item.comments}
                        </span>
                      </div>
                      <h4 className="news-item-title">{item.title}</h4>
                    </div>
                  </div>
                ))}
                {newsItems.map((item, i) => (
                  <div className="news-item" key={i}>
                    <img
                      src={item.thumb}
                      alt={item.title}
                      className="news-thumb"
                    />
                    <div>
                      <div className="news-item-meta">
                        <span className="meta-item">
                          <CalendarIcon /> {item.date}
                        </span>
                        <span className="meta-item">
                          <CommentIcon /> {item.comments}
                        </span>
                      </div>
                      <h4 className="news-item-title">{item.title}</h4>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
