import 'react-multi-carousel/lib/styles.css';
import './index.scss';
import File1 from '../../assets/files/Al-Fatihah.pdf'
import Video from '../../assets/files/logoIntroWNoise-Channel.mp4'


const Home = () => {
    
    return (
        <div className="container downloads-page">
            <div className="title">
                <h1 className='ar-title'>﷽</h1>
            </div>
            <div className='video-container'>
                <video className='video'  controls autoplay muted>
                        <source src={Video} type="video/mp4" />
                </video>
            </div>
            <div className='scroll'>
                <h2>Scroll! More coming soon inshaAllah</h2>
            </div>
            
            
            <div className='files'>
                <div className='box'>
                    <div className='card-img'></div>
                    <h2 className='card-header'>Al-Fatihah | الفاتِحَةْ</h2>
                    <a href="#popup" className='view-button'>VIEW</a>
                </div>
            </div>

            <div id='popup' className='overlay'>
                <div className='popup'>
                    <h2>Al-Fatihah | الفاتِحَةْ</h2>
                    <div className='popup-img'></div>
                    <a href='#' className='cross'>&times;</a>
                    <p><strong>Al-Fatihah</strong> is the the firt chapter of the Quran. It is the opening of the Quran.
                    This template is <strong>free for all use</strong> as long as you are respectful of this amazing <strong>holy book!</strong> These are pages from the beautiful Mushaf Qatar (hafs).
                    </p>
                    <a href={File1} download="Al-Fatihah" className='download-button'>DOWNLOAD</a>
                    <a href='https://www.paypal.com/donate/?hosted_button_id=2RBFYKYKWFQES' className='donate-button'>DONATE</a>
                </div>
            </div>
        </div>
        
    )
}
//<Link to="/downloads" className='flat-button'>DOWNLOAD</Link>
/*
    <div className="cards">
        <div className='card'>Hello1</div>
        <div className='card'>Hello2</div>
        <div className='card'>Hello3</div>
        <div className='card'>Hello4</div>
        <div className='card'>Hello5</div>
    </div>

    
*/
export default Home