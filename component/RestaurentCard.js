import { View, Text, TouchableWithoutFeedback, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

import * as Icon from "react-native-feather";

export default function RestaurentCard({ item }) {
  const navigate = useNavigation();
  return (
    <TouchableWithoutFeedback
      onPress={() => navigate.navigate("Restaurent", { data: item })}
    >
      <View className="mt-2 mr-5 min-h-[170px] bg-gray-50 shadow-sm p-2 rounded-md mb-4">
        <Image className="h-24 rounded-md w-44" source={item.image}></Image>
        <Text className="my-2 font-medium text-gray-700">{item.name}</Text>
        <View className="flex flex-row justify-between">
          <Text className="text-gray-600 ">{item.reviews}</Text>
          <Text className="text-gray-600 ">{item.category}</Text>
        </View>
        <View className="flex flex-row items-center my-2">
          <Icon.Map
            width="16"
            height="16"
            className="mr-1"
            stroke="gray"
          ></Icon.Map>
          <Text className="text-gray-600">{item.address}</Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}
