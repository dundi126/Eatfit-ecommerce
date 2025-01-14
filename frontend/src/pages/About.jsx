import React from "react";
import Title from "../components/Title";
import { assets } from "../assets/assets";
import NewsletterBox from "../components/NewsletterBox";

const About = () => {
	return (
		<div>
			{/* About Section Header */}
			<div className="text-2xl text-center pt-8 border-t">
				<Title text1="ABOUT" text2="EATFIT" />
			</div>

			{/* About Section Content */}
			<div className="my-10 flex flex-col md:flex-row gap-16">
				<img
					className="w-full md:max-w-[450px]"
					src={assets.about_img}
					alt="About EatFit"
				/>
				<div className="flex flex-col justify-center gap-6 md:w-2/4 text-gray-600">
					<p>
						EatFit was born out of a passion for empowering fitness enthusiasts
						to achieve their health and wellness goals. We provide a
						one-stop-shop for all your gym needs, from state-of-the-art
						equipment to high-quality supplements.
					</p>
					<p>
						From our inception, we've been committed to curating a diverse range
						of products that cater to every fitness journey. Whether you're an
						experienced athlete, a beginner, or someone who simply wants to stay
						active, EatFit has everything you need to succeed.
					</p>
					<b className="text-gray-800">Our Mission</b>
					<p>
						At EatFit, our mission is to deliver exceptional quality and
						convenience to fitness enthusiasts worldwide. We aim to inspire a
						healthier lifestyle through premium products, personalized services,
						and unmatched value for our customers.
					</p>
				</div>
			</div>

			{/* Why Choose Us Section Header */}
			<div className="text-xl py-4">
				<Title text1="WHY" text2="CHOOSE US" />
			</div>

			{/* Why Choose Us Section Content */}
			<div className="flex flex-col md:flex-row text-sm mb-20">
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Wide Selection:</b>
					<p className="text-gray-600">
						Discover a vast range of gym equipment, apparel, accessories, and
						supplements designed to suit all fitness levels and goals.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Quality Products:</b>
					<p className="text-gray-600">
						We partner with trusted brands to offer products that prioritize
						durability, performance, and safety.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Expert Guidance:</b>
					<p className="text-gray-600">
						Our dedicated team is ready to assist you, whether you're setting up
						a home gym or selecting the right supplements for your goals.
					</p>
				</div>
				<div className="border px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
					<b>Convenience:</b>
					<p className="text-gray-600">
						Enjoy a seamless shopping experience with our user-friendly website,
						secure payment methods, and fast delivery options.
					</p>
				</div>
			</div>

			{/* Newsletter Subscription Section */}
			<NewsletterBox />
		</div>
	);
};

export default About;
