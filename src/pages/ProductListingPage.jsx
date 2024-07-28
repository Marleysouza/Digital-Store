import Layout from './Layout.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import { Produtos } from '../data/produtos.js'

const ProductListingPage = () => {
    return (
        <Layout>
            <main style={{ display: "flex", padding: "34px 0px 34px 50px" }}>
                <div>
                    <button>Ordernar</button>
                    <div>filtrosdsadsads</div>
                    <div>filtrosdsadsads</div>
                    <div>filtrosdsadsads</div>
                    <div>filtrosdsadsads</div>
                    <div>filtrosdsadsads</div>
                </div>
                <Section>
                    <ProductListing Produtos={Produtos} />
                </Section>
            </main >
        </Layout>
    )
}

export default ProductListingPage