import { FlatList, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import { Card, Topbg } from '../components'
import { NavigationProp } from '@react-navigation/native'

const Dashboard = ({navigation}:{navigation  : NavigationProp<any>}) => {
    
    useEffect(() => {
        setInterval(()=>{
            navigation.navigate('Test');
        },2000)
    }, [])
    
    return (<>
        <Topbg>
        </Topbg>
        
        <ScrollView style={{height : '70%',width : '100%'}}>

            <View style={{ margin: 10, }} >
                <View style={[styles.card]} >

                    <Card>
                        <Text>Card 1</Text>
                    </Card>
                    <Card colorCode={1} />
                </View>
                <View style={[styles.card]} >

                    <Card colorCode={3} />
                    <Card colorCode={2} />
                </View>
            </View>
         
        </ScrollView>
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

})