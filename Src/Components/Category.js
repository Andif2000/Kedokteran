import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import { Categori_List, Articels } from './Database'

const { width, height } = Dimensions.get('window');
const Category = () => {
    const renderCategory = ({ index, item }) => {
        return (
            <View
                style={{
                    marginVertical: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                <TouchableOpacity
                    style={{
                        marginRight: 10,
                        backgroundColor: item.name == 'Artikel' ? '#00baf7' : '#d3d3d3',
                        borderRadius: 15
                    }}>
                    <Text
                        style={{
                            color: item.name == 'Artikel' ? '#ffffff' : '#000000',
                            fontSize: 14,
                            paddingVertical: 15,
                            paddingHorizontal: 22
                        }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderArticels = ({ index, item }) => {
        return (
            <TouchableOpacity
                style={{
                    marginBottom: 20,
                    marginRight:10,
                    
                }}>
                <View
                    style={{}}>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center'
                        }}>
                        <Image
                            source={item.picture}
                            style={{
                                width: width - 50,
                                height: 200
                            }} />
                    </View>
                    <View
                        style={{
                            marginVertical: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                        }}>
                        <Image
                            source={item.picture}
                            style={{
                                width: 50,
                                height: 50,
                                borderRadius: 50,
                                borderWidth: 1,
                                borderColor: '#000080'
                            }} />
                        <View
                            style={{
                                maxWidth: width - 100,
                                marginLeft: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '400',
                                }}>{item.title}</Text>
                        </View>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
    return (
        <View
            style={{
                marginHorizontal: 20,
                marginTop: 15
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                }}>
                <Text
                    style={{
                        fontSize: 16,
                        fontWeight: '600'
                    }}>Kategori</Text>
                <TouchableOpacity>
                    <Text
                        style={{ color: '#0082f2' }}>Lihat Semua</Text>
                </TouchableOpacity>
            </View>

            <View>
                <FlatList
                    data={Categori_List}
                    renderItem={renderCategory}
                    horizontal
                    showsHorizontalScrollIndicator={false} />
            </View>

            <View>
                <FlatList
                    data={Articels}
                    horizontal
                    renderItem={renderArticels}
                    showsHorizontalScrollIndicator={false}
                    pagingEnabled />
            </View>
        </View>
    )
}

export default Category