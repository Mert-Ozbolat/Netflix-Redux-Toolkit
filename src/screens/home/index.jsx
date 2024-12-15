import { View, StyleSheet, Text, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import homesStyle from '../../styles/home'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendMovies } from '../../store/actions/movieAction'
import { IMAGE_BASE_URL } from '../../service/url'

const Home = ({ route }) => {

    // const { item } = route.params;
    // <Image style={styles.image} source={`${item.image}`} />

    const dispatch = useDispatch()
    const { trendMovies } = useSelector(state => state.movies)

    useEffect(() => {
        dispatch(getTrendMovies())
    }, [])

    return (
        <View style={homesStyle.container}>
            <FlatList
                horizontal={true}
                showsHorizontalScrollIndicator={false}
                data={trendMovies}
                renderItem={({ item }) =>
                    <View>
                        <Image style={homesStyle.images} source={{ uri: IMAGE_BASE_URL + item?.backdrop_path }} />
                    </View>
                }
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})