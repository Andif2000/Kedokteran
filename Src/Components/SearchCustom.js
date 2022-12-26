import { View, Text, StyleSheet, Touchable, TouchableOpacity, TextInput } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar'

const SearchCustom = (props) => {
    const [search, setSearch] = useState('');
    return (
        <View
            style={{
                marginHorizontal: 20,
                marginVertical: 10,
                flexDirection: 'row'
            }}>
            <TextInput
                placeholder={props.placeholder}
                value={search}
                onChangeText={(text) => { setSearch(text) }}
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
                    style={{color:'#000080'}}/>
            </TouchableOpacity>
        </View>
    )
}

export default SearchCustom