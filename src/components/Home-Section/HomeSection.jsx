import React, { useState } from "react";
import heroImage from "../../assets/Herobanner.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";

const HomeSection = () => {
  const [navbarActive, setNavbarActive] = useState(false);

  // Handlers for toggling navbar
  const handleMenuBarClick = () => {
    setNavbarActive(true);
  };

  const handleCloseClick = () => {
    setNavbarActive(false);
  };

  return (
    <section
      className="home"
      style={{
        backgroundImage: `url(${heroImage})`,
        height: "calc(100vh + 2cm)",
      }}
    >
      <header>
        <h4>Indotravi</h4>
        <nav className={navbarActive ? "active" : ""}>
          <i className="fa fa-close" onClick={handleCloseClick}></i>
          <a href="#" className="active">
            about
          </a>
          <a href="#">services</a>
          <a href="#">tour</a>
          <a href="#">contact</a>
        </nav>
        <div className="actions">
          <a className="btn" href="#">
            login
          </a>
          <i className="fa fa-bars" onClick={handleMenuBarClick}></i>
        </div>
      </header>
      <div className="main">
        <div className="search">
          <ul>
            <li>
              <i className="fa-regular fa-calendar-days"></i>
              <span>date</span>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li>
              <i className="fa-regular fa-credit-card"></i>
              <span>budget</span>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
            <li>
              <i className="fa-regular fa-user"></i>
              <span>guests</span>
              <i className="fa-solid fa-chevron-down"></i>
            </li>
          </ul>
          <button className="btn">search</button>
        </div>
      </div>
    </section>
  );
};

export default HomeSection;
