import ProductCard from "./ProductCad"

const ProductListing = ({ Produtos, qtd }) => {

    let Product = Produtos.slice(0, qtd);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", paddingBlock: "40px" }}>
            {Product.map((pdt, index) => (
                <div key={index}>
                    <ProductCard image={pdt.image} name={pdt.name} price={pdt.price} priceDiscount={pdt.priceDiscount} />
                </div>
            ))}
        </div>
    )
}

export default ProductListing