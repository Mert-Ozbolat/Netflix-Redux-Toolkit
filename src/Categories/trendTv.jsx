import { FlatList, Image, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { getTrendTv } from '../store/actions/movieAction'
import { IMAGE_BASE_URL } from '../service/url'
import homesStyle from '../styles/home'


const TrendTv = () => {

    const dispatch = useDispatch()
    const { TrendTv } = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(getTrendTv())
    }, [])

    return (
        <FlatList
            style={homesStyle.flatlist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={TrendTv}
            renderItem={({ item }) =>
                <View>
                    <Image style={homesStyle.images} source={{ uri: IMAGE_BASE_URL + item?.poster_path }} />
                </View>
            }
        />
    )
}

export default TrendTv
