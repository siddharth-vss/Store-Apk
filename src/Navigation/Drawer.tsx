import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React, { Children } from 'react'


import { createDrawerNavigator } from '@react-navigation/drawer';
import { Sidebar } from '../components';

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
  // console.log(screens.map((e : any)=>e.name));
  return (
    <DrawerX.Navigator
    drawerContent={(props) => <Sidebar screens={screens} {...props} />}
    >
        {screens?.map((e : any)=>{
             return   <DrawerX.Screen key={e.label} options={e.options} name={e.name} component={e.component} />
        })}
    </DrawerX.Navigator>
  )
}

export default Drawer

const styles = StyleSheet.create({})

