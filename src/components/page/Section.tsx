import React from "react";

const Section = ({id, theme = 'light', fullScreen = false, className, children}: {
    id: string,
    theme?: 'light' | 'dark',
    fullScreen?: boolean,
    className?: string,
    children: React.ReactNode
}) => {
    const sectionClasses = `section ${fullScreen ? "h-screen" : ""} w-full ${className}`

    return (
        <div id={id} data-theme={theme} className={sectionClasses}>
            <div className="container h-full max-w-7xl mx-auto px-6 py-10 lg:p-20">
                {children}
            </div>
        </div>
    )
}

export default Section