import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Button, StyleSheet } from "react-native";

const HomeScreen = ({ navigation }) => {
	const [originalPrice, setOriginalPrice] = useState("");
	const [discoutPercentage, setDiscountPercentage] = useState("");
	const [total, setTotal] = useState("0");
	const [discount, setDiscount] = useState("0");
	const [error, setError] = useState("");



	useEffect(() => {
		if (discoutPercentage > 100) {
			setError("Discount cannot be greater then 100");
		} else if (originalPrice < 0 || discoutPercentage < 0) {
			setError("Price or discount must be greater then 0");
		} else {
			let totalPrice =
				originalPrice - originalPrice * (discoutPercentage / 100);
			setTotal(totalPrice.toFixed(2));

			let totalDiscount = originalPrice * (discoutPercentage / 100);
			setDiscount(totalDiscount.toFixed(2));
			setError("");
		}
	}, [originalPrice, discoutPercentage]);

	

	return (
		<View style={styles.container}>
			<View style={styles.headerStyles}>
				<Text style={{ fontSize: 25, fontWeight: "bold" }}>
					Enter The Price To Calculate Discount
				</Text>
			</View>
			<TextInput
				style={[styles.inputStyles, { marginTop: 20, marginLeft: 105 }]}
				keyboardType="numeric"
				value={originalPrice}
				onChangeText={(price) => setOriginalPrice(price)}
				placeholder="Original Price"
			/>
			<TextInput
				style={[
					styles.inputStyles,
					{ marginTop: 7, marginBottom: 10, marginLeft: 105 },
				]}
				keyboardType="numeric"
				value={discoutPercentage}
				onChangeText={(disc) => setDiscountPercentage(disc)}
				placeholder="Discount %"
			/>
			<Text
				style={{
					color: "red",
					textAlign: "center",
					fontSize: 15,
					fontWeight: "bold",
				}}
			>
				{originalPrice && error}
			</Text>
			<View style={styles.discountStyles}>
				<Text style={styles.pricingStyles}>You save: {discount}$ </Text>
				<Text style={styles.pricingStyles}>Final Price: {total}$</Text>
			</View>

			

			<View>
				<View
					style={{
						marginTop: 40,
						textAlign: "left",
						marginLeft: 10,
						marginBottom: 10,
					}}
				>
					<Text style={{ fontSize: 20, fontWeight: "bold" }}>
						Instructions
					</Text>
				</View>
				<View style={{ textAlign: "left", marginLeft: 10 }}>
					<Text>
						Add Total Price and Discount Percentage to calculate discount.
					</Text>
				
					
				</View>
			</View>
		</View>
	);
};

const styles = StyleSheet.create({
	container: {},
	headerStyles: {
		textAlign: "center",
		alignItems: "center",
		padding: 5,
		marginTop: 20,
		color: "#fff",
	},
	inputStyles: {
		borderWidth: 1,
		borderColor: "grey",
		width: "50%",
		padding: 5,
		margin: "auto",
		borderRadius: 5,
		alignItems: "center",
	},
	discountStyles: {
		textAlign: "center",
		marginTop: 10,
		marginLeft: 130,
	},
	pricingStyles: {
		fontWeight: "bold",
		fontSize: 18,
	},
	calculateStyles: {
		width: "30%",
		margin: "auto",
		marginTop: 15,
		marginLeft: 180,
	},
});

export default HomeScreen;
