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
        setIndex((index + 1) % images.length);
    };

    const handlePrev = () => {
        setIndex((index - 1 + images.length) % images.length);
    };

    return (
        <div className="carrousel">
            {images.length >= 2 && ( // Only show arrows if there are more than 1 image
                <>
                    <CarrouselArrow handleClick={handlePrev} direction="left" />
                    <CarrouselArrow
                        handleClick={handleNext}
                        direction="right"
                    />
                    <p>{`${index + 1}/${images.length}`}</p>
                </>
            )}
            <img src={images[index]} alt="" />
        </div>
    );
}

export default Carrousel;
