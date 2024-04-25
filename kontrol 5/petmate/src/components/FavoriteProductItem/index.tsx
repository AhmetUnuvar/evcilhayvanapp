import React from "react";
import { View, TouchableOpacity, Text, Image } from "react-native";
import { Product } from "../../models";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";

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
        <View style={styles.labeledFav}>
          <Text style={{ fontSize: 9, fontWeight: "500" }}>Acil İlanlar</Text>
        </View>
        <TouchableOpacity>
          <AntDesign
            style={{ position: "absolute", right: 4, bottom: 5 }}
            name="heart"
            size={24}
            color="white"
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
}

export default Index;
