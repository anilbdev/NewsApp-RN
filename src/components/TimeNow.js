import moment from 'moment'
import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const TimeNow = ({time}) => {
    let timeNow = moment(time || moment.now()).fromNow()
    return (
        <View>
            <Text>{timeNow}</Text>
        </View>
    )
}

export default TimeNow

const styles = StyleSheet.create({})
