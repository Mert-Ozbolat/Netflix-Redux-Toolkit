import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import homesStyle from '../../styles/home'
import { titles } from '../../utils/constants'
import Titles from '../titles/titles'
import TrendMovies from '../../Categories/trendMovies'
import TopRatedMovies from '../../Categories/topRatedMovies'



const Section = (item) => {

    const setData = () => {
        switch (item.id) {
            case 1:
                return TrendMovies;
            case 2:
                return TopRatedMovies;
            default:
                return TopRatedMovies
        }
    }

    return (
        <View style={homesStyle.movieSection}>

            {
                titles.map((title) => (
                    <View style={homesStyle.movies}>
                        <Text style={homesStyle.sectionTitle}>{title.title}</Text>
                        <TrendMovies />
                        {/* <TopRatedMovies /> */}
                    </View>
                ))
            }


        </View>
    )
}

export default Section
