import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'


const WatchListItem = ({ item }) => {


    return (
        <View style={styles.container}>
            <View style={styles.cart}>
                <Image style={styles.image} source={`${item.image}`} />
                <Text style={styles.name}>{item.name}</Text>
            </View>
        </View>
    )
}

export default WatchListItem

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cart: {
        width: 100,
        height: 100,
        margin: 25
    },
    image: {
        width: '100%',
        height: '100%',
        borderRadius: 10
    },
    name: {
        color: colors.text,
        textAlign: 'center',
        marginTop: 10,
        fontSize: 20,
        fontWeight: '400'
    }
})