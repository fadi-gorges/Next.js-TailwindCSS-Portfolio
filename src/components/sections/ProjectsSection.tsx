import Section from "@components/page/Section";
import CitizenshipAUModal from "@components/modals/CitizenshipAUModal";
import Image from "next/image";

const projects = [
    {
        name: "CitizenshipAU",
        description: "CitizenshipAU is a website that helps people prepare for the Australian Citizenship Test. It is built using NextJS, TailwindCSS and TypeScript",
        image: "/citizenshipau-mockup.png",
        buttonText: "View CitizenshipAU",
        link: "https://www.citizenshipau.com"
    },
    {
        name: "Dungeon of Death",
    }
]

const ProjectsSection = () => {
    return (
        <Section id="projects" bg="base-200">
            <h3 className="text-primary font-extrabold">MY PROJECTS</h3>
            <div className="grid grid-cols-12 gap-14 mt-10 p-8 bg-base-100 rounded-3xl transition
                hover:shadow-lg">
                <div className="col-span-6">
                    <Image src="/citizenshipau-mockup.png" alt="CitizenshipAU Logo" width={500} height={500}
                           className="mx-auto"/>
                </div>
                <div className="col-span-6 flex flex-col gap-3">
                    <h5 className="font-bold">CitizenshipAU</h5>
                </div>
            </div>
        </Section>
    )
}

export default ProjectsSection