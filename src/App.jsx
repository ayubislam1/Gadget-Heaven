import { useState } from "react";

import "./App.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import { Outlet } from "react-router-dom";

function App() {
	return (
		<>
			<div className="">
				<Navbar></Navbar>

				<Outlet></Outlet>
				<Footer></Footer>
			</div>
		</>
	);
}

export default App;
