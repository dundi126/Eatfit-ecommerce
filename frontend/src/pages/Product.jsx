import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import RelatedProducts from "../components/RelatedProducts";

const Product = () => {
	const { productId } = useParams();
	const { products, currency, addToCart } = useContext(ShopContext);

	const [productData, setProductData] = useState(null);
	const [selectedImage, setSelectedImage] = useState("");
	const [selectedSize, setSelectedSize] = useState("");

	// Fetch product data by matching productId
	const fetchProductData = () => {
		const product = products.find((item) => item._id === productId);
		if (product) {
			setProductData(product);
			setSelectedImage(product.image[0]);
		}
	};

	useEffect(() => {
		fetchProductData();
	}, [productId, products]);

	if (!productData) return <div className="opacity-0"></div>;

	return (
		<div className="border-t-2 pt-10 transition-opacity ease-in duration-500 opacity-100">
			{/* Product Details Section */}
			<div className="flex gap-12 flex-col sm:flex-row">
				{/* Product Images */}
				<div className="flex-1 flex flex-col-reverse sm:flex-row gap-3">
					{/* Thumbnail Images */}
					<div className="flex sm:flex-col overflow-x-auto sm:overflow-y-scroll sm:w-[18.7%] w-full">
						{productData.image.map((img, index) => (
							<img
								key={index}
								src={img}
								alt={`Thumbnail ${index + 1}`}
								className="w-[24%] sm:w-full sm:mb-3 cursor-pointer"
								onClick={() => setSelectedImage(img)}
							/>
						))}
					</div>
					{/* Main Image */}
					<div className="w-full sm:w-[80%]">
						<img src={selectedImage} alt="Product" className="w-full h-auto" />
					</div>
				</div>

				{/* Product Info */}
				<div className="flex-1">
					<h1 className="font-medium text-2xl mt-2">{productData.name}</h1>
					<div className="flex items-center gap-1 mt-2">
						{[...Array(4)].map((_, idx) => (
							<img
								key={idx}
								src={assets.star_icon}
								alt="Star"
								className="w-3.5"
							/>
						))}
						<img src={assets.star_dull_icon} alt="Star" className="w-3.5" />
						<p className="pl-2">(122)</p>
					</div>
					<p className="mt-5 text-3xl font-medium">
						{currency}
						{productData.price}
					</p>
					<p className="mt-5 text-gray-500 md:w-4/5">
						{productData.description}
					</p>

					{/* Size Selector */}
					<div className="flex flex-col gap-4 my-8">
						<p>Select Size</p>
						<div className="flex gap-2">
							{productData.sizes.map((size, index) => (
								<button
									key={index}
									onClick={() => setSelectedSize(size)}
									className={`border py-2 px-4 bg-gray-100 ${
										size === selectedSize ? "border-orange-500" : ""
									}`}>
									{size}
								</button>
							))}
						</div>
					</div>

					{/* Add to Cart Button */}
					<button
						onClick={() => addToCart(productData._id, selectedSize)}
						className="bg-black text-white px-8 py-3 text-sm active:bg-gray-700">
						ADD TO CART
					</button>

					<hr className="mt-8 sm:w-4/5" />
					<div className="text-sm text-gray-500 mt-5 flex flex-col gap-1">
						<p>100% Original product.</p>
						<p>Cash on delivery is available on this product.</p>
						<p>Easy return and exchange policy within 7 days.</p>
					</div>
				</div>
			</div>

			{/* Description & Reviews Section */}
			<div className="mt-20">
				<div className="flex">
					<b className="border px-5 py-3 text-sm">Description</b>
					<p className="border px-5 py-3 text-sm">Reviews (122)</p>
				</div>
				<div className="flex flex-col gap-4 border px-6 py-6 text-sm text-gray-500">
					<p>
						An e-commerce website is an online platform that facilitates the
						buying and selling of products or services over the internet. It
						serves as a virtual marketplace for businesses and individuals to
						showcase products, interact with customers, and conduct
						transactions.
					</p>
					<p>
						E-commerce websites typically display products with detailed
						descriptions, images, prices, and variations (e.g., sizes, colors).
						Each product has its own dedicated page with relevant information.
					</p>
				</div>
			</div>

			{/* Related Products Section */}
			<RelatedProducts
				category={productData.category}
				subCategory={productData.subCategory}
			/>
		</div>
	);
};

export default Product;
