import Footer from "../components/Footer";
import Header from "../components/Header";
import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

BaseLayout.propTypes = {
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node,
    ]).isRequired,
};

function BaseLayout(props) {
    const { pathname } = useLocation();

    useEffect(() => {
        document.documentElement.scrollTo({
            top: 0,
            behavior: "instant",
        });
    }, [pathname]);

    return (
        <>
            <Header />
            <main>{props.children}</main>
            <Footer />
        </>
    );
}

export default BaseLayout;
