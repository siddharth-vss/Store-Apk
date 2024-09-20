import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { Children } from 'react'


import { createDrawerNavigator } from '@react-navigation/drawer';

const DrawerX = createDrawerNavigator();


interface ParentProps {
  children?: React.ReactNode;
  colorCode?: number;
  height?: string;
  width?: string;
  colors?: string[];
  style?: StyleProp<ViewStyle>;
  screens: any;
}
const Drawer: React.FC<ParentProps> = ({ screens }) => {
  // console.log(screens);
  return (
    <DrawerX.Navigator>
        {screens?.map((e : any)=>{
             return   <DrawerX.Screen key={e.label} name={e.name} component={e.component} />
        })}
    </DrawerX.Navigator>
  )
}

export default Drawer

const styles = StyleSheet.create({})

