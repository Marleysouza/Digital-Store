import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import Layout from "./Layout"
import { Produtos } from "../data/produtos"

const HomePage = () => {
    return (
        <Layout>
            <Section tilte={"Produtos em alta"} titleAling={"left"} link={"#"}>
                <ProductListing Produtos={Produtos} qtd={8} />
            </Section>
        </Layout>
    )
}

export default HomePage