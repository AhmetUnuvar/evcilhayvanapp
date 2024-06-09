import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");
const styles = StyleSheet.create({
  favorite: {
    width: width * 0.28,
  },
  favoriteView: {
    width: width * 0.26,
    height: width * 0.26,
  },
  favoriteImage: {
    width: width * 0.26,
    height: width * 0.26,
    borderRadius: 10,
  },
  main: {
    width: width * 0.44,
    height: width * 0.44,
    alignItems: "center",
  },
  mainView: {
    width: width * 0.42,
    height: width * 0.42,
  },
  mainImg: {
    width: width * 0.42,
    height: width * 0.42,
    borderRadius: 12,
  },
});
export default styles;
