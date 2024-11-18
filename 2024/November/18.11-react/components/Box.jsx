import React from "react";

const Box = ({ children, backgroundColor = "white", padding = "16px", borderRadius = "8px" }) => {
    const style = {
        backgroundColor,
        padding,
        borderRadius,
    };

    return <div style={style}>{children}</div>;
};

export default Box;
