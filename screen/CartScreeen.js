import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import * as Icon from "react-native-feather";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../data/data";
import { useDispatch, useSelector } from "react-redux";
import { removeCart } from "../slice/addCart";
export default function CartScreeen() {
  const { item } = useSelector((state) => state.cart);
  const navigate = useNavigation();
  const dispatch = useDispatch();
  const deleteCart = (data) => {
    dispatch(removeCart(data));
  };
  return (
    <View className="relative ">
      <View className="">
        <TouchableOpacity onPress={() => navigate.goBack()}>
          <Icon.ArrowLeft
            width="25"
            height="25"
            strokeWidth={2}
            stroke="white"
            className="absolute p-5 ml-5 bg-red-400 border border-yellow-400 rounded-full top-8"
          ></Icon.ArrowLeft>
        </TouchableOpacity>
        <View>
          <Text className="text-[22px] mt-9 ml-28 font-semibold text-red-700 uppercase">
            Giỏ Hàng Của Bạn
          </Text>
        </View>
      </View>
      <View className="flex flex-row items-center justify-between px-3 mt-8 bg-yellow-100 ">
        <Image
          className="w-24 h-24"
          source={require("../assets/images/bikeGuy.png")}
        ></Image>
        <Text className="text-gray-700">Đơn hàng sẽ giao 15-20 phút</Text>
        <TouchableOpacity className="px-2 py-1 bg-red-600 rounded-md">
          <Text className="font-semibold text-gray-50">Thay đổi</Text>
        </TouchableOpacity>
      </View>
      <View>
        {item.map((item, index) => {
          return (
            <View
              key={index}
              className="flex flex-row justify-between px-5 my-2 x-5"
            >
              <View className="flex flex-row items-center">
                <Text className="mr-3 text-[20px] text-gray-500">X2</Text>
                <Image
                  className="mr-3 rounded-md w-[50px] h-[50px]"
                  source={item.image}
                ></Image>
                <Text className="text-[22px] text-gray-900">{item.name}</Text>
              </View>
              <View className="flex flex-row items-center">
                <Text className="text-[22px] text-red-600 font-semibold">
                  1000
                </Text>
                <TouchableOpacity onPress={() => deleteCart(item)}>
                  <Icon.Minus
                    width="22"
                    height="22"
                    stroke="white"
                    className="p-3 ml-4 bg-red-600 rounded-md"
                  ></Icon.Minus>
                </TouchableOpacity>
              </View>
            </View>
          );
        })}
      </View>
      <View
        style={{ borderTopLeftRadius: 20, borderTopRightRadius: 20 }}
        className="w-[100%] shadow-lg h-[230px] bg-red-600 absolute px-5 flex flex-col -bottom-80"
      >
        <View className="flex-row justify-between my-1 mt-2">
          <Text className="text-gray-100 font-semibold text-[22px]">
            Tổng tiền:{" "}
          </Text>
          <Text className="text-gray-100 font-semibold text-[22px]">123</Text>
        </View>
        <View className="flex-row justify-between my-1">
          <Text className="text-gray-100 font-semibold text-[22px]">
            Phía giao:{" "}
          </Text>
          <Text className="text-gray-100 font-semibold text-[22px]">123</Text>
        </View>
        <View className="flex-row justify-between my-1">
          <Text className="text-gray-100 font-semibold text-[22px]">
            Tổng:{" "}
          </Text>
          <Text className="text-gray-100 font-semibold text-[22px]">123</Text>
        </View>
        <TouchableOpacity
          onPress={() => navigate.navigate("Prepare")}
          className="flex items-center justify-center px-5 py-3 mt-2 bg-yellow-500 rounded-md"
        >
          <Text className="text-gray-100 font-bold text-[22px]">
            Thanh Toán
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
