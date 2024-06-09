import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import productassets from "../../../assets/products";
import { Product } from "../../models/index";
import FavoriteProductItem from "../../components/FavoriteProductItem";
function index() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productassets);
  }, []);
  return (
    <View style={styles.productsContainer}>
      <View style={styles.titleProducts}>
        <Text style={styles.topicTitle}>Vitrin İlanları</Text>
        <View></View>
      </View>
      <ScrollView
        bounces={true}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
      >
        {products.map((item) => {
          return (
            <FavoriteProductItem
              prodType="favorite"
              key={item.id}
              product={item}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}

export default index;
