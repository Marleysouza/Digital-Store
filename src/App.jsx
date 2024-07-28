import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import HomePage from "./pages/HomePage.jsx";
import ProductListingPage from './pages/ProductListingPage.jsx';
import Cadastro from './pages/Cadastro.jsx';
import Login from './pages/Login.jsx';
import Categorias from './pages/Categorias.jsx';
import MeusPedidos from './pages/MeusPedidos.jsx';


function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Cadastro />} />
        <Route path="/Produtos" element={<ProductListingPage />} />
        <Route path="/Categorias" element={<Categorias />} />
        <Route path="/MeusPedidos" element={<MeusPedidos />} />
      </Routes>
    </Router>
  )
}

export default App
