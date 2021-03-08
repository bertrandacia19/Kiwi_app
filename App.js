import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./src/Components/Screens/signin";
import Signup from "./src/Components/Screens/Signup";
import Home from "./src/Components/Screens/Home";
import theme from "./src/theme";
import {createAppContainer} from "react-navigation"
import {createDrawerNavigator} from "react-navigation-drawer"
import { Dimensions } from "react-native";
import {Feather} from  "@expo/vector-icons";
import {
  ProfileScreen,
  ListHome,
SignOutScreen} from "./src/Components/Screens/index"

//menu


const DrawerNavigator =createDrawerNavigator({
 ProfileScreen,
  ListHome,
SignOutScreen});


export default  createAppContainer(DrawerNavigator);



//navegation de pantallas

const Stack = createStackNavigator();// navega entre pantallas

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen
              name="Signin"
              component={Signin}
              initialParams={{ userCreated: false }}
              options={{ headerShown: false }}
            />
            <Stack.Screen name="Signup" component={Signup} />
            <Stack.Screen name="Home" component={Home} />
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
