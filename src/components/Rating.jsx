import { PropTypes } from "prop-types";
import RatingStar from "./RatingStar";

Rating.propTypes = {
    rating: PropTypes.string.isRequired,
};

export default function Rating({ rating }) {
    const starsRating = parseInt(rating);
    const stars = [];

    for (let i = 0; i < 5; i++) {
        if (i < starsRating) {
            stars.push(<RatingStar filled key={i} />);
        } else {
            stars.push(<RatingStar key={i} />);
        }
    }

    return <div className="rating">{stars}</div>;
}
