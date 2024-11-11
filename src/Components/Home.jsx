import React from "react";

import ALLcatagories from "./ALLcatagories";
import banner from "../assets/banner.png";

const Home = () => {
	return (
		<div className="container mx-auto">
			<div className="hero bg-[#9538E2] min-h-96 w-full rounded-b-xl">
				<div className="text-white text-center text-xl md:text-4xl font-semibold md:space-y-2 -mt-52">
					<h1>Upgrade Your Tech Accessorize with</h1>
					<p className="">Gadget Heaven Accessories</p>
				</div>
				<p className="text-white text-sm text-center md:w-1/2 -mt-10">
					Explore the latest gadgets that will take your experience to the next
					level. From smart devices to the coolest accessories, we have it all!
				</p>
				<button className="btn mt-24 rounded-full text-[#9538E2]">Shop Now</button>
			</div>

			<div className=" flex justify-center -mt-20 mb-10">
				<img
					src={banner}
					alt=""
					className=" w-64  md:w-1/2 p-5 border backdrop-opacity-10 backdrop-invert bg-white/30 rounded-3xl"
				/>
			</div>

			<div className="flex flex-col md:flex-row gap-10 justify-center rounded-lg   mb-10 container mx-auto ">
				<div>
					<ALLcatagories className=""></ALLcatagories>
				</div>
				<div>
					{" "}
					
				</div>
			</div>
		</div>
	);
};

export default Home;
