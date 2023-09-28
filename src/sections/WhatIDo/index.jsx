import Cards from "@/components/Cards";
import Subtitle from "@/components/common/Subtitle";
import Title from "@/components/common/Title";
import { whatIDoData } from "@/lib/whatIDo";
import React from "react";

const WhatIDo = () => {
    return (
        <div className="py-10 lg:py-16">
            <Subtitle subTitle={"Features"} />
            <Title title={"What I Do"} margin="mt-1 sm:mt-2 xl:mt-3" />
            <div className="mt-12 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-12">
                {whatIDoData.map((item) => (
                    <Cards.FeatureCard key={item._id} data={item} />
                ))}
            </div>
        </div>
    );
};

export default WhatIDo;
