import { StyleSheet, Text, View } from 'react-native'
import { ArrowCircleDown2, Home2, SearchNormal1, VideoPlay } from "iconsax-react-native";
import { DOWNLOADS, HOME, NEWHOT, SEARCH, } from '../../utils/routes';
import Home from '../../screens/home';

const TabBarIcon = ({ route, color, size }) => {
  switch (route.name) {
    case HOME:
      return <Home2 color={color} size={size} />;
    case NEWHOT:
      return <VideoPlay color={color} size={size} />;
    case SEARCH:
      return <SearchNormal1 color={color} size={size} />;
    case DOWNLOADS:
      return <ArrowCircleDown2 color={color} size={size} />;
    default:
      <Home />;
  }
}

export default TabBarIcon
