import Logo from "./Logo"
import buycart from '../assents/svg/BuyCart.svg'
import NavBar from "./NavBar"

const Header = () => {
    return (
        <header className="cabecalho">
            <div id="navtop">
                <Logo color={"var(--primary)"} sizeicon={"33px"} sizecontain={"253px"} />
                <form id="searchbar">
                    <input id="searchinput" placeholder="Pesquisar Produto..."></input>
                    <button id="searchbtn">
                        <svg width="24" height="24" viewBox="0 0 21 21" fill="none">
                            <circle cx="9.76663" cy="9.76663" r="8.98856" stroke="var(--dark-gray-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                            <path d="M16.0183 16.4852L19.5423 20.0001" stroke="var(--dark-gray-3)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                    </button>
                </form>
                <div id="cad-log">
                    <a id="cad" href="#">Cadastre-se</a>
                    <a id="log" href="#">Entrar</a>
                </div>
                <div id="buycart-contain">
                    <img src={buycart}></img>
                    <span>0</span>
                </div>
            </div>
            <NavBar />
        </header>
    )
}

export default Header