import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HOME, SINGIN } from "../utils/routes";
import Home from "../screens/home";


function TabBarNavigation() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator>
            <Tab.Screen name={HOME} component={Home} />
        </Tab.Navigator>
    );
}


export default TabBarNavigation