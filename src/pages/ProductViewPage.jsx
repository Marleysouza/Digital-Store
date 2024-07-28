import Layout from './Layout.jsx'
import BuyBox from '../components/BuyBox'
import { Produtos } from '../data/produtos.js'
import { slide } from '../data/slide.js'
import { useParams } from 'react-router-dom';
import Gallery from '../components/Gallery.jsx';

const ProductViewPage = () => {
    const { id } = useParams();
    const product = Produtos.find(p => p.id === parseInt(id));
    return (
        <Layout>
            <main style={{ display: "flex", justifyContent: "space-between" }}>
                <Gallery slide={slide} showThumbs={true} largura={"700px"} />
                <BuyBox product={product} />
            </main>
        </Layout>
    )
}

export default ProductViewPage