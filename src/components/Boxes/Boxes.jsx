import './Boxes.css';

function Boxes({ item }) {
    const { name, span, photo, column, black } = item
    let product = 'product2'
    if (black) {
        product += ` black`
    }
    console.log(photo);
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
                <img src={require(`./${photo}`)} alt="" />
            </div>
        </div>
    );
}

export default Boxes;
