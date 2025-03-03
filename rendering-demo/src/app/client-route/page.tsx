"use client";

// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";

import React from "react";
import { useTheme } from "../components/theme-provider";
import { clientSideFunction } from "../utils/client-utils";

export default function ClientRoutePage() {
	const theme = useTheme();
	const result = clientSideFunction();
	// const settings = {
	// 	dots: true,
	// };
	return (
		<>
			<h1 style={{ color: theme.colors.primary }}>Client route page</h1>
			<p>{result}</p>

			{/* <div className="image-slider-container">
			<Slider {...settings}>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
				<div>
					<img src="https://picsum.photos/400/200" />
				</div>
			</Slider>
		</div> */}
		
		</>
	);
}
