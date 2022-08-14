import Box from '../../components/Box/Box';
import Boxes from '../../components/Boxes/Boxes';
import Products from '../Products/Products';
import './Cont.css';
import mac from './mac.png'

function Cont() {
    const products = [
        {
            id: 1,
            name: 'MacBook Air',
            span: 'Supercharged by M2',
            photo: 'mac_air',
            column: false,
            black: false
        },
        {
            id: 2,
            name: 'iPhone 13',
            span: 'Your super power.',
            photo: 'iphonepro',
            column: true,
        }
    ]
    const comp = [
        {
            id: 3,
            name: 'iPhone 13 Pro',
            span: 'Oh. So. Pro.',
            photo: 'iphone13.png',
            column: true,
            black: false
        },
        {
            id: 4,
            name: 'MacBook Pro 13\'',
            span: 'Supercharged by M2',
            photo: 'macbookpro.png',
            column: true,
            black: true
        },
        {
            id: 5,
            name: <h2>iWatch <b>SERIES 7</b></h2>,
            span: 'It\'s our largest display yet.',
            photo: 'iwatch.png',
            column: true,
            black: false
        },
        {
            id: 6,
            name: 'iPad Air',
            span: 'Light Bright. Full of might.',
            photo: 'ipad.png',
            column: true,
            black: true
        },
        {
            id: 7,
            name: 'iCard',
            photo: 'icard.png',
            span: 'Get up to 3% Daily Cash back with every purchse.',
            column: true,
            black: false
        }
    ]

    return (
        <div className="container">
            <div className="cont">
                <h1><i>Get <b>supercharged</b> for college</i></h1>
                <span>Save on Mac or iPad. Plus get gift card up to $150.</span>
                <a href="https://www.apple.com/us-hed/shop/back-to-school">Shop Now </a>
                <img src={mac} alt="" />
            </div>
            <div className="boxes">
                {
                    products.map((item, index) => <Products item={item} key={index} />)
                }
                <div className="comps">
                    {
                        comp.map((item, index) => <Boxes item={item} key={index} photo={item.photo} />)
                    }
                    <Box span={'With Spacial Audio'} name={'Airpods'} />
                </div>
            </div>
        </div>
    );
}

export default Cont;
