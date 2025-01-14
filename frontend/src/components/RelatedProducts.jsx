import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";
import ProductItem from "./ProductItem";

const RelatedProducts = ({ category, subCategory }) => {
	const { products } = useContext(ShopContext); // Access products from context
	const [related, setRelated] = useState([]);

	useEffect(() => {
		if (products.length > 0) {
			// Filter products by category and subcategory
			const filteredProducts = products
				.filter((item) => category === item.category)
				.filter((item) => subCategory === item.subCategory)
				.slice(0, 5); // Limit to 5 related products

			setRelated(filteredProducts);
		}
	}, [products, category, subCategory]);

	return (
		<div className="my-24">
			{/* Section Title */}
			<div className="text-center text-3xl py-2">
				<Title text1="RELATED" text2="PRODUCTS" />
			</div>

			{/* Product Grid */}
			<div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4 gap-y-6">
				{related.map((product) => (
					<ProductItem
						key={product._id} // Use unique product ID as the key
						id={product._id}
						name={product.name}
						price={product.price}
						image={product.image}
					/>
				))}
			</div>
		</div>
	);
};

export default RelatedProducts;
