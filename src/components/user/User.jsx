import React, { useState } from "react";

const testimonials = [
  {
    name: "Donald Sullivan",
    description:
      "This travel website is very informative and easy to use. I like how they present various destination options and travel packages with clear details. Offering pictures and destination descriptions helps me decide where I want to visit. Additionally, the ability to compare prices and reviews from other users is very helpful in decision-making.",
    image:
      "https://www.buff.com/media/catalog/product/3/d/3dc1090f08ff96b4_133563_809_2024-01-03t20-31-12z.jpg?width=650&height=650&canvas=650,650&optimize=high&bg-color=255,255,255&fit=bounds?width=1920",
    location: "Founder, Fika",
  },
  {
    name: "John Doe",
    description: "Great service!",
    image:
      "https://via.placeholder.com/150/FF5733/FFFFFF?text=John+Doe",
    location: "CEO, Example Corp",
  },
  {
    name: "Jane Smith",
    description: "I love it!",
    image:
      "https://via.placeholder.com/150/3498DB/FFFFFF?text=Jane+Smith",
    location: "Manager, ABC Ltd",
  },
  {
    name: "Alice Brown",
    description: "Fantastic experience!",
    image:
      "https://via.placeholder.com/150/F1C40F/FFFFFF?text=Alice+Brown",
    location: "Traveler",
  },
  {
    name: "Robert Green",
    description: "Highly recommend this site.",
    image:
      "https://via.placeholder.com/150/2ECC71/FFFFFF?text=Robert+Green",
    location: "Blogger",
  },
];

const UserReview = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === testimonials.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="user-review-section">
      <div className="review-container">
        <div className="review-left">
          <div className="review-avatar1">
            <img
              src={currentTestimonial.image}
              alt="User Avatar"
              className="review-avatar"
            />

            <div className="review-navigation">
              <button className="nav-arrow" onClick={handlePrev}>
                ←
              </button>
              <button className="nav-arrow" onClick={handleNext}>
                →
              </button>
            </div>
          </div>

          <div className="review-user-details">
            <h4 className="review-user-name">{currentTestimonial.name}</h4>
            <p className="review-user-title">{currentTestimonial.location}</p>
          </div>
        </div>
        <div className="review-right">
          <p className="review-text">{currentTestimonial.description}</p>
        </div>
      </div>
    </section>
  );
};

export default UserReview;
