
import React, { useEffect, useState ,useContext} from "react";
import { StyleSheet } from 'react-native';
import { ThemeProvider } from "react-native-elements"
import { FontAwesome } from '@expo/vector-icons'; 
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "../Screens/signin";
import Signup from "../Screens/Signup";
import Home from "../Screens/Home";
import { MaterialIcons } from '@expo/vector-icons'; 
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import Recover from '../Screens/CambioContra'
import SignOut from '../Screens/SignOut';
import {Context as AuthContext} from '../../providers/AuthContext';


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

const Navigation = () => {
        const { state, persistLogin } = useContext(AuthContext);
      
        useEffect(() => {
          persistLogin();
        }, []);
      
      /*  SplashScreen.preventAutoHideAsync();*/
        
      /*  if (!state.loading) SplashScreen.hideAsync();*/

  return (
    <NavigationContainer>
    {!state.loading && (
    <>
      {state.loggedIn ? (
        <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Home" component={MyInicio
} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signin" component={Signin}  />
            <Stack.Screen name="SignUp" component={Signup}  />
            <Stack.Screen name="Recover" component={Recover} />
       
        </Stack.Navigator>
      )}
    </>
  )}
</NavigationContainer>
);
}

















export default Navigation;
