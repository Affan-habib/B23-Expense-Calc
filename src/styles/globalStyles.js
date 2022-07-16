import { StyleSheet } from "react-native";
const globalStyles = StyleSheet.create({
  pagination: {
    flexDirection: "row",
    // position: 'absolute',
    alignItems: "space-between",
    justifyContent: "space-between",
    // top:200,
    overflow: "visible",
  },
});
const colors = {
    primary: "#009fdb",
    secondary: "#0F1A43",
    info: "#f48130",
    danger: "#D61C4E",
    light: "#5a5959",
    primaryLight : "#f48130",
    secondaryLight : "#f48130",
    infoLight : "#f48130",
    dangerLight : "#f48130",
  };
export  {globalStyles, colors};
