import React from 'react'
import ActivityClassroom from './ActivityClassroom'

function KidsEducation() {
  return (
    <>
        <section className='tailored-classes'>
            <div className='tailor-container'>
            <div className='curl-image-left'>
                    <img src="leftcurl.svg" alt="" width='150' height='150' />
                </div>
                <div className="tailor-header">
                    <h5>KIDS EDUCATION</h5>
                    <h1>
                        Unique Place Where The Magic Of
                        Learning Starts.
                    </h1>
                </div>
                <div className='pen-image'>
                    <img src="https://dtthemes.kinsta.cloud/a-for-apple/wp-content/uploads/sites/2/2024/03/pp-1.webp" alt="" height='150px' width='150px' />
                </div>
            </div>
    </section>
    <ActivityClassroom/>
    </>

    
  )
}

export default KidsEducation