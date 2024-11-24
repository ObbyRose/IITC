import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h1>404 - Page Not Found</h1>
            <p>Oops! The page you're looking for does not exist.</p>
            <Link to="/home" style={{backgroundColor:"#ffff", color:"black", borderRadius: "4px", padding: "4px", fontWeight:"700"}}>Go to Home</Link>
    </div>
    );
};

export default NotFound;