import { View, Text, StyleSheet, Touchable, TouchableOpacity, TextInput, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Ionicons from '@expo/vector-icons/Ionicons'
import { StatusBar } from 'expo-status-bar'
import { BottomTabView } from '@react-navigation/bottom-tabs'

import SearchCustom from '../../Components/SearchCustom'
import ScheduleCard from '../../Components/ScheduleCard'
import Category from '../../Components/Category'

const Home = () => {
    const [search, setSearch] = useState('');
    return (
        <SafeAreaView style={styles.container}>
            <ScrollView
                showsHorizontalScrollIndicator={false}>
                <View
                    style={{
                        marginHorizontal: 20,
                        marginVertical: 10,
                        flexDirection: 'row',
                        alignItems: 'center',
                        justifyContent: 'space-between'
                    }}>
                    <View>
                        <Text
                            style={{
                                color: '#000080',
                                fontWeight: '600'
                            }}>Hello</Text>
                        <Text
                            style={{
                                color: '#000080',
                                fontSize: 22, fontWeight: 'bold'
                            }}>Andif20 👋</Text>
                    </View>
                    <TouchableOpacity
                        style={{
                            borderRadius: 50,
                            borderWidth: 1,
                            borderColor: '#000000'
                        }}>
                        <Ionicons
                            name='person-circle-outline'
                            size={40}
                            style={{ color: '#000080', }} />
                    </TouchableOpacity>
                </View>
                <View>
                    <SearchCustom
                        placeholder='Cari Informasi Tentang Kesehatan/Dokter'
                        search={search} setSearch={setSearch} />
                    <ScheduleCard />
                    <Category />
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default Home
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ffffff'
    }
})