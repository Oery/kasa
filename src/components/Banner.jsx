import "../styles/banner.sass";
import PropTypes from "prop-types";

Banner.propTypes = {
    text: PropTypes.string,
    imageUrl: PropTypes.string.isRequired,
    imageAlt: PropTypes.string.isRequired,
};

export default function Banner({ text, imageUrl, imageAlt }) {
    return (
        <div className="banner">
            <img src={imageUrl} alt={imageAlt} />
            {text && (
                <div>
                    <h1>{text}</h1>
                </div>
            )}
        </div>
    );
}
