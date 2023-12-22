import BaseLayout from "../layouts/BaseLayout";
import Banner from "../components/Banner";
import "../styles/global.sass";

function HomePage() {
    return (
        <BaseLayout>
            <Banner
                text={"test"}
                imageUrl={""}
                imageAlt={"test de description"}
            />
            <h1>Home</h1>
            <p>This is the home page</p>
        </BaseLayout>
    );
}

export default HomePage;
