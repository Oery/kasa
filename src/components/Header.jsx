import Logo from "./Logo";
import "../styles/header.sass";

export default function Header() {
    return (
        <header>
            <Logo color="#FF6060" />
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
