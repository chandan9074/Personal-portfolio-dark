import Cards from "@/components/Cards";
import Subtitle from "@/components/common/Subtitle";
import Title from "@/components/common/Title";
import React from "react";

const Experience = () => {
    return (
        <div className="py-10 lg:py-16">
            <Subtitle subTitle={"Explore my Experience"} />
            <Title title={"Experience"} margin="mt-1 sm:mt-2 xl:mt-3" />
            <div className="mt-16 grid grid-cols-2 gap-x-12">
                <div className="flex w-full">
                    <div className="h-full w-1.5 bg-[#17191C]" />
                    <div className="-ml-[15px] flex-1 flex flex-col gap-12">
                        <Cards.ExperienceCard />
                        <Cards.ExperienceCard />
                    </div>
                </div>
                <div className="flex w-full">
                    <div className="h-full w-1.5 bg-[#17191C]" />
                    <div className="-ml-[15px] flex-1 flex flex-col gap-12">
                        <Cards.ExperienceCard />
                        <Cards.ExperienceCard />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Experience;
