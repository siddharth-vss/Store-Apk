import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from '../../Navigation'
import {Invoice, Profiles, Records, Shop} from '../../menu'
import FontAwesome6 from 'react-native-vector-icons/FontAwesome6';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
// import Ionicons from 'react-native-vector-icons/Ionicons'
import { Theme } from '../../utils';
const Store = () => {
    const Themes = Theme.Style();

    /**
     * dashboard
     * users
     * catagories
     * admins
     * managers
     * task manager
     * earning
     * details using store Id
     * stock report 
     * sales report 
     * 
     * 
     * storages
     * items
     * 
     * profile of logged in user
     * 
     * 
     */
    const Data = [
        {
            label: 'Store',
            name:  'Store',
            component: Shop ,
            options:{...Theme.options},
            icon : <FontAwesome6 color={Themes.color} name="shop" size={24} />
        },
        {
            label: 'Invoice',
            name: 'Invoice',
            options:{...Theme.options},
            component: Invoice,
            icon : <FontAwesome6 color={Themes.color} size={24} name="file-invoice-dollar" />
        },
        {
            label: 'Records',
            name: 'Records',
            component: Records,
            options:{...Theme.options},
            icon :<MaterialCommunityIcons color={Themes.color} size={24} name="book-edit-outline" />
        },
        // {
        //     label: 'Profile',
        //     name:  'Profile ',
        //     component: Profiles,
        //     icon : <Ionicons  name='person' size={24}   />,
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