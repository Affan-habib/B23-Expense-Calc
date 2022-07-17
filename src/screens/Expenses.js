import { View, FlatList, StyleSheet, Text, StatusBar } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { colors } from "../styles/Colors";
const Item = ({ item }) => (
  <Card
    key={item.id}
    title={item.title}
    category={item.category}
    cost={item.cost}
    date={item.date}
  />
);
export default function ExpnseList() {
  const expenses = useSelector((state) => state.expenses);
  return (
    <View style={{backgroundColor: colors.secondary, padding: 10, flex: 1}}>
      <Text style={styles.list}>Expense List</Text>
      <FlatList
        numColumns={1}
        data={expenses}
        renderItem={Item}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
}
const styles = StyleSheet.create({
  list: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    borderRadius: 4,
    padding: 5,
    margin: 10,
    backgroundColor: colors.primary,
    color: "white",
  },
});
