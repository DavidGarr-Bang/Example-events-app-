import React from "react";
import {
  SafeAreaView,
  StyleSheet,
  View,
  SectionList,
  Text,
  FlatList,
  Image,
} from "react-native";

import DatesList from "../components/datepicker";
import EventsList from "../components/eventsList";

import { Events } from "../utils/data";

import { useAppSelector, useAppDispatch } from "../redux/hooks/";
import RenderItem from "../components/renderItem";

import { Card } from "react-native-paper";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { Icon } from "react-native-elements";

type RootStackParamList = {
  Home: undefined;
};

type Props = NativeStackScreenProps<RootStackParamList, "Home">;

const App = ({ navigation }: Props) => {
  let A = [
    {
      id: "1",
      list: <DatesList />,
    },
  ];

  let B = [
    {
      id: "2",
      list: <EventsList />,
    },
  ];

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.container}>
        <SectionList
          stickySectionHeadersEnabled={true}
          sections={[
            { title: "", data: A },
            { title: "", data: B },
          ]}
          renderSectionHeader={({ section }) => <View style={{ margin: 10 }} />}
          renderItem={({ item }) => <View>{item.list}</View>}
          keyExtractor={(item) => item.id}
        />
      </View>
    </SafeAreaView>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "#293f4e",
  },
  sectionHeaderStyle: {
    backgroundColor: "#CDDC89",
    fontSize: 20,
    padding: 5,
    color: "#fff",
  },
  sectionListItemStyle: {
    fontSize: 15,
    padding: 15,
    color: "#000",
    backgroundColor: "#F5F5F5",
  },
  listItemSeparatorStyle: {
    height: 0.5,
    width: "100%",
    backgroundColor: "#C8C8C8",
  },
});
