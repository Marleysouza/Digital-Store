import Layout from './Layout.jsx';
import BuyBox from '../components/BuyBox.jsx';
import Section from '../components/Section.jsx';
import ProductListing from '../components/ProductListing.jsx';
import { Produtos } from '../data/produtos.js';
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';

const ProductViewPage = () => {
    const { id } = useParams();
    const product = Produtos.find(p => p.id === parseInt(id));
    return (
        <Layout>
            <main style={{ display: "flex", justifyContent: "space-between" }}>
                <Gallery slide={product.image} showThumbs={true} width={"55vw"} height={"38vw"}/>
                <BuyBox product={product} />
            </main>
            <Section tilte={"Produtos recomendados"} titleAling={"left"} link={"/Produtos"}>
                <ProductListing Produtos={Produtos} qtd={4} />
            </Section>
        </Layout>
    )
}

export default ProductViewPage