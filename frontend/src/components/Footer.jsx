import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
	return (
		<div>
			{/* Footer Content */}
			<div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
				{/* Logo and Description */}
				<div>
					<img src={assets.logo} className="mb-5 w-32" alt="EatFit Logo" />
					<p className="w-full md:w-2/3 text-gray-600">
						EatFit is your trusted partner in achieving your fitness goals. From
						premium gym equipment to top-quality supplements, we provide
						everything you need to stay fit and healthy. Explore, shop, and
						transform your fitness journey with EatFit.
					</p>
				</div>

				{/* Company Links */}
				<div>
					<p className="text-xl font-medium mb-5">COMPANY</p>
					<ul className="flex flex-col gap-1 text-gray-600">
						<li>Home</li>
						<li>About Us</li>
						<li>Delivery</li>
						<li>Privacy Policy</li>
					</ul>
				</div>

				{/* Contact Information */}
				<div>
					<p className="text-xl font-medium mb-5">GET IN TOUCH</p>
					<ul className="flex flex-col gap-1 text-gray-600">
						<li>+1-(313)-555-0132</li>
						<li>contact@eatfit.com</li>
					</ul>
				</div>
			</div>

			{/* Footer Bottom */}
			<div>
				<hr />
				<p className="py-5 text-sm text-center">
					&copy; 2024 EatFit.com - All Rights Reserved.
				</p>
			</div>
		</div>
	);
};

export default Footer;
