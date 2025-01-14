import React from "react";

const NewsletterBox = () => {
	// Handle form submission
	const handleSubscribe = (event) => {
		event.preventDefault();
		// Add functionality to handle subscription (e.g., API call)
	};

	return (
		<div className="text-center">
			{/* Heading */}
			<p className="text-2xl font-medium text-gray-800">
				Subscribe Now & Get 20% Off
			</p>
			{/* Subtext */}
			<p className="text-gray-400 mt-3">
				Join our community of fitness enthusiasts and be the first to know about
				exclusive deals, new arrivals, and expert tips.
			</p>

			{/* Subscription Form */}
			<form
				onSubmit={handleSubscribe}
				className="w-full sm:w-1/2 flex items-center gap-3 mx-auto my-6 border pl-3">
				{/* Email Input */}
				<input
					className="w-full sm:flex-1 outline-none"
					type="email"
					placeholder="Enter your email"
					required
				/>
				{/* Submit Button */}
				<button
					type="submit"
					className="bg-black text-white text-xs px-10 py-4">
					Subscribe
				</button>
			</form>
		</div>
	);
};

export default NewsletterBox;
