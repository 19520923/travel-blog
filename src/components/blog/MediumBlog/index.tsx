import React from 'react'

type Props = {}

const MediumBlog = (props: Props) => {
  return (
    <div className=" flex-item two-per-row border-left-1 border-right-1 padding-default margin-bot-3">
        <div className = ''>
            <div className = 'img-fit'>
                <img src="https://c4.wallpaperflare.com/wallpaper/370/228/846/baby-elephant-elephant-amazing-wildlife-wallpaper-preview.jpg" alt="" />
            </div>
        </div>
        <div className="margin-top-1">
            <div className="flex-container gap-default">
                <div className="btn primary-background ">
                    <h6>
                        INDIA
                    </h6>
                </div>
                <div className="btn outline">
                    <h6>
                        CULTURE
                    </h6>
                </div>
            </div>
            <h1 className="header">
                Keepers of Ganesh: The Vanishing Art of Mahout
            </h1>
            <p className="body">
                As Asian elephants face a myriad of threats to their existence, the 4,000 year old relationship between humans and elephants is in crisis. Along the Himalayan borderlands, captive elephants and their mahout caregivers are existing together on the margins of the modern era, with no easy answers or solutions.
            </p>
            <h3 className="author">
                Kim Frank and Jody Macdonald
            </h3>
            <div className="flex-container gap-default margin-top">
                <div className="emoution flex-container center">
                    <i className="fa-solid fa-heart"></i>
                    <h6>
                        ENLIGHTENING
                    </h6>
                </div>
                <div className="length flex-container center">
                    <i className="fa-solid fa-clock"></i>
                    <h6>
                        17 min read
                    </h6>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default MediumBlog