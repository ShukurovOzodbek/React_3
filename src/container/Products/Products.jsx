import './Products.css';

function Products({ item }) {
    const { name, photo, span, column, black } = item
    let product = 'product'
    if(column){
        product += ' column'
    }
    return (
        <a className='ai'>
            <div className={product}>
                <div className="left">
                    <h2>{name}</h2>
                    <span>{span}</span>
                    <div className="hr">
                        <a href="https://www.apple.com/macbook-air-m2/">Learn more</a>
                        <a href="https://www.apple.com/us/shop/goto/buy_mac/macbook_air_m2">Buy</a>
                    </div>
                </div>
                <img src={require(`./asset/${photo}.png`)} alt="" />
            </div>
        </a>
    );
}

export default Products
    ;
