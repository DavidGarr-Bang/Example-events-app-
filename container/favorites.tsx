import * as React from "react";
import {
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
  ListRenderItem,
  FlatListProps,
  Image,
} from "react-native";
import Constants from "expo-constants";

import { useAppSelector, useAppDispatch } from "../redux/hooks/";
import RenderItem from "../components/renderItem";

export default function App() {
  const Favlist = useAppSelector((state) => state.favorites.favoritesList);

  return (
    <View style={styles.container}>
      <FlatList
        data={Favlist}
        renderItem={({ item }) => (
          <RenderItem
            id={item.id}
            item={item}
            title={item.title}
            date={item.date}
            location={item.location}
            img={item.img}
            type={"remove"}
          />
        )}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#293f4e",
  },
});
