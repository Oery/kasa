import Header from "../components/Header";

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
