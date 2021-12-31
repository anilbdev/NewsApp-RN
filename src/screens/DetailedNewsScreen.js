import React from 'react'
import { StyleSheet, Text, View ,Image} from 'react-native'

const DetailedNewsScreen = ({route}) => {
    const {news} = route.params
    console.log(news.urlToImage);
    return (
        <View>
            <Image
            source={{uri:news.urlToImage}}
            style={styles.image}
            />
            <Text style={{fontWeight:'bold'}} > {news.title}</Text>
            <Text> {news.content}</Text>
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
