import {Tabs} from "expo-router";
import {FontAwesome} from "@expo/vector-icons";

export default function TabLayout(){
    return (
        <Tabs screenOptions={{
            tabBarLabelPosition: "beside-icon",
            tabBarShowLabel: true,
            headerTitle: "Recipe App",
            tabBarActiveTintColor: "#22d3ee",
            tabBarInactiveTintColor: "#94a3b8",
            tabBarStyle: { backgroundColor: "#0f172a" },
            headerStyle: { backgroundColor: "#0f172a" },
            headerTintColor: "#f8fafc",
        }}>
            <Tabs.Screen
                name="index"
                options={{
                    tabBarLabel: 'Home',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="home" color={color} size={24} />
                    ),
                    title: "Home"
            }}/>
            <Tabs.Screen
                name="explore"
                options={{
                    tabBarLabel: 'Explore',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="search" color={color} size={24} />
                    ),
                    title: "Explore"
            }}/>
            <Tabs.Screen
                name="profile"
                options={{
                    tabBarLabel: 'My Profile',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" color={color} size={24} />
                    ),
                    tabBarBadge: 3,
                    title: "Profile"
            }}/>
        </Tabs>
    )
}