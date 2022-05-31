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
                        <Link to="/favcoins" className="link">Coins</Link>
                    </li>
                </ul>
            </nav>


    )
};

export default Layout;