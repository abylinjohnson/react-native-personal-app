// @ts-nocheck
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { Ionicons } from "@expo/vector-icons";
import TechCrunch from "./screens/techcrunch";
import Dashboard from "./screens/Dashboard";
import BusRoute from "./screens/BusRoute";
import Home from './screens/Home';
const Stack = new createStackNavigator();
function SettingsScreen() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Settings!</Text>
    </View>
  );
}
const Tab = createBottomTabNavigator();

const MyTheme = {
  dark: false,
  colors: {
    primary: "rgb(57, 62, 70)",
    background: "rgb(57, 62, 70)",
    card: "rgb(34, 40, 49)",
    text: "rgb(238, 238, 238)",
    border: "rgb(0, 173, 181)",
    notification: "rgb(255, 69, 58)",
  },
};

export default function App() {
  return (
    <NavigationContainer theme={MyTheme}>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          cardStyle: {
            backgroundColor: "black",
          },
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;

            if (route.name === "Dashboard") {
              iconName = focused ? "md-home" : "md-home-outline";
            } else if (route.name === "Settings") {
              iconName = focused ? "md-settings" : "md-settings-outline";
            } else if (route.name === "Tech Crunch") {
              iconName = focused ? "newspaper" : "newspaper-outline";
            }

            // You can return any component that you like here!
            return <Ionicons name={iconName} size={size} color={color} />;
          },
          tabBarActiveTintColor: "white",
          tabBarInactiveTintColor: "white",
        })}
      >
        <Tab.Screen name="Home" component={Dashboard} />
        <Tab.Screen name="Tech Crunch" component={TechCrunch} />
        <Tab.Screen name="Settings" component={SettingsScreen} />
      </Tab.Navigator>
    </NavigationContainer>
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
