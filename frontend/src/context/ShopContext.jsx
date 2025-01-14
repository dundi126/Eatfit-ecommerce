import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
	// Constants and state variables
	const currency = "$";
	const delivery_fee = 10;
	const backendUrl = import.meta.env.VITE_BACKEND_URL;
	const navigate = useNavigate();

	const [search, setSearch] = useState("");
	const [showSearch, setShowSearch] = useState(false);
	const [cartItems, setCartItems] = useState({});
	const [products, setProducts] = useState([]);
	const [token, setToken] = useState("");

	// Add item to cart
	const addToCart = async (itemId, size) => {
		if (!size) {
			toast.error("Select Product Size");
			return;
		}

		const updatedCart = structuredClone(cartItems);

		if (updatedCart[itemId]) {
			updatedCart[itemId][size] = (updatedCart[itemId][size] || 0) + 1;
		} else {
			updatedCart[itemId] = { [size]: 1 };
		}

		setCartItems(updatedCart);

		if (token) {
			try {
				await axios.post(
					`${backendUrl}/api/cart/add`,
					{ itemId, size },
					{ headers: { token } }
				);
			} catch (error) {
				console.error(error);
				toast.error(error.message);
			}
		}
	};

	// Get total cart item count
	const getCartCount = () => {
		return Object.values(cartItems).reduce((count, itemSizes) => {
			return (
				count +
				Object.values(itemSizes).reduce((sizeCount, qty) => sizeCount + qty, 0)
			);
		}, 0);
	};

	// Update item quantity in cart
	const updateQuantity = async (itemId, size, quantity) => {
		const updatedCart = structuredClone(cartItems);
		updatedCart[itemId][size] = quantity;
		setCartItems(updatedCart);

		if (token) {
			try {
				await axios.post(
					`${backendUrl}/api/cart/update`,
					{ itemId, size, quantity },
					{ headers: { token } }
				);
			} catch (error) {
				console.error(error);
				toast.error(error.message);
			}
		}
	};

	// Get total cart amount
	const getCartAmount = () => {
		return Object.entries(cartItems).reduce((total, [itemId, sizes]) => {
			const product = products.find((p) => p._id === itemId);
			if (!product) return total;

			return (
				total +
				Object.entries(sizes).reduce((itemTotal, [size, qty]) => {
					return itemTotal + product.price * qty;
				}, 0)
			);
		}, 0);
	};

	// Fetch all products
	const getProductsData = async () => {
		try {
			const response = await axios.get(`${backendUrl}/api/product/list`);
			if (response.data.success) {
				setProducts(response.data.products.reverse());
			} else {
				toast.error(response.data.message);
			}
		} catch (error) {
			console.error(error);
			toast.error(error.message);
		}
	};

	// Fetch user cart
	const getUserCart = async (token) => {
		try {
			const response = await axios.post(
				`${backendUrl}/api/cart/get`,
				{},
				{ headers: { token } }
			);
			if (response.data.success) {
				setCartItems(response.data.cartData);
			}
		} catch (error) {
			console.error(error);
			toast.error(error.message);
		}
	};

	// Initial data fetching
	useEffect(() => {
		getProductsData();
	}, []);

	// Fetch user cart if token exists
	useEffect(() => {
		const localToken = localStorage.getItem("token");
		if (!token && localToken) {
			setToken(localToken);
			getUserCart(localToken);
		} else if (token) {
			getUserCart(token);
		}
	}, [token]);

	// Context value
	const value = {
		products,
		currency,
		delivery_fee,
		search,
		setSearch,
		showSearch,
		setShowSearch,
		cartItems,
		addToCart,
		setCartItems,
		getCartCount,
		updateQuantity,
		getCartAmount,
		navigate,
		backendUrl,
		setToken,
		token,
	};

	return (
		<ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
	);
};

export default ShopContextProvider;
