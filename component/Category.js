import { View, Text, ScrollView, TouchableOpacity, Image } from "react-native";
import React, { useState } from "react";
import { categories, featured } from "../data/data.js";
import Featured from "./Featured.js";
export default function Category() {
  const [activeState, setActiveState] = useState();
  return (
    <View className="px-4 py-3">
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {categories.map((item, index) => {
          let checkActive = item.id === activeState;
          //   console.log(checkActive);
          let setColorActive = checkActive ? "bg-red-500" : "bg-yellow-500";
          return (
            <View
              key={index}
              className={
                "flex items-center justify-center px-2 py-1 mx-4 rounded-2xl " +
                setColorActive
              }
            >
              <TouchableOpacity onPress={() => setActiveState(item.id)}>
                <Image className="h-14 w-14" source={item.image} />
              </TouchableOpacity>
              <Text className={"text-[20px] text-white"}>{item.name}</Text>
            </View>
          );
        })}
      </ScrollView>
      <View className="mt-5">
        {[featured, featured, featured].map((item, index) => {
          return (
            <Featured
              key={index}
              title={item.title}
              description={item.description}
              restaurants={item.restaurants}
            ></Featured>
          );
        })}
      </View>
    </View>
  );
}
