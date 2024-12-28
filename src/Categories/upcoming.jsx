import { FlatList, Image, View, Text } from 'react-native'
import { useDispatch, useSelector } from 'react-redux'
import React, { useEffect } from 'react'
import { getUpcoming } from '../store/actions/movieAction'
import { IMAGE_BASE_URL } from '../service/url'
import homesStyle from '../styles/home'


const Upcoming = () => {

    const dispatch = useDispatch()
    const { Upcoming } = useSelector(state => state.upcoming)

    useEffect(() => {
        dispatch(getUpcoming())
    }, [])

    return (
        <FlatList
            style={homesStyle.flatlist}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={Upcoming}
            renderItem={({ item }) =>
                <View>
                    <Image style={homesStyle.images} source={{ uri: IMAGE_BASE_URL + item?.poster_path }} />
                </View>
            }
        />
    )
}

export default Upcoming
