import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredWishList, removeStoredWishList } from "../Utility/db";
import CartList from "./CartList";
const Wishlist = () => {
	const allProduct = useLoaderData();
	const [addProduct, setAddProduct] = useState([]);
	useEffect(() => {
		const storeData = getStoredWishList();
		
		const addList = allProduct?.filter((product) =>
			storeData.includes(product.product_id)
		);
		setAddProduct(addList || []);
	}, [allProduct]);
	console.log("All", allProduct);

	return (
		<div className="container mx-auto my-16 px-2">
			<div className="mb-5"><h2 className="font-bold text-2xl">Wishlist</h2></div>
			<div className="container mx-auto">
				{addProduct.map((p) => (
					<CartList
						p={p}
						handleDelete={(product_id) => {
							setAddProduct((prev) => {
								return prev.filter((item) => item.product_id !== product_id);
							});
							removeStoredWishList(product_id);
						}}
						key={p.product_id}
					></CartList>
				))}
			</div>
		</div>
	);
};

export default Wishlist;
