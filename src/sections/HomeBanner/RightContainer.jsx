import Image from "next/image";
import React from "react";
import Images from "../../../public/assets/Images";

const RightContainer = () => {
    return (
        <div className="mx-auto lg:ml-auto my-auto lg:order-2 order-1">
            <div className="w-80 h-80 md:w-96 md:h-96 lg:w-[25rem] lg:h-[25rem] xl:w-[35rem] xl:h-[35rem] rounded-full shadow-light-gray overflow-x-hidden relative">
                <Image
                    src={Images.chandan}
                    width={1000}
                    height={1000}
                    alt="chandan"
                    className="w-[35rem]"
                />
            </div>
        </div>
    );
};

export default RightContainer;
