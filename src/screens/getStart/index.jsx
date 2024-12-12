import { View, Text, Image, StatusBar } from 'react-native';
import React from 'react';
import getStart from '../../styles/getStart';
import Slider from '../../components/slider';
import StartButton from '../../components/button'

const StartScreen = () => {
    return (
        <View style={getStart.container}>
            <Slider />

            <StartButton />

        </View>
    );
};

export default StartScreen;

