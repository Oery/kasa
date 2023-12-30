import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import "../styles/header.sass";

export default function Header() {
    return (
        <header>
            <Logo color="#FF6060" />
            <nav>
                <ul>
                    <li>
                        <NavLink to="/">Accueil</NavLink>
                    </li>
                    <li>
                        <NavLink to="/about">A Propos</NavLink>
                    </li>
                </ul>
            </nav>
        </header>
    );
}
