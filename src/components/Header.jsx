import { Link } from "react-router-dom";

export default function Header() {
    return (
        <header>
            <img src="" alt="Logo de Kasa" />
            <nav>
                <ul>
                    <li>
                        <Link to="/">Accueil</Link>
                    </li>
                    <li>
                        <Link to="/about">A propos</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
