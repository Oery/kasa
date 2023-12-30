import BaseLayout from "../layouts/BaseLayout";
import Banner from "../components/Banner";
import "../styles/global.sass";

function HomePage() {
    return (
        <BaseLayout>
            <Banner
                text={"Chez vous, partout et ailleurs"}
                imageUrl={"/home_banner.jpg"}
                imageAlt={"Falaises et forêt sur un littoral brumeux."}
            />
            <h1>Home</h1>
            <p>This is the home page</p>
        </BaseLayout>
    );
}

export default HomePage;
