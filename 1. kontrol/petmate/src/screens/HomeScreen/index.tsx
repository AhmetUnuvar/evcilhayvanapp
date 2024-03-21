import React from "react";
import { View, ScrollView, Text } from "react-native";
import styles from "./styles";
import { AntDesign } from "@expo/vector-icons";
function Index() {
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
    </View>
  );
}

export default Index;
