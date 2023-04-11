import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Add from "./screens/Add";
import Navigation from "./screens/Navigation";
import Window from "./screens/Window";
import Notification from "./screens/Notification";
import Profile from "./screens/Profile";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

const Tab = createBottomTabNavigator();
import AppContextProvider, { AppContext } from "./store/app-context";
import { useContext, useEffect, useState } from "react";
import colors from "./refs/colors";

export default function App() {
  const ctx = useContext(AppContext);
  const [isDark, setIsDark] = useState("false");
  useEffect(() => {
    setIsDark(ctx.isDark);
  }, [isDark, ctx]);
  return (
    <AppContextProvider>
      <StatusBar style={isDark ? colors.white : colors.black} />
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="add"
          screenOptions={{
            tabBarShowLabel: false,
            tabBarStyle: {
              backgroundColor: isDark ? "black" : "white",
            },
          }}
        >
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <Ionicons
                  style={{ bottom: focused ? 15 : null }}
                  name="compass"
                  size={focused ? 50 : 38}
                  color={ctx.isDark && "white"}
                />
              ),
            }}
            name="navigation"
            component={Navigation}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <MaterialIcons
                  name="waves"
                  style={{ bottom: focused ? 15 : null }}
                  size={focused ? 50 : 38}
                  color={
                    focused
                      ? colors.action
                      : isDark
                      ? colors.white
                      : colors.black
                  }
                />
              ),
            }}
            name="window"
            component={Window}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <Entypo
                  name="circle-with-plus"
                  style={{ bottom: focused ? 15 : null }}
                  size={focused ? 50 : 38}
                  color={
                    focused
                      ? colors.action
                      : isDark
                      ? colors.white
                      : colors.black
                  }
                />
              ),
            }}
            name="add"
            component={Add}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <Ionicons
                  name="notifications-circle"
                  style={{ bottom: focused ? 15 : null }}
                  size={focused ? 50 : 38}
                  color={
                    focused
                      ? colors.action
                      : isDark
                      ? colors.white
                      : colors.black
                  }
                />
              ),
            }}
            name="notification"
            component={Notification}
          />
          <Tab.Screen
            options={{
              headerShown: false,
              tabBarIcon: ({ focused, color }) => (
                <FontAwesome
                  name="user"
                  style={{ bottom: focused ? 15 : null }}
                  size={focused ? 50 : 38}
                  color={
                    focused
                      ? colors.action
                      : isDark
                      ? colors.white
                      : colors.black
                  }
                />
              ),
            }}
            name="profile"
            component={Profile}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </AppContextProvider>
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
