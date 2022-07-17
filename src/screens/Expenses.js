import {
  View,
  FlatList,
  StyleSheet,
  Text,
  StatusBar,
} from "react-native";
import React from "react";
import { useSelector } from "react-redux";
const Item = ({ title, category, cost , date}) => (
  <View style={styles.itemContainer}>
    <View style={{ flexDirection: "row" }}>
      <View style={{ flex: 1 }}>
        <Text style={styles.title}>{title}</Text>
      </View>
      <View style={{ flex: 1 }}>
        <Text style={styles.cost}>৳  {cost}</Text>
      </View>
    </View>
    <View style={{ flexDirection: "row", justifyContent: "space-between" }}>
      <Text style={styles.date}>Date: {date}</Text>
      <Text style={styles.category}>Category:{category}</Text>
    </View>
  </View>
);
export default function ExpnseList() {
  const expenses = useSelector((state) => state.expenses);
  //   console.log(expenses);
  const renderItem = ({ item }) => (
    <Item
      key={item.id}
      title={item.title}
      category={item.category}
      date={item.date}
      cost={item.cost}
    />
  );
  return (
    <View>
      <Text style={styles.list}>Expense List</Text>
        <FlatList
          data={expenses}
          renderItem={renderItem}
          keyExtractor={(item) => item.id}
        />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  itemContainer: {
    backgroundColor: "#eaebec",
    borderRadius: 4,
    margin: 5,
    padding: 20,
  },
  item: {
    backgroundColor: "red",
    padding: 2,
    marginVertical: 2,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 16,
    color: "#00669a",
  },
  cost: {
    fontSize: 16,
    alignSelf: "flex-end",
    color: "#00669a",
  },
  date: {
    fontSize: 14,
    color: "#00669a",
  },
  category: {
    fontSize: 14,
    color: "#b39a60",
  },
  list : {
    fontSize: 20,
    textAlign: 'center',
    borderRadius: 4,
    padding: 5,
    margin: 10,
    backgroundColor: '#00669a',
    color: "white",
  }
});