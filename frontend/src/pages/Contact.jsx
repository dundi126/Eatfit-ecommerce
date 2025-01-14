import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const Contact = () => {
	return (
		<div>
			{/* Header Section */}
			<div className="text-center text-2xl pt-10 border-t">
				<Title text1="CONTACT" text2="US" />
			</div>

			{/* Contact Details Section */}
			<div className="my-10 flex flex-col justify-center md:flex-row gap-10 mb-28">
				{/* Contact Image */}
				<img
					className="w-full md:max-w-[480px]"
					src={assets.contact_img}
					alt="Contact Us Illustration"
				/>

				{/* Contact Information */}
				<div className="flex flex-col justify-center items-start gap-6">
					{/* Store Information */}
					<p className="font-semibold text-xl text-gray-600">Our Store</p>
					<p className="text-gray-500">
						51234 Heather Dr <br /> Dearborn, Michigan 48126
					</p>
					<p className="text-gray-500">
						Tel: +1-(313)-555-0132 <br /> Email: admin@eatfit.com
					</p>

					{/* Careers Section */}
					<p className="font-semibold text-xl text-gray-600">
						Careers at EatFit
					</p>
					<p className="text-gray-500">
						Learn more about our teams and explore exciting job opportunities.
					</p>
					{/* Explore Jobs Button */}
					<button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
						Explore Jobs
					</button>
				</div>
			</div>

			{/* Newsletter Section */}
			<NewsletterBox />
		</div>
	);
};

export default Contact;
