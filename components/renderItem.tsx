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

import { Text, Title } from "react-native-paper";
import { Icon } from "react-native-elements";
import { useAppSelector, useAppDispatch } from "../redux/hooks/";
import { addItem, removeItem } from "../redux/reducers/favorites";

import { Category } from "../types/index";
import { Events } from "../utils/data";

const RenderItem: React.FC<Category> = ({
  item,
  location,
  date,
  title,
  img,
  type,
}) => {
  const dispatch = useAppDispatch();

  return (
    <Pressable
      style={styles.Pressable}
      onPress={() => {
        type == "add" ? dispatch(addItem(item)) : dispatch(removeItem(item));
      }}
    >
      <View style={{ flex: 2.5 }}>
        <Text style={styles.title}>{title}</Text>

        <View style={{ flexDirection: "row", marginTop: 10 }}>
          <Icon
            name={"calendar-range"}
            size={20}
            type={"material-community"}
            color={"#e2c227"}
            containerStyle={{ paddingLeft: 10 }}
          />
          <Text style={{ paddingLeft: 2, color: "white" }}>{date}</Text>
        </View>

        <View style={{ flexDirection: "row", marginTop: 4 }}>
          <Icon
            name={"map-marker"}
            size={20}
            type={"material-community"}
            color={"#e2c227"}
            containerStyle={{ paddingLeft: 10 }}
          />
          <Text style={{ paddingLeft: 2, color: "white" }}>{location}</Text>
        </View>
      </View>

      <View style={{ flex: 1, alignSelf: "flex-end" }}>
        <Image
          resizeMode="cover"
          style={styles.image}
          source={{
            uri: img,
          }}
        />
      </View>
    </Pressable>
  );
};

export default RenderItem;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingTop: Constants.statusBarHeight,
    backgroundColor: "#293f4e",
  },
  title: {
    color: "white",
    fontWeight: "bold",
    paddingTop: 10,
    paddingLeft: 10,
  },
  Pressable: {
    flexDirection: "row",
    flex: 1,
    backgroundColor: "rgba(255,255,255,0.1)",
    margin: 10,
    borderRadius: 8,
  },
  image: {
    width: 100,
    height: 100,
    borderTopRightRadius: 10,
    borderBottomRightRadius: 10,
  },
});
