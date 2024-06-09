import React, { useEffect, useState } from "react";
import { ScrollView, Text, TouchableOpacity, Image } from "react-native";
import categoriesData from "../../../assets/categories";
import styles from "./styles";
import { Category } from "../../models";
import { useNavigation } from "@react-navigation/native";

function Index() {
  const [categories, setCategories] = useState<Category[]>([]);
  const navigation = useNavigation();

  useEffect(() => {
    setCategories(categoriesData);
    return () => {
      setCategories([]);
    };
  }, []);

  return (
    <ScrollView
      bounces={true}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      style={styles.scrollStyle}
    >
      {categories.map((item: Category) => (
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("CategoryFiltering", { category: item })
          }
          style={styles.center}
        >
          <Image source={item.src} style={styles.image} />
          <Text style={{ fontSize: 12, color: "#767575", fontWeight: "bold" }}>
            {item.name}
          </Text>
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
}

export default Index;
