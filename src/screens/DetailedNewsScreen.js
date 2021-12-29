import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const DetailedNewsScreen = ({route}) => {
    const {name} = route.params
    return (
        <View>
            <Text>Detailed news screen {name}</Text>
        </View>
    )
}

export default DetailedNewsScreen

const styles = StyleSheet.create({})
