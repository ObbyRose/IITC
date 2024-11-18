import React from "react";

const Layout = ({ children }) => {
    return (
        <div className="layout">
            <header className="layout-header">Header</header>
            <main className="layout-content">{children}</main>
            <footer className="layout-footer">Footer</footer>
        </div>
    );
};

export default Layout;
