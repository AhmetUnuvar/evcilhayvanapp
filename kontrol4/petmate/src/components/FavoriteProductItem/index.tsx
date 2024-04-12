import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Product } from "../../models";
import styles from "./styles";

type ProductProps = {
  product: Product;
};

function Index({ product }: ProductProps) {
  return (
    <TouchableOpacity style={styles.favorite}>
      <View style={styles.favoriteView}>
        <Image
          source={{ uri: product.image }}
          resizeMode="stretch"
          style={styles.favoriteImage}
        />
      </View>
    </TouchableOpacity>
  );
}

export default Index;
