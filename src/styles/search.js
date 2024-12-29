import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'



const searchStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        flex: 1
    },

    search: {
        backgroundColor: '#2f2f3f',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        paddingVertical: 5,
    },
    input: {
        fontSize: 18,
    }

})


export default searchStyle