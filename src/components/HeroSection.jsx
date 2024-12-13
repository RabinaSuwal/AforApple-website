/** @format */

import React from "react";
import { IoSearch } from "react-icons/io5";

function HeroSection() {
  return (
    <div className="container">
    <section className="hero-section">
        <div className="content-wrap">
          <div className="hero-content">
            <div className="hero-content-1">
              <div className="content-1"></div>
              <div className="content-2">
                <h3>EXCELLENT SCHOOLING</h3>
                <h1>Dedicated To Primary Education.</h1>
              </div>
              <div className="content-3">
                <p>
                  Urna duis convallis convallis tellus id interdum velit laoreet
                  id. Sollicitudin nibh sit amet commodo nulla. Amet venenatis
                  urna cursus eget nunc. Aliquam faucibus purus in massa tempor
                  nec feugiat. Pharetra vel turpis nunc eget.
                </p>
              </div>
              <div className="search-bar">
                <input
                  type="text"
                  placeholder="Search Courses"
                  className="search"
                />
                <button className="search-button">SEARCH COURSES</button>
                <button className="search-icon"><IoSearch/></button>
              </div>
            </div>
          </div>
          <div className="hero-image">
            <img
              src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/slider-2-circel.webp"
              alt=""
              className="hero-image-1"
            />
            <img
              src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/slider-2-char.webp"
              alt=""
              className="hero-image-2"
            />
          </div>
        </div>
      
    </section>
    </div>
  );
}

export default HeroSection;
