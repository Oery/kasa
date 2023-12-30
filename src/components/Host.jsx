import { PropTypes } from "prop-types";
import "../styles/host.sass";

Host.propTypes = {
    host: PropTypes.shape({
        name: PropTypes.string.isRequired,
        picture: PropTypes.string.isRequired,
    }).isRequired,
};

export default function Host({ host }) {
    return (
        <div className="host">
            <span>{host.name}</span>
            <img src={host.picture} alt={host.name} />
        </div>
    );
}
