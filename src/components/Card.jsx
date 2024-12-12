import React, { useState } from 'react';
import { FaRegStar, FaStar } from 'react-icons/fa';

const Items = ({ title, category, description, pricing, icon, rating, star }) => {
  return (
    <div className="card">
      <div className="card-icon">
        <img src={icon} alt={`${title} Icon`} />
      </div>
      <div className="card-content">
        <div className="card-details">
          <h3 className="card-title">{title}</h3>
          <div className="card-des">
            <h1 className="card-category">{category}</h1>
            <p className="card-pricing">{pricing}</p>
          </div>
          <p className="card-description">{description}</p>
        </div>
        <div className="card-bottom">
          <div className="star-icon">
            {star}
            <span className="card-rating">{rating}</span>
          </div>
          <button className="join-class-button">Join Class</button>
        </div>
      </div>
    </div>
  );
};

function Card() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const data = [
    {
      title: 'Sports',
      category: 'Kids Playing Club',
      description: 'Hac habitasse platea dictumst vestibulum rhoncus est. Pulvinar sapien et ligula.',
      pricing: (
        <>
          <del className="del-pricing"><span>$89</span></del>
          <span>$79</span>
        </>
      ),
      icon: 'image1.png',
      star: (
        <>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
        </>
      ),
      rating: '5',
    },
    {
      title: 'Dance',
      category: 'Western Dance Class',
      description: 'Dapibus ultrices in iaculis nunc sed augue lacus. Tortor id aliquet lectus proin.',
      pricing: 'Free',
      icon: 'image2.png',
      star: (
        <>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaRegStar color="gold" />
        </>
      ),
      rating: '4',
    },
    {
      title: 'Craft',
      category: 'Painting Class',
      description: 'Elit pellentesque habitant morbi tristique senectus et netus et Etiam dignissim diam quis.',
      pricing: 'Free',
      icon: 'image3.png',
      star: (
        <>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaRegStar color="gold" />
        </>
      ),
      rating: '4',
    },
    {
      title: 'Craft',
      category: 'Art Club',
      description: 'Convallis a cras semper auctor neque vitae. Malesuada nunc vel risus commodo viverra.',
      pricing: (
        <>
          <del className="del-pricing"><span>$69</span></del>
          <span>$49</span>
        </>
      ),
      icon: 'image8.png',
      star: (
        <>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
        </>
      ),
      rating: '5',
    },
    {
      title: 'Indoor',
      category: 'Engineering Class',
      description: 'Nascetur ridiculus mus mauris vitae ultricies leo. Eget arcu dictum varius duis at.',
      pricing: (
        <>
          <del className="del-pricing"><span>$69</span></del>
          <span>$49</span>
        </>
      ),
      icon: 'image4.png',
      star: (
        <>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaRegStar color="gold" />
        </>
      ),
      rating: '4',
    },
    {
      title: 'Language',
      category: 'Math League',
      description: 'Gravida cum sociis natoque penatibus. Enim nec dui nunc mattis enim ut.',
      pricing: (
        <>
          <del className="del-pricing"><span>$85</span></del>
          <span>$75</span>
        </>
      ),
      icon: 'image6.png',
      star: (
        <>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
        </>
      ),
      rating: '5',
    },
    {
      title: 'Music',
      category: 'Orchestra Player',
      description: 'Leo urna molestie at elementum eu. Duis at consectetur lorem donec massa sapien.',
      pricing: (
        <>
          <del className="del-pricing"><span>$36</span></del>
          <span>$29</span>
        </>
      ),
      icon: 'image5.png',
      star: (
        <>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
        </>
      ),
      rating: '5',
    },
    {
      title: 'Music',
      category: 'Music Class',
      description: 'Amet mattis vulputate enim nulla aliquet porttitor lacus luctus.',
      pricing: (
        <>
          <del className="del-pricing"><span>$59</span></del>
          <span>$39</span>
        </>
      ),
      icon: 'image7.png',
      star: (
        <>
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaStar color="gold" />
          <FaRegStar color="gold" />
        </>
      ),
      rating: '4',
    },
  ];

  const filteredData = selectedCategory === 'All'
    ? data
    : data.filter((item) => item.title === selectedCategory);

  return (
    <>
      <div className="interests">
        {['All', 'Craft', 'Dance', 'Indoor', 'Language', 'Music', 'Sports'].map((category) => (
          <button
            key={category}
            className="interest"
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </button>
        ))}
      </div>
      <div className="card-container">
        {filteredData.map((item, index) => (
          <Items
            key={index}
            {...item}
          />
        ))}
      </div>
    </>
  );
}

export default Card;
