import { useState } from "react";
import Cart from "./Cart";
import Wishlist from "./Wishlist";


const Dashboard = () => {
	const [isActive, setActive] = useState({
		available: true,
	});

	const handleButton = (status) => {
		setActive({
			available: status === "available",
		});
	};

	return (
		<div>
			<div className="hero bg-[#9538E2] min-h-72 w-full">
				<div className="text-white text-center -mt-36 space-y-4">
					<h2 className="text-xl md:text-4xl font-semibold">Dashboard</h2>
					<p className="text-base">
						Explore the latest gadgets that will take your experience to the
						next level. From smart devices <br /> to the coolest accessories, we
						have it all!
					</p>
				</div>
				<div className="space-x-5 mt-20">
					<button
						onClick={() => handleButton("available")}
						className={`w-36 rounded-full ${
							isActive.available
								? "bg-base-200 btn"
								: "btn bg-[#9538E2] text-white"
						}`}
						aria-pressed={isActive.available}
					>
						Cart
					</button>

					<button
						onClick={() => handleButton("select")}
						className={`w-36 rounded-full ${
							isActive.available
								? "btn bg-[#9538E2] text-white"
								: "bg-base-200 btn"
						}`}
						aria-pressed={!isActive.available}
					>
						Wishlist
					</button>
				</div>
                
			</div>

			{isActive.available ? <Cart /> : <Wishlist />}
		</div>
	);
};

export default Dashboard;
