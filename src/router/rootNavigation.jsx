import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GETSTARTED, SINGIN, WATCHLIST } from '../utils/routes';
import StartScreen from '../screens/getStart';
import SigninScreen from '../screens/signin';
import WatchListScreen from '../screens/watchList';
import { Image, ImageBackground, View } from 'react-native';
import signIn from '../styles/signIn';
import { colors } from '../theme/colors';
import { Edit, Magicpen } from 'iconsax-react-native';

const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={GETSTARTED} component={StartScreen} />

            <Stack.Screen
                name={SINGIN}
                component={SigninScreen}
                options={{
                    headerShown: true,
                    headerBackground: () => (
                        <ImageBackground
                            source={require('../assets/images/logo.png')}
                            style={signIn.headerImg}
                        >
                        </ImageBackground>
                    ),
                    headerTintColor: '#FFF',
                    headerTitle: '',
                }}
            />

            <Stack.Screen
                options={{
                    headerShown: true,
                    headerRight: () => <Magicpen size={32} color='#000' />,
                    headerTitle: '',
                }}
                name={WATCHLIST} component={WatchListScreen} />
        </Stack.Navigator>
    );
}


export { StackNavigation }