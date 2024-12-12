  import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";

  function Experts() {
      const experts = [
          { name: 'Aurora Jackson', subject: 'English', image: 'image12.png' },
          { name: 'Cosmi', subject: 'French', image: 'image13.png' },
          { name: 'Debora', subject: 'Classroom Management', image: 'image14.png' },
          { name: 'Elspeth', subject: 'Montessori', image: 'image15.png' },
        ];
    return (
      <>
        <div className='container'>
          <div className="experts-container">
          <div className="expert-header">
            <div>
                <h3>OUR EXPERTS</h3>
                <h1>Incredible People Behind Incredible Students.</h1>
            </div>
            <div className='stars-icon'>
                <img src="star.svg" alt="" height='110px' width='110px' />
            </div>
            <div>
                <p>
                    Nec feugiat in fermentum posuere urna. Quam nulla porttitor massa id neque aliquam vestibulum morbi blandit.
                    Aliquam faucibus purus in massa tempor nec feugiat. Pharetra vel turpis nunc eget. Proin libero nunc consequat
                    interdum varius sit amet..
                </p>
            </div>
          </div>
          <div className="experts-grid">
            {experts.map((expert, index) => (
              <div key={index} className="expert-card">
                <img src={expert.image} alt={expert.name} className="expert-image" />
                <div className='experts-icon'>
                  <a href="" className='expert-icon'><FaTwitter /></a>
                  <a href="" className='expert-icon'><FaFacebookF/></a>
                  <a href="" className='expert-icon'><FaYoutube/></a>
                  <a href="" className='expert-icon'><FaInstagram/></a>
                </div>
                <div className='expert-detail'>
                    <h3 className="expert-name">{expert.name}</h3>
                    <p className="expert-subject">{expert.subject}</p>
                </div>
              </div>
            ))}
          </div>
          </div>
        </div>
      </>
    )
  }

  export default Experts