"use client";
import React, {useEffect, useState} from "react";
import {
    AcademicCapIcon,
    CircleStackIcon,
    CodeBracketIcon,
    EnvelopeIcon,
    WrenchScrewdriverIcon,
} from "@heroicons/react/24/outline";
import {
    AcademicCapIcon as AcademicCapIconFilled,
    Bars3Icon,
    CircleStackIcon as CircleStackIconFilled,
    CodeBracketSquareIcon,
    EnvelopeIcon as EnvelopeIconFilled,
    WrenchScrewdriverIcon as WrenchScrewdriverIconFilled,
} from "@heroicons/react/24/solid";
import Link from "next/link";
import {usePathname} from "next/navigation";
import {scrollIntoView, useScrollPosition} from "@utils/utils";


const navLinks = [
    {
        text: "Home",
        href: "home",
        icon: <CodeBracketIcon/>,
        filledIcon: <CodeBracketSquareIcon/>,
    },
    {
        text: "About",
        href: "about",
        icon: <AcademicCapIcon/>,
        filledIcon: <AcademicCapIconFilled/>,
    },
    {
        text: "Skills",
        href: "skills",
        icon: <WrenchScrewdriverIcon/>,
        filledIcon: <WrenchScrewdriverIconFilled/>,
    },
    {
        text: "Projects",
        href: "projects",
        icon: <CircleStackIcon/>,
        filledIcon: <CircleStackIconFilled/>,
    },
    {
        text: "Contact",
        href: "contact",
        icon: <EnvelopeIcon/>,
        filledIcon: <EnvelopeIconFilled/>,
    },
];

const NavProvider = ({children}: {
    children: React.ReactNode
}) => {
    const pathname = usePathname();
    const [drawerOpen, setDrawerOpen] = useState(false);

    const scrollPos = useScrollPosition();
    const [scrolledDown, setScrolledDown] = useState(false);
    const [sections, setSections] = useState<NodeListOf<HTMLElement>>();
    const [currentSection, setCurrentSection] = useState(0);

    const navbarClasses = `w-full navbar fixed top-0 transition z-10 
        ${scrolledDown ? "bg-base-100/80 backdrop-blur shadow-xl shadow-black/5" : ""}`;

    useEffect(() => {
        setSections(document.querySelectorAll(".section"))
    }, []);

    useEffect(() => {
        if (!sections?.length) return
        setScrolledDown(scrollPos > 0);
        setCurrentSection(sections.length - [...sections].reverse().findIndex((section) => scrollPos >= section.offsetTop - 100) - 1);
    }, [scrollPos]);

    useEffect(() => {
        setScrolledDown(false);
    }, [pathname]);

    const NavLink = ({link, index}: {
        link: typeof navLinks[0],
        index: number
    }) => {
        const isActive = currentSection === index;
        const buttonClasses = `hidden lg:flex focus:bg-transparent ${isActive ? "font-bold text-primary hover:text-primary focus:text-primary" : ""}`;

        return (
            <li>
                <button className={buttonClasses}
                        onClick={() => scrollIntoView(link.href, -75)}>
                    {link.text}
                </button>
            </li>
        );
    };

    const MobileNavLink = ({link, index, setDrawerOpen}: {
        link: typeof navLinks[0],
        index: number,
        setDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
    }) => {
        const isActive = currentSection === index;
        const buttonClasses = `flex gap-6 ${isActive ? "text-primary hover:text-primary focus:text-primary" : ""}`;
        return (
            <li key={link.text}>
                <button className={buttonClasses} onClick={() => {
                    scrollIntoView(link.href, -60);
                    setDrawerOpen(false);
                }}>
                    {React.cloneElement(
                        isActive ? link.filledIcon : link.icon, {className: "h-8"}
                    )}
                    {link.text}
                </button>
            </li>
        );
    };

    const navBar = (
        <div className={navbarClasses}>
            <div className="flex items-center justify-center flex-1">
                <div className="flex-1">
                    <Link href="/" className="btn btn-ghost w-fit flex items-center gap-4 text-inherit
                        font-bold text-xl">
                        <CodeBracketIcon className="h-8 w-8 text-inherit"/>
                        FADIGORGES.DEV
                    </Link>
                </div>
                <ul className="menu menu-lg menu-horizontal py-1 items-center md:gap-1">
                    {/* Navbar menu content here */}
                    {navLinks.map((link, index) => <NavLink key={link.href} link={link} index={index}/>)}
                </ul>
            </div>

            <div className="flex-none lg:hidden">
                <label htmlFor="navdrawer" className="btn btn-square btn-ghost text-inherit">
                    <Bars3Icon className="h-8 w-8"/>
                </label>
            </div>
        </div>
    );


    const navDrawer = (
        <div className="drawer-side z-20">
            <label htmlFor="navdrawer" className="drawer-overlay"></label>
            <ul className="menu menu-md menu-pr p-4 w-80 h-full bg-base-200">
                {navLinks.map((link, index) => <MobileNavLink key={link.href} link={link} index={index}
                                                              setDrawerOpen={setDrawerOpen}/>)}
            </ul>
        </div>
    );

    return (
        <div className="drawer drawer-end min-h-screen">
            <input id="navdrawer" type="checkbox" className="drawer-toggle" checked={drawerOpen}
                   onChange={() => setDrawerOpen(open => !open)}/>
            <div className="drawer-content flex flex-col bg-base-100">
                {navBar}
                {/* Page Content */}
                <div className="absolute w-full h-full left-0 top-0">
                    {children}
                </div>
            </div>

            {navDrawer}
        </div>
    );
};

export default NavProvider;