import { StyleSheet } from "react-native"
import { colors } from "../theme/colors";


const watchList = StyleSheet.create({
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




export default watchList;