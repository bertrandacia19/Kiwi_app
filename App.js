import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { ThemeProvider } from "react-native-elements"
import { FontAwesome } from '@expo/vector-icons'; 
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Signin from "./src/Components/Screens/signin";
import Signup from "./src/Components/Screens/Signup";
import Home from "./src/Components/Screens/Home";
import { MaterialIcons } from '@expo/vector-icons'; 
import PersistLogin from "./src/firebase/persistLogin";



//import theme from "./src/theme";
//import PersistLogin from "./src/firebase/persistLogin";

const Inicio = createBottomTabNavigator();
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
        tabBarColor:'#FFA2A3', tabBarIcon:({color})=>(<FontAwesome name="home" size={26} color={color } />)}}  />
    <Inicio.Screen name="  " options={{ tabBarColor:'#FFA2A3',tabBarIcon:({color})=>(<MaterialIcons name="person-pin" size={24} color={color } />)}}component={Home} />
    <Inicio.Screen name=" "options={{ tabBarColor:'#FFA2A3',tabBarIcon:({color})=>(<FontAwesome name="location-arrow" size={24} color={color } /> )}} component={Home} />
   
  </Inicio.Navigator>
   )
    }
   
export default function App() {
  const [user, setUser] = useState({});

  // Verificar si ya existen credenciales de autenticación
  useEffect(() => {
    const userData = PersistLogin();
    setUser(userData);
  }, []);
  return (
    <SafeAreaProvider>
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown:false}}>
          <Stack.Screen name="Signin" component={Signin} initialParams={{ userCreated: false }} options={{ headerShown: false }} />
          <Stack.Screen name="SignUp" component={Signup}  />
          <Stack.Screen name="Home" component={MyInicio } initialParams={{ user: user }}/>
      </Stack.Navigator>
    </NavigationContainer>
    </SafeAreaProvider>
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
