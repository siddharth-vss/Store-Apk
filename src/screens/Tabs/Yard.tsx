import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from '../../Navigation'
import { Storage, Items } from '../../menu'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import { options } from '../../utils/color';
import { Theme } from '../../utils';


const Yard = () => {
    /**
     * 
     */
    const Data = [
        {
            label: 'Storage',
            name: 'Storage',
            component: Storage,
            options:{...Theme.options},
            icon: <FontAwesome6 color={Theme.Theme.color} name="boxes-stacked" size={20} />,
        },
        {
            label: 'Items',
            name: 'Items',
            component: Items,
            options:{...Theme.options},
            icon: <FontAwesome6 color={Theme.Theme.color} name="boxes-stacked" size={20} />,
        },
    ]
    return (
        <Drawer screens={Data} />
    )
}

export default Yard

const styles = StyleSheet.create({})