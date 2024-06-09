import { StyleSheet, Dimensions } from "react-native";

const { height, width } = Dimensions.get("window");
const styles = StyleSheet.create({
  center: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 10,
  },

  scrollStyle: {
    height: height * 0.09,

    marginBottom: 22,
    marginTop: 20,
  },
  image: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },
});

export default styles;
