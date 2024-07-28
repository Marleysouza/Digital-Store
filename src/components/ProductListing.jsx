import ProductCard from "./ProductCad"

const ProductListing = ({ Produtos, qtd }) => {

    let Product = Produtos.slice(0, qtd);

    return (
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-between", paddingBlock: "40px" }}>
            {Product.map((pdt, index) => (
                <a href={"/Produtos/" + pdt.id} key={index} style={{ textDecoration: "none" }}>
                    <ProductCard image={pdt.image} name={pdt.name} price={pdt.price} priceDiscount={pdt.priceDiscount} />
                </a>
            ))}
        </div>
    )
}

export default ProductListing