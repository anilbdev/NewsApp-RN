import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert, View, Text, FlatList,Image,Button } from 'react-native'
import {
    getArticles
} from '../service/news'
const Tab1 = () => {
    const [news, setNews] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    // useEffect(() => {
    //     getArticles().then(data => {
    //         setNews(data)
    //         setIsLoading(false)
    //     }, error => {
    //         Alert.alert('Error', 'Something went wrong!!')
    //     })
    // }, [])
    // console.log(news[0].author);

    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                style={{width:100,height:100,resizeMode:'cover'}}
                source={{uri:'https://blog.logrocket.com/wp-content/uploads/2021/05/final-result-react-native-image-component-demo.png'}} 
               
                />
            </View>
            <View style={styles.mainContent}>
                <View>
                    <Text  style={{ fontWeight:'bold' }}>Headingd</Text>
                </View>
                <View>
                    <Text>Description</Text>
                </View>

            </View>
            <View style={styles.buttonContainer}>
                <Button 
                title='View'
                />

            </View>


        </View>
    )
}

export default Tab1
const styles = StyleSheet.create({
    container: {
        borderWidth: 3,
        flexDirection: 'row',
        justifyContent:'space-between'
    },
    imageContainer: {

    },
    mainContent: {
        flex:1,
        borderWidth:2

    },
    buttonContainer:{
       paddingHorizontal:10,
        alignItems:'center',
        justifyContent:'center'

    }
})
