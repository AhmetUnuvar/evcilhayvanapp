import { Feather, FontAwesome } from "@expo/vector-icons";
import React from "react";
import { View, Image, Text } from "react-native";

function index({ averageRating }: { averageRating: number }) {
  return (
    <View style={{ marginTop: 18 }}>
      <View style={{ flexDirection: "row", alignItems: "center" }}>
        <View>
          <Image
            style={{ height: 46, width: 46, borderRadius: 23 }}
            source={{
              uri: "https://png.pngtree.com/thumb_back/fw800/background/20230320/pngtree-man-taking-selfie-at-lake-casual-traveler-male-photo-image_25589234.jpg",
            }}
          />
        </View>
        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontWeight: "bold", fontSize: 16 }}>Ahmet Ünüvar</Text>
          <View
            style={{
              flexDirection: "row",
              alignItems: "center",
              paddingTop: 2,
            }}
          >
            {[0, 0, 0, 0, 0].map((el, i) => (
              <FontAwesome
                key={i}
                name="star"
                size={14}
                color={i < Math.floor(averageRating) ? "yellow" : "gray"}
                style={{ marginRight: 2 }}
              />
            ))}
          </View>
        </View>
      </View>
    </View>
  );
}

export default index;
