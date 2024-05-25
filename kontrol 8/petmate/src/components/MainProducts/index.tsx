import React from "react";
import { View, Text } from "react-native";
import { Product } from "../../models";
import styles from "../MainProducts/styles";
type MainProductsProps = {
  mainProducts: Product[];
};

function index({ mainProducts }: MainProductsProps) {
  return (
    <View style={styles.productsContainer}>
      <View>Petmate</View>
    </View>
  );
}

export default index;
