import React from 'react'
import Footer from './Footer'

function OurInsta() {
  return (
    <div className="insta-section">
        <div className="insta-image">
            <h1 className='insta-header'>Follow Instagram @ourinsta</h1>
            <div className="image-container">
                <img src="insta1.png" alt="Family Playing" className="tilted-image" />
                <img src="insta2.png" alt="Stuffed Toys" className="tilted-image" />
                <img src="insta3.png" alt="Mother and Baby" className="tilted-image" />
                <img src="insta4.png" alt="Kids Playing" className="tilted-image" />
                <img src="insta5.png" alt="Child Smiling" className="tilted-image image-5" />
                <img src="insta6.png" alt="Child Sitting" className="tilted-image image-6" />
            </div>
        </div>
    <Footer/>
    </div>
  )
}

export default OurInsta