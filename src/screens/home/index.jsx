import { View, StyleSheet, Text, Image, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import homesStyle from '../../styles/home'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendMovies } from '../../store/actions/movieAction'

const Home = ({ route }) => {

    // const { item } = route.params;
    // <Image style={styles.image} source={`${item.image}`} />

    const dispatch = useDispatch()
    const trendMovies = useSelector(state => state.movie)
    console.log(trendMovies)

    useEffect(() => {
        dispatch(getTrendMovies)
    }, [])

    return (
        <View style={homesStyle.container}>
            <FlatList
                data={trendMovies}
                renderItem={({ item }) => <Text style={{ color: 'white' }}>{item.title}</Text>}
            />
        </View>
    )
}

export default Home

const styles = StyleSheet.create({})