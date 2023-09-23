import Buttons from "@/components/Buttons";
import React from "react";
import Icons from "../../../public/assets/Icons";

const LeftContainer = () => {
    return (
        <div className="h-full my-auto lg:order-1 order-2">
            <h6 className="text-sm font-medium text-gray-400 tracking-[3px] lg:text-left text-center">
                WELCOME TO TECH WORLD
            </h6>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] text-white font-bold mt-5 lg:text-left text-center">
                Hi, I’m <span className="text-primary-red">Chandan Kumar</span>
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-[40px] xl:text-[48px] text-white font-bold mt-1 lg:text-left text-center">
                a Developer
            </h1>
            <p className="mt-5 text-gray-400 text-base w-auto md:w-[600px] mx-auto lg:mx-0 lg:w-[500px] xl:w-[613px] leading-7 lg:text-left text-center">
                I use animation as a third dimension by which to simplify
                experiences and kuiding thro each and every interaction. I’m not
                adding motion just to spruce things up, but doing it in ways
                that.
            </p>
            <div className="mt-16 lg:mt-24 xl:mt-32">
                <h6 className="text-gray-400 text-sm font-light">
                    FIND WITH ME
                </h6>
                <div className="mt-6 flex items-center gap-6">
                    <Buttons.IconBtn
                        icon={Icons.fb}
                        paddingY="py-3.5"
                        paddingX="px-4"
                    />
                    <Buttons.IconBtn
                        icon={Icons.ins}
                        paddingY="py-3.5"
                        paddingX="px-4"
                    />
                    <Buttons.IconBtn
                        icon={Icons.link}
                        paddingY="py-3.5"
                        paddingX="px-4"
                    />
                </div>
            </div>
        </div>
    );
};

export default LeftContainer;
