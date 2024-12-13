import { StyleSheet } from "react-native"
import { colors } from "../theme/colors";


const watchListStyle = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.bgColor,
    },

    title: {
        fontSize: 26,
        textAlign: 'center',
        color: colors.text
    }
})




export default watchListStyle;