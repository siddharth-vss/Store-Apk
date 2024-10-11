import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from '../../Navigation'
import {Profiles} from '../../menu'
import Ionicons from 'react-native-vector-icons/Ionicons'
import Login from '../../menu/Login'
import { Theme } from '../../utils'

const Profile = () => {
    const Themes = Theme.Style();

    /**
     * 
     */
    const Data = [
        {
            label: 'Profile',
            name:  'Profile_',
            component: Profiles,
            options:{...Theme.options,title:"Profile"},
            icon : <Ionicons color={Themes.color} name='person' size={24}   />,
        }, 
        // {
        //     label:'Login',
        //     name: 'Login',
        //     component: Login,
        // },
        // {
        //     label:'',
        //     name: '',
        //     component: ,
        // },
      ]
    return (
        <Drawer  screens={Data} />
        )
}

export default Profile

const styles = StyleSheet.create({})