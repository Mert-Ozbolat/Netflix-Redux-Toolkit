import { FlatList, Image, StyleSheet, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'

import React, { useEffect } from 'react'
import { getTrendMovies } from '../store/actions/movieAction'
import { IMAGE_BASE_URL } from '../service/url'
import homesStyle from '../styles/home'


const TrendMovies = () => {

    const dispatch = useDispatch()
    const { trendMovies } = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(getTrendMovies())
    }, [])

    return (
        <FlatList
            style={homesStyle.flatlist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={trendMovies}
            renderItem={({ item }) =>
                <View>
                    <Image style={homesStyle.images} source={{ uri: IMAGE_BASE_URL + item?.poster_path }} />
                </View>
            }
        />
    )
}

export default TrendMovies
