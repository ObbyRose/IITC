import React from "react";

const Button = ({ icon, children, onClick }) => {
    return (
        <button onClick={onClick} style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            {icon && <span>{icon}</span>}
            {children}
        </button>
    );
};

export default Button;
