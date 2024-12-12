import { Button } from 'react-native'
import React from 'react'
import { colors } from '../theme/colors';
import { SINGIN } from '../utils/routes';
import { useNavigation } from '@react-navigation/native';

const StartButton = () => {
    const navigation = useNavigation();
    return (
        <Button
            title='GET START'
            color={colors.btnColor}
            onPress={() => navigation.navigate(SINGIN)}
        />
    )
}

export default StartButton