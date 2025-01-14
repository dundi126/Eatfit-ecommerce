import React, { useContext, useEffect, useState } from "react";
import { ShopContext } from "../context/ShopContext";
import { assets } from "../assets/assets";
import Title from "../components/Title";
import ProductItem from "../components/ProductItem";

const Collection = () => {
	const { products, search, showSearch } = useContext(ShopContext);

	// State Variables
	const [showFilter, setShowFilter] = useState(false);
	const [filterProducts, setFilterProducts] = useState([]);
	const [category, setCategory] = useState([]);
	const [subCategory, setSubCategory] = useState([]);
	const [sortType, setSortType] = useState("relevant");

	// Toggle Category Selection
	const toggleCategory = (e) => {
		setCategory((prev) =>
			prev.includes(e.target.value)
				? prev.filter((item) => item !== e.target.value)
				: [...prev, e.target.value]
		);
	};

	// Toggle SubCategory Selection
	const toggleSubCategory = (e) => {
		setSubCategory((prev) =>
			prev.includes(e.target.value)
				? prev.filter((item) => item !== e.target.value)
				: [...prev, e.target.value]
		);
	};

	// Apply Filters
	const applyFilter = () => {
		let filtered = products.slice();

		// Filter by search query
		if (showSearch && search) {
			filtered = filtered.filter((item) =>
				item.name.toLowerCase().includes(search.toLowerCase())
			);
		}

		// Filter by category
		if (category.length > 0) {
			filtered = filtered.filter((item) => category.includes(item.category));
		}

		// Filter by subcategory
		if (subCategory.length > 0) {
			filtered = filtered.filter((item) =>
				subCategory.includes(item.subCategory)
			);
		}

		setFilterProducts(filtered);
	};

	// Sort Products
	const sortProducts = () => {
		const sorted = filterProducts.slice();
		switch (sortType) {
			case "low-high":
				setFilterProducts(sorted.sort((a, b) => a.price - b.price));
				break;
			case "high-low":
				setFilterProducts(sorted.sort((a, b) => b.price - a.price));
				break;
			default:
				applyFilter();
				break;
		}
	};

	// Update filters and products on dependency changes
	useEffect(() => {
		applyFilter();
	}, [category, subCategory, search, showSearch, products]);

	// Update sort order on dependency change
	useEffect(() => {
		sortProducts();
	}, [sortType]);

	return (
		<div className="flex flex-col sm:flex-row gap-1 sm:gap-10 pt-10 border-t">
			{/* Filter Section */}
			<div className="min-w-60">
				{/* Filter Header */}
				<p
					onClick={() => setShowFilter(!showFilter)}
					className="my-2 text-xl flex items-center cursor-pointer gap-2">
					FILTERS
					<img
						className={`h-3 sm:hidden ${showFilter ? "rotate-90" : ""}`}
						src={assets.dropdown_icon}
						alt="Toggle Filters"
					/>
				</p>

				{/* Category Filter */}
				<div
					className={`border border-gray-300 pl-5 py-3 mt-6 ${
						showFilter ? "" : "hidden"
					} sm:block`}>
					<p className="mb-3 text-sm font-medium">CATEGORIES</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
						{[
							"Accessories",
							"Apparel",
							"Equipment",
							"Health & Nutrition",
							"Supplements",
							"Weights",
						].map((cat) => (
							<p key={cat} className="flex gap-2">
								<input
									className="w-3"
									type="checkbox"
									value={cat}
									onChange={toggleCategory}
								/>{" "}
								{cat}
							</p>
						))}
					</div>
				</div>

				{/* SubCategory Filter */}
				<div
					className={`border border-gray-300 pl-5 py-3 my-5 ${
						showFilter ? "" : "hidden"
					} sm:block`}>
					<p className="mb-3 text-sm font-medium">TYPE</p>
					<div className="flex flex-col gap-2 text-sm font-light text-gray-700">
						{[
							"Bags & Backpacks",
							"Gloves",
							"Belts",
							"Topwear",
							"Bottomwear",
							"Hoodies",
							"Treadmills",
							"Dumbbells",
							"Resistance Bands",
							"Vitamins",
							"Protein Powders",
							"Herbal Supplements",
							"Pre-Workout",
							"Post-Workout",
							"Creatine",
							"Barbells",
							"Weight Plates",
							"Medicine Balls",
							"Others",
						].map((subCat) => (
							<p key={subCat} className="flex gap-2">
								<input
									className="w-3"
									type="checkbox"
									value={subCat}
									onChange={toggleSubCategory}
								/>{" "}
								{subCat}
							</p>
						))}
					</div>
				</div>
			</div>

			{/* Products Section */}
			<div className="flex-1">
				<div className="flex justify-between text-base sm:text-2xl mb-4">
					<Title text1="ALL" text2="INVENTORY" />
					{/* Product Sort */}
					<select
						onChange={(e) => setSortType(e.target.value)}
						className="border-2 border-gray-300 text-sm px-2">
						<option value="relevant">Sort by: Relevant</option>
						<option value="low-high">Sort by: Low to High</option>
						<option value="high-low">Sort by: High to Low</option>
					</select>
				</div>

				{/* Render Products */}
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6">
					{filterProducts.map((item) => (
						<ProductItem
							key={item._id}
							name={item.name}
							id={item._id}
							price={item.price}
							image={item.image}
						/>
					))}
				</div>
			</div>
		</div>
	);
};

export default Collection;
