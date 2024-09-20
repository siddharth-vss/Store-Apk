import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Drawer } from '../Navigation'
import Article from './Article'
import Feed from './Feed'
// import { createDrawerNavigator } from '@react-navigation/drawer';

// const Drawer = createDrawerNavigator();

const Test = ({...props}) => {
    // console.log(props)
    const Data = [
        {
            label: 'Feed',
            name: 'Feed',
            component: Feed,
        },
        {
            label: 'Article',
            name: 'Article',
            component: Article,
        },
        // Add more screens here...
    ]
  return (
    <Drawer screens={Data} />
    // <Drawer.Navigator>
    //   <Drawer.Screen name="Feed" component={Feed} />
    //   <Drawer.Screen name="Article" component={Article} />
    // </Drawer.Navigator>
  )
}

export default Test

const styles = StyleSheet.create({})




