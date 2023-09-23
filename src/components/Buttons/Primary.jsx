import React from "react";

const Primary = ({
    label,
    paddingX,
    paddingY,
    bgColor,
    radius,
    textSize,
    textColor,
    fontWight,
    ...rest
}) => {
    return (
        <button
            {...rest}
            className={`${paddingY ? paddingY : "py-4"} ${
                paddingX ? paddingX : "px-9"
            }  ${radius ? radius : "rounded-md"} ${
                textSize ? textSize : "text-sm"
            } ${textColor ? textColor : "text-primary-red"} ${
                fontWight ? fontWight : "font-medium"
            } shadow-light-gray relative overflow-hidden group`}
        >
            <div className="bg-gradient-to-b from-bg-from to-bg-to w-full h-full absolute top-0 left-0 opacity-100 group-hover:opacity-0 duration-200" />
            <div className="bg-gradient-to-b from-bg-to to-bg-from w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-200" />
            <span className="relative z-10">{label}</span>
        </button>
    );
};

export default Primary;
