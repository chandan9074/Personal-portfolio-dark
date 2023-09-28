import Layouts from "@/layouts";
import HomeBanner from "../sections/HomeBanner";
import WhatIDo from "@/sections/WhatIDo";
import HorizontalBar from "@/components/common/HorizontalBar";
import Experience from "@/sections/Experience";

export default function Home() {
    return (
        <Layouts.Primary>
            <HomeBanner />
            <div className="container mx-auto px-5">
                <HorizontalBar />
                <WhatIDo />
                <HorizontalBar />
                <Experience />
            </div>
        </Layouts.Primary>
    );
}
