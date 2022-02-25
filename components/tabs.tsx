import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Pressable,
} from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import {
  createBottomTabNavigator,
  BottomTabBarProps,
} from "@react-navigation/bottom-tabs";

import { Icon } from "react-native-elements";
import Home from "../container/home";
import favorites from "../container/favorites";
import sectionlist from "../container/sectionlist";
import searchScreen from "../container/search";

export type BottomTabParamList = {
  Home: undefined;
  Search: undefined;
  Favorites: undefined;
};

const Tab = createBottomTabNavigator<BottomTabParamList>();

function AllTabs() {
  return (
    <Tab.Navigator tabBarOptions={{ activeTintColor: "#e2c227" }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="home" color={color} type={"material-community"} />
          ),
        }}
      />

      <Tab.Screen
        name="Favorites"
        component={favorites}
        options={{
          tabBarIcon: ({ color }) => (
            <TabBarIcon
              name="star-outline"
              color={color}
              type={"material-community"}
            />
          ),
        }}
      />
    </Tab.Navigator>
  );
}

function TabBarIcon(props: {
  name: React.ComponentProps<typeof Icon>["name"];
  type: React.ComponentProps<typeof Icon>["type"];
  color: string;
}) {
  return (
    <Icon
      tvParallaxProperties={undefined}
      size={30}
      style={{ marginBottom: -3 }}
      {...props}
    />
  );
}

export default AllTabs;

const styles = StyleSheet.create({
  TabBarMainContainer: {
    marginLeft: 40,
    marginRight: 40,

    flexDirection: "row",
    alignSelf: "center",
    position: "absolute",
    bottom: 20,
    backgroundColor: "white",
    padding: 6,
    borderRadius: 150 / 2,
  },

  button: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    padding: 10,
  },

  focus_button: {
    paddingTop: 5,
    paddingBottom: 5,
    justifyContent: "center",
    alignItems: "center",
    flexGrow: 1,
    padding: 10,
    color: "white",
    backgroundColor: "black",
    borderRadius: 150 / 2,
  },

  TextStyle: {
    color: "#b0b0b0",
    textAlign: "center",
    fontSize: 22,
  },

  focus_textStyle: {
    color: "white",
    textAlign: "center",
    fontSize: 22,
  },
});
