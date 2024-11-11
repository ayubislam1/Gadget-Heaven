import React from "react";
import Chart from "./Chart";

const Statistics = () => {
    return (
        <>
            <div className="hero bg-[#9538E2] min-h-60 w-full my-10">
                <div className="text-white text-center px-4 py-8 md:py-12 lg:py-16 space-y-4">
                    <h2 className="text-2xl sm:text-3xl md:text-4xl l font-semibold">
                        Statistics
                    </h2>
                    <p className="text-sm sm:text-base md:text-lg lg:text-xl leading-relaxed ">
                        Explore the latest gadgets that will take your experience to the
                        next level. From smart devices to the coolest accessories, we
                        have it all!
                    </p>
                </div>
            </div>
            <div className="my-10 px-4 md:px-8 lg:px-16">
                <Chart />
            </div>
        </>
    );
};

export default Statistics;
