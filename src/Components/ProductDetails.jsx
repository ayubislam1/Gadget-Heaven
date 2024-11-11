import React from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import { addToStoredAddList, addToStoredWishList } from "../Utility/db";
import { ToastContainer } from "react-toastify";
const ProductDetails = () => {
	const { product_id } = useParams();

	const data = useLoaderData();
	const product = data.find((product) => product.product_id === product_id);

	const {
		image,
		title,
		price,
		specifications,
		rating,
		description,
		availability,
	} = product;
	const [
		{ Display, Processor, Battery },
		{ Storage, Version },
		{ RAM, Cancellation },
		{ Camera, Graphics, Charging_Time },
		{},
	] = specifications;
	const handleAdd = (id) => {
        
		
		addToStoredAddList(id);
		
	};
	const handleWish = (id) => {
		addToStoredWishList(id);
	};

	return (
		<>
			<div className="hero bg-[#9538E2] min-h-96 w-full">
				<div className="text-white text-center -mt-60 space-y-4">
					<h2 className=" text-xl  md:text-4xl font-semibold ">
						Product Details
					</h2>
					<p className="text-base">
						Explore the latest gadgets that will take your experience to the
						next level. From smart devices <br /> to the coolest accessories, we
						have it all!
					</p>
				</div>
			</div>
			<div className="hero bg-base-100 min-h-screen w-80 md:w-2/3 border-2 container mx-auto rounded-xl -mt-52 mb-16">
				<div className="hero-content flex-col lg:flex-row">
					<img src={image} className="max-w-sm rounded-lg w-64 md:w-full" />
					<div>
						<h1 className="text-2xl font-bold">{title}</h1>
						<p>{price}</p>
						{availability ? (
							<button className="border p-2 bg-base-200 border-[#309C08] text-[#309C08] rounded-full mt-4">
								In Stock
							</button>
						) : (
							<button className="border p-2 bg-base-200 border-red-600 text-red-600 rounded-full mt-4">
								Out of Stock
							</button>
						)}
						<p className="py-6">{description}</p>
						<h3 className="font-bold">Specification:</h3>
						<ul>
							<li>
								<span className="font-semibold text-gray-500">1.</span>{" "}
								{Display || Processor || Battery}
							</li>
							<li>
								<span className="font-semibold text-gray-500">2.</span>{" "}
								{Storage || Version}
							</li>
							<li>
								<span className="font-semibold text-gray-500">3.</span>{" "}
								{RAM || Cancellation}
							</li>
							<li>
								<span className="font-semibold text-gray-500">4.</span>{" "}
								{Camera || Graphics || Charging_Time}
							</li>
						</ul>
						<h4 className="font-bold">Rating</h4>
						<div className="flex items-center">
							<div className="rating ">
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-[#F9C004]"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-[#F9C004]"
									defaultChecked
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-[#F9C004]"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-[#F9C004]"
								/>
								<input
									type="radio"
									name="rating-2"
									className="mask mask-star-2 bg-[#F9C004]"
								/>
							</div>{" "}
							<span className="ml-4  btn rounded-full">{rating}</span>
						</div>
						<br />
						<div className="flex gap-3">
							<button
								onClick={() => handleAdd(product_id)}
								className="btn bg-[#9538E2]  text-white hover:bg-[#9538E2]"
							>
								Add To Card<MdOutlineShoppingCart></MdOutlineShoppingCart>
							</button>
							<button
								onClick={() => handleWish(product_id)}
								className="btn rounded-full"
							>
								<GiSelfLove className="h-3 w-3"></GiSelfLove>
							</button>
						</div>
					</div>
				</div>
			</div>
            <ToastContainer></ToastContainer>
		</>
	);
};

export default ProductDetails;
