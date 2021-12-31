import React from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { WebView } from 'react-native-webview';
const DetailedNewsScreen = ({ route, navigation }) => {
    const { news } = route.params
    console.log(news.urlToImage);
    navigation.setOptions({
        headerRight: () => (
            <Button
                onPress={() => alert('This is a button!')}
                title="Share"
                color="#000"
            />
        ),
    })
    return (
        <View style={styles.container}>
            <WebView source={{ uri: news.url }} />
        </View>
    )
}
export default DetailedNewsScreen
const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%'
    }
})
