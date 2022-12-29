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
            <View
                style={{
                    paddingBottom: 20,
                    backgroundColor: '#00baf7',
                    marginHorizontal: 20,
                    borderTopRightRadius: 10,
                    borderTopLeftRadius: 10,
                    width: width - 40,
                }}>
                <View
                    style={{}}>
                    <View
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            height: 200,
                        }}>
                        <Image
                            source={item.picture}
                            style={{
                                width: '100%',
                                height: '100%',
                                borderTopRightRadius: 10,
                                borderTopLeftRadius: 10,
                                justifyContent: 'center',
                                alignItems: 'center'
                            }} />
                    </View>
                    <TouchableOpacity>
                    <View
                        style={{
                            marginVertical: 10,
                            flexDirection: 'row',
                            alignItems: 'center',
                            paddingHorizontal:10
                        }}>
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
                                maxWidth: width - 110,
                                marginLeft: 10,
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                            <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '600',
                                }}>{item.title}</Text>
                        </View>
                    </View>
                    <View
                        style={{
                            maxWidth: width ,
                            paddingHorizontal:10
                        }}>
                        <Text
                            style={{ letterSpacing: 1 }}>{item.description}</Text>
                        <Text
                            style={{ letterSpacing: 0, color:'blue' }}>read more...</Text>
                    </View>
                    </TouchableOpacity>
                </View>
            </View>
        )
    }
    return (
        <View
            style={{
                marginTop: 15
            }}>
            <View
                style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                    marginHorizontal: 20
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
                    showsHorizontalScrollIndicator={false} 
                    style={{marginHorizontal: 20}}/>
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