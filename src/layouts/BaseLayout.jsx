import Header from "../components/Header";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

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
            <div>{props.children}</div>
        </>
    );
}

export default BaseLayout;
