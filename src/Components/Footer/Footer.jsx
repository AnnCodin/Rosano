import { useState } from "react";
import "./Footer.css";

const HexBackground = () => (
  <svg
    className="rf-hexbg"
    viewBox="0 0 1440 800"
    preserveAspectRatio="xMidYMid slice"
    xmlns="http://www.w3.org/2000/svg"
  >
    <rect width="1440" height="800" fill="#1c1c1c" />
    {(() => {
      const hexes = [];
      const R = 68,
        W = R * Math.sqrt(3),
        H = R * 2;
      const cols = 14,
        rows = 8;
      for (let r = -1; r < rows + 1; r++) {
        for (let c = -1; c < cols + 1; c++) {
          const x = c * W + (r % 2 === 0 ? 0 : W / 2);
          const y = r * H * 0.75;
          const pts = Array.from({ length: 6 }, (_, i) => {
            const a = (Math.PI / 180) * (60 * i - 30);
            return `${x + R * Math.cos(a)},${y + R * Math.sin(a)}`;
          }).join(" ");
          const shade =
            Math.random() > 0.85
              ? "rgba(255,255,255,0.045)"
              : "rgba(255,255,255,0.018)";
          hexes.push(
            <polygon
              key={`${r}-${c}`}
              points={pts}
              fill={shade}
              stroke="rgba(255,255,255,0.06)"
              strokeWidth="0.8"
            />,
          );
        }
      }
      return hexes;
    })()}
  </svg>
);

const LogoIcon = () => (
  <svg
    className="rf-logo-icon"
    viewBox="0 0 52 52"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <polygon
      points="26,4 46,15 46,37 26,48 6,37 6,15"
      fill="none"
      stroke="#f5820a"
      strokeWidth="2"
    />
    <polygon
      points="26,10 40,18 40,34 26,42 12,34 12,18"
      fill="none"
      stroke="#f5820a"
      strokeWidth="1"
      opacity="0.5"
    />
    <polyline
      points="14,18 26,26 38,18"
      stroke="#f5820a"
      strokeWidth="2.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <line
      x1="26"
      y1="26"
      x2="26"
      y2="40"
      stroke="#f5820a"
      strokeWidth="2.5"
      strokeLinecap="round"
    />
  </svg>
);

const AppleIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
  </svg>
);

const PlayIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M3.18 23.76c.33.18.7.24 1.06.18L15.68 12 4.24.06C3.88 0 3.51.06 3.18.24 2.44.65 2 1.38 2 2.23v19.54c0 .85.44 1.58 1.18 1.99zM5 4.49l8.13 7.51L5 19.51V4.49z" />
    <path
      d="M20.46 10.69l-3.05-1.71-3.76 3.02 3.76 3.02 3.09-1.73c.88-.49.88-1.61-.04-2.6z"
      opacity="0"
    />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
  </svg>
);

const MailIcon = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
    <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
  </svg>
);

const ComplaintIcon = () => (
  <svg
    className="rf-action-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="8" r="4" />
    <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
    <path d="M19 3l1 1-1 1m1-1h-2" strokeLinecap="round" />
  </svg>
);

const CalcIcon = () => (
  <svg
    className="rf-action-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <rect x="4" y="2" width="16" height="20" rx="2" />
    <rect x="7" y="5" width="10" height="4" rx="1" />
    <circle cx="8" cy="14" r="1" fill="currentColor" />
    <circle cx="12" cy="14" r="1" fill="currentColor" />
    <circle cx="16" cy="14" r="1" fill="currentColor" />
    <circle cx="8" cy="18" r="1" fill="currentColor" />
    <circle cx="12" cy="18" r="1" fill="currentColor" />
    <circle cx="16" cy="18" r="1" fill="currentColor" />
  </svg>
);

const DownloadIcon = () => (
  <svg
    className="rf-action-icon"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
  >
    <circle cx="12" cy="12" r="9" />
    <path
      d="M12 8v5m0 0l-2-2m2 2l2-2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path d="M9 16h6" strokeLinecap="round" />
  </svg>
);

const TwitterIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
  </svg>
);

const FacebookIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
  </svg>
);

