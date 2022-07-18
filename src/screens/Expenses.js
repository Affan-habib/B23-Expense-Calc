import React, { useState, useRef, useEffect } from "react";
import { View, FlatList, StyleSheet, Text } from "react-native";
import { useSelector } from "react-redux";
import Card from "../components/Card";
import { colors } from "../styles/Colors";
import { Picker } from "@react-native-picker/picker";
import { useIsFocused } from "@react-navigation/native";

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
  const isFocused = useIsFocused();

  const expenses = useSelector((state) => state.expenses);
  const categories = useSelector((state) => state.categories);
  const [data, setData] = useState(expenses);
  const [category, setCategory] = useState("All");
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  useEffect(() => {
    if (category == "All") {
      setData(expenses);
    } else {
      const filteredExpense = expenses.filter(
        (expenses) => expenses.category == category
      );
      setData(filteredExpense);
    }
  }, [category, isFocused]);
  return (
    <View style={{ backgroundColor: colors.secondary, padding: 10, flex: 1 }}>
      <Text style={{ fontSize: 16, marginLeft: 10, fontWeight: "bold" }}>
        Category
      </Text>
      <Picker
        ref={pickerRef}
        selectedValue={category}
        mode="dropdown"
        style={styles.picker}
        onValueChange={(itemValue, itemIndex) => {
          close();
          setCategory(itemValue);
        }}
        placeholder="Select Category"
      >
        <Picker.Item label="All" value="All" />
        {categories.map((c, index) => (
          <Picker.Item key={index} label={c} value={c} />
        ))}
      </Picker>
      <Text style={styles.list}>Expense List</Text>
      <Text style={{ fontSize: 20, color: colors.info, marginLeft: 10 }}>
        {data.length} Result Found
      </Text>
      <FlatList
        numColumns={1}
        data={data}
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
