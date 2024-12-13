import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GETSTARTED, HOME, SINGIN, WATCHLIST } from '../utils/routes';
import StartScreen from '../screens/getStart';
import SigninScreen from '../screens/signin';
import WatchListScreen from '../screens/watchList';
import { Image, ImageBackground, View } from 'react-native';
import signIn from '../styles/signIn';
import { colors } from '../theme/colors';
import { Edit, Magicpen } from 'iconsax-react-native';
import Home from '../screens/home';

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
                    headerRight: () => <Magicpen size={32} color='#fff' />,
                    headerTitle: '',
                    headerTintColor: colors.text,
                    headerStyle: {
                        backgroundColor: colors.bgColor
                    },
                }}
                name={WATCHLIST} component={WatchListScreen} />


            <Stack.Screen name={HOME} component={Home} />


        </Stack.Navigator>
    );
}


export { StackNavigation }