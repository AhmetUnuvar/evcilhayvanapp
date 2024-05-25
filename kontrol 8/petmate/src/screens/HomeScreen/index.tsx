import React, { useEffect, useState } from "react";
import { ScrollView } from "react-native";
import productassets from "../../../assets/products";
import { Product } from "../../models/index";
import FavoriteProducts from "../../components/FavoriteProducts";
import MainProducts from "../../components/MainProducts";
function Index() {
  const [products, setProducts] = useState<Product[]>([]);

  useEffect(() => {
    setProducts(productassets);
  }, []);

  console.log("The products", products);

  return (
    <ScrollView style={{ backgroundColor: "white", height: "100%" }}>
      <FavoriteProducts />
      <MainProducts mainProducts={products} />
    </ScrollView>
  );
}

export default Index;
