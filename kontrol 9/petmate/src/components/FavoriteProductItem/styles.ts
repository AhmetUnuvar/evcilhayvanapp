import { Dimensions, StyleSheet } from "react-native";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  favorite: {
    width: width * 0.29,
  },
  favoriteView: {
    width: width * 0.27,
    height: width * 0.27,
  },
  favoriteImage: {
    width: width * 0.27,
    height: width * 0.27,
    borderRadius: 10,
  },
  labeledFav: {
    transform: [{ rotate: "45deg" }],
    position: "absolute",
    right: -25,
    top: 12,
    backgroundColor: "white",
    paddingVertical: 3,
    paddingHorizontal: 20,
  },
});

export default styles;
