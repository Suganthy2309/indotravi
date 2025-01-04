import React from "react";

const BlogSection = () => {
  return (
    <section className="blog">
      <div className="blog-center">
      <h6 className="label-heading">Our Blog</h6>
      <h1 className="heading">Our travel memories</h1>
      </div>
      <div className="container">
        <div className="box">
          <img src="https://c.pxhere.com/photos/bb/b6/adventure_conifers_creek_environment_evergreen_fir_trees_forest_hike-1574937.jpg!d" alt="Travel Trends" />
          <div className="content">
            <time dateTime="2024-10-30">Oct 30, 2024</time>
            <h3>2025 Travel Trends - What You Need to Know</h3>
            <p>
            2023 taught us valuable life lessons. Plans don't always work out, flexibility is a key to life...
            </p>
          </div>
        </div>
        <div className="box">
          <img src="https://e0.pxfuel.com/wallpapers/620/956/desktop-wallpaper-jeep-wrangler-jeep-car-suv-red-tropics-u-16-9-background.jpg" alt="Jeep Adventure" />
          <div className="content">
            <time dateTime="2024-11-03">Nov 03, 2024</time>
            <h3>Jeep Adventure is a New Attraction for Tourists</h3>
            <p>
            Jeep adventure is one of the tourist attractions that has been popular recently as a sensation...
            </p>
          </div>
        </div>
      </div>
      <div className="action">
        <a href="#">View More</a>
      </div>
    </section>
  );
};

export default BlogSection;
