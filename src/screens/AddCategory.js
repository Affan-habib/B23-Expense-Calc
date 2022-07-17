import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  Alert,
  View,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import { Formik } from "formik";
import * as yup from "yup";
import { useDispatch } from "react-redux";
import { addCategory } from "../reducers/categoriesSlice";
import { colors } from "../styles/Colors";
import Button from "../components/Button";
// import { TouchableWithoutFeedback } from "react-native-web";
// import Categories from "./Categories";

export default function AddCategory() {
  const dispatch = useDispatch();

  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={{backgroundColor: colors.secondary, flex: 1}}>
        <Formik
          initialValues={{
            name: "",
          }}
          onSubmit={(values, actions) => {
            actions.resetForm();
            dispatch(addCategory(values.name));
          }}
          validationSchema={yup.object().shape({
            name: yup.string().required("Name is required."),
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
          }) => (
            <View>
              <Text style={{ fontSize: 18, marginBottom: 10 }}>
                Add a new category for expense
              </Text>
              <TextInput
                value={values.name}
                style={styles.customCss}
                onBlur={() => setFieldTouched("name")}
                onChangeText={handleChange("name")}
                placeholder="Category Name"
              />
              {touched.name && errors.name && (
                <Text style={{ fontSize: 14, color: colors.info }}>
                  {errors.name}
                </Text>
              )}
              <Button
                color="#00669a"
                title="Save"
                disabled={!isValid}
                onPress={handleSubmit}
              />
            </View>
          )}
        </Formik>
        {/* <Categories/> */}
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
});
