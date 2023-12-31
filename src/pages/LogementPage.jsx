import BaseLayout from "../layouts/BaseLayout";
import { useParams, Navigate } from "react-router-dom";
import logements from "../data/logements.json";
import "../styles/logement.sass";
import Tags from "../components/Tags";
import Carrousel from "../components/Carrousel";
import Host from "../components/Host";
import Rating from "../components/Rating";
import Collapse from "../components/Collapse";

function LogementPage() {
    let { id } = useParams();
    const logement = logements.find((logement) => logement.id === id);

    if (!logement) {
        return <Navigate to="/error" replace={true} />;
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
                        <Tags tags={tags} />
                    </div>
                    <aside>
                        <Host host={host} />
                        <Rating rating={rating} />
                    </aside>
                </div>
                <div className="more-info">
                    <Collapse title="Description">{description}</Collapse>
                    <Collapse title="Equipements">
                        {equipments.map((equipment) => (
                            <div key={equipment}>{equipment}</div>
                        ))}
                    </Collapse>
                </div>
            </div>
        </BaseLayout>
    );
}

export default LogementPage;
