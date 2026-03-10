import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer"
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {FontAwesome} from "@expo/vector-icons";

export default function RootLayout() {
  return(
      <GestureHandlerRootView style={{flex: 1}}>
          <Drawer screenOptions={{
              headerStyle: { backgroundColor: "#ffffff" },
              headerTintColor: "#8b5cf6",
              drawerStyle: {
                  backgroundColor: "#ffffff",
              },
              drawerActiveTintColor: "#8b5cf6",
              drawerInactiveTintColor: "#64748b",
          }}>
              <Drawer.Screen
                  name="index"
                  options={{
                      title: "Home",
                      drawerLabel: "Home label",
                      drawerIcon: ({ color }) => (
                          <FontAwesome name="home" size={24} color={color} />
                      )
              }}/>
              <Drawer.Screen
                  name="dashboard"
                  options={{
                      title: "Dashboard",
                      drawerLabel:"Dashboard label",
                      drawerIcon: ({ color }) => (
                          <FontAwesome name="dashboard" size={24} color={color} />
                      )
              }}/>
              <Drawer.Screen
                  name="settings"
                  options={{
                      title: "Settings",
                      drawerLabel: "Settings label",
                      drawerIcon: ({ color }) => (
                          <FontAwesome name="cog" size={24} color={color} />
                      )
              }}/>
          </Drawer>
      </GestureHandlerRootView>
  );
}
