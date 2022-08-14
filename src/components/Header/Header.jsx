import './Header.css';
import apple from './apple.png'
import search from './search.png'
import casew from './casew.png'

function Header() {
    let arr = [
        'Store', 'Mac', 'IPad', 'IPhone', 'Watch', 'AirPods', 'TV&Home', 'Only on Aplle', 'Accessories', 'Support'
    ]
    return (
        <>
            <header>
                <img src={apple} alt="" />
                {
                    arr.map((item, index) => <span key={index}>{item}</span>)
                }
                <img src={search} alt="" />
                <img className='img' src={casew} alt="" />
            </header>
        </>
    );
}

export default Header;
