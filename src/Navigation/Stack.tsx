import { StyleProp, StyleSheet, Text, View, ViewStyle } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack';



const StackX = createNativeStackNavigator();

interface ParentProps {
    children?: React.ReactNode;
    colorCode?: number;
    height?: string; 
    width?: string; 
    colors?:string[];
    style ?:  StyleProp<ViewStyle>;
    screens: any;
  }
const Stack: React.FC<ParentProps> = ({screens}) => {
  return (
    <StackX.Navigator>
        {
            screens?.map((e : any)=>{
                return <StackX.Screen key={e.name} name={e.name} component={e.component} />
            })
        }
      {/* <StackX.Screen name="Test" options={{headerShown : false}} component={Test} /> */}
    </StackX.Navigator>
  )
}

export default Stack

const styles = StyleSheet.create({})

