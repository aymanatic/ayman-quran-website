import { Link } from 'react-router-dom';
import LogoTitle from '../../assets/images/Ayman-blacklogo-Channel.png'
import './index.scss';

const Home = () => {
    return (
        <div className="container home-page">
            <div className="text-zone">
                <h1>As Salam Aleykoum, <br /> I'm <br/>
                    <img src={LogoTitle} alt="developer" />
                    <span>| Ayman</span>
                </h1>
                <h2>I make free ressources for muslims to help them learn the Quran</h2>
                <Link to="/downloads" className='flat-button'>GET RESSOURCES</Link>
                
            </div>

        </div>
    )
}
//<Link to="/contact" className='flat-button2'>CONTACT ME!</Link>
export default Home