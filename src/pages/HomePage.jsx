import BaseLayout from "../layouts/BaseLayout";
import Banner from "../components/Banner";
import "../styles/global.sass";
import "../styles/home.sass";

import logements from "../data/logements.json";
import Thumbnail from "../components/Thumbnail";

function HomePage() {
    return (
        <BaseLayout>
            <Banner
                text={"Chez vous, partout et ailleurs"}
                imageUrl={"/home_banner.jpg"}
                imageAlt={"Falaises et forêt sur un littoral brumeux."}
            />

            <div className="logements-grid">
                {logements.map((logement) => (
                    <Thumbnail logement={logement} key={logement.id} />
                ))}
            </div>
        </BaseLayout>
    );
}

export default HomePage;
