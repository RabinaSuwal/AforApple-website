import React, { useState } from "react";

function FAQ() {
  const [activeIndex, setActiveIndex] = useState(0); // Tracks the active FAQ item

  const toggleFaq = (index) => {
    // Toggle visibility of FAQ content; we ensure that one FAQ is always open
    setActiveIndex(index);}

  return (
    <div className="queries-section">
      <img
        src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/slider-2-bg.jpg"
        alt="Background"
        className="results-image"
      />
      <div className="container">
        <div className="kids-education-section">
          <h3>Kids Education Queries</h3>
          <h1>Frequently Asked Questions</h1>
          <div className="faq-container">
            <div className="faq-section">
              {/* FAQ Item 1 */}
              <div className="faq-wrapper">
                <div
                  className="faq-item"
                  onClick={() => toggleFaq(0)} // Toggle content visibility
                >
                  <h2>What costs are covered in course fees?</h2>
                  <img
                    src="updown.svg"
                    alt="updown"
                    width="12px"
                    height="12px"
                    className={`reverse-updown ${
                      activeIndex === 0 ? "active" : ""
                    }`}
                  />
                </div>
                {activeIndex === 0 && ( // Show content if active
                  <div className="faq-header">
                    <p>
                      Quam adipiscing vitae proin sagittis nisl rhoncus mattis.
                      Urna neque viverra justo nec ultrices dui sapien eget mi.
                      Feugiat sed lectus vestibulum mattis ullamcorper velit
                      sed ullamcorper morbi. Sapien faucibus et molestie ac
                      feugiat sed. Nec ullamcorper sit amet risus nullam eget
                      felis eget nunc. Morbi tincidunt augue interdum velit
                      euismod in pellentesque.
                    </p>
                    <div className="faq-images">
                      <img
                        src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/faq-img-01.webp"
                        alt="Child 1"
                      />
                      <img
                        src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/faq-img-02.webp"
                        alt="Child 2"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ Item 2 */}
              <div className="faq-wrapper">
                <div
                  className="faq-item"
                  onClick={() => toggleFaq(1)} // Toggle content visibility
                >
                  <h2>When do you communicate with parents?</h2>
                  <img
                    src="updown.svg"
                    alt="updown"
                    width="12px"
                    height="12px"
                    className={`reverse-updown ${
                      activeIndex === 1 ? "active" : ""
                    }`}
                  />
                </div>
                {activeIndex === 1 && ( // Show content if active
                  <div className="faq-header">
                    <p>
                      Quam adipiscing vitae proin sagittis nisl rhoncus mattis.
                      Urna neque viverra justo nec ultrices dui sapien eget mi.
                      Feugiat sed lectus vestibulum mattis ullamcorper velit
                      sed ullamcorper morbi. Sapien faucibus et molestie ac
                      feugiat sed. Nec ullamcorper sit amet risus nullam eget
                      felis eget nunc. Morbi tincidunt augue interdum velit
                      euismod in pellentesque.
                    </p>
                    <div className="faq-images">
                      <img
                        src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/faq-img-01.webp"
                        alt="Child 1"
                      />
                      <img
                        src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/faq-img-02.webp"
                        alt="Child 2"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ Item 3 */}
              <div className="faq-wrapper">
                <div
                  className="faq-item"
                  onClick={() => toggleFaq(2)} // Toggle content visibility
                >
                  <h2>Do you take kids for field trips?</h2>
                  <img
                    src="updown.svg"
                    alt="updown"
                    width="12px"
                    height="12px"
                    className={`reverse-updown ${
                      activeIndex === 2 ? "active" : ""
                    }`}
                  />
                </div>
                {activeIndex === 2 && ( // Show content if active
                  <div className="faq-header">
                    <p>
                      Quam adipiscing vitae proin sagittis nisl rhoncus mattis.
                      Urna neque viverra justo nec ultrices dui sapien eget mi.
                      Feugiat sed lectus vestibulum mattis ullamcorper velit
                      sed ullamcorper morbi. Sapien faucibus et molestie ac
                      feugiat sed. Nec ullamcorper sit amet risus nullam eget
                      felis eget nunc. Morbi tincidunt augue interdum velit
                      euismod in pellentesque.
                    </p>
                    <div className="faq-images">
                      <img
                        src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/faq-img-01.webp"
                        alt="Child 1"
                      />
                      <img
                        src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/faq-img-02.webp"
                        alt="Child 2"
                      />
                    </div>
                  </div>
                )}
              </div>

              {/* FAQ Item 4 */}
              <div className="faq-wrapper">
                <div
                  className="faq-item"
                  onClick={() => toggleFaq(3)} // Toggle content visibility
                >
                  <h2>How will your education system help my child?</h2>
                  <img
                    src="updown.svg"
                    alt="updown"
                    width="12px"
                    height="12px"
                    className={`reverse-updown ${
                      activeIndex === 3 ? "active" : ""
                    }`}
                  />
                </div>
                {activeIndex === 3 && ( // Show content if active
                  <div className="faq-header">
                    <p>
                      Quam adipiscing vitae proin sagittis nisl rhoncus mattis.
                      Urna neque viverra justo nec ultrices dui sapien eget mi.
                      Feugiat sed lectus vestibulum mattis ullamcorper velit
                      sed ullamcorper morbi. Sapien faucibus et molestie ac
                      feugiat sed. Nec ullamcorper sit amet risus nullam eget
                      felis eget nunc. Morbi tincidunt augue interdum velit
                      euismod in pellentesque.
                    </p>
                    <div className="faq-images">
                      <img
                        src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/faq-img-01.webp"
                        alt="Child 1"
                      />
                      <img
                        src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/faq-img-02.webp"
                        alt="Child 2"
                      />
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Support Section */}
            <div className="support-section">
              <div className="support-content">
                <img
                  src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/faq-contact.webp"
                  alt="Support"
                  className="support-image"
                />
                <h2>Need Support?</h2>
                <p>
                  Feugiat sed lectus vestibulum mattis fusce ut placerat orci
                  ullamcorper velit.
                </p>
                <div className="support-buttons">
                  <button className="contact-button">
                    <img
                      src="contact.svg"
                      alt="contact-icon"
                      width="23px"
                      height="20px"
                    />
                    <p>Contact Us</p>
                  </button>
                  <button className="call-button">
                    <img
                      src="call.svg"
                      alt="call-icon"
                      width="23px"
                      height="20px"
                    />
                    <p>Call Us</p>
                  </button>
                  <button className="video-call-button">
                    <img
                      src="video.svg"
                      alt="video-icon"
                      width="23px"
                      height="20px"
                    />
                    <p>Video Call</p>
                  </button>
                </div>
              </div>
            </div>

            {/* Download Section */}
            <div className="download-section">
              <h2>Download Our App</h2>
              <p>
                Egestas diam in arcu cursus. Porttitor leo a a lacus vestibulum
                diam sollicitudin.
              </p>
              <div className="app-buttons">
                <img
                  src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/playstore.webp"
                  alt="Google Play"
                />
                <img
                  src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/02/app-store.webp"
                  alt="App Store"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
