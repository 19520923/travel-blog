import React from 'react'

function FullPageBlog() {
  return (
    <div className = 'flex-center fullpage-blog'>
        <div className='fullpage-blog__image img-card'>
            <div></div>
            <img src="https://c4.wallpaperflare.com/wallpaper/370/228/846/baby-elephant-elephant-amazing-wildlife-wallpaper-preview.jpg" alt="" />
        </div>
        <div className='fullpage-blog__content'>
            <div className = 'flex-center features-story'>
                <h6>
                    features story
                </h6>
            </div>
            <h1>
                Keepers of Ganesh: The Vanishing Art of Mahout
            </h1>
            <p>
                As Asian elephants face a myriad of threats to their existence, the 4,000 year old relationship between humans and elephants is in crisis. Along the Himalayan borderlands, captive elephants and their mahout caregivers are existing together on the margins of the modern era, with no easy answers or solutions.
            </p>
            <h3>
                Kim Frank and Jody Macdonald
            </h3>
            <div className='flex-center countries'>
                <div className='btn-cg primary round md'>
                    <span>
                        INDIA
                    </span>
                </div>
                <div className = 'btn-cg primary round md'>
                    <span>
                        CULTURE
                    </span>
                </div>
            </div>
            <div className='flex-center information'>
                <div className = 'flex-center'>
                    <i className="fa-solid fa-heart"></i>
                    <span>
                        ENLIGHTENING
                    </span>
                </div>
                <div className='flex-center'>
                    <i className="fa-solid fa-clock"></i>
                    <span>
                        17 min read
                    </span>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default FullPageBlog