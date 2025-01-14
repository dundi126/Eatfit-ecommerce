import React, { useContext } from "react";
import { ShopContext } from "../context/ShopContext";
import Title from "./Title";

const CartTotal = () => {
	const { currency, delivery_fee, getCartAmount } = useContext(ShopContext); // Access context values

	// Calculate total amount
	const subtotal = getCartAmount();
	const total = subtotal === 0 ? 0 : subtotal + delivery_fee;

	return (
		<div className="w-full">
			{/* Title Section */}
			<div className="text-2xl">
				<Title text1="CART" text2="TOTALS" />
			</div>

			{/* Totals Section */}
			<div className="flex flex-col gap-2 mt-2 text-sm">
				{/* Subtotal */}
				<div className="flex justify-between">
					<p>Subtotal</p>
					<p>
						{currency} {subtotal}.00
					</p>
				</div>
				<hr />

				{/* Shipping Fee */}
				<div className="flex justify-between">
					<p>Shipping Fee</p>
					<p>
						{currency} {delivery_fee}.00
					</p>
				</div>
				<hr />

				{/* Total */}
				<div className="flex justify-between">
					<b>Total</b>
					<b>
						{currency} {total}.00
					</b>
				</div>
			</div>
		</div>
	);
};

export default CartTotal;
