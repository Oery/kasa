import BaseLayout from "../layouts/BaseLayout";
import Banner from "../components/Banner";
import "../styles/about.sass";

function AboutPage() {
    return (
        <BaseLayout>
            <Banner imageUrl="about_banner.jpg" />
        </BaseLayout>
    );
}

export default AboutPage;
