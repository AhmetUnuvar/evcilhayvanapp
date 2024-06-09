import React from "react";
import {
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  SafeAreaView,
  View,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "../screens/HomeScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import ProductDetailsScreen from "../screens/ProductDetailsScreen";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { MaterialIcons, Entypo } from "@expo/vector-icons";

const Stack = createStackNavigator();

const MainHeaderComponent = () => {
  return (
    <SafeAreaView
      style={{
        flexDirection: "row",
        alignItems: "center",
        width: "90%",
        marginHorizontal: "5%",
        marginBottom: 10,
      }}
    >
      <TouchableOpacity>
        <Image
          style={{ width: 38, height: 38, borderRadius: 20 }}
          source={{
            uri: "https://png.pngtree.com/thumb_back/fw800/background/20230320/pngtree-man-taking-selfie-at-lake-casual-traveler-male-photo-image_25589234.jpg",
          }}
        />
      </TouchableOpacity>
      <TextInput
        placeholder="Ara..."
        style={{
          backgroundColor: "#E5E5E5",
          flex: 1,
          marginHorizontal: 10,
          height: 35,
          borderRadius: 10,
          paddingLeft: "32%",
        }}
      />
      <Text style={{ color: "#FF184D", fontSize: 18 }}>Filtrele</Text>
    </SafeAreaView>
  );
};

function HomeNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{
          header: () => <MainHeaderComponent />,
        }}
      />
      <Stack.Screen
        name="ProductDetails"
        component={ProductDetailsScreen}
        options={{
          headerTransparent: true,
          headerRight: () => (
            <View
              style={{
                marginRight: 20,
                backgroundColor: "black",
                height: 36,
                width: 36,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 18,
              }}
            >
              <MaterialIcons
                name="arrow-back-ios-new"
                size={24}
                color="black"
              />
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity
              style={{
                marginLeft: 20,
                backgroundColor: "white",
                height: 36,
                width: 36,
                flexDirection: "row",
                justifyContent: "center",
                alignItems: "center",
                borderRadius: 18,
              }}
            >
              <Entypo name="cross" size={24} color="black" />
            </TouchableOpacity>
          ),
          headerTitle: () => null,
        }}
      />
      <Stack.Screen
        name="CategoryFiltering"
        component={CategoryFilterScreen}
        options={{
          header: () => <MainHeaderComponent />,
        }}
      />
    </Stack.Navigator>
  );
}

export default HomeNavigator;
