import React, { useContext, useState } from "react";
import { assets } from "../assets/assets";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
	// State for sidebar visibility
	const [visible, setVisible] = useState(false);

	// Context values
	const {
		setShowSearch,
		getCartCount,
		navigate,
		token,
		setToken,
		setCartItems,
	} = useContext(ShopContext);

	// Logout handler
	const logout = () => {
		navigate("/login");
		localStorage.removeItem("token");
		setToken("");
		setCartItems({});
	};

	return (
		<div className="flex items-center justify-between py-5 font-medium">
			{/* Logo */}
			<Link to="/">
				<img src={assets.logo} className="w-36" alt="EatFit Logo" />
			</Link>

			{/* Navigation Links */}
			<ul className="hidden sm:flex gap-5 text-sm text-gray-700">
				<NavLink to="/" className="flex flex-col items-center gap-1">
					<p>HOME</p>
				</NavLink>
				<NavLink to="/collection" className="flex flex-col items-center gap-1">
					<p>INVENTORY</p>
				</NavLink>
				<NavLink to="/about" className="flex flex-col items-center gap-1">
					<p>ABOUT</p>
				</NavLink>
				<NavLink to="/contact" className="flex flex-col items-center gap-1">
					<p>CONTACT</p>
				</NavLink>
			</ul>

			{/* Utility Icons */}
			<div className="flex items-center gap-6">
				{/* Search Icon */}
				<img
					onClick={() => {
						setShowSearch(true);
						navigate("/collection");
					}}
					src={assets.search_icon}
					className="w-5 cursor-pointer"
					alt="Search Icon"
				/>

				{/* Profile Icon with Dropdown */}
				<div className="group relative">
					<img
						onClick={() => (token ? null : navigate("/login"))}
						className="w-5 cursor-pointer"
						src={assets.profile_icon}
						alt="Profile Icon"
					/>
					{token && (
						<div className="hidden group-hover:block absolute right-0 pt-4">
							<div className="flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded">
								<p className="cursor-pointer hover:text-black">My Profile</p>
								<p
									onClick={() => navigate("/orders")}
									className="cursor-pointer hover:text-black">
									Orders
								</p>
								<p onClick={logout} className="cursor-pointer hover:text-black">
									Logout
								</p>
							</div>
						</div>
					)}
				</div>

				{/* Cart Icon */}
				<Link to="/cart" className="relative">
					<img src={assets.cart_icon} className="w-5" alt="Cart Icon" />
					<p className="absolute right-[-5px] bottom-[-5px] w-4 text-center leading-4 bg-black text-white aspect-square rounded-full text-[8px]">
						{getCartCount()}
					</p>
				</Link>

				{/* Mobile Menu Icon */}
				<img
					onClick={() => setVisible(true)}
					src={assets.menu_icon}
					className="w-5 cursor-pointer sm:hidden"
					alt="Menu Icon"
				/>
			</div>

			{/* Sidebar Menu for Small Screens */}
			<div
				className={`absolute top-0 right-0 bottom-0 bg-white transition-all ${
					visible ? "w-full" : "w-0"
				}`}>
				<div className="flex flex-col text-gray-600">
					{/* Back Button */}
					<div
						onClick={() => setVisible(false)}
						className="flex items-center gap-4 p-3 cursor-pointer">
						<img
							className="h-4 rotate-180"
							src={assets.dropdown_icon}
							alt="Back Icon"
						/>
						<p>Back</p>
					</div>
					{/* Sidebar Links */}
					<NavLink
						onClick={() => setVisible(false)}
						className="py-2 pl-6 border"
						to="/">
						HOME
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className="py-2 pl-6 border"
						to="/collection">
						INVENTORY
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className="py-2 pl-6 border"
						to="/about">
						ABOUT
					</NavLink>
					<NavLink
						onClick={() => setVisible(false)}
						className="py-2 pl-6 border"
						to="/contact">
						CONTACT
					</NavLink>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
