import React, {
  useEffect,
  useState,
  createRef,
  useRef,
  useLayoutEffect,
} from "react";

import {
  Text,
  View,
  StyleSheet,
  Pressable,
  FlatList,
  ListRenderItem,
  FlatListProps,
  Image,
  TextInput,
  TextInputProps,
} from "react-native";
import Constants from "expo-constants";

import { useAppSelector, useAppDispatch } from "../redux/hooks/";
import RenderItem from "../components/renderItem";
import { Events } from "../utils/data";

import { SearchBar } from "react-native-elements";
import { Category } from "../types/index";

import type { NativeStackScreenProps } from "@react-navigation/native-stack";

type RootStackParamList = {
  Search: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Search">;

export default function App({ navigation }: Props) {
  const [searchDetails, setSearchDetails] = useState<String>("");
  const [data, setData] = useState<Category[]>([]);

  const textInputRef = useRef<TextInput>(null);

  useEffect(() => {
    textInputRef.current?.focus();
  }, [textInputRef]);

  const searchFilterFunction = (text: string) => {
    if (text == "") {
      setData([]);
    } else {
      const newData = Events.filter((item) =>
        item.title.toLowerCase().includes(text.toLowerCase()),
      );
      setData(newData);
    }
  };

  navigation.setOptions({
    headerTitle: () => (
      <TextInput
        // auto autoFocus may or may not work
        autoFocus
        ref={textInputRef}
        style={styles.input}
        onChangeText={(text) => searchFilterFunction(text)}
        placeholder={"Search..."}
        placeholderTextColor={"rgba(0,0,0,.6)"}
        returnKeyType={"search"}
      />
    ),
  });

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#293f4e",
  },
  input: {
    color: "#000",
    fontSize: 18,
  },
});
