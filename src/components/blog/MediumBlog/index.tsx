import React from 'react'
import Title from 'react-parallax-tilt'

type Props = {}

const MediumBlog = (props: Props) => {
    return (
        <Title scale={1.1} glareEnable = {false}>
            <div className='medium-blog'>
                <div className='medium-blog__image'>
                    <div>
                    </div>
                    <img src="https://c4.wallpaperflare.com/wallpaper/370/228/846/baby-elephant-elephant-amazing-wildlife-wallpaper-preview.jpg" alt="" />
                </div>
                <div className="medium-blog__content">
                    <h4>
                        Keepers of Ganesh: The Vanishing Art of Mahout
                    </h4>
                    <div className="flex countries">
                        <div className="btn-cg primary round xsmall">
                            <span>
                                INDIA
                            </span>
                        </div>
                        <div className="btn-cg primary round xsmall">
                            <span>
                                CULTURE
                            </span>
                        </div>
                    </div>
                    <p className="body">
                        As Asian elephants face a myriad of threats to their existence, the 4,000 year old relationship between humans and elephants is in crisis. Along the Himalayan borderlands, captive elephants and their mahout caregivers are existing together on the margins of the modern era, with no easy answers or solutions.
                    </p>
                    <h3 className="author">
                        Kim Frank and Jody Macdonald
                    </h3>
                    <div className="flex informations">
                        <div className="flex-center">
                            <i className="fa-solid fa-heart"></i>
                            <span>
                                ENLIGHTENING
                            </span>
                        </div>
                        <div className="flex-center">
                            <i className="fa-solid fa-clock"></i>
                            <span>
                                17 min read
                            </span>
                        </div>
                    </div>

                </div>
            </div>
        </Title>
    )
}

export default MediumBlog