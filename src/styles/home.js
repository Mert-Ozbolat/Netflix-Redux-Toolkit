import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'




const homesStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        flex: 1
    },
    images: {
        backgroundColor: 'gray',
        objectFit: 'cover',
        width: 150,
        height: 250,
        margin: 10,
        borderRadius: 3,
    }
})


export default homesStyle