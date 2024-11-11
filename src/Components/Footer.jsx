import React from "react";

const Footer = () => {
	return (
		<>
			<div className="container mx-auto">
				<nav className="text-center bg-base-100 space-y-3 mb-10">
					<h2 className="font-bold text-2xl">Gadget Heaven</h2>
					<p>Leading the way in cutting-edge technology and innovation.</p>
				</nav>
				<hr className="" />
				<footer className="footer bg-base-100 text-base-content p-10 flex justify-evenly flex-col md:flex-row">
					<nav>
						<h6 className="footer-title">Services</h6>
						<a className="link link-hover">Product Support</a>
						<a className="link link-hover">Order Tracking</a>
						<a className="link link-hover">Shipping & Delivery</a>
						<a className="link link-hover">Returns</a>
					</nav>
					<nav>
						<h6 className="footer-title">Company</h6>
						<a className="link link-hover">About us</a>
						<a className="link link-hover">Careers</a>
						<a className="link link-hover">Contact</a>
					</nav>
					<nav>
						<h6 className="footer-title">Legal</h6>
						<a className="link link-hover">Terms of use</a>
						<a className="link link-hover">Privacy policy</a>
						<a className="link link-hover">Cookie policy</a>
					</nav>
				</footer>
			</div>
		</>
	);
};

export default Footer;
