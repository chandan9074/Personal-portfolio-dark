import React from "react";
import LeftContainer from "./LeftContainer";
import RightContainer from "./RightContainer";

const HomeBanner = () => {
    return (
        <div className="container px-5 mx-auto py-10 lg:py-16 grid grid-cols-1 lg:grid-cols-2 gap-y-10 lg:gap-y-0 xl:gap-x-6">
            <LeftContainer />
            <RightContainer />
        </div>
    );
};

export default HomeBanner;
