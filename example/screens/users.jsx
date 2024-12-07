import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

const Users = () => {
    return (
        <SafeAreaView style={styles.container}>
            <Text>userveverevrevres egergre</Text>
        </SafeAreaView>
    )
}

export default Users

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'red',
        flex: 1
    }
})