import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
import productassets from "../../../assets/products";
import { Product } from "../../models/index";
import FavoritePets from "../../components/FavoritePets";

function Index() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productassets);
  }, []);

  console.log("The products", products);

  return (
    <View style={styles.productsContainer}>
      {/*Render Header */}
      <View style={styles.titleProducts}>
        <Text style={styles.topicTitle}>Sahiplendirme İlan Panosu</Text>
        <View style={{ flexDirection: "row", alignItems: "center" }}>
          <Text style={styles.detailTitle}>Hepsini Gör</Text>
          <AntDesign name="right" size={14} color="#F24E61" />
        </View>
      </View>
      {/*Render favorite pets */}
      <ScrollView bounces={true} horizontal={true}>
        {products.map((item) => {
          return <FavoritePets />;
        })}
      </ScrollView>
    </View>
  );
}

export default Index;
