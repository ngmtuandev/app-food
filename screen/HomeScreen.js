import { View, Text, TextInput, ScrollView } from "react-native";
import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { StatusBar } from "expo-status-bar";
import * as Icon from "react-native-feather";
import Category from "../component/Category";
export default function HomeScreen() {
  return (
    <SafeAreaView className="bg-white">
      <StatusBar barStyle="dark-content" />
      <View className="flex-row items-center px-4 py-2">
        <View className="flex-row items-center flex-1 p-3 border border-gray-200 rounded-full">
          <View className="">
            <Icon.Search width="25" height="25" stroke="gray" />
          </View>
          <View className="overflow-hidden">
            <TextInput placeholder="Nhập vị trí..."></TextInput>
          </View>
          <View className="ml-[85px] flex flex-row items-center border-l-[2px] border-gray-600 px-2">
            <Icon.Map width="22" height="22" stroke="gray"></Icon.Map>
            <Text className="ml-1 text-[16px]">Hồ Chí Minh</Text>
          </View>
        </View>
        <View className="flex items-center justify-center w-10 h-10 ml-2 rounded-full bg-slate-600 bg-opacity">
          <Icon.Sliders
            width="20"
            height="20"
            stroke="white"
            strokeWidth={2}
          ></Icon.Sliders>
        </View>
      </View>
      <ScrollView>
        <Category></Category>
      </ScrollView>
    </SafeAreaView>
  );
}
