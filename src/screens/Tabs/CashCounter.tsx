import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from '../../Navigation'
import { Invoice, Records } from '../../menu'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const CashCounter = () => {
    // console.log(props)
    const Data = [
        {
            label: 'Invoice',
            name: 'Invoice',
            component: Invoice,
            icon : <FontAwesome6 size={24} name="file-invoice-dollar" />
        },
        {
            label: 'Records',
            name: 'Records',
            component: Records,
            icon :<MaterialCommunityIcons size={24} name="book-edit-outline" />
        },
        //<IconClass brand={false} duotone={false} light={false} name="file-invoice-dollar" regular={false} sharp={false} sharpLight={false} sharpSolid={false} solid={false} thin={false} />
        //     label:'',
        //     name: '',
        //     component: ,
        // },
    ]
    return (
        <Drawer screens={Data} />
    )
}

export default CashCounter

const styles = StyleSheet.create({})