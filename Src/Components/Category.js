import { View, Text, TouchableOpacity, FlatList, Image, Dimensions } from 'react-native'
import React from 'react'
import { Categori_List, Articels } from './Database'

const { width, height } = Dimensions.get('window');
const Category = () => {
    const renderCategory = ({ index, item }) => {
        return (
            <View
                style={{ marginTop: 10, }}>
                <TouchableOpacity
                    style={{
                        paddingVertical: 10,
                        paddingHorizontal: 10,
                        marginRight: 10,
                        backgroundColor: item.name == 'Artikel' ? '#00baf7' : '#d3d3d3',
                        borderRadius: 15
                    }}>
                    <Text
                        style={{
                            color: item.name == 'Artikel' ? '#ffffff' : '#000000',
                            fontSize: 14
                        }}>{item.name}</Text>
                </TouchableOpacity>
            </View>
        )
    }

    const renderArticels = ({ index, item }) => {
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
                <View>
                    <Image
                        source={item.picture}
                        style={{
                            width: width - 100,
                            height: height / 4
                        }} />
                </View>
            </View>
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

            <FlatList
                data={Categori_List}
                renderItem={renderCategory}
                horizontal
                showsHorizontalScrollIndicator={false} />

            <FlatList
                data={Articels}
                renderItem={renderArticels}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled />
        </View>
    )
}

export default Category