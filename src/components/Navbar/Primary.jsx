import Image from "next/image";
import Images from "../../../public/assets/Images";
import { navLinks } from "@/lib/navLinks";
import Buttons from "../Buttons";

const Primary = () => {
    return (
        <div className="py-6 w-[1700px] mx-auto flex items-center justify-between">
            <div className="flex items-center gap-1">
                <Image
                    src={Images.chandan}
                    width={1000}
                    height={1000}
                    className="h-14 w-14 rounded-full border-2 border-slate-700"
                />
                <h6 className="text-sm font-medium text-slate-200 tracking-[2px]">
                    CHANDAN
                </h6>
            </div>
            <div className="flex items-center gap-x-11 justify-start">
                {navLinks.map((item) => (
                    <button
                        key={item._id}
                        className="text-sm text-slate-200 font-extralight tracking-widest"
                    >
                        {item.title}
                    </button>
                ))}
                <Buttons.Primary label={"HIRE ME"} />
            </div>
        </div>
    );
};

export default Primary;
