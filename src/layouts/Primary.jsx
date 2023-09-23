import Navbar from "@/components/Navbar";
import React from "react";

const Primary = ({ children }) => {
    return (
        <div className="bg-gradient-to-tr from-bg-from to-bg-to h-screen">
            <Navbar.Primary />
            {children}
        </div>
    );
};

export default Primary;
