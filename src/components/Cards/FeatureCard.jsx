import Image from "next/image";
import React from "react";
import Title from "../common/Title";
import Icons from "../../../public/assets/Icons";

const FeatureCard = ({ data }) => {
    return (
        <div className="pt-7 pb-7 px-7 sm:pt-9 sm:pb-8 sm:px-9  lg:pt-12 lg:pb-10 lg:px-14 rounded-[10px] overflow-hidden shadow-light-gray relative group sm:hover:pt-8 lg:hover:pt-10 duration-300">
            <div className="bg-gradient-to-tr from-bg-from to-bg-to w-full h-full absolute top-0 left-0 opacity-100 group-hover:opacity-0 duration-200" />
            <div className="bg-gradient-to-tr from-bg-to to-bg-from w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-200" />
            <div className="relative z-10">
                <Image
                    src={data.icon}
                    alt="feature-icon"
                    className="w-8 h-8 md:w-10 md:h-10 animate-pulse sm:animate-none sm:group-hover:animate-pulse"
                />
                <Title
                    title={data.title}
                    textSize={"text-xl md:text-2xl"}
                    fontWight={"font-medium"}
                    margin={"mt-5"}
                />
                <p className="text-sm md:text-base text-primary-gray-300 mt-4">
                    {data.description}
                </p>
                <button>
                    <Image
                        src={Icons.chat}
                        alt="chat-icon"
                        className="mt-8 w-5 h-5 md:w-6 md:h-6 sm:invisible group-hover:visible animate-bounce"
                    />
                </button>
            </div>
        </div>
    );
};

export default FeatureCard;
