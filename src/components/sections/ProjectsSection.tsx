'use client'
import Section from "@components/page/Section";
import Image from "next/image";
import {ArrowTopRightOnSquareIcon} from "@heroicons/react/24/outline";
import {useState} from "react";
import DungeonGame from "@components/DungeonGame";

const ProjectsSection = () => {
    const [dungeonModalOpen, setDungeonModalOpen] = useState(false)

    const openDungeonModal = () => {
        setDungeonModalOpen(true)
    }

    const closeDungeonModal = () => {
        setDungeonModalOpen(false)
    }

    const projects = [
        {
            name: "CitizenshipAU.com",
            description: `CitizenshipAU is a website that helps people prepare for the Australian Citizenship Test. The
        front-end is built in NextJS, TypeScript and styled with TailwindCSS. For the back-end, Supabase is utilised
        to handle user authentication and data storage. The website is hosted on Vercel.`,
            image: "/citizenshipau-mockup.png",
            buttons: [
                <a key="1" href="https://www.citizenshipau.com" target="_blank" className="btn btn-primary">
                    VIEW CITIZENSHIPAU.COM
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 ml-2"/>
                </a>
            ],
        },
        {
            name: "Dungeon of Death",
            description: `Dungeon of Death is a 2D fantasy dungeon crawler game built in Unity, in which the player explores
        unique dungeons, fights monsters, and collects loot. This game was submitted as my Major Project for my HSC
        Industrial Technology Multimedia course, in which I received an assessment mark of 95/100 (Band 6).`,
            image: "/dungeonofdeath-mockup.png",
            buttons: [
                <button key="1" onClick={openDungeonModal} className="btn btn-primary">
                    PLAY DUNGEON OF DEATH
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 ml-2"/>
                </button>
            ],
        },
        {
            name: "BabylonFadez",
            description: `BabylonFadez is a website showcasing a local barber shop in Sydney, Australia. The site's layout
        was designed in Figma, and the front-end was built in NextJS, TypeScript and styled with TailwindCSS. These
        technologies assisted me in building an aesthetic, modern and responsive landing page.`,
            image: "/babylonfadez-mockup.png",
            buttons: [
                <a key="1" href="https://babylonfadez.vercel.app/" target="_blank" className="btn btn-primary">
                    VISIT BABYLONFADEZ
                    <ArrowTopRightOnSquareIcon className="w-6 h-6 ml-2"/>
                </a>
            ],
        },
    ]

    return (
        <Section id="projects" bg="base-200">
            <h3 className="text-primary font-extrabold mb-8">MY PROJECTS</h3>
            {projects.map(project => (
                <div key={project.name} className="scroll-transition slide-in-left">
                    <div className="grid grid-cols-12 gap-y-8 mt-5 p-8 bg-base-100 rounded-3xl transition
                        hover:shadow-lg md:mt-10">
                        <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
                            <Image src={project.image} alt={`${project.name} Mockup`} width={500} height={500}
                                   className="mx-auto"/>
                        </div>
                        <div className="col-span-12 flex flex-col gap-5 justify-center md:col-start-7 md:col-span-6">
                            <h4 className="font-bold">{project.name}</h4>
                            <h6>
                                {project.description}
                            </h6>
                            {project.buttons.map(button => button)}
                        </div>
                    </div>
                </div>
            ))}
            {dungeonModalOpen && <DungeonGame setModalOpen={setDungeonModalOpen}/>}
        </Section>
    )
}

export default ProjectsSection