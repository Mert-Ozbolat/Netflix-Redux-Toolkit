import { StyleSheet } from "react-native"
import { colors } from "../theme/colors";


const getStart = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,

    },
    swiper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center'
    },

    images: {
        width: '100%',
        height: '80%',
        objectFit: 'contain',
        resizeMode: 'cover',
    },
    title: {
        marginTop: 20,
        textAlign: 'center',
        fontWeight: '600',
        fontSize: 25,
        color: colors.text
    },
    subtitle: {
        marginTop: 10,
        textAlign: 'center',
        fontWeight: '400',
        fontSize: 19,
        color: colors.text
    }
})


export default getStart;