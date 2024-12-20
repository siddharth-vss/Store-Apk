import { Alert, FlatList, ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React, { useEffect } from 'react'
import { Card, GridBox, Topbg, TouchCard } from '../components'
import { NavigationProp } from '@react-navigation/native'
import { heightPercentageToDP } from 'react-native-responsive-screen'
import { CSS, Theme } from '../utils'
import useAuthStore from '../store/Authstore'

const Dashboard = ({ navigation }: { navigation: NavigationProp<any> }) => {


    const { token, user, setUser } = useAuthStore();

    const navigate = (path = 'Test') => {
        navigation.navigate(path);
    }

    useEffect(() => {
        if (user._id.length == 0) {
            navigate("Login");
        }
    }, [user])



    const Themes = Theme.Style();
    const Css = CSS.Styles();
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
            shadowColor: "rgb(46 38 61 / 0.2)",
            shadowOpacity: 1,
            shadowRadius: 10,
            paddingVertical: 10,
        }

    })



    const data = [
        { name: "Profile", path: "Profile" },
        { name: "Shop", path: "Shop" },
        { name: "Storage", path: "Yard" },
        { name: "Invoice", path: "CashCounter" },
    ]





    //  random colorCode picker ->> Math.floor(Math.random() * (8 + 1))
    return (
        <View style={[Css.container]}>
            <View style={{ height: heightPercentageToDP('30%') }} >
                <Topbg />
            </View>
            <GridBox>
                {data.map((item, index) => (
                    <TouchCard key={index} handlePress={() => navigate(item.path)} style={styles.box} colorCode={index % 9} >
                        <Text style={{ color: 'white' }} >{item.name}</Text>
                    </TouchCard>
                ))}
            </GridBox>
        </View>
    )
}


export default Dashboard

