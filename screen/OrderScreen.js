import { View, Text } from "react-native";
import React from "react";
import MapView, { Marker } from "react-native-map";
import { useNavigation } from "@react-navigation/native";
import { featured } from "../data/data";
export default function OrderScreen() {
  const restaurants = featured.restaurants[0];
  const navigate = useNavigation();
  return (
    <View className="flex-1">
      <MapView
        initialRegion={{
          latitude: restaurants.lat,
          longitude: restaurants.lng,
          latitudeDelta: 0.01,
          longitudeDelta: 0.01,
        }}
        className="flex-1"
        mapType="standard"
      >
        <Marker
          coordinate={{ latitude: restaurants.lat, longitude: restaurants.lng }}
        ></Marker>
      </MapView>
    </View>
  );
}
