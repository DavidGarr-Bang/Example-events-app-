import * as React from "react";
import {
  View,
  StyleSheet,
  Pressable,
  FlatList,
  ListRenderItem,
  FlatListProps,
  Image,
} from "react-native";
import Constants from "expo-constants";

import { Text, Title, Card } from "react-native-paper";
import { useAppSelector, useAppDispatch } from "../redux/hooks/";

import RenderItem from "../components/renderItem";
import { Events } from "../utils/data";

const App = () => {
  const date = useAppSelector((state) => state.date.date);
  const dispatch = useAppDispatch();

  return (
    <FlatList
      data={Events.filter((item) => item.date == date)}
      showsVerticalScrollIndicator={false}
      renderItem={({ item }) => (
        <RenderItem
          id={item.id}
          item={item}
          title={item.title}
          date={item.date}
          location={item.location}
          img={item.img}
          type={"add"}
        />
      )}
      keyExtractor={(item) => item.id}
    />
  );
};

export default App;
