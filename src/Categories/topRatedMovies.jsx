import { FlatList, Image, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { topRatedMovies } from '../store/actions/movieAction'
import { IMAGE_BASE_URL } from '../service/url'
import homesStyle from '../styles/home'


const TopRatedMovies = () => {

    const dispatch = useDispatch()
    const { topRated } = useSelector(state => state.topRated)

    useEffect(() => {
        dispatch(topRatedMovies())
    }, [])

    return (
        <FlatList
            style={homesStyle.flatlist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={topRated}
            renderItem={({ item }) =>
                <View>
                    <Image style={homesStyle.images} source={{ uri: IMAGE_BASE_URL + item?.poster_path }} />
                </View>
            }
        />
    )
}

export default TopRatedMovies
