import { View, Text, StyleSheet, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar'

const SearchCustom = (props) => {
    return (
        <View
            style={{
                marginHorizontal: 20,
                marginVertical: 10,
                flexDirection: 'row',
                borderWidth:0.8,
                borderRadius:5,
                borderColor:'#000080'
            }}>
            <TextInput
                placeholder={props.placeholder}
                value={props.search}
                onChangeText={(text) => { props.setSearch(text) }}
                style={{
                    backgroundColor: '#dedede',
                    elevation: 3,
                    paddingVertical: 5,
                    paddingHorizontal: 5,
                    borderTopLeftRadius: 5,
                    borderBottomLeftRadius: 5,
                    flex: 1,
                }} />
            <TouchableOpacity
                style={{
                    backgroundColor: '#dedede',
                    paddingRight: 5,
                    borderTopRightRadius: 5,
                    borderBottomRightRadius: 5,
                    justifyContent: 'center',
                    alignItems: 'center',
                    elevation: 3
                }}>
                <Ionicons
                    name='search'
                    size={30} 
                    style={{color:'#000080',padding:2}}/>
            </TouchableOpacity>
        </View>
    )
}

export default SearchCustom