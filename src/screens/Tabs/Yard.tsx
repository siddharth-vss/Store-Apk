import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from '../../Navigation'
import {Storage} from '../../menu'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';

const Yard = () => {
    const Data = [
        {
            label: 'Storage',
            name:  'Storage',
            component: Storage,
            icon: <FontAwesome6 name="boxes-stacked"  size={20}  />,
        },
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

export default Yard

const styles = StyleSheet.create({})