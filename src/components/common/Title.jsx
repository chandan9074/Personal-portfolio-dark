import React from "react";

const Title = ({ align, margin, title, textSize, textColor, fontWight }) => {
    return (
        <h1
            className={`${
                textSize
                    ? textSize
                    : "text-3xl md:text-4xl lg:text-5xl xl:text-6xl"
            } ${fontWight ? fontWight : "font-bold"} ${
                textColor ? textColor : "text-primary-gray-300"
            } ${align && align} ${margin && margin}`}
        >
            {title}
        </h1>
    );
};

export default Title;
