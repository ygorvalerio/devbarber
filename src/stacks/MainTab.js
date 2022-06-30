import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { TabActions } from "@react-navigation/native";

import Home from "../screens/Home";
import Favorites from "../screens/Favorites";
import Appointments from "../screens/Appointments";
import Search from "../screens/Search";
import Profile from "../screens/Profile";
import CustomTabBar from "../components/CustomTabBar";

const Tab = createBottomTabNavigator();

export default () => (
        <Tab.Navigator tabBar={props=><CustomTabBar {...props} />}
        screenOptions={{
            headerShown: false
        }}>
            <Tab.Screen name="Home" component={Home} />
            <Tab.Screen name="Search" component={Search} />
            <Tab.Screen name="Appointments" component={Appointments} />
            <Tab.Screen name="Favorites" component={Favorites} />
            <Tab.Screen name="Profile" component={Profile} />
        </Tab.Navigator>

);