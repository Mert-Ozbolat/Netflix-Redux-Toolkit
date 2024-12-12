import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { GETSTARTED, SINGIN, WATCHLIST } from '../utils/routes';
import StartScreen from '../screens/getStart';
import SigninScreen from '../screens/signin';
import WatchListScreen from '../screens/watchList';

const Stack = createNativeStackNavigator();

function StackNavigation() {
    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            <Stack.Screen name={GETSTARTED} component={StartScreen} />
            <Stack.Screen name={SINGIN} component={SigninScreen} />
            <Stack.Screen name={WATCHLIST} component={WatchListScreen} />
        </Stack.Navigator>
    );
}


export { StackNavigation }