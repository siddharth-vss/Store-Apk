import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Stacks } from '../../Navigation'
import Home from './Page'
import Items from './Items'
const Storage = () => {
    const Data = [
        {
            name: "Sorage",
            options: { headerShown: false },
            component: Home,
        },
        {
            name: "Items",
            options: { headerShown: false },
            component: Items,
        },
    ]
    return (
        <Stacks screens={Data} />
    )
}

export default Storage