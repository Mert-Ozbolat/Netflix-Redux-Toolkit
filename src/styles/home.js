import { StyleSheet, Text, View } from 'react-native'
import { colors } from '../theme/colors'




const homesStyle = StyleSheet.create({
    container: {
        backgroundColor: colors.bgColor,
        flex: 1
    },

    header: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: 500,
        width: '100%'
    },

    headerImage: {
        height: '100%',
        width: '90%',
        objectFit: 'contain',
        borderRadius: 7
    },


    headerButtons: {
        width: '60%',
        flexDirection: 'row',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginVertical: 20
    },


    playBtn: {
        width: 400,
        backgroundColor: colors.btnColor
    },


    headerBtnText: {
        textAlign: 'center',
        color: colors.text
    },

    movieSection: {
        marginTop: 60,
    },

    movieHeader: {
        color: colors.text,
        fontSize: 20,
        marginLeft: 10
    },
    movies: {
        marginTop: 20
    },

    flatlist: {
        marginVertical: 10
    },

    sectionTitle: {
        color: colors.text,
        fontSize: 20,
        marginLeft: 10,
        fontWeight: '500'
    },

    images: {
        backgroundColor: 'gray',
        objectFit: 'cover',
        width: 150,
        height: 250,
        margin: 10,
        borderRadius: 3,
    },
})


export default homesStyle