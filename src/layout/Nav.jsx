
import { NavLink } from "react-router-dom";
import Logo from './Logo.png';

function Nav() {
    return (
        <nav>

        <div className="logo">
            <img src={Logo} alt="" style={{ width: 250, height: 100 }} />
        </div>
 

            <ul>
                <li><NavLink to="/">Home</NavLink></li>
                <li><NavLink to="/cadastros">Cadastros</NavLink></li>
                <li><NavLink to="/pagina2">Quem somos?</NavLink></li>
                <li><NavLink to="/pagina3">Cardapio</NavLink></li>
                <li><NavLink to="/pagina4">Onde estamos?</NavLink></li>
                <li><NavLink></NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;