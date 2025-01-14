import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";

const ProductItem = ({ id, image, name, price }) => {
	const { currency } = useContext(ShopContext); // Access currency from context

	return (
		<Link
			to={`/product/${id}`}
			className="text-gray-700 cursor-pointer"
			onClick={() => scrollTo(0, 0)} // Scroll to top on product click
		>
			{/* Product Image */}
			<div className="overflow-hidden">
				<img
					src={image[0]}
					alt={name} // Use product name as alt text for better accessibility
					className="hover:scale-110 transition ease-in-out"
				/>
			</div>

			{/* Product Name */}
			<p className="pt-3 pb-1 text-sm">{name}</p>

			{/* Product Price */}
			<p className="text-sm font-medium">
				{currency}
				{price}
			</p>
		</Link>
	);
};

export default ProductItem;
