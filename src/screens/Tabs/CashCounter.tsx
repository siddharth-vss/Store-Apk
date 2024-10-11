import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from '../../Navigation'
import { Invoice, Records } from '../../menu'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { Theme } from '../../utils';

const CashCounter = () => {
    const Themes = Theme.Style();

    /**
     * invoice
     * reacords
     * 
     */
    const Data = [
        {
            label: 'Invoice',
            name: 'Invoice',
            options:{...Theme.options},
            component: Invoice,
            icon : <FontAwesome6 color={Themes.color} size={24} name="file-invoice-dollar" />
        },
        {
            label: 'Records',
            options:{...Theme.options},
            name: 'Records',
            component: Records,
            icon :<MaterialCommunityIcons color={Themes.color} size={24} name="book-edit-outline" />
        },

    ]
    return (
        <Drawer screens={Data} />
    )
}

export default CashCounter

const styles = StyleSheet.create({})