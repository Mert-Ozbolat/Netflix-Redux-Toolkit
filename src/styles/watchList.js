import { StyleSheet } from "react-native"
import { colors } from "../theme/colors";


const watchListStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
        justifyContent: 'center',
        alignItems: 'center',
    },

    title: {
        fontSize: 26,
        textAlign: 'center',
        color: colors.text,
        marginVertical: 50
    }
})




export default watchListStyle;