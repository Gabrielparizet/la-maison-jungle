import logo from '../assets/logo.png'
import '../styles/Banner.css';
import Recommendation from './Recommendation'

const Banner = () => {
    const title = 'the jungle house';

    return (
        <div className='tjh-banner'>   
            <img src={logo} alt='The jungle house' className='tjh-logo' />
            <h1 className="tjh-title">{title.toUpperCase()}</h1>
        </div>
    )
};


export default Banner;