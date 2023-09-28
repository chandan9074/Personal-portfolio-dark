import React from "react";

const HorizontalBar = ({ height, bgColor, margin }) => {
    return (
        <div
            className={`${height ? height : "h-[1px]"} ${
                bgColor ? bgColor : "bg-[#121415]"
            } w-full ${margin && margin}`}
        />
    );
};

export default HorizontalBar;
