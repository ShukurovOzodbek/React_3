import './Box.css';

function Box({ span, name }) {
    let product = 'product3'
    return (
        <div className='ai2'>
            <div className={product}>
                <div className="left">
                    <h2>{name}</h2>
                    <span>{span}</span>
                    <div className="hr">
                        <a href="https://www.apple.com/macbook-air-m2/">Learn more</a>
                        <a href="https://www.apple.com/us/shop/goto/buy_mac/macbook_air_m2">Buy</a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Box;
