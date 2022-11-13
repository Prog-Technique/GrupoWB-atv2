import { Link } from 'react-router-dom';
import './style.css';

function Header() {
    return (
        <header>
            <div className='logo'>
                <p>WB</p>
            </div>

            <ul className="nav-links">
                <input type="checkbox" id="checkbox_toggle" />
                <label htmlFor="checkbox_toggle" className="hamburger">&#9776;</label>

                <div className="menu">
                    <li><Link to="/">Home</Link></li>
                    <li className="services">
                        <Link to="/">Cadastrar</Link>
                        <ul className="dropdown">
                            <li><Link to="/cadastrar_cliente">Cliente</Link></li>
                            <li><Link to="/cadastrar_produto_e_servico">Produtos e/ou Serviço</Link></li>
                        </ul>
                    </li>
                    <li className="services">
                        <Link to="/">Listagem</Link>
                        <ul className="dropdown">
                            <li><Link to="/clientes">Clientes</Link></li>
                            <li><Link to="/produtos">Produtos</Link></li>
                            <li><Link to="/servicos">Servicos</Link></li>
                            <li><Link to="/listagens">Opções de Listagens</Link></li>
                        </ul>
                    </li>
                </div>

            </ul>
        </header>
    )
}

export default Header;