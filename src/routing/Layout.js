import { Link } from "react-router-dom";
import '../App.css';

const Layout = () => {
    return (
            <nav>
                <ul>
                    <li>
                        <Link to="/" className="link">Home</Link>
                    </li>
                    <li>
                        <Link to="/pagina2" className="link">Pagina 2</Link>
                    </li>
                </ul>
            </nav>


    )
};

export default Layout;