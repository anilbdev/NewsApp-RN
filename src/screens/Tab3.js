import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert, View,ActivityIndicator,Text } from 'react-native'

import {
    getArticles,
} from '../service/news'
import {
    NewsItem
} from '../index'
const Tab3 = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getArticles('technology').then(data => {
            setNews(data)
            setIsLoading(false)
        }, error => {
            Alert.alert('Error', 'Something went wrong!!')
        })
    }, [])

    let view = isLoading?(
        <View style={styles.activityIndicator}>
            <ActivityIndicator animating={isLoading} />
            <Text style={{marginVertical:10}}>Please wait....</Text>
        </View>
    ):<NewsItem news={news} />
    return (
        <View style={{ flex: 1 }}>
            {view}
        </View>
    )
}
export default Tab3
const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 5,
        marginVertical: 5
    },
    imageContainer: {
        alignItems: 'center',
        marginRight: 5
    },
    mainContent: {
        flex: 1,
    },
    buttonContainer: {
        paddingHorizontal: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },
    activityIndicator:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    }
})
