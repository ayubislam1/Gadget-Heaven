import React, { useEffect, useState } from "react";
import {
	
	Bar,
	XAxis,
	YAxis,
	ResponsiveContainer,
	Tooltip,
	
	ComposedChart,
	Area,
} from "recharts";

const Chart = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		fetch("/data.json")
			.then((res) => res.json())
			.then((data) => setData(data));
	}, []);

	return (
		<div className="container mx-auto">
			<ResponsiveContainer width="100%" height={400}>
				<ComposedChart data={data}>
					<XAxis dataKey="title" tick={{ fontSize: 8 }} interval={0} />
					<YAxis />
					<Tooltip />

					<Bar dataKey="price" fill="#9538E2" />

					<Area
						type="monotone"
						dataKey="price"
						fill="#BF87EE"
						stroke="#9538E2"
					/>
				</ComposedChart>
			</ResponsiveContainer>

			<div className="mt-4 flex justify-center items-center">
				<div className="flex items-center mr-4">
					<div className="w-4 h-4 bg-[#9538E2] mr-2"></div>
					<span className="text-sm">Price</span>
				</div>
				<div className="flex items-center mr-4">
					<div className="w-4 h-4 bg-[#BF87EE] mr-2"></div>
					<span className="text-sm">Total</span>
				</div>
				<div className="flex items-center">
					<div className="w-4 h-4 bg-[#FF0000] mr-2"></div>
					<span className="text-sm">Rating</span>
				</div>
			</div>
		</div>
	);
};

export default Chart;
