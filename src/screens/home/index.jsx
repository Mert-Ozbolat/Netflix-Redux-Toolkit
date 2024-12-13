import { SafeAreaView, StyleSheet, Text, Image } from 'react-native'
import React from 'react'

const Home = ({ route }) => {
    const { item } = route.params;

    return (
        <Image style={styles.image} source={`${item.image}`} />
    )
}

export default Home

const styles = StyleSheet.create({})