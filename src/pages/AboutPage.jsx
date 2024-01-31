import BaseLayout from "../layouts/BaseLayout";
import Banner from "../components/Banner";
import Collapse from "../components/Collapse";
import "../styles/about.sass";
import data from "../data/about.json";

function AboutPage() {
    return (
        <BaseLayout>
            <Banner imageUrl="about_banner.jpg" imageAlt="Paysage montagneux" />

            <div className="about">
                {Object.keys(data).map((key) => (
                    <Collapse title={key} key={key}>
                        <p>{data[key]}</p>
                    </Collapse>
                ))}
            </div>
        </BaseLayout>
    );
}

export default AboutPage;
