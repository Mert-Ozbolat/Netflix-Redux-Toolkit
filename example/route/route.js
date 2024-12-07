import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Users from '../screens/users';

const Stack = createNativeStackNavigator();

function Navigate() {
    return (
        <Stack.Navigator>
            <Stack.Screen name="Users" component={Users} />
        </Stack.Navigator>
    );
}

export default Navigate