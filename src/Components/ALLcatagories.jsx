import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import Allproduct from "./Allproduct";
import NotFound from "./NotFound";

const ALLcatagories = () => {
	const products = useLoaderData();
	const [filteredProducts, setFilteredProducts] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("All");

	useEffect(() => {
		if (products.length) {
			setFilteredProducts(products);
		}
	}, [products]);

	const handleCategoryClick = (category) => {
		setSelectedCategory(category);
		if (category === "All") {
			setFilteredProducts(products);
		} else {
			const filtered = products.filter(
				(product) => product.category === category
			);
			setFilteredProducts(filtered);
		}
	};

	return (
		<>
			<div className="container mx-auto mt-8 px-4">
				<h1 className="text-xl md:text-2xl font-bold text-center">
					Explore Cutting-Edge Gadgets
				</h1>
			</div>
			<div className="container mx-auto mt-8 flex flex-col md:flex-row gap-4 px-4">
				<div className="w-full md:w-1/5 border rounded-2xl p-4">
					<div className="flex flex-wrap md:flex-col space-y-2">
						{[
							"All",
							"Laptops",
							"Mobile",
							"Accessories",
							"Smart Watches",
							"Iphone",
						].map((category) => (
							<button
								key={category}
								onClick={() => handleCategoryClick(category)}
								className={`btn block w-full rounded-full mb-2 md:mb-0 hover:bg-[#9538E2] hover:text-white ${
									selectedCategory === category ? "bg-[#9538E2] text-white" : ""
								}`}
							>
								{category}
							</button>
						))}
					</div>
				</div>

				<div className="w-full md:w-4/5 pl-8 md:pl-0">
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-x-12 md:gap-y-5 ">
						{filteredProducts.length > 0 ? (
							filteredProducts.map((product) => (
								<Allproduct key={product.product_id} product={product} />
							))
						) : (
							<NotFound />
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default ALLcatagories;
