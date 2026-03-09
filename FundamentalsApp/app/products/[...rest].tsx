import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {useLocalSearchParams} from "expo-router";

export default function CatchAllProductDetail() {
    const { rest } = useLocalSearchParams<{ rest: string[] }>();
    return(
        <View style={styles.container}>
            <Text>catch all product details</Text>
            <Text>Details about product at {rest.join("/")}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
})
