import moment from "moment";
import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/Colors";
import IconButton from "./IconButton";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text
        style={[
          styles.title,
          { backgroundColor: props.bgcolor || colors.info },
        ]}
      >
        {props.title}
      </Text>
      <View style={{flexDirection: "row"}}>
        <IconButton name="attach-money" color={colors.info}/>
        <Text style={styles.body}>{props.cost  || "Not found"}</Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <IconButton name="category" color={colors.info}/>
        <Text style={styles.body}>{props.category || "Not found"} </Text>
      </View>
      <View style={{flexDirection: "row"}}>
        <IconButton name="date-range" color={colors.info}/>
        <Text style={styles.body}>{props.date}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // borderRadius: 10,
    margin: 10,
    backgroundColor: "#F9F9F9",
    flex: 1 / 2,
  },
  title: {
    fontSize: 16,
    color: "white",
    backgroundColor: colors.danger,
    padding: 10,
  },
  body: {
    margin: 5,
    fontSize: 16,
  },
});

export default Card;
