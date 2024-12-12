import React from 'react'
import { Link } from 'react-router-dom'
function Banner() {
  return (
    // banner -relative,banner-image-absolute,width:100% height-100% z-index-1,objectfit-cover
    <section className="banner">
      <img src="offerpage.png" alt="kids smiling" className='banner-image' />
      <div className="container">
        <div className="banner-content-wrapper">
          <div>
            <img src="offerbadge.png" alt="offerbadge" className='offerbadge'/>
          </div>
          <div className='welcome-offer'>
            <h2>Welcome To School</h2>
            <h1 className="big-offer">BIG OFFER</h1>
          </div>
          <div className='countdown'>
            <div className="time-box">
              <p>00</p>
              <h3>Days</h3>
            </div>
            <span>:</span>
            <div className="time-box">
              <p>00</p>
              <h3>Hrs</h3>
            </div>
            <span>:</span>
            <div className="time-box">
              <p>00</p>
              <h3>Mins</h3>
            </div>
            <span>:</span>
            <div className="time-box">
              <p>00</p>
              <h3>Secs</h3>
            </div>
          </div>
          <div>
            <Link to="" className='join-button'>JOIN WITH US →</Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Banner