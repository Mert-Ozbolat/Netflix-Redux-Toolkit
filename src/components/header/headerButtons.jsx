import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Add, InfoCircle, Play } from 'iconsax-react-native'
import homesStyle from '../../styles/home'

const HeaderButtons = () => {
    return (
        <View style={homesStyle.headerButtons}>
            <TouchableOpacity>
                <Add size="26" color="#fff" />
                <Text style={homesStyle.headerBtnText}>Add List</Text>
            </TouchableOpacity>

            <TouchableOpacity style={homesStyle}>
                <Text style={homesStyle.headerBtnText}><Play size={21} color="#fff" />Play</Text>
            </TouchableOpacity>


            <TouchableOpacity>
                <InfoCircle size="26" color="#fff" />
                <Text>Info</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderButtons
