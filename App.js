import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { ThemeProvider } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./src/Components/Screens/Signin";
import Signup from "./src/Components/Screens/Signup";
import theme from "./src/theme";

const Stack = createStackNavigator();// navega entre pantallas

export default function App() {
  return (

    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
       <NavigationContainer>
         <Stack.Navigator>
          
           <Stack.Screen name ="SignIn" component={Signin}/>
           <Stack.Screen name ="SignUp" component={Signup}/>
           <Stack.Screen name ="Signin" component={signin}/>
           <Stack.Screen name ="Signup" component={signup}/>


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
