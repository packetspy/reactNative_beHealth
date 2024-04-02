import { StatusBar } from 'expo-status-bar'
import { StyleSheet, View } from 'react-native'
import React from 'react'
import Main from './src/components/Main'
import Title from './src/components/Title'

export default function App() {
    return (
        <View style={styles.container}>
            <Title />
            <Main />
            <StatusBar style="auto" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#e0e5e5',
        paddingTop: 80
    },
})
