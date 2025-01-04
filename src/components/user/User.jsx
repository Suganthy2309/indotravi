import React from "react";

const UserReview = () => {
  return (
    <section className="user-review-section">
      <div className="review-container">
        <div className="review-left">
            <div className="review-avater1">
          <img
            src="https://www.buff.com/media/catalog/product/3/d/3dc1090f08ff96b4_133563_809_2024-01-03t20-31-12z.jpg?width=650&height=650&canvas=650,650&optimize=high&bg-color=255,255,255&fit=bounds?width=1920"
            alt="User Avatar"
            className="review-avatar"
          />

<div className="review-navigation">
        <button className="nav-arrow">←</button>
        <button className="nav-arrow">→</button>
      </div>
      </div>
          
          <div className="review-user-details">
            <h4 className="review-user-name">Donald Sullivan</h4>
            <p className="review-user-title">Founder, Fika</p>
            
          </div>
          
          
        </div>
        <div className="review-right">
          <p className="review-text">
            This travel website is very informative and easy to use. I like how
            they present various destination options and travel packages with
            clear details. Offering pictures and destination descriptions helps
            me decide where I want to visit. Additionally, the ability to
            compare prices and reviews from other users is very helpful in
            decision-making.
          </p>
        </div>
      </div>
      
    </section>
  );
};

export default UserReview;
