import React from "react";

const Home = () => {
  return (
    <div className="home">
      <>
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
      </>
    </div>
  );
};

export default Home;
