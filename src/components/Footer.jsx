import Info from "./Info.jsx"
import { informacoes } from "../data/informacoes.js"
import Logo from "./Logo"
import { contatos } from "../data/contatos.js"
import { categorias } from "../data/categorias.js"

const Footer = () => {
    return (
        <footer className="rodape">
            <div id="rodape-content">
                <div id="rodape-logo-desc">
                    <Logo color={"var(--white)"} sizeicon={"33px"} />
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi magnam nesciunt dolor dolorum.</p>
                    <div>icones</div>
                </div>
                <div id="rodape-info">
                    <Info title={"informações"} informations={informacoes} />
                    <Info title={"informações"} informations={categorias} />
                    <Info title={"informações"} informations={contatos} />
                </div>
            </div>
            <hr />
            <span id="dir-aut">@ 2024 Digital Store</span>
        </footer>
    )
}

export default Footer