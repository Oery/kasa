import "../styles/card.sass";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Card.propTypes = {
    logement: PropTypes.shape({
        id: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
    }).isRequired,
};

export default function Card({ logement }) {
    return (
        <Link className="card" to={"/logement/" + logement.id}>
            <div className="filter" />
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
        </Link>
    );
}
