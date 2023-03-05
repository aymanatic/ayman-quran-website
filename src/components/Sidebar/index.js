import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoA from '../../assets/images/Ayman-blacklogo-Channel.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faFileArrowDown, faHandHoldingHeart } from '@fortawesome/free-solid-svg-icons'
import { faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
    <div className='nav-bar'>
        <Link className='logo' to='/'>
            <img src={LogoA} alt='logo' />
        </Link>

        <nav>
            <NavLink exact="true" activeclassname="active" to="/">
                <FontAwesomeIcon icon={faHome} color="#000000" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="download-links" to="/downloads">
                <FontAwesomeIcon icon={faFileArrowDown} color="#000000" />
            </NavLink>
            <NavLink exact="true" activeclassname="active" className="donate-link" to="/donate">
                <FontAwesomeIcon icon={faHandHoldingHeart} color="#000000" />
            </NavLink>
        </nav>

        <ul>
            <li>
                <a target="_blank" rel='noreferrer' href='https://www.instagram.com/aymanatic/'>
                    <FontAwesomeIcon icon={faInstagram} color="#000000" />
                </a>
            </li>
            <li>
                <a target="_blank" rel='noreferrer' href='https://twitter.com/aymanatic'>
                    <FontAwesomeIcon icon={faTwitterSquare} color="#000000" />
                </a>
            </li>
        </ul>
    </div>
)

export default Sidebar