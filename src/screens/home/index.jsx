import { View, StyleSheet, Text, Image } from 'react-native'
import React from 'react'
import homesStyle from '../../styles/home'

const Home = ({ route }) => {

    // const { item } = route.params;
    // <Image style={styles.image} source={`${item.image}`} />

    return (
        <View style={homesStyle.container}>
            <Text>deneme</Text>
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})