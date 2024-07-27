const NavBar = () => {

    return (
        <div id="navbotton">
            <div id="navlinks">
                <a href="/" className="link-nav">Home</a>
                <a href="/Produtos" className="link-nav">Produtos</a>
                <a href="/Categorias" className="link-nav">Categorias</a>
                <a href="/Meus-pedidos" className="link-nav">Meus Pedidos</a>
            </div>
            <div id="cad-log-mob">
                <a id="log-mob" href="/Login">Entrar</a>
                <a id="cad-mob" href="/Cadastro">Cadastra-se</a>
            </div>
        </div>
    )
}

export default NavBar