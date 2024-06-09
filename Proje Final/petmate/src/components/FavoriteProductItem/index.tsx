import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Product } from "../../models";
import styles from "./styles";
import { useNavigation } from "@react-navigation/native";
type productProps = {
  product: Product;
  prodType: string;
};
function index({ product, prodType }: productProps) {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      onPress={() =>
        navigation.navigate("ProductDetails", { product: product })
      }
      style={prodType === "favorite" ? styles.favorite : styles.main}
    >
      <View
        style={prodType === "favorite" ? styles.favoriteView : styles.mainView}
      >
        <Image
          source={{ uri: product.image }}
          resizeMode="stretch"
          style={
            prodType === "favorite" ? styles.favoriteImage : styles.mainImg
          }
        />
      </View>
    </TouchableOpacity>
  );
}

export default index;
