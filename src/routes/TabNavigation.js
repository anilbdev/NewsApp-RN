import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
    Tab1,
    Tab2,
    Tab3
} from '../index'
const Tab = createMaterialTopTabNavigator();

const TabNavigation = () => {
    return (
        
             <Tab.Navigator
            screenOptions={{
                
                tabBarStyle: { backgroundColor: 'powderblue',
           }
            }}
            >
                <Tab.Screen
                name='tab1'
                component={Tab1}
                />
                 <Tab.Screen
                name='tab2'
                component={Tab2}
                />
                 <Tab.Screen
                name='tab3'
                component={Tab3}
                />               
            </Tab.Navigator>
        
    )
}

export default TabNavigation

const styles = StyleSheet.create({})
