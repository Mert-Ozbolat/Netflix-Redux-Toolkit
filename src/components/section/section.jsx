import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import homesStyle from '../../styles/home'
import Titles from '../titles/titles'
import TrendMovies from '../../Categories/trendMovies'
import { titles } from '../../utils/constants'



const Section = () => {

    return (
        <View style={homesStyle.movieSection}>

            {
                titles.map((title) => (
                    <View style={homesStyle.movies}>
                        <Text style={homesStyle.sectionTitle}>{title.title}</Text>
                        <TrendMovies />
                    </View>
                ))
            }

        </View>
    )
}

export default Section
