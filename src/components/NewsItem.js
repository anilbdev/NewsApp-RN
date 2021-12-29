import React from 'react'
import { StyleSheet, Text, View, FlatList, Image, Button } from 'react-native'
import { useNavigation } from '@react-navigation/native';

const NewsItem = ({ news }) => {
    const navigation = useNavigation();

    renderNewsItem = ({ item }) => {
        return (
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={{ width: 100, height: 150, resizeMode: 'cover' }}
                        source={{ uri: item.urlToImage }}
                    />
                </View>
                <View style={styles.mainContent}>
                    <View style={{ height: 50 }}>
                        <Text style={{ fontWeight: 'bold' }}>{item.title}</Text>
                    </View>
                    <View style={{ height: 60 }}>
                        <Text>{item.description}</Text>
                    </View>
                    <View>
                        <Text style={{fontWeight:'bold'}}>{item.source.name} </Text>
                        <Text style={{fontSize:10}}>{item.publishedAt} </Text>
                    </View>
                </View>
                <View style={styles.buttonContainer}>
                    <Button
                        onPress={() => navigation.navigate('DetailedNewsScreen', { news: item })}
                        title='View'
                    />
                </View>
            </View>
        )
    }
    return (
        <View style={{ flex: 1 }}>
            <FlatList
                data={news}
                renderItem={renderNewsItem}
            />


        </View>
    )
}

export default NewsItem

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
