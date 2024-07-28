import Layout from './Layout.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import {Produtos} from '../data/produtos.js'

const ProductListingPage = () => {
    return (
        <Layout>
            <Section>
                <ProductListing Produtos={Produtos}/>
            </Section>
        </Layout>
    )
}

export default ProductListingPage