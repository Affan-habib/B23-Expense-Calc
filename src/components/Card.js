import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/Colors";

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
      <Text style={styles.body}>{props.category}</Text>
      <Text style={styles.body}>{props.date}</Text>
      <Text style={styles.body}>{props.cost}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    // borderRadius: 10,
    margin: 10,
    backgroundColor: "#F9F9F9",
    flex:1/2,
  },
  title: {
    fontSize: 16,
    color: "white",
    backgroundColor: colors.danger,
    padding: 10,
  },
  body: {
    margin: 5,
    fontSize: 14,
    color: colors.pr
  },
});

export default Card;
