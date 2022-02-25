import * as React from "react";
import { Button, View, Text, Switch, FlatList, Pressable } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Icon } from "react-native-elements";

import { useAppSelector, useAppDispatch } from "../redux/hooks/";

import Tabs from "../components/tabs";
import search from "../container/search";

const Stack = createNativeStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Tabs">
        <Stack.Screen
          name="home"
          component={Tabs}
          options={({ navigation }) => ({
            title: "",
            headerRight: () => (
              <Pressable onPress={() => navigation.push("search")}>
                <Icon
                  name="magnify"
                  size={24}
                  type={"material-community"}
                  tvParallaxProperties={undefined}
                />
              </Pressable>
            ),
          })}
          // options={{ headerShown: false }}
        />
        <Stack.Screen name="search" component={search} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
