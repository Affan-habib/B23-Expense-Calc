import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { colors } from "../styles/Colors";

const Datepicker = () => {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);
  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  return (
    <SafeAreaView style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          
        }}
      >
        <TouchableOpacity onPress={showDatePicker}>
          <Text style={{ fontSize: 16, marginBottom: 10 }}>Select Date</Text>
          <Text style={styles.inputBox}>
            {selectedDate
              ? selectedDate.toLocaleDateString()
              : "No date selected"}
          </Text>
        </TouchableOpacity>
        <DateTimePickerModal
          date={selectedDate}
          isVisible={datePickerVisible}
          mode="date"
          onConfirm={(date) => {
            setDatePickerVisible(false);
            setSelectedDate(date);
          }}
          onCancel={() => setDatePickerVisible(false)}
        />
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  inputBox: {
    padding: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "white",
  },
});
export default Datepicker;
