import { Link } from 'react-router-dom'

function Toolbar() {
    return (
        <nav>
            <ul className='flex-center'>
                <li className='active'>
                    <Link to='/'>
                        <i className="fa-solid fa-house"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/explore'>
                        <i className="fa-brands fa-wpexplorer"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/stories'>
                        <i className="fa-solid fa-book-open"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/countries'>
                        <i className="fa-solid fa-earth-asia"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/activities'>
                        <i className="fa-regular fa-bell"></i>
                    </Link>
                </li>
                <li>
                    <Link to='/personal'>
                        <i className="fa-solid fa-person"></i>
                    </Link>
                </li>
            </ul>
        </nav>
    )
}

export default Toolbar  