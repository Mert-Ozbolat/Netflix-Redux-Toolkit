import { View, StyleSheet, Text, Image, FlatList, ScrollView } from 'react-native'
import React, { useEffect } from 'react'
import homesStyle from '../../styles/home'
import { useDispatch, useSelector } from 'react-redux'
import { getTrendMovies, topRatedMovies } from '../../store/actions/movieAction'
import { IMAGE_BASE_URL } from '../../service/url'
import HeaderButtons from '../../components/header/headerButtons'
import Section from '../../components/section/section'







const Home = ({ route }) => {

    // const { item } = route.params;
    // <Image style={styles.image} source={`${item.image}`} />

    const dispatch = useDispatch()
    const { topRated } = useSelector(state => state.topRated)

    useEffect(() => {
        dispatch(getTrendMovies())
        dispatch(topRatedMovies())
    }, [])

    const firstTopRatedMovie = topRated && topRated.length > 0 ? topRated[7] : null;


    return (
        <ScrollView style={homesStyle.container}>

            <View style={homesStyle.header}>
                {firstTopRatedMovie ? (
                    <Image
                        style={homesStyle.headerImage}
                        source={{ uri: IMAGE_BASE_URL + firstTopRatedMovie.poster_path }}
                    />
                ) : (
                    <Text style={homesStyle.message}>No top-rated movie available.</Text>
                )}

                <HeaderButtons />
            </View>

            <Section />

        </ScrollView>
    )
}

export default Home
