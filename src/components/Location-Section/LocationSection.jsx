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
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
        </div>
      </div>
      <div className="images">
        <div className="box">
          <img src="https://images.pexels.com/photos/17816349/pexels-photo-17816349/free-photo-of-mount-bromo-peak-above-clouds-at-sunset-in-java-indonesia.jpeg?auto=compress&cs=tinysrgb&w=600/700x400" alt="bromo, east java" />
          <ul>
            <li>bromo, east java</li>
            <li>bromo tengger tour</li>
          </ul>
        </div>

        <div class="box">
                <img src="https://images.pexels.com/photos/5505439/pexels-photo-5505439.jpeg?auto=compress&cs=tinysrgb&w=600/400x300" alt="temple" />
                <ul>
                    <li>jogjakarta, central java</li>
                    <li>borobudur temple tour</li>
                </ul>
            </div>
        {/* Repeat for other locations */}
      

      <div class="box">
                <img src="https://images.unsplash.com/photo-1731271140119-34ad9551ff10?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHx0b3BpYy1mZWVkfDE0MXw2c01WalRMU2tlUXx8ZW58MHx8fHx8//400x300" alt="" />
                <ul>
                    <li>jogjakarta, central java</li>
                    <li>borobudur temple tour</li>
                </ul>
            </div>

            <div class="box">
                <img src="https://images.pexels.com/photos/5505439/pexels-photo-5505439.jpeg?auto=compress&cs=tinysrgb&w=600/700x400" alt="" />
                <ul>
                    <li>jogjakarta, central java</li>
                    <li>borobudur temple tour</li>
                </ul>
            </div>
            </div>
    </section>
  );
};

export default LocationSection;
