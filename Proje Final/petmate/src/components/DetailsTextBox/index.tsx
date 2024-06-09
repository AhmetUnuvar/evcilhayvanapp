import { FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Text } from "react-native";

function index({
  price,
  name,
  description,
}: {
  price: number;
  name: string;
  description: string;
}) {
  return (
    <View>
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <FontAwesome name="turkish-lira" size={26} color="black" />
          <Text style={{ fontSize: 30, fontWeight: "bold" }}>{price}</Text>
        </View>
      </View>
      <Text style={{ fontSize: 24, fontWeight: "bold", marginTop: 6 }}>
        {name}
      </Text>
      <View>
        <View></View>
        <View></View>
      </View>
      <Text style={{ marginTop: 25 }}>{description}</Text>
    </View>
  );
}

export default index;
