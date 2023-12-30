import { PropTypes } from "prop-types";
import "../styles/tags.sass";

Tags.propTypes = {
    tags: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default function Tags({ tags }) {
    return (
        <div className="tags">
            {tags.map((tag) => (
                <span className="tag" key={tag}>
                    {tag}
                </span>
            ))}
        </div>
    );
}
