import { Link } from "react-router-dom";
import "../styles/error.sass";
import BaseLayout from "../layouts/BaseLayout";

function ErrorNotFoundPage() {
    return (
        <BaseLayout>
            <div className="error-page">
                <h1>404</h1>
                <p>Oups! La page que vous demandez n&apos;existe pas.</p>
                <Link to="/">Retourner sur la page d&apos;accueil</Link>
            </div>
        </BaseLayout>
    );
}

export default ErrorNotFoundPage;
