import React, { useState, useEffect } from 'react'
import { StyleSheet, Alert ,View} from 'react-native'
import {
    Box,
    FlatList,
    Avatar,
    HStack,
    VStack,
    Text,
    Spacer,
    NativeBaseProvider,
    Button,
    Container
} from "native-base"
import {
    getArticles
} from '../service/news'
const Example = () => {
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
    // console.log(news[0].author);

    return (
        <Box
            w={{
                base: "100%",
                md: "25%",
            }}
        >
            <FlatList
                data={news}
                renderItem={({ item }) => (
                    <Box
                        borderBottomWidth="1"
                        borderColor="coolGray.200"
                        pl="3"
                        pr="5"
                        py="2"
                    >
                        <HStack space={3} justifyContent="space-between">
                            <Avatar
                                size="48px"
                                source={{
                                    uri: item.urlToImage,
                                }}
                            />
                            <VStack>
                                <Text

                                    color="coolGray.800"
                                    bold
                                >
                                    {item.title}
                                </Text>
                                <Text
                                    color="coolGray.600"
                                    _dark={{
                                        color: "warmGray.200",
                                    }}
                                >
                                    {item.description}
                                </Text>
                           
                            </VStack>
                            <Spacer />
                            <Text>xxx</Text>
                            <Button onPress={() => console.log("hello world")}
                                size={'md'}
                            >View</Button>
                        </HStack>
                    </Box>
                )}
                keyExtractor={(item) => item.title}
            />
        </Box>
    )
}
const Tab1 = () => {
    return (
        <NativeBaseProvider>
            <View style={styles.container}>
             <Example />
            </View>
               
           

        </NativeBaseProvider>
    )
}
export default Tab1
const styles = StyleSheet.create({
    container:{
        marginRight:25
    }
})
