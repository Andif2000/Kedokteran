import { View, Text } from 'react-native'
import React from 'react'
import { StatusBar } from 'expo-status-bar'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Ionicons from '@expo/vector-icons/Ionicons'

import Home from '../Screens/Home'
import Chat from '../Screens/Chat'
import TimeTable from '../Screens/TimeTable'
import Profile from '../Screens/Profile'

const Route = () => {
    const Stack = createNativeStackNavigator();
    const Tab = createBottomTabNavigator();
    const BottomTabScrens = () => {
        return (
            <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarHideOnKeyboard: true,
                    tabBarShowLabel: false,
                    headerShown: false,
                    tabBarStyle: {
                        height: 50,
                        marginHorizontal: 10,
                        marginBottom: 10,
                        borderRadius: 10
                    },
                    tabBarIcon: ({ focused, size, colour }) => {
                        let iconName;
                        if (route.name === 'Home') {
                            iconName = focused ? 'home-sharp' : 'home-outline';
                            size = focused ? size + 8 : size + 2,
                                colour = focused ? '#0082f7' : '#808080'
                        }
                        if (route.name === 'TimeTable') {
                            iconName = focused ? 'md-calendar-sharp' : 'md-calendar-outline';
                            size = focused ? size + 8 : size + 2,
                                colour = focused ? '#0082f7' : '#808080'
                        }
                        if (route.name === 'Chat') {
                            iconName = focused ? 'chatbubbles-sharp' : 'chatbubbles-outline';
                            size = focused ? size + 8 : size + 2,
                                colour = focused ? '#0082f7' : '#808080'
                        }
                        if (route.name === 'Profile') {
                            iconName = focused ? 'person' : 'person-outline';
                            size = focused ? size + 8 : size + 2,
                                colour = focused ? '#0082f7' : '#808080'
                        }
                        return <Ionicons name={iconName} size={size} color={colour} />
                    }
                })}>
                <Tab.Screen name='Home' component={Home} />
                <Tab.Screen name='TimeTable' component={TimeTable} />
                <Tab.Screen name='Chat' component={Chat} />
                <Tab.Screen name='Profile' component={Profile} />
            </Tab.Navigator>
        )
    }
    return (
        <NavigationContainer>
            <StatusBar
                backgroundColor='#ffffff'
                tabBarStyle='light-content' />
            <Stack.Navigator
                screenOptions={{
                    headerShown: false,
                }}>
                <Stack.Screen name='Bottom' component={BottomTabScrens} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default Route