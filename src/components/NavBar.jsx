import { NavLink } from "react-router-dom"
const NavBar = () => {

    return (
        <div id="navbotton">
            <div id="navlinks">
                <NavLink to="/" className="link-nav">Home</NavLink>
                <NavLink to="/Produtos" className="link-nav">Produtos</NavLink>
                <NavLink to="/Categorias" className="link-nav">Categorias</NavLink>
                <NavLink to="/MeusPedidos" className="link-nav">Meus Pedidos</NavLink>
            </div>
            <div id="cad-log-mob">
                <NavLink id="log-mob" to="/Login">Entrar</NavLink>
                <NavLink id="cad-mob" to="/Cadastro">Cadastra-se</NavLink>
            </div>
        </div>
    )
}

export default NavBar