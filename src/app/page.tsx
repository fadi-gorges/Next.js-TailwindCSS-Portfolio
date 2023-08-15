import HomeSection from "@components/sections/HomeSection";
import AboutSection from "@components/sections/AboutSection";
import SkillsSection from "@components/sections/SkillsSection";
import ProjectsSection from "@components/sections/ProjectsSection";
import ContactSection from "@components/sections/ContactSection";

export const metadata = {
    description: ""
}

const HomePage = () => {
    return (
        <main>
            <HomeSection/>
            <AboutSection/>
            <SkillsSection/>
            <ProjectsSection/>
            <ContactSection/>
        </main>
    )
}

export default HomePage