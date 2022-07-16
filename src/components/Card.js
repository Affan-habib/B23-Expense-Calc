import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/globalStyles";

const Card = (props) => {
  return (
    <View style={styles.card}>
      <Text
        style={[
          styles.title,
          { backgroundColor: props.bgcolor || colors.primary },
        ]}
      >
        {props.title}
      </Text>
      <Text style={styles.body}>{props.body}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    borderRadius: 10,
    margin: 10,
    backgroundColor: "#F9F9F9" ,
    // paddingVertical: 10,
    // paddingHorizontal: 15,
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    textTransform: "uppercase",
    backgroundColor: colors.danger,
    padding: 15,
  },
  body: {
    margin: 20,
    fontSize: 18,
  },
});

export default Card;
