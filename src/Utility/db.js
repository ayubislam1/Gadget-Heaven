import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Bounce } from "react-toastify";

const getStoredAddList = () => {
	const storedListStr = localStorage.getItem("add-list");
	if (storedListStr) {
		const storedList = JSON.parse(storedListStr);
		return storedList;
	} else {
		return [];
	}
};

const removeStoredAddList = (product_id) => {
	const storedListStr = localStorage.getItem("add-list");
	if (storedListStr) {
		let storedList = JSON.parse(storedListStr);
		storedList = storedList?.filter((item) => item !== product_id);

		localStorage.setItem("add-list", JSON.stringify(storedList));
		

		return storedList;
	} else {
		return [];
	}
};

const addToStoredAddList = (id) => {
	const storedList = getStoredAddList();
	if (storedList.includes(id)) {
		toast.warn("The Card is already exists", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});
	} else {
		storedList.push(id);
		const storedListStr = JSON.stringify(storedList);
		localStorage.setItem("add-list", storedListStr);

		toast.success("Item added to Card successfully!", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
};

const getStoredWishList = () => {
	const storedWishListStr = localStorage.getItem("wish-list");
	if (storedWishListStr) {
		const storedWishList = JSON.parse(storedWishListStr);
		return storedWishList;
	} else {
		return [];
	}
};
const removeStoredWishList = (product_id) => {
	const storedWishListStr = localStorage.getItem("wish-list");
	if (storedWishListStr) {
		let storedWishList = JSON.parse(storedWishListStr);
		storedWishList = storedWishList?.filter((item) => item !== product_id);

		localStorage.setItem("wish-list", JSON.stringify(storedWishList));
		return storedWishList;
	} else {
		return [];
	}
};

const addToStoredWishList = (id) => {
	const storedWishList = getStoredWishList();
	if (storedWishList.includes(id)) {
		toast.warn("The Wishlist is already exists", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
			transition: Bounce,
		});
	} else {
		storedWishList.push(id);
		const storedWishListStr = JSON.stringify(storedWishList);
		localStorage.setItem("wish-list", storedWishListStr);

		toast.success(" Item added  Wishlist successfully!", {
			position: "top-center",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			theme: "light",
		});
	}
};

export {
	addToStoredAddList,
	addToStoredWishList,
	getStoredAddList,
	getStoredWishList,
	removeStoredAddList,
	removeStoredWishList,
};
