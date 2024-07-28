import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import Layout from "./Layout"
import { Produtos } from "../data/produtos.js"
import { slide } from "../data/slide.js"
import Gallery from "../components/Gallery"

const HomePage = () => {
    return (
        <Layout>
            <Gallery slide={slide} />
            <Section tilte={"Produtos em alta"} titleAling={"left"} link={"#"}>
                <ProductListing Produtos={Produtos} qtd={8} />
            </Section>
        </Layout>
    )
}

export default HomePage