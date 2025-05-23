import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { DOWNLOADS, HOME, HOMETAB, NEWHOT, SEARCH } from "../utils/routes";
import Home from "../screens/home";
import Search from "../screens/search";
import Downloads from "../screens/downloads";
import NewHot from "../screens/newHot";
import { colors } from "../theme/colors";
import TabBarIcon from "../components/router/tabBarIcon";


function TabBarNavigation() {
    const Tab = createBottomTabNavigator()
    return (
        <Tab.Navigator
            screenOptions={({ route }) => ({
                headerShown: false,
                tabBarStyle: {
                    backgroundColor: colors.bgColor,
                    borderColor: null,
                    height: 53
                },
                tabBarIcon: ({ focused, color, size }) => (
                    <TabBarIcon
                        focused={focused}
                        color={color}
                        size={size}
                        route={route}
                    />
                ),
                tabBarActiveTintColor: 'red',
                tabBarInactiveTintColor: 'white',
            })}>
            <Tab.Screen name={HOMETAB} component={Home} />
            <Tab.Screen name={NEWHOT} component={NewHot} />
            <Tab.Screen name={SEARCH} component={Search} />
            <Tab.Screen name={DOWNLOADS} component={Downloads} />
        </Tab.Navigator>
    );
}


export default TabBarNavigation