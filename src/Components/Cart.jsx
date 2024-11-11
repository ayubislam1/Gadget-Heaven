import { useEffect, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { getStoredAddList, removeStoredAddList } from "../Utility/db";
import group from "../assets/Group.png";
import CartList from "./CartList";
import { HiAdjustmentsVertical } from "react-icons/hi2";

const Cart = () => {
	const [isActive, setActive] = useState({
		available: true,
	});

	const allProduct = useLoaderData();
	const navigate = useNavigate();

	const [addProduct, setAddProduct] = useState([]);
	const [isSorted, setIsSorted] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	useEffect(() => {
		const storeData = getStoredAddList();
		const addList = allProduct?.filter((product) =>
			storeData.includes(product.product_id)
		);
		setAddProduct(addList || []);
	}, [allProduct]);

	const totalCost = addProduct.reduce(
		(sum, product) => sum + (product.price || 0),
		0
	);

	const sortByPrice = () => {
		setActive({
			available: !isActive.available,
		});
		const sortedProducts = [...addProduct].sort((a, b) => b.price - a.price);
		setAddProduct(sortedProducts);
		setIsSorted(!isSorted);
	};

	const handleOpenModal = () => {
		setIsModalOpen(true);
		setActive({
			available: false,
		});
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setAddProduct([]);
		localStorage.clear();
		setActive({
			available: true,
		});
		navigate("/");
	};

	return (
		<>
			<div className="container mx-auto my-16 px-2">
				<div className="md:flex justify-between items-center mb-5 space-y-3">
					<h2 className="font-bold text-2xl">Cart</h2>
					<div className="flex items-center gap-2">
						<p className="font-semibold md:text-xl">
							Total Cost: {totalCost.toFixed(2)}
						</p>

						<button
							className={`rounded-full btn ${
								isActive.available
									? "bg-base-200 text-[#9538E2]"
									: "bg-[#9538E2] text-white"
							}`}
							onClick={sortByPrice}
							aria-pressed={isActive.available}
						>
							Sort By Price <HiAdjustmentsVertical className="w-5 h-5" />
						</button>

						<button
							className={`rounded-full btn ${
								isActive.available
									? "bg-[#9538E2] text-white"
									: "bg-base-200 text-[#9538E2]"
							}`}
							onClick={handleOpenModal}
							aria-pressed={!isActive.available}
						>
							Purchase
						</button>
					</div>
				</div>
				{addProduct.length > 0
					? addProduct.map((p) => (
							<CartList
								p={p}
								handleDelete={(product_id) => {
									setAddProduct((prev) => {
										return prev.filter(
											(item) => item.product_id !== product_id
										);
									});
									removeStoredAddList(product_id);
								}}
								key={p.product_id}
							/>
					  ))
					: ""}
				{isModalOpen && (
					<dialog id="my_modal_1" className="modal" open>
						<div className="modal-box flex flex-col items-center gap-3">
							<img src={group} className="w-12 text-center" alt="" />
							<h3 className="font-bold text-2xl text-center">
								Payment Successfully
							</h3>
							<p className="text-lg">Thanks for purchasing.</p>
							<p className="">Total Cost: {totalCost.toFixed(2)}</p>
							<div className="modal-action">
								<button
									className="btn w-96 rounded-full"
									onClick={handleCloseModal}
								>
									Close
								</button>
							</div>
						</div>
					</dialog>
				)}
			</div>
		</>
	);
};

export default Cart;
