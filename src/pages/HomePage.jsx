import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import Layout from "./Layout"

const HomePage = () => {
    return (
        <Layout>
            <Section tilte={"Produtos em alta"} titleAling={"left"} link={"#"}>
                <ProductListing qtd={8}/>
            </Section>
        </Layout>
    )
}

export default HomePage