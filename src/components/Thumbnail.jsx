import "../styles/thumbnail.sass";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";

Thumbnail.propTypes = {
    logement: PropTypes.shape({
        id: PropTypes.number.isRequired,
        title: PropTypes.string.isRequired,
        cover: PropTypes.string.isRequired,
    }).isRequired,
};

export default function Thumbnail({ logement }) {
    return (
        <Link className="thumbnail" to={"/logement/" + logement.id}>
            <div className="filter" />
            <img src={logement.cover} alt={logement.title} />
            <h2>{logement.title}</h2>
        </Link>
    );
}
