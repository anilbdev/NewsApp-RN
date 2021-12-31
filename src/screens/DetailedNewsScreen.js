import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'
import { WebView } from 'react-native-webview';

const DetailedNewsScreen = ({route}) => {
    const {news} = route.params
    console.log(news.urlToImage);
    return (
        <View style={{width:'95%',height:'90%'}}>
           
            <WebView  source={{ uri:news.url}} />
        </View>
    )
}

export default DetailedNewsScreen

const styles = StyleSheet.create({
    image:{
        width:'100%',
        height:'50%'
    }
})
