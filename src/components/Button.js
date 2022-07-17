import React from "react";
import { TouchableOpacity, View, Text, StyleSheet } from "react-native";
import { colors } from "../styles/Colors";

const Button = (props) => {
  return (
    <TouchableOpacity onPress={props.onPress}>
      <View
        style={[
          styles.button,
          { backgroundColor: props.bgcolor || colors.primary },
        ]}
      >
        <Text style={styles.title}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    borderRadius: 2,
    paddingHorizontal: 10,
    justifyContent: "center",
    alignItems: "center",
    height: 50
  },
  title: {
    fontSize: 18,
    color: "#fff",
    fontWeight: "bold",
    alignSelf: "center",
    textTransform: "uppercase",
  },
});

export default Button;
