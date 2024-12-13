import { FlatList, Text, View } from 'react-native'
import React from 'react'
import watchListStyle from '../../styles/watchList'
import { useSelector } from 'react-redux'
import WatchListItem from '../../components/watchList/watchListItem'

const WatchListScreen = () => {

    const { watchList } = useSelector(state => state.watchList)

    return (
        <View style={watchListStyle.container}>
            <Text style={watchListStyle.title}>Who's Watching?</Text>

            <FlatList
                numColumns={2}
                data={watchList}
                renderItem={({ item }) => <WatchListItem item={item} />}
            />
        </View>
    )
}

export default WatchListScreen

