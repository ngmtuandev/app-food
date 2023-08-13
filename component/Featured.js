import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import React from "react";
import RestaurentCard from "./RestaurentCard";

export default function Featured({ title, description, restaurants }) {
  return (
    <View>
      <View className="flex flex-row items-center justify-between">
        <View>
          <Text className="text-yellow-500 text-[16px] uppercase font-semibold">
            {title}
          </Text>
          <Text className="text-gray-600">{description}</Text>
        </View>
        <TouchableOpacity>
          <Text className="font-semibold text-red-600">Xem thêm</Text>
        </TouchableOpacity>
      </View>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {restaurants.map((item, index) => {
          return <RestaurentCard key={index} item={item}></RestaurentCard>;
        })}
      </ScrollView>
    </View>
  );
}
