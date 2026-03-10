import {StyleSheet, Text, View} from 'react-native'
import React from 'react'
import { Link } from "expo-router"

export default function ProductList() {
    return (
        <View style={styles.container}>
            <Text>Products</Text>
            <Link href="./1" relativeToDirectory>Product 1</Link>
            <Link href="/product/2">Product 2</Link>
            <Link href="/product/3">Product 3</Link>
            <Link href="/product/best-sellers/playstation-5">PlayStation 5 (Best Sellers) </Link>
            <Link href="/product/deals/black-friday/playstation-5">PlayStation 5 (Deals) </Link>
            <Link href="/product/search/playstation-5">PlayStation 5 (Search) </Link>
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        gap: 20
    }
})
