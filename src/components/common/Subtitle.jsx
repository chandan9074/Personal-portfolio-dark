import React from "react";

const Subtitle = ({ align, margin, subTitle }) => {
    return (
        <h5
            className={`text-xs sm:text-sm font-medium text-primary-red-700 ${
                margin && margin
            } ${align && align}`}
        >
            {subTitle}
        </h5>
    );
};

export default Subtitle;
