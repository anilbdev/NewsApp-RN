import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


//custom import
import {
   TabNavigation
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
            </Stack.Navigator>
           
        </NavigationContainer>
    )
}

export default MainRoot

const styles = StyleSheet.create({})
