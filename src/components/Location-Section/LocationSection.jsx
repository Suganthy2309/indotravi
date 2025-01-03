import React from 'react';

const LocationSection = () => {
return (
<section className="location">
  <div className="responsive-text">
    <div className="heading-box">
      <h6 className="label">best location</h6>
      <h2 className="heading">Indonesia Tourism</h2>
    </div>
    <div className="text-box">
      <p>extraordinary natural beauty, enjoy the rich culture,<br />
        and experience the friendliness of the local people.
      </p>
    </div>
  </div>
  <div className="images">
    <div className="box-image-wrapper box-col-7">
      <img src="https://alps-activ.com/wp-content/uploads/2023/03/76.jpg" alt="bromo, east java" />
      <div class="overlay">
        <p>Bromo, East Java<br />Bromo Tengger Tour</p>
      </div>
    </div>

    <div className="box-image-wrapper box-col-5">
      <img
        src="https://images.pexels.com/photos/7084108/pexels-photo-7084108.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        alt="temple" />
      <div class="overlay">
        <p>Denpasar, Bali<br />Bali Beach Tourism</p>
      </div>
    </div>

    <div className="box-image-wrapper box-col-5">
      <img
        src="https://images.unsplash.com/photo-1563572318-00cd5e9c9fba?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx2aXN1YWwtc2VhcmNofDl8fHxlbnwwfHx8fHw%3D"
        alt="" />
      <div class="overlay">
        <p>Lampung, South Sumatrabr<br />Sumatra Tourism</p>
      </div>
    </div>

    <div className="box-image-wrapper box-col-7">
      <img
        src="https://media.istockphoto.com/id/2174550236/photo/rows-of-stupas-at-the-top-of-borobudur-temple.jpg?s=612x612&w=0&k=20&c=e34oSTVxz6jX65PcSvg6e_x_ZpZ0JyHgOjmH1ewzjws="
        alt="" />
      <div class="overlay">
        <p>
          Jogjakarta, Central Java
          <p />Borobudur Temple Tour</p>
      </div>
    </div>
  </div>
</section>
);
};

export default LocationSection;