import { StyleSheet, Text, View, Image, Pressable } from 'react-native'
import React from 'react'
import { colors } from '../../theme/colors'
import { width } from '../../utils/constants'
import { useNavigation } from '@react-navigation/native'
import { HOME } from '../../utils/routes'



const WatchListItem = ({ item }) => {

    const navigation = useNavigation()

    return (
        <Pressable onPress={() => navigation.navigate(HOME, { item })}>
            <View style={styles.container}>
                <View style={styles.cart}>
                    <Image style={styles.image} source={`${item.image}`} />
                    <Text style={styles.name}>{item.name}</Text>
                </View>
            </View>
        </Pressable>
    )
}

export default WatchListItem

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    cart: {
        width: width * 0.3,
        height: width * 0.3,
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