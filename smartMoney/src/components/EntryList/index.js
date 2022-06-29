import React from "react";
import { View, StyleSheet, FlatList, Text } from "react-native";
import EntryListItem from "./entryListItem";

const EntryList = ({ entries }) => {
  return (
    <View>
      <Text style={styles.title}>Ultimos Lançamentos</Text>
      <FlatList
        data={entries}
        renderItem={({ item }) => (
          <Text>
           - {item.description} - ${item.amount}
          </Text>
        )}
      ></FlatList>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    //flex: 1,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    marginTop: 10,
    marginBottom: 10,
  },
});
export default EntryList;
