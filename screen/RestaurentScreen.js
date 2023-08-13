import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { useRoute, useNavigation } from "@react-navigation/native";
import * as Icon from "react-native-feather";
import Disd from "../component/Disd";
import CartTaskbar from "../component/CartTaskbar";
export default function RestaurentScreen() {
  const navigate = useNavigation();
  const router = useRoute();
  const data = router.params.data;
  return (
    <View className="relative flex justify-center mt-5">
      <ScrollView showsVerticalScrollIndicator={false}>
        <View className="">
          <Image className="h-[250px] w-full" source={data.image}></Image>
          <TouchableOpacity onPress={() => navigate.goBack()}>
            <Icon.ArrowLeft
              width="25"
              height="25"
              strokeWidth={2}
              stroke="white"
              className="absolute p-5 ml-5 bg-red-400 border border-yellow-400 rounded-full bottom-48"
            ></Icon.ArrowLeft>
          </TouchableOpacity>
        </View>
        <View
          className="items-center justify-center pt-5 pb-5 -mt-16 bg-white"
          style={{ borderTopLeftRadius: 40, borderTopRightRadius: 40 }}
        >
          <Text className="text-gray-700 font-semibold text-[35px] uppercase">
            {data.name}
          </Text>
          <Text className="text-gray-600 text-[22px]">{data.category}</Text>
          {data.dishes.map((item, index) => {
            return <Disd key={index} data={item}></Disd>;
          })}
        </View>
      </ScrollView>
      <CartTaskbar></CartTaskbar>
    </View>
  );
}
