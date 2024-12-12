import React from 'react';

const ResultCard = ({ title, value, description, color }) => {
    return (
      <div className="result-card">
        <h3 className="result-title">{title}</h3>
        <h1 className="result-value" style={{ color }}>
          {value}
        </h1>
        <p className="result-description">{description}</p>
      </div>
    );
  };

function ResultsSection() {
  return (
    <section className="results-section">
    <img src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/slider-2-bg.jpg" alt=""
    className='results-image' />
      <div >
      <div className='results-container'>
        <div className="results-content">
            <h5 className="results-subtitle">OUR RESULTS</h5>
            <h2 className="results-title">We're Proud Of Our Clients & Projects</h2>
            <p className="results-text">
            Porttitor massa id neque aliquam vestibulum morbi blandit. Aliquam
            faucibus purus in massa tempor nec feugiat. Pharetra vel turpis nunc
            eget libero nunc consequat interdum varius sit amet.
            </p>
            <button className="more-about-button">READ MORE ➔</button>
            <img src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/03/counter-h2-tp-img.webp" alt="" 
                className='results-illustration'
            />
        </div>

        <div className="results-cards">
            <div className='students-graduated'>
              <ResultCard
              title="Students Graduated"
              value="750K"
              description="Donec sit amet turpis tincidunt eros, nam porttitor massa leo porta maecenas reque."
              color="#88B520"
              />
            </div>
            <div className='academic-programs'>
              <ResultCard
              title="Academic Programs"
              value="289+"
              description="Donec sit amet turpis tincidunt eros, nam porttitor massa leo porta maecenas reque."
              color="#7BBFFF"
              />
            </div>
            <div className='global-awards'>
              <ResultCard
              title="Global Awards"
              value="85+"
              description="Donec sit amet turpis tincidunt eros, nam porttitor massa leo porta maecenas reque."
              color="#F8AD12"
              />
            </div>
            <div className='schools-worldwide'>
              <ResultCard
              title="Schools Worldwide"
              value="65+"
              description="Donec sit amet turpis tincidunt eros, nam porttitor massa leo porta maecenas reque."
              color="#F96EA0"
              />
            </div>
        </div>
      </div>
      </div>
    </section>
  )
}

export default ResultsSection