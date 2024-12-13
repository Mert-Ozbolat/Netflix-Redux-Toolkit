import { StyleSheet } from "react-native"
import { colors } from "../theme/colors";


const signIn = StyleSheet.create({
    container: {
        flex: 1,
        display: 'flex',
        alignContent: 'center',
        justifyContent: 'space-around',
        backgroundColor: colors.bgColor,
        paddingHorizontal: 20,
    },

    headerImg: {
        flex: 1,
        width: 120,
        height: 30,
        left: 50,
        top: 12,
    },

    textInputSection: {
        marginTop: 40,
    },
    textInput: {
        backgroundColor: colors.textInput,
        borderRadius: 10,
        padding: 10,
        fontSize: 20,
        marginBottom: 20
    },
    titleContainer: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    titleHelp: {
        textAlign: 'center',
        margin: 15,
        fontSize: 25,
        fontWeight: '700',
        color: colors.text
    },
    titleSign: {
        textAlign: 'center',
        fontSize: 20,
        fontWeight: '700',
        color: colors.text
    },
    titleLearn: {
        display: 'flex',
        maxWidth: 300,
        textAlign: 'center',
        marginTop: 20
    }
})




export default signIn;