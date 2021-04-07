import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { ThemeProvider } from "react-native-elements"
import { FontAwesome } from '@expo/vector-icons'; 
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./src/Components/Screens/signin";
import Signup from "./src/Components/Screens/Signup";
import Home from "./src/Components/Screens/Home";
import { MaterialIcons } from '@expo/vector-icons'; 
import PersistLogin from "./src/firebase/persistLogin";
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Recover from './src/Components/Screens/CambioContra'
import SignOut from './src/Components/Screens/SignOut';
import { Provider as AuthProvider, Context as AuthContext} from "./src/Provider/AuthContext";

//import theme from "./src/theme";
//import PersistLogin from "./src/firebase/persistLogin";

const Inicio =  createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

 


function MyInicio() {
  return (
    
    <Inicio.Navigator 
    initialRouteName="Inicio"
    activeColor="#fff"
    activebackgroundColor='pink'
    shifting={true} >


    <Inicio.Screen name="Inicio"
    component={Home}options={{
        tabBarColor:'#FF8E18', tabBarIcon:({color})=>(<FontAwesome name="home" size={26} color={color } />)}}  />
    <Inicio.Screen name=" "options={{ tabBarColor:'#FF8E18',tabBarIcon:({color})=>(<FontAwesome name="location-arrow" size={24} color={color } /> )}} component={Home} />
    <Inicio.Screen name="  " options={{ tabBarColor:'#FF8E18',tabBarIcon:({color})=>(<MaterialIcons name="person-pin" size={24} color={color } />)}}component={SignOut} />
  </Inicio.Navigator>
  
   )
    }
   

  return (
   <AuthProvider>
      <SafeAreaProvider>
      <NavigationContainer>
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signin" component={Signin} initialParams={{ userCreated: false }} options={{ headerShown: false }} />
            <Stack.Screen name="SignUp" component={Signup}  />
            <Stack.Screen name="Recover" component={Recover} />
            <Stack.Screen name="Home" component={MyInicio } initialParams={{ user: user }}/>
        </Stack.Navigator>
      </NavigationContainer>
      </SafeAreaProvider>
    </AuthProvider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
