import React from "react";

const SvgParent = ({className, children}: {
    className?: string,
    children: React.ReactNode
}) => {
    return React.Children.map(children, (child: any) => {
        return React.cloneElement(child, {
            className: `${child.props.className} ${className}`,
            fill: "currentColor"
        })
    })
}

export default SvgParent