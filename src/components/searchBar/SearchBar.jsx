import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import searchStyle from '../../styles/search'
import { Microphone2 } from 'iconsax-react-native'

const SearchBar = () => {
    return (
        <View style={searchStyle.search}>
            <TextInput
                placeholderTextColor="#fff"
                style={searchStyle.input} placeholder='Search games, show...' /><Microphone2 color='#fff' size={25} />
        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})