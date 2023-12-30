import { useState } from "react";
import PropTypes from "prop-types";
import "../styles/carrousel.sass";
import CarrouselArrow from "./CarrouselArrow";

Carrousel.propTypes = {
    images: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function Carrousel({ images }) {
    const [index, setIndex] = useState(0);

    const handleNext = () => {
        if (index === images.length - 1) {
            setIndex(0);
        } else {
            setIndex(index + 1);
        }
    };

    const handlePrev = () => {
        if (index === 0) {
            setIndex(images.length - 1);
        } else {
            setIndex(index - 1);
        }
    };

    if (images.length === 1) {
        return (
            <div className="carrousel">
                <img src={images[0]} alt="" />
            </div>
        );
    }

    return (
        <div className="carrousel">
            <CarrouselArrow handleClick={handlePrev} direction="left" />
            <CarrouselArrow handleClick={handleNext} direction="right" />
            <img src={images[index]} alt="" />
            <p>{`${index + 1}/${images.length}`}</p>
        </div>
    );
}

export default Carrousel;
