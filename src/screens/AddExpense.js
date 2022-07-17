import React, { useRef } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Picker } from "@react-native-picker/picker";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addExpense } from "../reducers/expensesSlice";
import { colors } from "../styles/Colors";
import Button from "../components/Button"
export default function AddExpense() {
  const dispatch = useDispatch();
  const categories = useSelector((state) => state.categories);
  const pickerRef = useRef();

  function open() {
    pickerRef.current.focus();
  }

  function close() {
    pickerRef.current.blur();
  }
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.mainWrapper}>
        <Formik
          initialValues={{
            title: "",
            cost: "",
            category: "",
            date: "20/54",
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
              <TextInput
                value={values.title}
                style={styles.customCss}
                onBlur={() => setFieldTouched("title")}
                onChangeText={handleChange("title")}
                placeholder="Expense Title"
              />
              {touched.title && errors.title && (
                <Text style={{ fontSize: 14, color: colors.info, marginBottom: 15 }}>
                  {errors.title}
                </Text>
              )}
              <TextInput
                value={values.cost}
                style={styles.customCss}
                onBlur={() => setFieldTouched("cost")}
                onChangeText={handleChange("cost")}
                keyboardType="numeric"
                placeholder="Enter your cost"
              />
              {touched.cost && errors.cost && (
                <Text style={{ fontSize: 14, color: colors.info }}>
                  {errors.cost}
                </Text>
              )}
              <Picker
                ref={pickerRef}
                selectedValue={values.category}
                mode="dropdown"
                style={styles.customCss}
                onValueChange={(itemValue, itemIndex) =>
                  setFieldValue("category", itemValue)
                }
                placeholder="Select Category"
              >
                {categories.map((c, index) => (
                  <Picker.Item key={index} label={c} value={c} />
                ))}
              </Picker>
              <Button
                color="#00669a"
                title="Save"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  customCss: {
    borderWidth: 1,
    padding: 10,
    marginBottom: 12,
    borderColor: "#cccccc",
  },
  mainWrapper: {
    padding: 40,
    backgroundColor: colors.secondary,
    flex: 1
  },
});