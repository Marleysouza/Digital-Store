const ProductCard = ({ image, name, price, priceDiscount }) => {
    let color = ""
    let text = ""
    let disp = "none"
    if (priceDiscount) {
        color = "var(--light-gray)"
        text = "line-through"
        disp = "block"
    }
    return (
        <div id="productcard">
            <img src={image} />
            <h1>{name}</h1>
            <div id="productcard-price">
                <span style={{ color: color, textDecoration: text }}>{"$" + price}</span>
                <span style={{ display: disp }}>{"$" + priceDiscount}</span>
            </div>
        </div>
    )
}

export default ProductCard