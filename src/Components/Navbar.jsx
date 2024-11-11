import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { MdOutlineShoppingCart } from "react-icons/md";
import { GiSelfLove } from "react-icons/gi";
import "../CSS/new.css";
import { getStoredWishList, getStoredAddList } from "../Utility/db";

const Navbar = () => {
	const [wishlistCount, setWishlistCount] = useState(
		getStoredWishList().length
	);
	const [addListCount, setAddListCount] = useState(getStoredAddList().length);
	const { pathname } = useLocation();

	const navRef = useRef(null);

	useEffect(() => {
		const updateCounts = () => {
			setWishlistCount(getStoredWishList().length);
			setAddListCount(getStoredAddList().length);
		};

		const interval = setInterval(updateCounts, 1000);
		return () => clearInterval(interval);
	}, []);

	useEffect(() => {
		if (navRef.current) {
			if (
				pathname === "/statistics" ||
				pathname === "/dashboard" ||
				pathname === "/offer"
			) {
				navRef.current.classList.remove("bg-[#9538E2]", "text-white");
			} else {
				navRef.current.classList.add("text-[#9538E2]");
			}
		}
	}, [pathname]);

	return (
		<>
			<div
				id="nav-div"
				ref={navRef}
				className="navbar container mx-auto bg-[#9538E2] rounded-t-xl text-white md:px-10"
			>
				<div className="navbar-start">
					<div className="dropdown">
						<div tabIndex={0} role="button" className="btn lg:hidden">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-5 w-5"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M4 6h16M4 12h8m-8 6h16"
								/>
							</svg>
						</div>
						<ul
							tabIndex={0}
							className="menu menu-sm bg-base-100 dropdown-content rounded-box z-[1] mt-3 w-52 p-2 shadow"
						>
							<li>
								<NavLink to="/">Home</NavLink>
							</li>
							<li>
								<NavLink to="/statistics">Statistics</NavLink>
							</li>
							<li>
								<NavLink to="/offer">Offers</NavLink>
							</li>
							<li>
								<NavLink to="/dashboard">Dashboard</NavLink>
							</li>
						</ul>
					</div>
					<a className="btn btn-ghost text-xl">Gadget Heaven</a>
				</div>
				<div className="navbar-center hidden lg:flex">
					<ul className="flex gap-3 px-1">
						<li>
							<NavLink to="/" className="hover:btn-ghost p-2 rounded-md">
								Home
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/statistics"
								className="hover:btn-ghost p-2 rounded-md"
							>
								Statistics
							</NavLink>
						</li>
						<li>
							<NavLink to="/offer" className="hover:btn-ghost p-2 rounded-md">
								Offers
							</NavLink>
						</li>
						<li>
							<NavLink
								to="/dashboard"
								className="hover:btn-ghost p-2 rounded-md"
							>
								Dashboard
							</NavLink>
						</li>
					</ul>
				</div>
				<div className="navbar-end gap-2 md:gap-3">
					<div className="relative">
						<a className="btn rounded-full bg-base-100">
							<MdOutlineShoppingCart className="w-4 h-4" />
						</a>
						{addListCount > 0 && (
							<span className="badge badge-xs indicator-item absolute  right-1 text-[#FF0000]">
								{addListCount}
							</span>
						)}
					</div>

					<div className="relative">
						<a className="btn rounded-full bg-base-100">
							<GiSelfLove className="w-5 h-5" />
						</a>
						{wishlistCount > 0 && (
							<span className="badge badge-xs indicator-item absolute  right-1 text-[#FF0000]">
								{wishlistCount}
							</span>
						)}
					</div>
				</div>
			</div>
		</>
	);
};

export default Navbar;
