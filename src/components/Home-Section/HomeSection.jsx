import React, { useState } from "react";
import heroImage from "../../assets/indotravi base pic.jpg";
import "@fortawesome/fontawesome-free/css/all.min.css";
import SearchFilter from "../searchfilter/SearchFilter";
import LanguageToggle from "../languagetoggle/LanguageToggle";
import CardsSection from '../Cards-Section/CardsSection';

const HomeSection = () => {
const [navbarActive, setNavbarActive] = useState(false);

const handleMenuBarClick = () => {
setNavbarActive(true);
};

const handleCloseClick = () => {
setNavbarActive(false);
};


return (
<section className="home" style={{
        backgroundImage: `url(${heroImage})`,
      }}>
  <header>
    <h4>Indotravi</h4>
    <nav className={navbarActive ? "active" : "" }>
      <i className="fa fa-close" onClick={handleCloseClick}></i>
      <a href="#" className="active">
        About
      </a>
      <a href="#">services</a>
      <a href="#">tour</a>
      <a href="#">about</a>
      <a href="#">contact</a>
    </nav>
    <div className="actions">
      <LanguageToggle />
      <a className="btn" href="#">
        login
      </a>
      <i className="fa fa-bars" onClick={handleMenuBarClick}></i>
    </div>
  </header>


  <div className="main main-search-wrapper">
    <h1>Extraordinary natural and cultural charm</h1>
    <p>Exploring Indonesia is an unforgettable adventure.</p>
    <SearchFilter />
  </div>

  <CardsSection />

</section>
);

};

export default HomeSection;