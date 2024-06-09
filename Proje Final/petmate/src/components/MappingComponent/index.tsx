import React from "react";
import { View, Dimensions, Text } from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

const { width, height } = Dimensions.get("window");

function index() {
  return (
    <View>
      <MapView
        provider={PROVIDER_GOOGLE}
        initialRegion={{
          latitude: 41.0082,
          longitude: 28.9784,
          latitudeDelta: 0,
          longitudeDelta: 0.5,
        }}
        style={{ height: height * 0.19, borderRadius: 12, marginTop: 18 }}
      />
      <View
        style={{
          height: height * 0.044,
          marginTop: -height * 0.04,
          borderBottomWidth: 0.2,
          borderRightWidth: 0.2,
          borderColor: "#A6A6A6",
          borderLeftWidth: 0.2,
          borderBottomLeftRadius: 12,
          borderBottomRightRadius: 12,
        }}
      >
        <Text
          style={{
            flexDirection: "row",
            alignItems: "center",
            paddingHorizontal: 16,
            paddingVertical: 45,
          }}
        >
          İletişim Numarası : 05422122639
        </Text>
      </View>
    </View>
  );
}

export default index;
