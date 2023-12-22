import Header from "../components/Header";

function BaseLayout(props) {
    return (
        <>
            <Header />
            <div>{props.children}</div>
        </>
    );
}

export default BaseLayout;
