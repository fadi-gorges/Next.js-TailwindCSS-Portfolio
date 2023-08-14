import Image from "next/image";
import Section from "@components/page/Section";

const AboutSection = () => {
    const multiplyTwoNumbersAndLog = (a: number, b: number) => {
        console.log(a * b)
    }

    return (
        <Section id="about" bg="base-200">
            <div className="grid grid-cols-12 h-full gap-x-16">
                <div className="col-span-5 flex flex-col justify-center items-center gap-8">
                    <Image src="/about-image.jpg" alt="Portrait of Fadi Gorges" width={400} height={400}
                           className="w-full aspect-square rounded-3xl shadow-md object-cover slideIn"/>
                </div>
                <div className="col-span-7 flex flex-col gap-3 justify-center slideIn delay-100">
                    <h6 className="text-primary font-extrabold">ABOUT ME</h6>
                    <h5 className="font-bold">
                        I am passionate about designing and developing beautiful, fast and intuitive software.
                    </h5>
                    <h6>As a Bachelor of Software Engineering (Honours) student at the University of Technology Sydney,
                        I have garnered experience in web, app, and game development. With my skill in tools such as
                        ReactJS, NextJS, TailwindCSS, Flutter, Django, SQL, I am able to create
                        high quality websites and native applications. Additionally, I have experience in game
                        development using Unity, and am proficient in programming languages such as Python, Java,
                        TypeScript, JavaScript, CSS, HTML, and C#.
                    </h6>
                </div>
            </div>
        </Section>
    )
}

export default AboutSection