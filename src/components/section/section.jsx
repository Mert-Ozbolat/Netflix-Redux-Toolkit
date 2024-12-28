import React from 'react';
import { Text, View } from 'react-native';
import homesStyle from '../../styles/home';
import { titles } from '../../utils/constants';
import TrendMovies from '../../Categories/trendMovies';
import TopRatedMovies from '../../Categories/topRatedMovies';
import TrendTv from '../../Categories/trendTv';


const Section = () => {
    const renderMovie = (id) => {
        switch (id) {
            case 1:
                return <TrendMovies />;
            case 2:
                return <TrendTv />;
            default:
                return <TrendMovies />;
        }
    };

    return (
        <View style={homesStyle.movieSection}>
            {titles.map((title) => (
                <View key={title.id} style={homesStyle.movies}>
                    <Text style={homesStyle.sectionTitle}>{title.title}</Text>
                    {renderMovie(title.id)}
                </View>
            ))}
        </View>
    );
};

export default Section;
