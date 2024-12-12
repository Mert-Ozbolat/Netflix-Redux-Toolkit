import { Image, Text, View } from 'react-native'
import Swiper from 'react-native-swiper';
import getStart from '../styles/getStart';

const Slider = () => {
    return (

        <Swiper
            style={getStart.swiper}
            loop={true}
            showsPagination={true}
            dotColor="#fff"
            activeDotColor="#000">
            <View style={getStart.section}>
                <Image
                    style={getStart.images}
                    source={require('../assets/images/start.jpeg')}
                />
                <Text style={getStart.title}>
                    Unlimited entertainment, one low price.
                </Text>
                <Text style={getStart.subtitle}>
                    All of Netflix, starting at just $15.
                </Text>
            </View>

            <View style={getStart.section}>
                <Image
                    style={getStart.images}
                    source={require('../assets/images/Netflix_Multiple_Device.jpg')}
                />
                <Text style={getStart.title}>Watch anywhere, anytime.</Text>
                <Text style={getStart.subtitle}>
                    Stream on your favorite devices.
                </Text>
            </View>
        </Swiper>

    )
}

export default Slider

