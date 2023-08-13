import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useSelector } from "react-redux";
export default function CartTaskbar() {
  const { total, item } = useSelector((state) => state.cart);
  const totalMoney = item.reduce((sum, i) => sum + i.price, 0);
  const navigate = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigate.navigate("Cart")}>
      <View
        className="z-50 flex items-center ml-8 absolute bottom-2 
      rounded-md justify-between flex-row px-4 h-[70px] bg-red-600 bg-opacity-50 w-[85%]"
      >
        <View className="items-center justify-center w-10 h-10 bg-gray-700 rounded-full">
          <Text className=" rounded-full text-[22px] text-yellow-500 font-semibold">
            {total}
          </Text>
        </View>
        <Text className="text-[25px] text-gray-100 font-semibold">
          Giỏ Hàng
        </Text>
        <Text className="text-[22px] text-gray-100">{totalMoney}</Text>
      </View>
    </TouchableOpacity>
  );
}
