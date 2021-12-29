import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//custom import
import {
   TabNavigation,
   DetailedNewsScreen
} from '../index'

const Stack = createNativeStackNavigator()



const MainRoot = () => {
    return (
        <NavigationContainer>
           
            <Stack.Navigator
            screenOptions={{
                headerTitleAlign:'center',
                title:'News App',
                headerStyle:{
                    backgroundColor:'powderblue'
                }
            }}
            >
                <Stack.Screen
                name='HomeStack'
                component={TabNavigation}                
                />
                <Stack.Screen
                name='DetailedNewsScreen'
                component={DetailedNewsScreen}
                />
            </Stack.Navigator>
           
        </NavigationContainer>
    )
}

export default MainRoot

const styles = StyleSheet.create({})
