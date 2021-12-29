import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert, View } from 'react-native'
import {
    getArticles,
} from '../service/news'
import {
    NewsItem
} from '../index'
const Tab1 = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    useEffect(() => {
        getArticles().then(data => {
            setNews(data)
            setIsLoading(false)
        }, error => {
            Alert.alert('Error', 'Something went wrong!!')
        })
    }, [])
    return (
        <View style={{ flex: 1 }}>
            <NewsItem news={news} />
        </View>
    )
}
export default Tab1
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
    }
})
