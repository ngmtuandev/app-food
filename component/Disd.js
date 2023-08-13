import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import * as Icons from "react-native-feather";
import { useDispatch } from "react-redux";
import { addCart } from "../slice/addCart";
export default function Disd({ data }) {
  const dispatch = useDispatch();
  const addtoCart = () => {
    dispatch(addCart({ data }));
  };
  return (
    <View
      className="mt-9 flex flex-row text-gray-900 bg-opacity-30 bg-gray-200 shadow-lg
    rounded-md pr-3 w-[80%] justify-between"
    >
      <View>
        <Image className="w-32 h-24 rounded-md" source={data.image}></Image>
      </View>
      <View className="flex flex-col pr-4 ml-2">
        <View>
          <Text className="text-[20px]">{data.name}</Text>
          <Text className="text-gray-700">{data.description}</Text>
        </View>
        <View className="flex flex-row items-center justify-between">
          <Text className="text-[19px]">{data.price}$</Text>
          <View className="flex flex-row items-center py-2">
            <TouchableOpacity>
              <Icons.Minus
                width="12"
                height="10"
                stroke="white"
                className="p-[10px] bg-yellow-500 items-center justify-center rounded-full"
              ></Icons.Minus>
            </TouchableOpacity>
            <Text className="mx-2 font-semibold">2</Text>
            <TouchableOpacity onPress={addtoCart}>
              <Icons.Plus
                width="10"
                height="10"
                stroke="white"
                className="p-[10px] bg-yellow-500 items-center justify-center rounded-full"
              ></Icons.Plus>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
}
