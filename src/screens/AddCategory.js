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
      <View style={{backgroundColor: colors.secondary, flex: 1, padding: 20}}>
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
              <Text style={{ fontSize: 16, marginBottom: 10 }}>
                Add Category
              </Text>
              <TextInput
                value={values.name}
                style={styles.customCss}
                onBlur={() => setFieldTouched("name")}
                onChangeText={handleChange("name")}
                placeholder="Category Name"
              />
              {touched.name && errors.name && (
                <Text style={{ fontSize: 14, color: colors.info, marginBottom: 10 }}>
                  {errors.name}
                </Text>
              )}
              <Button
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
