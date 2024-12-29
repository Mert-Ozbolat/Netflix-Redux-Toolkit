import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import searchStyle from '../../styles/search'
import SearchBar from '../../components/searchBar/SearchBar'

const Search = () => {
    return (
        <View style={searchStyle.container}>
            <SearchBar />
        </View>
    )
}

export default Search

const styles = StyleSheet.create({})