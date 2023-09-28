import React from "react";
import Title from "../common/Title";
import HorizontalBar from "../common/HorizontalBar";

const ExperienceCard = () => {
    return (
        <div className="flex group items-start">
            <div className="flex items-center mt-12">
                <div className="border-[6px] border-[#17191C] w-6 h-6 bg-bg-from group-hover:bg-primary-red group-hover:animate-pulse rounded-full duration-200" />
                <div className="bg-[#17191C] w-8 h-1.5" />
            </div>
            <div className="rounded-[10px] overflow-hidden shadow-light-gray py-11 px-10 relative flex-1">
                <div className="bg-gradient-to-tr from-bg-from to-bg-to w-full h-full absolute top-0 left-0 opacity-100 group-hover:opacity-0 duration-200" />
                <div className="bg-gradient-to-tr from-bg-to to-bg-from w-full h-full absolute top-0 left-0 opacity-0 group-hover:opacity-100 duration-200" />
                <div className="relative z-10">
                    <Title
                        title={"Software Engineer"}
                        textSize={"text-2xl"}
                        fontWight={"font-medium"}
                    />
                    <div className="mt-1.5">
                        <h5 className="text-primary-gray-500 text-sm">
                            Zaag Systems Ltd. (June 20222 - present)
                        </h5>
                    </div>
                    <HorizontalBar
                        bgColor={"bg-[#1A1D23]"}
                        margin={"mt-9 mb-5"}
                    />
                    <p className="text-lg text-primary-gray-400 leading-7">
                        The education should be very interactual. Ut tincidunt
                        est ac dolor aliquam sodales. Phasellus sed mauris
                        hendrerit, laoreet sem in, lobortis mauris hendrerit
                        ante.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default ExperienceCard;
