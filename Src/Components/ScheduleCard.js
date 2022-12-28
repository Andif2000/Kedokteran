import { View, Text, TouchableOpacity, StyleSheet, Image, FlatList, Dimensions } from 'react-native'
import React, { useRef } from 'react'
import { LinearGradient } from 'expo-linear-gradient';
import Ionicons from '@expo/vector-icons/Ionicons'

import { doctor_schedule } from './Database';

const { width, height } = Dimensions.get('window');

const ScheduleCard = () => {
    const render_schedule = ({ index, item }) => {
        return (
            <View
                style={{
                    marginHorizontal: 20,
                    marginTop: 10,
                    backgroundColor: '#ffffff',
                    borderRadius: 10,
                    elevation: 10,
                    width: width - 40
                }}>
                <LinearGradient
                    colors={['#018bf7', '#00baf7']}
                    start={{ x: 0.0, y: 0.0 }}
                    end={{ x: 0.1, y: 0.0 }}
                    style={{ borderRadius: 10 }}>
                    <TouchableOpacity
                        style={{ padding: 10 }}>
                        <View
                            style={{ flexDirection: 'row' }}>
                            <Image
                                source={item.picture}
                                style={{
                                    width: 50,
                                    height: 50,
                                    borderRadius: 50,
                                    borderWidth: 1,
                                    borderColor: '#ffffff'
                                }} />
                            <View
                                style={{
                                    marginLeft: 10,
                                }}>
                                <Text style={{
                                    fontWeight: 'bold',
                                    fontSize: 18,
                                    color: '#ffffff'
                                }}>{item.name}</Text>
                                <Text
                                    style={{ color: '#f4f4f4', fontSize: 14 }}>{item.skill}</Text>
                            </View>
                        </View>
                        <View
                            style={{
                                marginHorizontal: 10,
                                marginTop: 10
                            }}>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <Ionicons
                                    name='time'
                                    size={25}
                                    style={{ color: '#ffffff' }} />
                                <Text
                                    style={{
                                        color: '#ffffff',
                                        marginLeft: 10
                                    }}>{item.date}</Text>
                            </View>
                            <View
                                style={{
                                    flexDirection: 'row',
                                    alignItems: 'center'
                                }}>
                                <Ionicons
                                    name='compass'
                                    size={25}
                                    style={{ color: '#ffffff' }} />
                                <Text
                                    style={{
                                        color: '#ffffff',
                                        marginLeft: 10
                                    }}>{item.clinic}</Text>
                            </View>
                        </View>
                        <TouchableOpacity
                            style={{
                                position: 'absolute',
                                right: 0,
                                bottom: 0,
                                padding: 10
                            }}>
                            <Ionicons
                                name='chevron-forward-circle'
                                size={35}
                                style={{
                                    color: '#ffffff'
                                }} />
                        </TouchableOpacity>
                    </TouchableOpacity>
                </LinearGradient>
            </View>
        )
    }
    return (
        <View>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20,
                    marginTop: 15
                }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '600'
                    }}>Jadwal Pemerikasaan</Text>
                <TouchableOpacity>
                    <Text
                        style={{ color: '#0082f2' }}>
                        Lihat Semua
                    </Text>
                </TouchableOpacity>
            </View>
            <FlatList
                data={doctor_schedule}
                renderItem={render_schedule}
                horizontal
                showsHorizontalScrollIndicator={false}
                scrollEventThrottle={16} 
                pagingEnabled/>

        </View>
    )
}

export default ScheduleCard
