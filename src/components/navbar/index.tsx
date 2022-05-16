import {useState, useRef} from 'react'
import {Link} from 'react-router-dom'
import useOnClickOutside from '../../hooks/useClickOutSide'

function Toolbar(){
    const [navBar, setNavBar] = useState(false)

    const handleUserNav = () => {
        setNavBar(!navBar)
    }

    const ref = useRef(null)

    useOnClickOutside(ref, () => navBar&&setNavBar(false))

  return (
    <nav>
        <div>
            <Link to = '/'>
                <i className="fa-solid fa-blog" style={{fontSize: 36, color: 'black'}}></i>
            </Link>
        </div>
        <div>
            <ul >
                <li >
                    Explore
                    <div>
                        <Link to = '/editorpick'>
                            <div>
                                <h3>
                                    EDICTOR'S PICK
                                </h3>
                                <p>
                                    The lastest inspiring stories from over the world
                                </p>
                                <span></span>
                            </div>
                        </Link>
                        <Link to = '/journeys'>
                            <div>
                                <h3>
                                    YOURNEYS
                                </h3>
                                <p>
                                    7-day series of short stories, straight to your inbox
                                </p>
                                <span></span>
                            </div>
                        </Link>
                        <Link to = '/places'>
                            <div>
                                <h3>
                                    PLACES
                                </h3>
                                <p>
                                    Explore top stories by country and spectacular place
                                </p>
                                <span></span>
                            </div>
                        </Link>
                        <Link to = '/channels'>
                            <div>
                                <h3>
                                    CHANNELS
                                </h3>
                                <p>
                                    Follow the topics and stories that matter most to you
                                </p>
                                <span></span>
                            </div>
                        </Link>
                    </div>
                </li>
                <line>
                    Comunity
                </line>
                <Link to = '/store'>
                    <li>
                        Store
                    </li>
                </Link>
                <Link to = '/about'>
                    <li>
                        About
                    </li>
                </Link>
            </ul>
        </div>
        <div>
            <Link to = '/search'>
                <i className="fa-solid fa-magnifying-glass" style={{fontSize: 24, color: 'black'}}></i>
            </Link>
            <div onClick={handleUserNav} ref = {ref}>
                <i className="fa-solid fa-ellipsis" style={{fontSize: 24}}></i>
                <div>
                    <ul>
                        <Link to = '/profile'>
                            <li className = ''>
                                <i className="fa-solid fa-user"></i>
                                Profile
                            </li>
                        </Link>
                        <Link to = '/bookmark'>
                            <li className = ''>
                                <i className="fa-solid fa-bookmark"></i>
                                Bookmark
                            </li>
                        </Link>
                        <Link to = '/settings'>
                            <li className = ''>
                                <i className="fa-solid fa-gear"></i>
                                Settings
                            </li>
                        </Link>
                        <Link to = '/logout'>
                            <li className = ''>
                                <i className="fa-solid fa-arrow-right-from-bracket"></i>
                                Logout
                            </li>
                        </Link>
                    </ul>
                </div>
            </div>
        </div>
    </nav>
  )
}

export default Toolbar  