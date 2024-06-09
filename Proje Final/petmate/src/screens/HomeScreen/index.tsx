import React, { useEffect, useState } from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import productassets from "../../../assets/products";
import { Product } from "../../models/index";
import FavoriteProducts from "../../components/FavoriteProducts";
import CategoryFilter from "../../components/CategoryFilter";
import MainProducts from "../../components/MainProducts";
function index() {
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(() => {
    setProducts(productassets);
  }, []);
  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <CategoryFilter />
      <FavoriteProducts />
      <MainProducts
        filtered={false}
        header={"Pet İlanları"}
        mainProducts={products}
      />
    </ScrollView>
  );
}

export default index;
