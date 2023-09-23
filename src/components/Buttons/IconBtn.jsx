import Image from "next/image";
import React from "react";

const IconBtn = ({ icon, paddingX, paddingY, radius, ...rest }) => {
    return (
        <button
            {...rest}
            className={`${paddingY ? paddingY : "py-5"} ${
                paddingX ? paddingX : "px-5"
            } ${
                radius ? radius : "rounded-md"
            } shadow-light-gray relative overflow-hidden group`}
        >
            <div className="bg-gradient-to-tr from-bg-from to-bg-to w-full h-full absolute top-0 left-0 opacity-100 group-hover:opacity-0 duration-200" />
            <div className="bg-gradient-to-tr from-bg-to to-bg-from w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-200" />
            <Image
                src={icon}
                alt="social_icon"
                width={100}
                height={100}
                className="w-5 h-6 relative z-10"
            />
        </button>
    );
};

export default IconBtn;
