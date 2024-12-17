import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import homesStyle from '../../styles/home'


const MovieItem = ({ item }) => {
    return (
        <View style={homesStyle.container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={trendMovies}
                renderItem={({ item }) =>
                    <View>
                        <Image style={homesStyle.images} source={{ uri: IMAGE_BASE_URL + item?.poster_path }} />
                    </View>
                }
            />
        </View>
    )
}

export default MovieItem

