import React, { useEffect } from 'react'
import { StyleSheet, Text, View, Button } from 'react-native'
import { WebView } from 'react-native-webview';
import Share from 'react-native-share'
const DetailedNewsScreen = ({ route, navigation }) => {
    const { news } = route.params
    const url = news.url
    const title = news.title;
    const message = "Please check this out.";
    const options = {
        title,
        url,
        message,
    }
    const share = async (customOptions = options) => {
        try {
          await Share.open(customOptions);
        } catch (err) {
          console.log(err);
        }
      };

    useEffect(() => {
        navigation.setOptions({
            headerRight: () => (
                <Button
                    onPress={async() => await share()}
                    title="Share"
                    color="#000"
                />
            ),
        })
    }, [])

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
