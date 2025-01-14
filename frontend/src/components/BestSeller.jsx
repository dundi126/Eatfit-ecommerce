import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const BestSeller = () => {
	const { products } = useContext(ShopContext); // Access products from context
	const [bestSellers, setBestSellers] = useState([]);

	useEffect(() => {
		// Filter and set the top 5 best-selling products
		const topProducts = products
			.filter((product) => product.bestseller)
			.slice(0, 5);
		setBestSellers(topProducts);
	}, [products]);

	return (
		<div className="my-10">
			{/* Section Header */}
			<div className="text-center text-3xl py-8">
				<Title text1="BEST" text2="SELLERS" />
				<p className="w-3/4 m-auto text-xs sm:text-sm md:text-base text-gray-600">
					Discover our top-rated gym products, trusted by fitness enthusiasts
					worldwide. These customer favorites are must-haves for your fitness
					journey.
				</p>
			</div>

			{/* Product Grid */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
				{bestSellers.map((product) => (
					<ProductItem
						key={product._id} // Use a unique product ID as the key
						id={product._id}
						name={product.name}
						image={product.image}
						price={product.price}
					/>
				))}
			</div>
		</div>
	);
};

export default BestSeller;
