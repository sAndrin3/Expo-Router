import {Button, StyleSheet, Text, View} from 'react-native'
import React from 'react'
import {Link, router} from "expo-router";

export default function Login() {
    return (
        <View style={styles.container}>
            <Text>Login</Text>
            <Link href="./register">Create account</Link>
            <Button title="login" onPress={() => router.replace("/profile")} />
        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
