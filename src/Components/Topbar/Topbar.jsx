import React from "react";
import "./Topbar.css";

const Topbar = () => {
  return (
    <div className="topbar">
      <div className="container topbar-inner">
        <div className="topbar-left">
          <span>CONTACT US</span>
          <span>OUR LOCATIONS</span>
          <span>FAQs</span>
          <span>MEDIA CENTER</span>
        </div>
        <div className="topbar-right">
          <span>
            24/7 Banking Service: +1(234)456-0 <i class="ri-search-line"></i>
          </span>
          <i class="ri-twitter-fill"></i>
          <i class="ri-facebook-line"></i>
          <i class="ri-instagram-line"></i>
          <i class="ri-youtube-line"></i>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
