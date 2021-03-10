import { StatusBar } from 'expo-status-bar';
import React, { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';
import { ThemeProvider } from "react-native-elements"
import { SafeAreaProvider } from "react-native-safe-area-context";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import Signin from "./src/Components/Screens/signin";
import Signup from "./src/Components/Screens/Signup";
import Home from "./src/Components/Screens/Home";
import theme from "./src/theme";
import PersistLogin from "./src/firebase/persistLogin";

const Stack = createStackNavigator();

export default function App() {
  const [user, setUser] = useState({});

  // Verificar si ya existen credenciales de autenticación
  useEffect(() => {
    const userData = PersistLogin();
    setUser(userData);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <SafeAreaProvider>
        <NavigationContainer>
          <Stack.Navigator>
            {/* Mostrar un Stack distinto dependiendo el nivel de autenticación */}
            {user ? (
              <Stack.Screen
                name="Home"
                component={Home}
                initialParams={{ user: user }}
              />
            ) : (
              <>
                <Stack.Screen
                  name="Signin"
                  component={Signin}
                  initialParams={{ userCreated: false }}
                  options={{ headerShown: false }}
                />
                <Stack.Screen name="Signup" component={Signup} />
              </>
            )}
          </Stack.Navigator>
        </NavigationContainer>
      </SafeAreaProvider>
    </ThemeProvider>
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