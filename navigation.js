import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
const Stack = createNativeStackNavigator();
import { View, Text } from "react-native";
import React from "react";
import HomeScreen from "./screen/HomeScreen";
import RestaurentScreen from "./screen/RestaurentScreen";
import CartScreeen from "./screen/CartScreeen";
import PrepareScreeen from "./screen/PrepareScreeen";
import OrderScreen from "./screen/OrderScreen";

export default function Navigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Restaurent" component={RestaurentScreen} />
        <Stack.Screen name="Cart" component={CartScreeen} />
        <Stack.Screen name="Prepare" component={PrepareScreeen} />
        <Stack.Screen name="Order" component={OrderScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
