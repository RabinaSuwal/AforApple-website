import React from 'react'

function CurriculumPage() {
  return (
    <div className="curriculum-page">
      <div className="curriculum-container">
        {/* <div className='container'> */}
        <div className="left-section">
          <div className="image-container">
            <img src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/gradient-blob.webp" alt=""
            className='back-image' />
            <img
              src="	https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/blob-img.webp"
              alt="Kids Learning"
              className="main-image"
            />
            <div className="decorative-icon yellow-circle">
              <span className="spiral-icon">
                <img src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/03/spin-rot-01.webp" alt="spiral-icon" 
                width='120' height='120'/>
              </span>
            </div>
          </div>
        </div>

        <div className="right-section">
          <h4 className="section-tagline">UNLIMITED LEARNING</h4>
          <h2 className="section-title">Cross Disciplinary Curriculum</h2>
          <p className="section-description">
            Quisque egestas diam in arcu cursus. Amet cursus sit amet dictum
            sit. Sodales felis, ultricies ultrices metus faucibus non. Integer
            consequat ex lacus, in mattis nulla posuere.
          </p>

          <div className="features">
            <div className="feature">
              <span className="feature-number purple-bg">01</span>
              <div>
                <h3>Fun Filled Learning</h3>
                <p>Arcu non odio euismod lacinia at quis <br /> risus. Fusce ut placerat orci.</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-number pink-bg">02</span>
              <div>
                <h3>Secured Atmosphere</h3>
                <p>Augue ut lectus arcu bibendum at varius <br /> vel pharetra vel ultrices dui.</p>
              </div>
            </div>
            <div className="feature">
              <span className="feature-number blue-bg">03</span>
              <div>
                <h3>Furnished Classrooms</h3>
                <p>Diam volutpat commodo sed egestas <br />fringilla imperdiet.</p>
              </div>
            </div>
          </div>
          <div>
              <img src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/03/h2-abt-image.webp" alt=""
               width='175px' height='347px' className='jumping-kid' />
           </div>

          <button className="more-about-button">MORE ABOUT US ➜</button>
          
        </div>
        {/* </div> */}
      </div>
    </div>
  )
}

export default CurriculumPage