import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Card, GridBox, Topbg, TouchCard } from '../components'
import { NavigationProp } from '@react-navigation/native'
import { heightPercentageToDP } from 'react-native-responsive-screen'

const Dashboard = ({ navigation }: { navigation: NavigationProp<any> }) => {

    const navigate = (path = 'Test') => {
        navigation.navigate(path);
    }

    const data = [
        { name: "Profile", path: "Profile" },
        { name: "Shop", path: "Shop" },
        { name: "Storage", path: "Yard" },
        { name: "Invoice", path: "CashCounter" },
    ]

    return (<>
        <View>
            <View style={{ height: heightPercentageToDP('30%') }} >
                <Topbg />
            </View>
            <GridBox>
                {data.map((item, index) => (
                    <TouchCard  handlePress={()=>navigate(item.path) }  style={styles.box} colorCode={Math.floor(Math.random() * (8 + 1))} >
                        <Text style={{ color: 'white' }} >{item.name}</Text>
                    </TouchCard>
                ))}
            </GridBox>
        </View>
    </>
    )
}


export default Dashboard

const styles = StyleSheet.create({

    card: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    box: {
        width: "47%",
        height: 100,
        marginHorizontal: 4,
        padding: 10,
        borderRadius: 10,
        marginBottom: 20,
        justifyContent: "center",
        alignItems: "center",
        shadowColor: "#000",
    }

})