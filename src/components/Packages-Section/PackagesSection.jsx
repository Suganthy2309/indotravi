import React from "react";

const PackagesSection = () => {
  return (
    <section className="packages">
      <div className="responsive-text">
        <div className="heading-box">
          <h6 className="label-heading">Tour packages</h6>
          <h2 className="heading">Our tourist destination</h2>
        </div>
        <div className="text-box">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="images">
        <div className="box">
          <img src="https://ih1.redbubble.net/image.4695889024.6604/raf,360x360,075,t,fafafa:ca443f4786.jpg" alt="Bali Tour" />
          <ul className="top">
            <li>7 days</li>
            <li>
              <i className="fa solid fa-star"></i> 4.9
            </li>
          </ul>
          <div className="bottom">
            <time dateTime="2024-10-27">27 October</time>
            <ul>
              <li>Bali Tour Packages</li>
              <li>$285</li>
            </ul>
          </div>
        </div>
        <div className="box">
          <img src="https://images.pexels.com/photos/7263369/pexels-photo-7263369.jpeg" alt="Java Tour" />
          <ul className="top">
            <li>5 days</li>
            <li>
              <i className="fa solid fa-star"></i> 4.9
            </li>
          </ul>
          <div className="bottom">
            <time dateTime="2024-10-27">27 October</time>
            <ul>
              <li>Java Tour Packages</li>
              <li>$192</li>
            </ul>
          </div>
        </div>
        <div className="box">
          <img src="https://nusa-penida.info/__scale/uploads/s/5/m/j/5mjqluy0gans/img/autocrop/5278e3012e9c28ff4cdd34fbea6188e0.jpeg?quality=85&width=1077&webp=1" alt="Solo Tour" />
          <ul className="top">
            <li>3 days</li>
            <li>
              <i className="fa solid fa-star"></i> 4.9
            </li>
          </ul>
          <div className="bottom">
            <time dateTime="2024-10-27">27 October</time>
            <ul>
              <li>Solo Tour Packages</li>
              <li>$235</li>
            </ul>
          </div>
        </div>
      </div>
      <div className="action">
        <a href="#">View More</a>
      </div>
    </section>
  );
};

export default PackagesSection;
