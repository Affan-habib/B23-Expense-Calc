import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
} from "@react-navigation/drawer";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Expenses from "./src/screens/Expenses";
import AddExpense from "./src/screens/AddExpense";
import AddCategory from "./src/screens/AddCategory";
import { Provider } from "react-redux";
import { store } from "./src/reducers/store";
import { PersistGate } from "redux-persist/integration/react";
import { persistStore } from "redux-persist";
import Home from "./src/screens/Home";
let persistor = persistStore(store);
function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
    </DrawerContentScrollView>
  );
}
console.log(new Date());
const Drawer = createDrawerNavigator();

function MyDrawer() {
  return (
    <Drawer.Navigator
      useLegacyImplementation
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Expenses" component={Expenses} />
      <Drawer.Screen name="Categories" component={AddCategory} />
      <Drawer.Screen name="AddExpense" component={AddExpense} />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <MyDrawer />
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
}
