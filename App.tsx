import "react-native-gesture-handler";
import {
  DarkTheme,
  DefaultTheme,
  NavigationContainer,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "@/src/screens/HomeScreen";
import SingleScreen from "@/src/screens/id";
import { StatusBar, useColorScheme } from "react-native";

const Stack = createNativeStackNavigator();

const App = () => {
  const theme = useColorScheme();
  return (
    <>
      <StatusBar backgroundColor={theme === "dark" ? "white" : "black"} />
      <NavigationContainer theme={theme === "dark" ? DarkTheme : DefaultTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="id" component={SingleScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
