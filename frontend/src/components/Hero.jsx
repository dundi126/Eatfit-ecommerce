import React from "react";
import { assets } from "../assets/assets";

const Hero = () => {
	return (
		<div className="flex flex-col mt-5 sm:flex-row border border-gray-400">
			{/* Hero Section Image */}
			<img
				className="w-full sm:w-1/2"
				src={assets.hero_img}
				alt="Fitness Gear Showcase"
			/>

			{/* Hero Section Content */}
			<div className="w-full sm:w-1/2 flex items-center justify-center py-10 px-8 sm:py-0">
				<div className="text-[#414141]">
					{/* Section Tagline */}
					<div className="flex items-center gap-2">
						<p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
						<p className="font-medium text-sm md:text-base uppercase">
							Fitness Favorites
						</p>
					</div>

					{/* Main Title */}
					<h1 className="prata-regular text-3xl sm:py-3 lg:text-5xl leading-relaxed">
						Empower Your Fitness Journey
					</h1>

					{/* Supporting Description */}
					<p className="text-sm md:text-base text-gray-600 py-2">
						Explore top-tier gym essentials, including premium equipment,
						stylish activewear, and high-quality supplements. Achieve your
						fitness goals with EatFit's trusted products!
					</p>

					{/* Call-to-Action */}
					<div className="flex items-center gap-2">
						<p className="font-semibold text-sm md:text-base uppercase">
							Start Shopping
						</p>
						<p className="w-8 md:w-11 h-[1px] bg-[#414141]"></p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Hero;
