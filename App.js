import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Expenses from "./src/screens/Expenses";
import Categories from "./src/screens/Categories";
import AddExpense from "./src/screens/AddExpense";
import Icon from "react-native-vector-icons/MaterialIcons";
import { colors } from "./src/styles/globalStyles";
import { Provider } from "react-redux";
import { store } from './src/reducers/store';
const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Expenses"
      headerMode="float"
      screenOptions={{
        headerStyle: {
          backgroundColor: colors.secondary,
        },
        headerTitleStyle: {
          color: "white",
          alignItems: "center",
        },
      }}
      tabBarOptions={{
        activeTintColor: "white",
        inactiveTintColor: colors.light,
        activeBackgroundColor: colors.secondary,
        inactiveBackgroundColor: colors.secondary,
      }}
    >
      <Tab.Screen
        name="Expenses"
        options={{
          tabBarLabel: "Expenses",
          tabBarIcon: ({ color }) => (
            <Icon name="nfc" size={25} color={color} />
          ),
        }}
        component={Expenses}
      />
      <Tab.Screen
        name="Categories"
        options={{
          tabBarLabel: "Categories",
          tabBarIcon: ({ color }) => (
            <Icon name="child-friendly" size={25} color={color} />
          ),
        }}
        component={Categories}
      />
      <Tab.Screen
        name="AddExpense"
        options={{
          tabBarLabel: "AddExpense",
          tabBarIcon: ({ color }) => (
            <Icon name="nfc" size={25} color={color} />
          ),
        }}
        component={AddExpense}
      />
    </Tab.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <MyTabs />
      </NavigationContainer>
    </Provider>
  );
}
