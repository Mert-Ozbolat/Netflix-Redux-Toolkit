import { View, Text, FlatList } from 'react-native'
import React from 'react'
import { titles } from '../../utils/constants'
import { TREND_MOVIES } from '../../service/url'
import TrendMovies from '../../Categories/trendMovies'


const Titles = () => {
    return (
        <View>
            <FlatList
                data={titles}
                keyExtractor={(item) => item.id.toString()}
                renderItem={({ item }) =>
                    <View>
                        <Text>{item.title}</Text>
                        <TrendMovies />
                    </View>
                }
            />
        </View>
    )
}

export default Titles