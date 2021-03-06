import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./components/HomeScreen";
import History from "./components/History";

const Stack = createStackNavigator();

function App() {
	return (
		<NavigationContainer>
			<Stack.Navigator
				screenOptions={{
					title: "Discount Calculator",
					headerStyle: {

						backgroundColor: "#000000",
					},
					headerTintColor: "#ffffff",
				}}
			>
				<Stack.Screen name="Home" component={HomeScreen} />
				<Stack.Screen name="History" component={History} />

			</Stack.Navigator>
		</NavigationContainer>
	);
}

export default App;
