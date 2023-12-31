'use client'
import Image from "next/image";
import Section from "@components/page/Section";
import {useEffect, useState} from "react";

const HomeSection = () => {
    const [titleText, setTitleText] = useState("")
    const [titleTextRemaining, setTitleTextRemaining] = useState("Developer")

    const incrementTitleText = ({currentTitleText, currentTitleTextRemaining}: {
        currentTitleText: string,
        currentTitleTextRemaining: string
    }) => {
        if (titleTextRemaining.length > 0) {
            const newTitleText = currentTitleText + currentTitleTextRemaining.charAt(0)
            const newTitleTextRemaining = currentTitleTextRemaining.substring(1)
            setTitleText(newTitleText)
            setTitleTextRemaining(newTitleTextRemaining)
            setTimeout(incrementTitleText, 100, {
                currentTitleText: newTitleText,
                currentTitleTextRemaining: newTitleTextRemaining
            })
        }
    }

    useEffect(() => {
        setTimeout(incrementTitleText, 500, {
            currentTitleText: "",
            currentTitleTextRemaining: titleTextRemaining
        })
    }, [])

    return (
        <Section id="home" fullScreen>
            <div className="grid grid-cols-12 h-full gap-y-10">
                <div className="col-span-12 flex flex-col justify-end items-center md:col-start-9
                    md:col-span-4 md:justify-center md:items-start">
                    <Image src="/fadi.jpg" alt="Portrait of Fadi Gorges" width={300} height={300}
                           className="w-56 h-56 rounded-full shadow-md md:w-fit md:h-fit"/>
                </div>
                <div className="col-span-12 flex flex-col gap-8 md:row-start-1 md:col-span-7 md:justify-center">
                    <h1 className="hidden md:block relative w-fit text-primary font-extrabold tracking-wide">
                        Full-Stack<br/>
                        Software {titleText}<span className="h1-cursor blinking-cursor"/>
                    </h1>
                    <h2 className="md:hidden relative w-fit text-primary font-extrabold tracking-wide">
                        Full-Stack<br/>
                        Software {titleText}<span className="h2-cursor blinking-cursor"/>
                    </h2>
                    <h4>Hi, I&apos;m Fadi Gorges, an enthusiastic Software Engineering student based in Sydney,
                        Australia.</h4>
                    <div className="flex gap-5">
                        <a href="https://www.linkedin.com/in/fadi-gorges" target="_blank">
                            <svg fill="currentColor"
                                 className="transition hover:text-primary hover:drop-shadow-[0_3px_.8px_rgba(0,0,0,0.25)] active:scale-90"
                                 xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path
                                    d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"/>
                            </svg>
                        </a>

                        <a href="https://github.com/fadi-gorges" target="_blank">
                            <svg fill="currentColor"
                                 className="transition hover:text-primary hover:drop-shadow-[0_3px_.8px_rgba(0,0,0,0.25)] active:scale-90"
                                 xmlns="http://www.w3.org/2000/svg" width="30" height="30" viewBox="0 0 24 24">
                                <path
                                    d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                            </svg>
                        </a>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default HomeSection