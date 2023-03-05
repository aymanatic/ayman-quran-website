import { Link } from 'react-router-dom';
import 'react-multi-carousel/lib/styles.css';
import './index.scss';


const Donate = () => {
    
    return (
        <div className="container donate-page">
            <h1>HELP SUPPORT!</h1>

            <div className='description'>
                <p>My work is free for all uses and is available 100% free of charge, but you can donate to help me save up to go for a Umrah (Islamic pilgrimage to Mecca) and buy more tools to make more ressources (a better computer...)</p>
                <p>Make sure to share this website with your brothers and sisters to benefit them and yourself.</p>
                <p>May Allah be pleased with all of us!</p>
            </div>
            <Link to="https://www.paypal.com/donate/?hosted_button_id=2RBFYKYKWFQES" className='flat-button2'>DONATE</Link>
            <div className='qr-code'></div>
        </div>
        
    )
}

export default Donate