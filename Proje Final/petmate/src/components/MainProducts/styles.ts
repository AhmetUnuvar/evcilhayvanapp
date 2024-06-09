import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  productsContainer: {
    width: "92%",
    marginHorizontal: "4%",
  },
  topicTitle: {
    fontWeight: "bold",
    fontSize: 16,
  },
  titleProduct: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 10,
    marginTop: 20,
  },
  listContainer: {
    flexDirection: "row",
    alignItems: "flex-start",
    flexWrap: "wrap",
    backgroundColor: "white",
    width: "100%",
  },
  topicTitleFiltered: {
    fontWeight: "bold",
    fontSize: 18,
  },
  detailTitle: {
    color: "red",
  },
});

export default styles;
