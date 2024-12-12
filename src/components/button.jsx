import { Button } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { SINGIN, WATCHLIST } from '../utils/routes';
import { useNavigation } from '@react-navigation/native';

const StartButton = ({ GETSTARTED }) => {

    const navigation = useNavigation();
    return (
        <Button
            title={GETSTARTED ? 'Get Start' : 'Sign In'}
            color={colors.btnColor}
            onPress={() => {
                GETSTARTED ? (
                    navigation.navigate(SINGIN)
                ) : (
                    navigation.navigate(WATCHLIST)
                )
            }}
        />
    )
}

export default StartButton