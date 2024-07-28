import ProductListing from "../components/ProductListing"
import Section from "../components/Section"
import Layout from "./Layout"
import Gallery from "../components/Gallery"
import { Produtos } from "../data/produtos.js"
import { slide } from "../data/slide.js"
import { colecoes } from "../data/colecoes.js"

const HomePage = () => {
    return (
        <Layout>
            <main>
                <Gallery slide={slide} />
            </main>
            <Section tilte={"Coleções em destaque"} titleAling={"center"} >
                <div style={{ display: "flex", justifyContent: "space-around", paddingBlock: "40px", gap: "20px" }}>
                    <a href="#"><img style={{ width: "100%", borderRadius: "8px" }} src={colecoes[0].src} /></a>
                    <a href="#"><img style={{ width: "100%", borderRadius: "8px" }} src={colecoes[1].src} /></a>
                    <a href="#"><img style={{ width: "100%", borderRadius: "8px" }} src={colecoes[2].src} /></a>
                </div>
            </Section>
            <Section tilte={"Produtos em alta"} titleAling={"left"} link={"#"}>
                <ProductListing Produtos={Produtos} qtd={8} />
            </Section>
        </Layout>
    )
}

export default HomePage