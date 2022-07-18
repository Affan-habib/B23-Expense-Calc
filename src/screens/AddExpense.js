import React, { useRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../reducers/expensesSlice";
import { colors } from "../styles/Colors";
import Button from "../components/Button";
import DateTimePickerModal from "react-native-modal-datetime-picker";
import { ScrollView } from "react-native-gesture-handler";
import moment from "moment";
export default function AddExpense() {
  const dispatch = useDispatch();
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [datePickerVisible, setDatePickerVisible] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisible(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisible(false);
  };

  const handleConfirm = (date) => {
    hideDatePicker();
    setSelectedDate(date);
  };

  const categories = useSelector((state) => state.categories);
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <ScrollView>
      <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
        <View style={styles.mainWrapper}>
          <Formik
            initialValues={{
              title: "",
              cost: "",
              category: "Food",
              date: new Date(),
            }}
            onSubmit={(values, actions) => {
              actions.resetForm();
              // console.log(values);
              dispatch(addExpense(values));
            }}
            validationSchema={yup.object().shape({
              title: yup.string().required("Name is required."),
              cost: yup.number().required("Cost is required."),
              category: yup.string().required("Category is required."),
            })}
          >
            {({
              values,
              errors,
              setFieldTouched,
              touched,
              handleChange,
              isValid,
              handleSubmit,
              setFieldValue,
            }) => (
              <View>
                <View>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}>
                    Category of Cost
                  </Text>
                  <Picker
                    ref={pickerRef}
                    selectedValue={values.category}
                    mode="dropdown"
                    style={styles.picker}
                    onValueChange={(itemValue, itemIndex) =>
                      setFieldValue("category", itemValue)
                    }
                    placeholder="Select Category"
                  >
                    {categories.map((c, index) => (
                      <Picker.Item key={index} label={c} value={c} />
                    ))}
                  </Picker>
                </View>
                <View>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}>Title</Text>
                  <TextInput
                    value={values.title}
                    style={styles.inputBox}
                    onBlur={() => setFieldTouched("title")}
                    onChangeText={handleChange("title")}
                    placeholder="Expense Title"
                  />
                  {touched.title && errors.title && (
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.danger,
                        marginBottom: 15,
                      }}
                    >
                      {errors.title}
                    </Text>
                  )}
                </View>
                <View>
                  <Text style={{ fontSize: 16, marginBottom: 10 }}>Cost</Text>
                  <TextInput
                    value={values.cost}
                    style={styles.inputBox}
                    onBlur={() => setFieldTouched("cost")}
                    onChangeText={handleChange("cost")}
                    keyboardType="numeric"
                    placeholder="Enter your cost"
                  />
                  {touched.cost && errors.cost && (
                    <Text
                      style={{
                        fontSize: 14,
                        color: colors.danger,
                        marginBottom: 15,
                      }}
                    >
                      {errors.cost}
                    </Text>
                  )}
                </View>

                {/* Datepicker */}
                <View>
                  <TouchableOpacity onPress={showDatePicker}>
                    <Text style={{ fontSize: 16, marginBottom: 10 }}>
                      Select Date
                    </Text>
                    <Text style={styles.inputBox}>
                      {values.date
                        ? values.date.toLocaleDateString()
                        : "No date selected"}
                    </Text>
                  </TouchableOpacity>
                  <DateTimePickerModal
                    date={values.date}
                    isVisible={datePickerVisible}
                    mode="date"
                    onChange={(date) => setFieldValue("date", date)}
                    onConfirm={(date) => {
                      hideDatePicker();
                      // setFieldValue("date", date);
                    }}
                    onCancel={hideDatePicker}
                  />
                </View>
                {/* end of Datepicker */}

                <Button title="Save" onPress={handleSubmit} />
              </View>
            )}
          </Formik>
        </View>
      </TouchableWithoutFeedback>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  mainWrapper: {
    padding: 20,
    backgroundColor: colors.secondary,
    flex: 1,
  },
  inputBox: {
    padding: 10,
    borderColor: colors.primary,
    borderWidth: 1,
    marginBottom: 10,
    backgroundColor: "white",
  },
  picker: {
    padding: 10,
    borderWidth: 1,
    marginBottom: 20,
    backgroundColor: colors.info,
    color: "white",
  },
});
