import { View, Text, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { StatusBar } from 'expo-status-bar'

const Home = () => {
    return (
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Hello</Text>
            </View>
        </SafeAreaView>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})