import { View, Text, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
export default function PrepareScreeen() {
  const navigate = useNavigation();
  setTimeout(() => {
    navigate.navigate("Order");
  }, 3000);
  return (
    <View className="flex items-center justify-center mt-9">
      <Image
        className=""
        source={require("../assets/images/delivery.gif")}
      ></Image>
    </View>
  );
}
