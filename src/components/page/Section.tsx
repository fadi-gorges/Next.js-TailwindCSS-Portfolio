import React from "react";

const Section = ({id, bg = "base-100", theme = 'light', fullScreen = false, children}: {
    id: string,
    bg?: string,
    theme?: 'light' | 'dark',
    fullScreen?: boolean,
    children: React.ReactNode
}) => {
    const sectionClasses = `section bg-${bg} ${fullScreen ? "h-screen" : ""} w-full`

    return (
        <div id={id} data-theme={theme} className={sectionClasses}>
            <div className="container h-full max-w-7xl mx-auto p-8 lg:p-20">
                {children}
            </div>
        </div>
    )
}

export default Section