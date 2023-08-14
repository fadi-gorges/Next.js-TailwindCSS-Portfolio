import HomeSection from "@app/HomeSection";
import AboutSection from "@app/AboutSection";

export const metadata = {
    description: ""
}

const HomePage = () => {
    return (
        <main>
            <HomeSection/>
            <AboutSection/>
            <div className="h-screen"/>
        </main>
    )
}

export default HomePage