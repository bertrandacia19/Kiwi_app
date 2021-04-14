
import React, { useEffect, useState ,useContext} from "react";
import { FontAwesome } from '@expo/vector-icons'; 
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
import Busqueda from '../Screens/Busqueda';

const Inicio =  createMaterialBottomTabNavigator();
const Stack = createStackNavigator();
const stack1 = createStackNavigator();

function stack2() {
 return(
  <Stack.Navigator screenOptions={{headerShown:false}}>
    

  <stack1.Screen name="Inicio"
      component={Home}
    />

    <stack1.Screen name="Busqueda"
    component={Busqueda}
  />

 </Stack.Navigator>

 )

}
 


function MyInicio() {
  return (
    
    <Inicio.Navigator 
    initialRouteName="Inicio"
    activeColor="#fff"
    activebackgroundColor='pink'
    shifting={true} >


    <Inicio.Screen name="Home"
    component={stack2}options={{
        tabBarColor:'#6AB72A', tabBarIcon:({color})=>(<FontAwesome name="home" size={26} color={color } />)}}  />
    <Inicio.Screen name="Profile" options={{ tabBarColor:'#6AB72A',tabBarIcon:({color})=>(<MaterialIcons name="person-pin" size={24} color={color } />)}}component={SignOut} />
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
          <Stack.Screen name="Home" component={MyInicio} />
        </Stack.Navigator>
      ) : (
        <Stack.Navigator screenOptions={{headerShown:false}}>
            <Stack.Screen name="Signin" component={Signin}  />
            <Stack.Screen name="SignUp" component={Signup}  />
            <Stack.Screen name="Recover" component={Recover} />
            <Stack.Screen name="Busqueda" component={Busqueda} />
       
        </Stack.Navigator>
      )}
    </>
  )}
</NavigationContainer>
);
}

















export default Navigation;
