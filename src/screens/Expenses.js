import React, { useEffect, useState } from "react";
import {
  Image,
  PermissionsAndroid,
  SafeAreaView,
  ScrollView,
  TouchableOpacity,
  Text,
  View,
  StyleSheet,
} from "react-native";
import { globalStyles, colors } from "../styles/globalStyles";
import { useIsFocused } from "@react-navigation/native";
// import { useToast } from "react-native-toast-notifications";
import Button from "../components/Button";
import Card from "../components/Card";

const Expenses = (props) => {
  const isFocused = useIsFocused();

  return (
    <ScrollView style={styles.container}>
      <View style={styles.list}>
        <Card
          title="Brainstation23"
          body="Hello body lorem30 HHello body lorem30ello body lorem30Hello body lorem30Hello body lorem30"
        />
        <Card
          bgcolor={colors.danger}
          title="Brainstation23"
          body="Hello body lorem30 HHello body lorem30ello body lorem30Hello body lorem30Hello body lorem30"
        />
        <Card
          bgcolor={colors.primary}
          title="Brainstation23"
          body="Hello body lorem30 HHello body lorem30ello body lorem30Hello body lorem30Hello body lorem30"
        />
        <Card
          bgcolor={colors.info}
          title="Brainstation23"
          body="Hello body lorem30 HHello body lorem30ello body lorem30Hello body lorem30Hello body lorem30"
        />
        <Card
          bgcolor={colors.danger}
          title="Brainstation23"
          body="Hello body lorem30 HHello body lorem30ello body lorem30Hello body lorem30Hello body lorem30"
        >
          <Card
            bgcolor={colors.info}
            title="Brainstation23"
            body="Hello bodyrem30Hello body lorem30Hello body lorem30"
          />
        </Card>
      <Button title="photos" onPress={() => navigation.navigate('Gallery')}/>
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: colors.secondary,
  },
  list: {
    marginBottom: 40,
  },
});

export default Expenses;