const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
);

const YoutubeIcon = () => (
  <svg
    width="18"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
  >
    <rect x="2" y="5" width="20" height="14" rx="3" />
    <polygon points="10,9 16,12 10,15" fill="currentColor" stroke="none" />
  </svg>
);

const hours = [
  ["Monday", "9am - 5 pm"],
  ["Tuesday", "9am - 5 pm"],
  ["Monday", "9am - 5 pm"],
  ["Monday", "9am - 5 pm"],
  ["Monday", "9am - 5 pm"],
  ["Saturday -", "Sunday Closed"],
];

const Footer = () => {
  return (
    <div>
      <footer className="rf-root">
        <HexBackground />

        <div className="rf-inner">
          {/* TOP BAR */}
          <div className="rf-topbar">
            <div className="rf-brand">
              <LogoIcon />
              <div className="rf-brand-text">
                <div className="rf-brand-name">ROSANO</div>
                <div className="rf-brand-sub">Banking For Everyone</div>
              </div>
            </div>

            <p className="rf-tagline">
              Amet nec elementum et in auctor lorem velit. In arcu ultricies
              libero amet. Facilisis viverra gravida diam eget tempor eget
              viverra. Accumsan scelerisque neque orcia.
            </p>

            <div className="rf-store-btns">
              <button className="rf-store-btn">
                <span className="rf-store-icon">
                  <AppleIcon />
                </span>
                <span className="rf-store-label">App Store</span>
              </button>
              <button className="rf-store-btn">
                <span className="rf-store-icon">
                  <PlayIcon />
                </span>
                <span className="rf-store-label">Google Play</span>
              </button>
            </div>
          </div>

          {/* ACTION BUTTONS */}
          <div className="rf-actions">
            <button className="rf-action-btn">
              <ComplaintIcon /> Register Your Complaint
            </button>
            <button className="rf-action-btn">
              <CalcIcon /> Forex Calculator
            </button>
            <button className="rf-action-btn">
              <DownloadIcon /> Download Forms
            </button>
          </div>

          {/* COLUMNS */}
          <div className="rf-cols">
            {/* Contact */}
            <div className="rf-contact-box">
              <h3 className="rf-col-heading">Contact</h3>
              <p className="rf-contact-label">Phone Banking 24/7</p>
              <p className="rf-contact-phone">+1(234)5000975</p>
              <div className="rf-contact-row">
                <PinIcon />
                <span>805 Broklyn Garden, Alexuz Duo New York, USA 33550</span>
              </div>
              <div className="rf-contact-row">
                <MailIcon />
                <span>bank.info@rosano.com</span>
              </div>
            </div>

            {/* Services */}
            <div className="rf-links-col">
              <h3 className="rf-col-heading">Services</h3>
              <ul className="rf-link-list">
                {[
                  "Mobile Banking",
                  "Business Plans",
                  "All Our Cards",
                  "Gold Loan",
                  "Investor Relations",
                  "Flexible Returns",
                ].map((s) => (
                  <li key={s}>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* About Us */}
            <div className="rf-links-col">
              <h3 className="rf-col-heading">About Us</h3>
              <ul className="rf-link-list">
                {[
                  "About Us",
                  "Board Of Director",
                  "Careers",
                  "Business",
                  "Career Detail",
                  "Education Loan",
                ].map((s) => (
                  <li key={s}>
                    <span>{s}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Opening Hours */}
            <div>
              <h3 className="rf-col-heading">Opening hours</h3>
              <table className="rf-hours-table">
                <tbody>
                  {hours.map(([day, time], i) => (
                    <tr key={i}>
                      <td>{day}</td>
                      <td>{time}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* BOTTOM BAR */}
          <div className="rf-bottom">
            <p className="rf-copyright">
              Copyright © 2023 Rosao. All Rights Reserved.
            </p>
            <div className="rf-socials">
              <span className="rf-social-link">
                <TwitterIcon />
              </span>
              <span className="rf-social-link">
                <FacebookIcon />
              </span>
              <span className="rf-social-link">
                <InstagramIcon />
              </span>
              <span className="rf-social-link">
                <YoutubeIcon />
              </span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
