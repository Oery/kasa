import BaseLayout from "../layouts/BaseLayout";
import { useParams } from "react-router-dom";
import ErrorNotFoundPage from "./ErrorNotFoundPage";
import logements from "../data/logements.json";
import "../styles/logement.sass";
import Carrousel from "../components/Carrousel";

function LogementPage() {
    let { id } = useParams();

    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <ErrorNotFoundPage />;
    }

    const {
        title,
        pictures,
        location,
        tags,
        host,
        rating,
        description,
        equipments,
    } = logement;

    return (
        <BaseLayout>
            <div className="logement">
                <Carrousel images={pictures} />
                <div className="info">
                    <div>
                        <h1 className="title">{title}</h1>
                        <h6 className="location">{location}</h6>
                    </div>
                    <aside>
                    </aside>
                </div>
                <div className="more-info">
                </div>
            </div>
        </BaseLayout>
    );
}

export default LogementPage;
