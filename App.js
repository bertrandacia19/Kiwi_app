import React from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigation from "./src/Components/navigation/index";
import { Provider as AuthProvider } from "./src/providers/AuthContext";
/*import LongTimers from "./src/components/utils/LongTimer";*/

export default function App() {
  /*LongTimers();*/

  return (
    <AuthProvider>
      <SafeAreaProvider>
        <Navigation />
      </SafeAreaProvider>
    </AuthProvider>
  );
}