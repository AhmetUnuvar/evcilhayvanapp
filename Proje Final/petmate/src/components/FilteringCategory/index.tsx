import React, { useState, useEffect } from "react";
import {
  View,
  ScrollView,
  Text,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import filteringsData from "../../../assets/filterings";
import { Category, Filtering } from "../../models";

function index({ category }: { category: Category }) {
  const [filterings, setFilterings] = useState<Filtering[]>([]);
  useEffect(() => {
    setFilterings(filteringsData);
    return () => {
      setFilterings([]);
    };
  }, []);
  return (
    <ScrollView
      style={{ marginHorizontal: 10, marginVertical: 12 }}
      horizontal={true}
      bounces={true}
      showsHorizontalScrollIndicator={false}
    >
      <View style={[{ backgroundColor: "#616161" }, styles.filteringBadge]}>
        <Image
          source={category.src}
          style={{
            width: 32,
            height: 32,
            borderRadius: 16,
            marginRight: 4,
            marginLeft: -3,
          }}
        />
        <Text style={{ color: "white" }}>{category.name}</Text>
      </View>
      {filterings.map((item: Filtering) => (
        <View
          key={item.id}
          style={[{ backgroundColor: "#F5F5F5" }, styles.filteringBadge]}
        >
          <Text>{item.name}</Text>
        </View>
      ))}
    </ScrollView>
  );
}
const styles = StyleSheet.create({
  filteringBadge: {
    flexDirection: "row",
    paddingHorizontal: 8,
    marginRight: 7,
    alignItems: "center",
    borderRadius: 20,
    justifyContent: "space-between",
  },
});

export default index;
