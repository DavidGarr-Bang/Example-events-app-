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
import { setDate } from "../redux/reducers/dates";

import { Dates } from "../types/index";
import { EventDates } from "../utils/data";

const App = () => {
  const dispatch = useAppDispatch();
  const [numberHolder, setNumberHolder] = React.useState<any>(EventDates[0]);
  const holder = useAppSelector((state) => state.date.date);

  return (
    <FlatList
      data={EventDates}
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      renderItem={({ item }) => (
        <Pressable
          style={{}}
          onPress={() => {
            dispatch(setDate(item.date.format("MMMM DD, YYYY")));
          }}
        >
          <Card
            style={{
              width: 60,
              padding: 10,
              margin: 10,
              backgroundColor:
                holder == item.date.format("MMMM DD, YYYY")
                  ? "#e2c227"
                  : "white",
            }}
          >
            <Text
              style={{
                textAlign: "center",
                color: "black",
              }}
            >
              {item.date.format("ddd")}
            </Text>

            <Text
              style={{
                textAlign: "center",
                color: holder == item.id ? "black" : "black",
              }}
            >
              {item.date.format("DD")}
            </Text>
          </Card>
        </Pressable>
      )}
    />
  );
};

export default App;
