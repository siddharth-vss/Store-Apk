import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from '../../Navigation'
import {Shop} from '../../menu'
import Icon from 'react-native-vector-icons/FontAwesome6';


const Store = () => {
    const Data = [
        {
            label: 'Store',
            name:  'Store',
            component: Shop ,
            icon : <Icon name="shop" size={24} />
        },
        // {
        //     label:'Users',
        //     name: 'Users',
        //     component: <View><Text>HEllo</Text></View>,
        // },
        // {
        //     label:'',
        //     name: '',
        //     component: ,
        // },
      ]
    return (
        <Drawer screens={Data} />
        )
}

export default Store

const styles = StyleSheet.create({})