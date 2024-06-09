import React from "react";
import {
  TouchableOpacity,
  Image,
  TextInput,
  Text,
  SafeAreaView,
} from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import PostScreen from "../screens/PostScreen";
import CategoryFilterScreen from "../screens/CategoryFilterScreen";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import Ionicons from "@expo/vector-icons";

const Stack = createStackNavigator();

function PostNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={PostScreen}
        options={{
          headerStyle: { backgroundColor: "#F1F1F1" },
          headerTitle: () => (
            <Text style={{ fontWeight: "bold", fontSize: 16 }}>İlanlarım</Text>
          ),
          headerLeft: () => (
            <MaterialCommunityIcons
              style={{ marginLeft: 15 }}
              name="lightbulb-on"
              size={24}
              color="black"
            />
          ),
          headerRight: () => (
            <MaterialCommunityIcons
              style={{ marginRight: 15 }}
              name="lightbulb-on"
              size={24}
              color="black"
            />
          ),
        }}
      />
    </Stack.Navigator>
  );
}

export default PostNavigator;
