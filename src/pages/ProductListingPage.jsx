import Layout from './Layout.jsx'
import Section from '../components/Section.jsx'
import ProductListing from '../components/ProductListing.jsx'
import { Produtos } from '../data/produtos.js'
import FilterGroup from '../components/FilterGroup.jsx'

const ProductListingPage = () => {
    return (
        <Layout>
            <main style={{ display: "flex", padding: "34px 0px 34px 50px" }}>
                <div>
                    <div id='filtrarpreco'>
                        <span>Ordernar por</span>
                        <select name="filtro">
                            <option value="">Padrão</option>
                            <option value="dog">Menor Preço</option>
                            <option value="cat">Maior Preço</option>
                        </select>
                    </div>
                    <div>
                        <span>Filtrar por</span>
                        <FilterGroup />
                    </div>
                </div>
                <Section>
                    <ProductListing Produtos={Produtos} />
                </Section>
            </main >
        </Layout>
    )
}

export default ProductListingPage