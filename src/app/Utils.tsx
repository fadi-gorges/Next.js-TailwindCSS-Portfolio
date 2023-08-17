"use client";
import React, {useEffect} from "react";
import {usePathname} from "next/navigation";

const Utils = ({children}: { children: React.ReactNode }) => {
    const pathname = usePathname();

    useEffect(() => {
        const observer = new IntersectionObserver((entries) =>
                entries.forEach(entry => {
                    if (entry.isIntersecting)
                        entry.target.classList.add("show")
                }),
            {
                threshold: 0.25
            }
        );
        document.querySelectorAll('.scroll-transition').forEach(element => {
            observer.observe(element)
        })
    }, [pathname]);

    return (
        // <SWRConfig value={{fetcher: (...args) => fetch(...args).then(res => res.json())}}>
        <>{children}</>
        // </SWRConfig>
    );
};

export default Utils;