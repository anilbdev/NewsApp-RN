import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { WebView } from 'react-native-webview';

const DetailedNewsScreen = ({route}) => {
    const {news} = route.params
    console.log(news.urlToImage);
    return (
        <View style={styles.container}>
           
            <WebView  source={{ uri:news.url}} />
        </View>
    )
}

export default DetailedNewsScreen

const styles = StyleSheet.create({
 container:{
    width:'100%',
    height:'100%'
 }
})
