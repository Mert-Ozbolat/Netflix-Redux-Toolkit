import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'


const WatchListItem = ({ item }) => {


    return (
        <View style={styles.container}>
            <View style={styles.cart}>
                <Image tyle={styles.image} />
                <Text style={styles.name}>{item.name}</Text>
            </View>
        </View>
    )
}

export default WatchListItem

const styles = StyleSheet.create({
    container: {
        width: '40%',
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10
    },
    cart: {
        width: 100,
        height: 100
    },
    image: {
        width: '100%',
        height: '100%'
    },
    name: {
        color: colors.text
    }
})