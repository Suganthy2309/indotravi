import React from "react";
import SearchFilter from "../searchfilter/SearchFilter";

const BookingSection = () => {
return (
<section className="booking ">
  <div className="image" style={{
          backgroundImage: `url('https://toppng.com/uploads/preview/man-beach-sea-sand-rocks-11569912017dyajxzt4nz.jpg')`,
          backgroundRepeat: "no-repeat",
          backgroundSize: 'cover',
    backgroundPosition: 'center',
        }}>


    <div className="booking-wrap main-search-wrapper">
      <SearchFilter />

      <div className="Booking-search-wraper">
        <h7> Embark on a journey to find your dream destination, where adventure and
          relaxation await.</h7>
      </div>

    </div>

  </div>
  <div className="process">
    <h6 className="label-heading">How it works</h6>
    <h2 className="heading">One click for you</h2>

    <div className="box">
      <span>
        <i className="fa-solid fa-magnifying-glass"></i>
      </span>
      <div className="text">
        <h4>find your destination</h4>
        <p>Embark on a journey to discover your dream destination, where adventure and relaxation await.</p>
      </div>
    </div>
    <div className="box">
      <span>
        <i className="fa-solid fa-ticket"></i>
      </span>
      <div className="text">
        <h4>book a ticket</h4>
        <p>
          Ensure a smooth travel experience by booking tickets to your preferred destination via our platform.
        </p>
      </div>
    </div>
    <div className="box">
      <span>
        <i className="fa-regular fa-money-bill-1"></i>
      </span>
      <div className="text">
        <h4>make payment</h4>
        <p>We offer a variety of payment options to meet your preferences and ensure a hassle-free process.

        </p>
      </div>
    </div>
    <div className="box">
      <span>
        <i className="fa-regular fa-map"></i>
      </span>
      <div className="text">
        <h4>explore destination</h4>
        <p>Immerse yourself in a captivating tapestry of sights, sounds, and tastes as you explore ancient streets.</p>
      </div>
    </div>
  </div>
</section>
);
};

export default BookingSection;