import { Button, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Add, InfoCircle } from 'iconsax-react-native'
import homesStyle from '../../styles/home'

const HeaderButtons = () => {
    return (
        <View style={homesStyle.headerButtons}>
            <TouchableOpacity>
                <Add size="26" color="#fff" />
                <Text style={homesStyle.headerBtnText}>Add List</Text>
            </TouchableOpacity>

            <Button style={homesStyle.playBtn} title='Play' />


            <TouchableOpacity>
                <InfoCircle size="26" color="#fff" />
                <Text>Info</Text>
            </TouchableOpacity>
        </View>
    )
}

export default HeaderButtons
