import React from "react";

import { NavLink, useLocation } from "react-router-dom";

const Allproduct = ({ product }) => {
	const { product_id, image, title, price, category } = product;
	const { pathname } = useLocation();
	console.log(pathname);
	const handleClick = () => {
		document
			.getElementById("nav-div")
			.classList.remove("bg-[#9538E2]", "text-white");
	};
	return (
		<>
			<div className="card bg-base-100 w-80 border">
				<figure>
					<img src={image} className="w-40" alt={category} />
				</figure>
				<div className="card-body">
					<h2 className="card-title">{title}</h2>
					<p>Price: {price}</p>
					<div className="card-actions ">
						<NavLink to={`/product/${product_id}`}>
							<button
								className="btn rounded-full bg-[#9538E2] text-white hover:bg-[#9538E2]"
								onClick={handleClick}
							>
								View details
							</button>
						</NavLink>
					</div>
				</div>
			</div>
		</>
	);
};

export default Allproduct;
